import preloader from "./preloader.js";

const DefineDisabledConsumers = async (url) => {
  const statusMessage = preloader(),
    response = await fetch(url),
    informPanel = document.querySelector(".inform");

  if (!response.ok) {
    informPanel.innerHTML = `Ошибка по адресу ${url}, статус ошибки ${response.status}`;
  }
  console.log("Post successfully created!");
  let result = await response.text();
  informPanel.innerHTML = `${Promise.resolve(result)}`;
  informPanel.scrollIntoView();

  statusMessage.remove();
};

function selects() {
  const selectBranch = document.querySelector('[name="branch_pat"]');

  selectBranch.addEventListener("change", function () {
    const getValue = selectBranch.value;

    if (getValue !== "select_rem" && getValue !== "select_null") {
      const url = `https://svitlo.oe.if.ua/GAVTurnOff/RemFilterP?remList=${getValue}`;
      console.log(getValue);
      console.log(url);
      DefineDisabledConsumers(url);
    }
  });
}

export default selects;
