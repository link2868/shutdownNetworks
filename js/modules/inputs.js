// import preloader from "./preloader.js";

const DefineQueue = async (data) => {
  const loader = document.querySelector(".loader");

  loader.classList.add("show");
  loader.classList.remove("hide");

  let response = await fetch(
    "https://svitlo.oe.if.ua/GAVTurnOff/GavGroupByAccountNumber",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    }
  );

  const informPanel = document.querySelector(".inform"),
    overlay = document.querySelector(".overlay"),
    modalActive = document.querySelector(".modal_active"),
    informModal = document.querySelector(".inform_modal");

  if (response.ok) {
    console.log("Post successfully created!");
    let result = await response.json();
    overlay.classList.add("show");
    overlay.classList.remove("hide");
    modalActive.classList.add("show");
    modalActive.classList.remove("hide");

    document.body.style.overflow = "hidden";

    informPanel.innerHTML = "";

    informModal.innerHTML = `${result.current.note}`;

    loader.classList.add("hide");
    loader.classList.remove("show");
  } else {
    console.log("response " + response.status + "   " + response.statusText);

    informPanel.innerHTML = "Пошук не дав результатів! Введіть коректні дані!";

    informPanel.scrollIntoView();
    loader.classList.add("hide");
    loader.classList.remove("show");
  }
};

function inputs() {
  function formaPoAccount(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element),
        value = form.elements.input.value;

      console.log(value);

      const body =
        "accountNumber=" +
        value +
        "&" +
        "userSearchChoice=" +
        "pob" +
        "&" +
        "address=" +
        "";

      DefineQueue(body);
    });
  }

  function formaPoNumber(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();

      const form = document.querySelector(element),
        value = form.elements.input.value;

      const body =
        "accountNumber=" +
        value +
        "&" +
        "userSearchChoice=" +
        "jur" +
        "&" +
        "address=" +
        "";

      DefineQueue(body);
    });
  }

  function formPoaddress(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element);
      const address = `${form.elements.city.value},${form.elements.street.value},${form.elements.house.value}`;

      const body =
        "accountNumber=" +
        "" +
        "&" +
        "userSearchChoice=" +
        "pob" +
        "&" +
        "address=" +
        address;

      DefineQueue(body);
    });
  }

  formaPoAccount("#account");
  formaPoNumber("#number");
  formPoaddress("#address");
}
// export default inputs;
