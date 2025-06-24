const modalOverlay = document.querySelector(".modal-overlay");
const portfolioModal = document.querySelector("#project_modal");
const portfItems = document.querySelectorAll(".portfolio__list-item");
const modalCloseBtn = document.querySelector(".modal__close-btn");

const openModal = (modal) => {
  modal.classList.add("modal__visible");
};

const closeModal = (modal) => {
  modal.classList.remove("modal__visible");
};

portfItems.forEach((item) => {
  item.addEventListener("click", () => {
    openModal(portfolioModal);
    modalOverlay.classList.add("modal__darker");
  });
});

modalCloseBtn.addEventListener("click", () => {
  closeModal(portfolioModal);
  modalOverlay.classList.remove("modal__darker");
});
