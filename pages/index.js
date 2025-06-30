import Section from "../utils/Section.js";
import imageViewer from "../components/imageViewer.js";
const modalOverlay = document.querySelector(".modal-overlay");
const portfolioModal = document.querySelector("#project_modal");
const portfItems = document.querySelectorAll(".portfolio__list-item");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const body = document.querySelector(".body");
const modalImageContainer = document.querySelector(".modal__image-container");
const modalImagesList = document.querySelectorAll(".mod__gal-img");
const nav = document.querySelector(".nav");
const imgCloseBtn = document.querySelector(".modimg__close-btn");

const section = new Section(
  ".modal__image-container",
  modalImageContainer,
  imgCloseBtn
);
const addToSection = (imgEl) => section.addItem(imgEl);
const viewer = new imageViewer(
  modalImagesList,
  "#modal-img-template",
  addToSection
);
viewer.setEventListeners();
imgCloseBtn.addEventListener("click", () => {
  const imgEl = modalImageContainer.querySelector(".modal__image-project");
  if (imgEl) imgEl.remove(); // remove the node outright

  closeModal(modalImageContainer); // hide the modal
});

portfItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleModal(portfolioModal);
  });
});

modalCloseBtn.addEventListener("click", () => {
  toggleModal(portfolioModal);
});

const toggleModal = (modal) => {
  if (modal.classList.contains("modal__visible")) {
    closeModal(modal);
    navVisible(nav);
    modalOverlay.classList.remove("modal__darker");
    body.classList.remove("body__hidden");
  } else {
    openModal(modal);
    navHidden(nav);
    modalOverlay.classList.add("modal__darker");
    body.classList.add("body__hidden");
  }
};
const openModal = (modal) => {
  modal.classList.add("modal__visible");
};
const navHidden = (nav) => {
  nav.classList.add("nav__hidden");
};
const navVisible = (nav) => {
  nav.classList.remove("nav__hidden");
};

const closeModal = (modal) => {
  modal.classList.remove("modal__visible");
};
