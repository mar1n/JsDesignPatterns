function fridayTheThirteents(startYear, endYear) {
  let fridays = [];
  let start = new Date();
  let end = startYear;
  if (!!endYear) {
    end = endYear;
  }
  for (let year = startYear; year <= end; year++) {
    start.setFullYear(year);
    for (let i = 0; i < 12; i++) {
      start.setFullYear(year);
      start.setMonth(i);
      start.setDate(13);
      if (Days(start.getDay()) === "Friday") {
        fridays.push(
          `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`
        );
      }
    }
  }

  return fridays;
}

function Months(index) {
  let months = [
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
  return months[index];
}

function Days(index) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[index];
}
// add test first than write in typescript and see how many test I can remove because I am using typescript
// put one app to circleCI and run test automticly in circleCI
console.log(fridayTheThirteents(1999));
