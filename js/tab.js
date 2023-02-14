const operationsTabContainer = document.querySelector(
  '.operations__tab-container'
);

const initializeTabContent = () => {
  operationsTabContainer.addEventListener('click', (evt) => {
    const targetButton = evt.target.closest('.operations__tab');
    const targetDataset = targetButton.dataset.tab;
    const tabButtons = document.querySelectorAll('.operations__tab');
    const tabContents = document.querySelectorAll('.operations__content');

    if (targetButton) {
      tabButtons.forEach((tabButton) =>
        tabButton.classList.remove('operations__tab--active')
      );
      targetButton.classList.add('operations__tab--active');

      const tabContent = document.querySelector(
        `.operations__content--${targetDataset}`
      );

      tabContents.forEach((tabContent) =>
        tabContent.classList.remove('operations__content--active')
      );

      tabContent.classList.add('operations__content--active');
    }
  });
};

export {initializeTabContent};
