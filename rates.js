let arr = ["USD", "EUR", "SAR", "AED", "KWD"];
for (let i = 0; i < arr.length; i++) {
  fetch(
    `https://v6.exchangerate-api.com/v6/9c1c3c1236000c01fe68d598/latest/${arr[i]}`
  )
    .then((data) => {
      let rate = data.json();
      return rate;
    })
    .then((rate) => {
      document.getElementById("date").innerHTML =
        "Last updated in " + rate.time_last_update_utc;
      document.getElementById("date2").innerHTML =
        "Next update in " + rate.time_next_update_utc;
      document.getElementById(`${arr[i]}`).innerHTML =
        Number(rate.conversion_rates.EGP).toFixed(2) + " EGP";
    });
}
