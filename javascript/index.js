function updateTime() {
  // Las Vegas
  let lasVegasElement = document.querySelector("#las-vegas");
  let lasVegasDateElement = lasVegasElement.querySelector(".date");
  let lasVegasTimeElement = lasVegasElement.querySelector(".time");
  let lasVegasTime = moment().tz("America/Los_Angeles");

  lasVegasDateElement.innerHTML = lasVegasTime.format("MMMM Do YYYY");
  lasVegasTimeElement.innerHTML = lasVegasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
