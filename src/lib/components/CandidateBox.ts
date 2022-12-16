import '../../css/CandidateBox.css';

import InputUtilities from '../../core/helpers/InputUtilities';
import { TCandidateBoxParams, TCandidateBoxRenderParams, TCandidateBoxShowParams } from '@/core/types/candidateBox.types';

class CandidateBox {
  utilities: InputUtilities;
  candidateBoxElement!: HTMLDivElement;
  pageIndex = 0;
  pageSize;

  constructor({ utilities }: TCandidateBoxParams) {
    this.utilities = utilities;
    InputUtilities.bindMethods(CandidateBox, this);
    this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
  }

  destroy(): void {
    if(this.candidateBoxElement) {
      this.candidateBoxElement.remove();
      this.pageIndex = 0;
    }
  }

  show({
    candidateValue,
    targetElement,
    onSelect,
  }: TCandidateBoxShowParams): void {
    if(!candidateValue || !candidateValue.length) {
      return;
    }

    const candidateListPages = this.utilities.chunkArray(
      candidateValue.split(` `),
      this.pageSize,
    );

    this.renderPage({
      candidateListPages,
      nbPages: candidateListPages.length,
      onItemSelected: (selectedCandidate: string, e: MouseEvent) => {
        onSelect(selectedCandidate, e);
        this.destroy();
      },
      pageIndex: this.pageIndex,
      targetElement,
    });
  }

  renderPage({
    candidateListPages,
    nbPages,
    pageIndex,
    targetElement,
    onItemSelected,
  }: TCandidateBoxRenderParams): void {
    // Remove current candidate box, if any
    this.candidateBoxElement?.remove();

    // Create candidate box element
    this.candidateBoxElement = document.createElement(`div`);
    this.candidateBoxElement.className = `hg-candidate-box`;

    // Candidate box list
    const candidateListULElement = document.createElement(`ul`);
    candidateListULElement.className = `hg-candidate-box-list`;

    // Create Candidate box list items
    candidateListPages[pageIndex].forEach(candidateListItem => {
      const candidateListLIElement = document.createElement(`li`);
      const getMouseEvent = (): MouseEvent => {
        const mouseEvent = new MouseEvent(`click`);
        Object.defineProperty(mouseEvent, `target`, {
          value: candidateListLIElement,
        });
        return mouseEvent;
      };

      candidateListLIElement.className = `hg-candidate-box-list-item`;
      candidateListLIElement.textContent = candidateListItem;
      candidateListLIElement.onclick = (e = getMouseEvent()): void => onItemSelected(candidateListItem, e);

      // Append list item to ul
      candidateListULElement.appendChild(candidateListLIElement);
    });

    // Add previous button
    const isPrevBtnElementActive = pageIndex > 0;
    const prevBtnElement = document.createElement(`div`);
    prevBtnElement.classList.add(`hg-candidate-box-prev`);
    if(isPrevBtnElementActive) prevBtnElement.classList.add(`hg-candidate-box-btn-active`);
    prevBtnElement.onclick = (): void => {
      if(!isPrevBtnElementActive) return;
      this.renderPage({
        candidateListPages,
        nbPages,
        onItemSelected,
        pageIndex: pageIndex - 1,
        targetElement,
      });
    };
    this.candidateBoxElement.appendChild(prevBtnElement);

    // Add elements to container
    this.candidateBoxElement.appendChild(candidateListULElement);

    // Add next button
    const isNextBtnElementActive = pageIndex < nbPages - 1;
    const nextBtnElement = document.createElement(`div`);
    nextBtnElement.classList.add(`hg-candidate-box-next`);
    if(isNextBtnElementActive) nextBtnElement.classList.add(`hg-candidate-box-btn-active`);

    nextBtnElement.onclick = (): void => {
      if(!isNextBtnElementActive) return;
      this.renderPage({
        candidateListPages,
        nbPages,
        onItemSelected,
        pageIndex: pageIndex + 1,
        targetElement,
      });
    };
    this.candidateBoxElement.appendChild(nextBtnElement);

    // Append candidate box to target element
    targetElement.prepend(this.candidateBoxElement);
  }
}

export default CandidateBox;
