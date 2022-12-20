import { IDisplay } from '@/core/interfaces/display.interfaces';

export interface ILayoutItem {
  layout: { [layoutName: string]: string[] };
  display?: IDisplay;
}
