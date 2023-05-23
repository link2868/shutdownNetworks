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

    return (
      day + ". " + month + ". " + year + " станом на " + hours + ":" + minutes
    );
  }

  const element = document.querySelectorAll(".current_date_time");
  element.forEach((e) => {
    e.innerHTML = date_time();
  });
}

export default date;
