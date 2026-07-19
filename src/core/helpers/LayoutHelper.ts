import { ILayoutItem } from '../interfaces/layout.interfaces';
import defaultLayout from '../layouts/default';
import { layoutRegistry } from './layout-registry';

export class LayoutHelper {
  /**
   * Loads a keyboard layout by name, code-splitting each layout into its own
   * chunk so consumers only download the layouts they actually select.
   * Falls back to the default layout for an unknown or empty layout name.
   * @param layoutName The name of the layout to load (e.g. `msGerman`).
   * @return A promise resolving to the matching layout, or the default layout.
   */
  public static async changeLayout(layoutName: string): Promise<ILayoutItem> {
    if(layoutName === `default` || !layoutRegistry[layoutName]) {
      return defaultLayout;
    }

    const loadedModule = await layoutRegistry[layoutName]();

    return loadedModule.default;
  }
}
