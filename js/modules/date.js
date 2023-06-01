function date() {
  function zero_first_format(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }

  function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    let dateTime = `${day}, ${month}, ${year}, ${hours}, ${minutes}`.split(",");
    return dateTime;
  }

  const dateTime = date_time();
  console.log(dateTime);

  const element = document.querySelectorAll(".current_date_time");
  element.forEach((e) => {
    e.innerHTML = `${dateTime[0]}.${dateTime[1]}.${dateTime[2]} станом на ${dateTime[3]}:${dateTime[4]}`;
  });

  const todaySchedule = document.querySelector(".shutdown_today.schedule");
  todaySchedule.innerHTML = `Графік погодинного вимкнення на ${dateTime[0]}.${dateTime[1]}.${dateTime[2]}`;
  console.log();
}

export default date;
