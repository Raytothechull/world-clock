function updateTime() {
  // Las Vegas
  let lasVegasElement = document.querySelector("#las-vegas");
  if (lasVegasElement) {
    let lasVegasDateElement = lasVegasElement.querySelector(".date");
    let lasVegasTimeElement = lasVegasElement.querySelector(".time");
    let lasVegasTime = moment().tz("America/Los_Angeles");

    lasVegasDateElement.innerHTML = lasVegasTime.format("MMMM Do YYYY");
    lasVegasTimeElement.innerHTML = lasVegasTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
     <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
       <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small>
       </div>
        </div>
        <a href="/">Back to all cities</a> `;
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
