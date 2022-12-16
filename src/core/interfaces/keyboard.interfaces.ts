import SimpleKeyboard from '../../lib/components/Keyboard';
import { TKeyboardButtonTheme, TKeyboardElement, TKeyboardHandlerEvent } from '@/core/types/keyboard.types';

export interface IKeyboardButtonAttributes {
    attribute: string;
    value: string;
    buttons: string;
}
export interface IKeyboardInput {
    [key: string]: string;
}
export interface IKeyboardLayoutObject {
  [key: string]: string[];
}
export interface IKeyboardOptions {
  /**
   * Modify the keyboard layout.
   */
  layout?: IKeyboardLayoutObject;

  /**
   * Specifies which layout should be used.
   */
  layoutName?: string;

  /**
   * Replaces variable buttons (such as `{bksp}`) with a human-friendly name (e.g.: `backspace`).
   */
  display?: { [button: string]: string };

  /**
   * By default, when you set the display property, you replace the default one. This setting merges them instead.
   */
  mergeDisplay: boolean;

  /**
   * A prop to add your own css classes to the keyboard wrapper. You can add multiple classes separated by a space.
   */
  theme?: string;

  /**
   * A prop to add your own css classes to one or several buttons.
   */
  buttonTheme?: TKeyboardButtonTheme[];

  /**
   * A prop to add your own attributes to one or several buttons.
   */
  buttonAttributes?: IKeyboardButtonAttributes[];

  /**
   * Runs a `console.log` every time a key is pressed. Displays the buttons pressed and the current input.
   */
  debug?: boolean;

  /**
   * Specifies whether clicking the "ENTER" button will input a newline (`\n`) or not.
   */
  newLineOnEnter?: boolean;

  /**
   * Specifies whether clicking the "TAB" button will input a tab character (`\t`) or not.
   */
  tabCharOnTab?: boolean;

  /**
   * Allows you to use a single simple-keyboard instance for several inputs.
   */
  inputName?: string;

  /**
   * `number`: Restrains all of simple-keyboard inputs to a certain length. This should be used in addition to the input element’s maxlength attribute.
   *
   * `{ [inputName: string]: number }`: Restrains simple-keyboard’s individual inputs to a certain length. This should be used in addition to the input element’s maxlength attribute.
   */
  maxLength?: number;

  /**
   * Enable highlighting of keys pressed on physical keyboard.
   */
  physicalKeyboardHighlight?: boolean;

  /**
   * Calls handler for a button highlighted by physicalKeyboardHighlight
   * In other words, this calls keyboard.handleButtonClicked(buttonName) on the highlighted button
   */
  physicalKeyboardHighlightPress?: boolean;

  /**
   * Trigger click on a button's element when using physicalKeyboardHighlightPress
   * In other words, this calls button.click() on the highlighted button
   */
  physicalKeyboardHighlightPressUseClick?: boolean;

  /**
   * Whether physicalKeyboardHighlightPress should use pointer events to trigger buttons.
   */
  physicalKeyboardHighlightPressUsePointerEvents?: boolean;

  /**
   * Define the text color that the physical keyboard highlighted key should have.
   */
  physicalKeyboardHighlightTextColor?: string;

  /**
   * Define the background color that the physical keyboard highlighted key should have.
   */
  physicalKeyboardHighlightBgColor?: string;

  /**
   * Calling preventDefault for the mousedown events keeps the focus on the input.
   */
  preventMouseDownDefault?: boolean;

  /**
   * Calling preventDefault for the mouseup events.
   */
  preventMouseUpDefault?: boolean;

  /**
   * Stops pointer down events on simple-keyboard buttons from bubbling to parent elements.
   */
  stopMouseDownPropagation?: boolean;

  /**
   * Stops pointer up events on simple-keyboard buttons from bubbling to parent elements.
   */
  stopMouseUpPropagation?: boolean;

  /**
   * Render buttons as a button element instead of a div element.
   */
  useButtonTag?: boolean;

  /**
   * A prop to ensure characters are always be added/removed at the end of the string.
   */
  disableCaretPositioning?: boolean;

  /**
   * Restrains input(s) change to the defined regular expression pattern.
   */
  inputPattern?: string;

  /**
   * Instructs simple-keyboard to use touch events instead of click events.
   */
  useTouchEvents?: boolean;

  /**
   * Enable useTouchEvents automatically when touch device is detected.
   */
  autoUseTouchEvents?: boolean;

  /**
   * Opt out of PointerEvents handling, falling back to the prior mouse event logic.
   */
  useMouseEvents?: boolean;

  /**
   * Disable button hold action.
   */
  disableButtonHold?: boolean;

  /**
   * Adds unicode right-to-left control characters to input return values.
   */
  rtl?: boolean;

  /**
   * Enable input method editor candidate list support.
   */
  enableLayoutCandidates?: boolean;

  /**
   * Character suggestions to be shown on certain key presses
   */
  layoutCandidates?: { [key: string]: string };

  /**
   * Exclude buttons from layout
   */
  excludeFromLayout?: { [key: string]: string[] };

  /**
   * Determines size of layout candidate list
   */
  layoutCandidatesPageSize?: number;

  /**
   * Determines whether layout candidate match should be case-sensitive.
   */
  layoutCandidatesCaseSensitiveMatch?: boolean;

  /**
   * Disables the automatic normalization for selected layout candidates
   */
  disableCandidateNormalization?: boolean;

  /**
   * Executes the callback function every time simple-keyboard is rendered (e.g: when you change layouts).
   */
  onRender?: (instance?: SimpleKeyboard) => void;

  /**
   * Executes the callback function once simple-keyboard is rendered for the first time (on initialization).
   */
  onInit?: (instance?: SimpleKeyboard) => void;

  /**
   * Retrieves the current input
   */
  onChange?: (input: string, e?: TKeyboardHandlerEvent | undefined) => unknown;

  /**
   * Module options can have any format
   */
  [name: string]: unknown;
}

export interface IKeyboardButtonElements {
    [key: string]: TKeyboardElement[];
}
