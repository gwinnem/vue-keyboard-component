import { IKeyboardOptions } from '@/core/interfaces/keyboard.interfaces';

export interface IPhysicalKeyboardParams {
  getOptions: () => IKeyboardOptions;
  dispatch: unknown;
}
