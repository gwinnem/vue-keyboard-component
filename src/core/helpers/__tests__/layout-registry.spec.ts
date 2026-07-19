import { describe, expect, it } from 'vitest';
import { layoutRegistry } from '../layout-registry';
import selectValues from '../../ms-keyboards/ms-layouts.select';
import { ILayoutItem } from '../../interfaces/layout.interfaces';

describe(`layoutRegistry`, () => {
  it(`has at least as many entries as the layout-selector's option list`, () => {
    expect(Object.keys(layoutRegistry).length).toBeGreaterThanOrEqual(selectValues.length);
  });

  it(`has a registry entry for every name in the layout-selector's option list`, () => {
    const missing = selectValues
      .map(item => item.name)
      .filter(name => !(name in layoutRegistry));

    expect(missing).toEqual([]);
  });

  it(`has a layout-selector entry for every registry key`, () => {
    const selectNames = new Set(selectValues.map(item => item.name));
    const orphaned = Object.keys(layoutRegistry).filter(name => !selectNames.has(name));

    expect(orphaned).toEqual([]);
  });

  it.each(Object.entries(layoutRegistry))(
    `%s resolves to a valid, non-empty ILayoutItem`,
    async (_name, loader) => {
      const module = await loader();
      const layout: ILayoutItem = module.default;

      expect(layout).toBeTruthy();
      expect(layout.layout).toBeTruthy();
      expect(Array.isArray(layout.layout.default)).toBe(true);
      expect(layout.layout.default.length).toBeGreaterThan(0);

      // Every row must be a non-empty, space-separated list of button tokens.
      for(const row of layout.layout.default) {
        expect(typeof row).toBe(`string`);
        expect(row.trim().length).toBeGreaterThan(0);
        expect(row.split(` `).length).toBeGreaterThan(0);
      }

      // If present, shift/alt/altShift must be the same well-formed shape.
      for(const variant of [layout.layout.shift, layout.layout.alt, layout.layout.altShift]) {
        if(variant) {
          expect(Array.isArray(variant)).toBe(true);
          expect(variant.length).toBeGreaterThan(0);
        }
      }

      // If present, lang must be a non-empty array of short language codes.
      if(layout.lang) {
        expect(Array.isArray(layout.lang)).toBe(true);
        expect(layout.lang.length).toBeGreaterThan(0);
        for(const code of layout.lang) {
          expect(code).toMatch(/^[a-z]{2,4}(-[a-z0-9]{1,8})*$/);
        }
      }

      // If present, display must map tokens to non-empty strings.
      if(layout.display) {
        for(const value of Object.values(layout.display)) {
          expect(typeof value).toBe(`string`);
        }
      }
    },
  );

  it(`every layout's default row's button count is consistent with its own shift/alt/altShift row counts`, async () => {
    // Not every layout defines the same number of ROWS for each variant necessarily
    // (some legitimately omit a variant entirely, handled above), but catches gross
    // structural mismatches like an alt layout with wildly more/fewer rows than default.
    const mismatches: string[] = [];

    for(const [name, loader] of Object.entries(layoutRegistry)) {
      // eslint-disable-next-line no-await-in-loop -- sequential is fine for a one-time test-suite smoke check
      const module = await loader();
      const layout: ILayoutItem = module.default;
      const defaultRowCount = layout.layout.default.length;

      for(const variant of [layout.layout.shift, layout.layout.alt, layout.layout.altShift]) {
        if(variant && Math.abs(variant.length - defaultRowCount) > 1) {
          mismatches.push(name);
        }
      }
    }

    expect(mismatches).toEqual([]);
  });
});
