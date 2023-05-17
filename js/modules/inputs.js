const ajax = (data) => {
  // let body = JSON.stringify(data);
  let body = data;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://svitlo.oe.if.ua/GavGroupByAccountNumber", true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  // xhr.open("POST", "https://reqres.in/api/users", true);

  xhr.send(body);
  console.log(body);

  xhr.onload = function () {
    console.log(xhr.readyState);
    if (xhr.status === 200) {
      console.log("Post successfully created!");
      console.log(xhr.response);
      document.querySelector(".inform").innerHTML = xhr.response;
    }
  };
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
        " ";
      // const body = {
      //   accountNumber: value,
      //   userSearchChoice: "pob",
      //   address: "",
      // };

      ajax(body);
    });
  }

  function formaPoNumber(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element),
        value = form.elements.input.value;

      // console.log(value);

      const body = {
        accountNumber: value,
        userSearchChoice: "pob",
        address: "",
      };

      ajax(body);
    });
  }

  function formPoaddress(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element);
      const address = `${form.elements.city.value},${form.elements.street.value},${form.elements.house.value}`;

      const body = {
        accountNumber: "",
        userSearchChoice: "pob",
        address,
      };

      // console.log(value);
      ajax(body);
    });
  }

  formaPoAccount("#account");
  formaPoNumber("#number");
  formPoaddress("#address");
}
export default inputs;
