import preloader from "./preloader.js";

const defineDisabledConsumers = async (url) => {
  const statusMessage = preloader(),
    response = await fetch(url),
    informPanel = document.querySelector(".inform");

  if (!response.ok) {
    informPanel.innerHTML = `Помилка за адресою  ${url}, статус помилки  ${response.text()}`;
    informPanel.scrollIntoView();
    statusMessage.remove();
  }
  console.log("Post successfully created!");
  let result = await response.text();
  informPanel.innerHTML = `${result}`;
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
      defineDisabledConsumers(url);
    }
  });
}

export default selects;
