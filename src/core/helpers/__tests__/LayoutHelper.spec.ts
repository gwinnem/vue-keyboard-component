import { describe, expect, it } from 'vitest';
import { LayoutHelper } from '../LayoutHelper';
import defaultLayout from '../../layouts/default';
import msGerman from '../../ms-keyboards/ms-German';
import msFrench from '../../ms-keyboards/ms-French';

describe(`LayoutHelper.changeLayout`, () => {
  it(`resolves the matching layout for a known layout name`, async () => {
    const result = await LayoutHelper.changeLayout(`msGerman`);

    expect(result).toBe(msGerman);
  });

  it(`resolves a different layout for a different known layout name`, async () => {
    const result = await LayoutHelper.changeLayout(`msFrench`);

    expect(result).toBe(msFrench);
  });

  it(`resolves the default layout when given the literal name "default"`, async () => {
    const result = await LayoutHelper.changeLayout(`default`);

    expect(result).toBe(defaultLayout);
  });

  it(`falls back to the default layout for an unknown layout name`, async () => {
    const result = await LayoutHelper.changeLayout(`thisLayoutDoesNotExist`);

    expect(result).toBe(defaultLayout);
  });

  it(`falls back to the default layout for an empty string`, async () => {
    const result = await LayoutHelper.changeLayout(``);

    expect(result).toBe(defaultLayout);
  });
});
