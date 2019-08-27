// write your code in JavaScript (Node.js 8.9.4)
const todayDate = new Date("2016-11-30")
const limit = 14
const table = document.getElementsByTagName('table')[0];
const rows = table.rows;
let incorrectlyMarked = 0;
for (row of rows) {
  const borrowedDate = new Date(row.getElementsByTagName('td')[1].textContent)
  const returnedDate = (row.getElementsByTagName('td')[2].textContent) ? (new Date(row.getElementsByTagName('td')[2].textContent)) : null
  console.log("red")
  console.log(borrowedDate + " - " + returnedDate)
  if (returnedDate) {
    console.log("not empty")
    console.log(isOverdue(borrowedDate, returnedDate, row.style.backgroundColor === "red"))
    incorrectlyMarked += checkOverdueMarking;
    //check with limit
  } else {
    console.log("empty")
    //check with today
    console.log(isOverdue(borrowedDate, todayDate, row.style.backgroundColor === "red"))
    incorrectlyMarked += checkOverdueMarking;

  }
}

return incorrectlyMarked;

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function checkOverdueMarking(_borrowedDate, _returnedOrTodayDate, isRed) {
  const limitDate = addDays(_borrowedDate, limit)
  if (isRed && _returnedOrTodayDate.getTime() > limitDate.getTime()) {
    return 0
  }
  else if (!isRed && _returnedOrTodayDate.getTime() > limitDate.getTime()) {
    return 1
  }
  else if (isRed && _returnedOrTodayDate.getTime() < limitDate.getTime()) {
    return 1
  }
  else if (!isRed && _returnedOrTodayDate.getTime() < limitDate.getTime()) {
    return 0
  }

}
