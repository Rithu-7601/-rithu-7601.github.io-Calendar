const date = new Date();
const renderCalendar = () => {
  date.setDate(1); //set the date to the first day of month

  const monthDays = document.querySelector(".days");
  //to define ending date for each month
  //to give current year month and for day giving 1
  //to get no. of the date use getDate
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); //gives lastday of current month

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(prevLastDay);

  //to get the index number of first day of the month
  const firstDayIndex = date.getDay(); //getDay() -> returns index no's of days of the week

  //to get the index number of last day of the month
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  //to display days
  let days = "";

  for (x = firstDayIndex; x > 0; x--) {
    days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`; // to set the first date correctly
    //1 is added to x becoz it shows prev month date only upto 29 but it shld be upto 30 so add 1 to get date 30
  }

  //to display days of the month
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      //to highlight current date
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    // shows no's of next month
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// to make the arrows work
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();
