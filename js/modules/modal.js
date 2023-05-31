function modal() {
  const modalOn = document.querySelectorAll("[data-modal]"),
    modalOff = document.querySelector("[data-close]"),
    modalActive = document.querySelector(".modal_active"),
    wrapper = document.querySelector(".wrapper");

  // modalOn.forEach((btn) => {
  //   btn.addEventListener("click", modalOupen);
  // });

  function modalOupen() {
    modalActive.classList.add("show");
    modalActive.classList.remove("hide");
    wrapper.style.opacity = 0.15;
    document.body.style.overflow = "hidden";
  }

  function modalClose() {
    modalActive.classList.add("hide");
    modalActive.classList.remove("show");
    wrapper.style.opacity = 1.0;
    document.body.style.overflow = "";
  }

  modalOff.addEventListener("click", modalClose);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalActive.classList.contains("show")) {
      modalClose();
    }
  });
}
export default modal;
