function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDate = losAngelesElement.querySelector("span");
  let losAngelesTime = losAngelesElement.querySelector("h2");
  losAngeles = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngeles.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngeles.format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector("span");
  let parisTime = parisElement.querySelector("h2");
  paris = moment().tz("Europe/Paris");
  parisDate.innerHTML = paris.format("MMMM Do YYYY");
  parisTime.innerHTML = paris.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);