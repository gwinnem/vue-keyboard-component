import { IKeyboardOptions } from '@/core/interfaces/keyboard.interfaces';

export interface IInputUtilitiesParams {
  getOptions: () => IKeyboardOptions;
  getCaretPosition: () => number | null;
  getCaretPositionEnd: () => number | null;
  dispatch: unknown;
}
