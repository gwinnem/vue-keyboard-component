import { describe, expect, it } from 'vitest';
import { isRtlLanguage } from '../RtlHelper';

describe(`isRtlLanguage`, () => {
  it(`returns false when lang is undefined`, () => {
    expect(isRtlLanguage(undefined)).toBe(false);
  });

  it(`returns false for an empty lang array`, () => {
    expect(isRtlLanguage([])).toBe(false);
  });

  it(`returns false for LTR languages`, () => {
    expect(isRtlLanguage([`en`])).toBe(false);
    expect(isRtlLanguage([`de`])).toBe(false);
    expect(isRtlLanguage([`fr`])).toBe(false);
  });

  it.each([
    [`ar`, `Arabic`],
    [`he`, `Hebrew`],
    [`fa`, `Persian`],
    [`ur`, `Urdu`],
    [`dv`, `Divehi`],
    [`ug`, `Uyghur`],
    [`ps`, `Pashto`],
    [`sd`, `Sindhi`],
    [`ckb`, `Kurdish Sorani`],
    [`yi`, `Yiddish`],
  ])(`returns true for %s (%s)`, code => {
    expect(isRtlLanguage([code])).toBe(true);
  });

  it(`is case-insensitive`, () => {
    expect(isRtlLanguage([`AR`])).toBe(true);
  });

  it(`returns true if any code in a multi-language array is RTL`, () => {
    expect(isRtlLanguage([`en`, `ar`])).toBe(true);
  });
});
