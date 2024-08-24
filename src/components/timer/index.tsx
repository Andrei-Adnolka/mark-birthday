export const TimerUI = () => {
  var countDownDate = new Date("Sep 9, 2024 17:00:00").getTime();

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const el = document.getElementById("demo");
    if (el) {
      // Display the result in the element with id="demo"
      el.innerHTML =
        days + "дней " + hours + "ч " + minutes + "мин " + seconds + "сек ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        el.innerHTML = "EXPIRED";
      }
    }
  }, 1000);

  return <p id="demo" className="main--timer"></p>;
};
