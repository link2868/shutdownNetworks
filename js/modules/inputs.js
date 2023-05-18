const DefineQueue = async () => {
  let response = await fetch(
    "https://svitlo.oe.if.ua/GAVTurnOff/RemFilterP?remList=bog_p",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // body: data,
    }
  );
  if (response.ok) {
    console.log("Post successfully created!");

    let result = await response.text();
    document.querySelector(".inform").innerHTML = result;
  } else {
    console.log("response " + response.status + "   " + response.statusText);

    document.querySelector(".inform").innerHTML = "Спробуйте пізніше!";
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
