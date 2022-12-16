import { IKeyboardOptions } from '@/core';
import { DisplayHelper } from './display.helper';

export class ButtonHelper {
  /**
   * Retrieve button type
   *
   * @param  {string} button The button's layout name
   * @return {string} The button type
   */
  private static getButtonType(button: string): string {
    return button.includes(`{`) && button.includes(`}`) && button !== `{//}`
      ? `functionBtn`
      : `standardBtn`;
  }

  /**
   * Adds default classes to a given button
   *
   * @param  {string} button The button's layout name
   * @return {string} The classes to be added to the button
   */
  public static getButtonClass(button: string): string {
    const buttonTypeClass = this.getButtonType(button);
    const buttonWithoutBraces = button.replace(`{`, ``).replace(`}`, ``);
    let buttonNormalized = ``;

    if(buttonTypeClass !== `standardBtn`) buttonNormalized = ` hg-button-${buttonWithoutBraces}`;

    return `hg-${buttonTypeClass}${buttonNormalized}`;
  }

  /**
   * Returns the display (label) name for a given button
   *
   * @param  {string} button The button's layout name
   * @param  {object} display The provided display option
   * @param  {boolean} mergeDisplay Whether the provided param value should be merged with the default one.
   */
  public static getButtonDisplayName(
    button: string,
    display: IKeyboardOptions[`display`],
    mergeDisplay: boolean,
  ): string {
    let tmpDisplay: { [p: string]: string } | undefined;
    if(mergeDisplay) {
      tmpDisplay = { ...DisplayHelper.getDefaultDisplay(), ...display };
    } else {
      tmpDisplay = display || DisplayHelper.getDefaultDisplay();
    }

    return tmpDisplay[button] || button;
  }

  /**
   * Check whether the button is a standard button
   */
  public static isStandardButton = (button: string): string | boolean => button && !(button[0] === `{` && button[button.length - 1] === `}`);
}
