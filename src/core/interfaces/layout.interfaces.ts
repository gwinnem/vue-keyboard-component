import { IDisplay } from './display.interfaces';

export interface ILayoutItem {
  layout: { [layoutName: string]: string[] };
  display?: IDisplay;
}
