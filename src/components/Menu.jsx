export function Menu(props) {
  let currentTime = props.articles.timestamp;

  const today = new Date(currentTime);
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const closingDate = new Date(year, month, day, 22);
  const closingTime = closingDate.getTime();
  const remainingTime = closingTime - currentTime;
  const timeUntilClosure = hourFromMs(remainingTime);

  return (
    <section className="top_menu">
      <div className="logo">
        <img src="src/assets/logo-white.svg" alt="logo"></img>
      </div>
      <section className="menucardwrapper">
        <div className="menucard" id="time">
          <h1>The bar closes in</h1>
          {
            <h1 id="remaining_time">
              {remainingTime > 0 ? timeUntilClosure : "0 h 0 min"}
            </h1>
          }
        </div>
        <div className="menucard" id="people">
          <h1>People in queue</h1>
          <h1 id="people_queue">{props.articles.queue.length}</h1>
        </div>
        <div className="menucard" id="sales">
          <h1>Sales</h1>
          <h1 id="sales">
            <span>30.000</span>DKK
          </h1>
        </div>
      </section>
    </section>
  );
}

function hourFromMs(time) {
  let minutes = Math.floor((time / (1000 * 60)) % 60),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  if (hours <= 0 && minutes <= 0) {
    return "0 h 0 m";
  } else {
    return hours + "h " + minutes + "min ";
  }
}
