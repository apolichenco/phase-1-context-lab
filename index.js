/* Your Code Here */
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array)) 
}
function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11, 15)),
        date : dateStamp.slice(0, 10)
    })
     return this
}
function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11, 15)),
        date : dateStamp.slice(0, 10)
    })
    return this
}
function hoursWorkedOnDate(dateStamp) {
    const index = this.timeOutEvents.findIndex(object => {
      return object.date === dateStamp;
    });
      let hoursWorked = this.timeOutEvents[index].hour - this.timeInEvents[index].hour;
      return (hoursWorked)/100 
  }
  function wagesEarnedOnDate(dateStamp) {
    let wagesEarned = this.payPerHour * hoursWorkedOnDate.call(this, dateStamp);
    return wagesEarned
  }
  function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(employee => employee.firstName === firstNameString)
  }
  function calculatePayroll(employees) {
    let listOfIndvWages = employees.map(employee => allWagesFor.call(employee))
    const totalToPay = listOfIndvWages.reduce((partialSum, a) => partialSum + a, 0)
    return totalToPay
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

