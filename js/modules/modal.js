function modal() {
  const modalOff = document.querySelector("[data-close]"),
    modalActive = document.querySelector(".modal_active"),
    overlay = document.querySelector(".overlay");

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
