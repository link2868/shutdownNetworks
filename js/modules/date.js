function date() {
  function zero_first_format(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }

  function dateTimeNow() {
    var currentDateTime = new Date();
    var day = zero_first_format(currentDateTime.getDate());
    var month = zero_first_format(currentDateTime.getMonth() + 1);
    var year = currentDateTime.getFullYear();
    var hours = zero_first_format(currentDateTime.getHours());
    var minutes = zero_first_format(currentDateTime.getMinutes());

    let dateTime = {};
    dateTime.day = `${day}`;
    dateTime.month = `${month}`;
    dateTime.year = `${year}`;
    dateTime.hours = `${hours}`;
    dateTime.minutes = `${minutes}`;

    return dateTime;
  }

  const dateTime = dateTimeNow();
  const element = document.querySelectorAll(".current_date_time");
  element.forEach((e) => {
    e.innerHTML =
      dateTime.day +
      "." +
      dateTime.month +
      "." +
      dateTime.year +
      " станом на " +
      dateTime.hours +
      ":" +
      dateTime.minutes;
  });

  const todaySchedule = document.querySelector(".shutdown_today.schedule");
  todaySchedule.innerHTML =
    "Графік погодинного вимкнення на " +
    dateTime.day +
    "." +
    dateTime.month +
    "." +
    dateTime.year;

  function dateInform(element) {
    const dateInform = document.querySelector(element);
    dateInform.innerHTML =
      "Станом на " +
      dateTime.hours +
      ":" +
      dateTime.minutes +
      " " +
      dateTime.day +
      "." +
      dateTime.month +
      "." +
      dateTime.year +
      " відсутня інформація щодо Графіка погодинного вимкнення за Вашою адресою.";
  }
  dateInform(".shutdown_today.information");
  dateInform(".shutdown_tomorrow.information");

  const todayPublished = document.querySelector(".shutdown_today.published");
  todayPublished.innerHTML =
    "Опубліковано ____ Оновлено " +
    dateTime.day +
    "." +
    dateTime.month +
    "." +
    dateTime.year +
    " " +
    dateTime.hours +
    ":" +
    dateTime.minutes;

  function dateTomorrow() {
    var currentDate = new Date();
    var tomorrow = currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    var day = zero_first_format(currentDate.getDate());
    var month = zero_first_format(currentDate.getMonth() + 1);
    var year = currentDate.getFullYear();

    let dateNext = {};
    dateNext.day = `${day}`;
    dateNext.month = `${month}`;
    dateNext.year = `${year}`;

    return dateNext;
  }

  const dateNext = dateTomorrow();
  const tomorrowSchedule = document.querySelector(
    ".shutdown_tomorrow.schedule"
  );
  tomorrowSchedule.innerHTML =
    "Графік погодинного вимкнення на " +
    dateNext.day +
    "." +
    dateNext.month +
    "." +
    dateNext.year;
}

export default date;
