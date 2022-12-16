import InputUtilities from '@/core/helpers/InputUtilities';
import { TKeyboardElement } from '@/core/types/keyboard.types';

export type TCandidateBoxParams = {
  utilities: InputUtilities;
}
export type TCandidateBoxShowParams = {
  candidateValue: string;
  targetElement: TKeyboardElement;
  // eslint-disable-next-line no-unused-vars
  onSelect: (selectedCandidate: string, e: MouseEvent) => void;
}
export type TCandidateBoxRenderParams = {
  candidateListPages: string[][];
  nbPages: number;
  onItemSelected: (selectedCandidate: string, e: MouseEvent) => void;
  pageIndex: number;
  targetElement: TKeyboardElement;
}
