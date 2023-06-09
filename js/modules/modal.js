function modal() {
  const modalOn = document.querySelectorAll("[data-modal]"),
    modalOff = document.querySelector("[data-close]"),
    modalActive = document.querySelector(".modal_active"),
    overlay = document.querySelector(".overlay");

  // modalOn.forEach((btn) => {
  //   btn.addEventListener("click", modalOupen);
  // });

  // function modalOupen() {
  //   modalActive.classList.add("show");
  //   modalActive.classList.remove("hide");
  //   overlay.classList.add("show");
  //   overlay.classList.remove("hide");
  //   document.body.style.overflow = "hidden";
  // }

  function modalClose() {
    modalActive.classList.add("hide");
    modalActive.classList.remove("show");
    overlay.classList.add("hide");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalOff.addEventListener("click", modalClose);
  overlay.addEventListener("click", modalClose);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalActive.classList.contains("show")) {
      modalClose();
    }
  });

  const tomorrowPublished = document.querySelector(
    ".shutdown_tomorrow.published"
  );
  tomorrowPublished.innerHTML = "Опубліковано ____ Оновлено ";
}
// export default modal;
