function inputs() {
  function formaPoNumber(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element),
        value = form.elements.input.value;

      console.log(value);
      form.reset();
    });
  }

  function formPoaddress(element) {
    document.querySelector(element).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector(element),
        value = new Object();
      value.city = form.elements.city.value;
      value.street = form.elements.street.value;
      value.house = form.elements.house.value;

      console.log(value);
    });
  }

  formaPoNumber("#account");
  formaPoNumber("#number");
  formPoaddress("#address");
}
export default inputs;
