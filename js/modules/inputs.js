const DefineQueue = async (data) => {
  const body = document.querySelector("body"),
    messageLoading = "img/spinner.svg";
  let statusMessage = document.createElement("img");
  statusMessage.src = messageLoading;
  statusMessage.style.cssText = `
          display: block;
          margin: 0 auto ;
          position: fixed;
          top: 55%;
          left: 49%;
          `;
  body.append(statusMessage);

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

  const informPanel = document.querySelector(".inform");

  if (response.ok) {
    console.log("Post successfully created!");
    let result = await response.json();
    informPanel.innerHTML = `${result.current.note}`;
    informPanel.scrollIntoView();
    statusMessage.remove();
  } else {
    console.log("response " + response.status + "   " + response.statusText);
    // let result = await response.json();
    // informPanel.innerHTML = `${result.current.note}`;
    informPanel.innerHTML = "Пошук не дав результатів! Введіть коректні дані!";
    informPanel.scrollIntoView();
    statusMessage.remove();
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
export default inputs;
