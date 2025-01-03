function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#losAngeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector("span");
    let losAngelesTime = losAngelesElement.querySelector("h2");
    losAngeles = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngeles.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngeles.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector("span");
    let parisTime = parisElement.querySelector("h2");
    paris = moment().tz("Europe/Paris");
    parisDate.innerHTML = paris.format("MMMM Do YYYY");
    parisTime.innerHTML = paris.format("h:mm:ss [<small>]A[</small>]");
  }
}
//   Updatecity
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h3>${cityName}</h3>
            <span>${cityTime.format("MMMM Do YYYY")}</span>
          </div>
          <h2>${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></h2>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);