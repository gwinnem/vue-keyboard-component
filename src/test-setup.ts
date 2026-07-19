import { vi } from 'vitest';

if(!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(), // deprecated API, still referenced by some libraries
    dispatchEvent: vi.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(), // deprecated API, still referenced by some libraries
  }));
}
