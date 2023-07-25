
$(function () {
  var currentTime = dayjs();
  var currentDay = document.querySelector('#currentDay');
    currentDay.textContent = currentTime.format('dddd MMMM D, h:mm A');

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveButtonEl = document.createElement("button");
    saveButtonEl.classList.add("btn", "saveBtn");
    saveButtonEl.setAttribute("label", "save");
    saveButtonEl.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';
    timeBlockEl.appendChild(saveButtonEl);

    saveButtonEl.addEventListener
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

    // TODO: Add code to display the current date in the header of the page.
  function initTime() {
    // Set current date
    $("#date").text(currentDate);
    // Set current time
    $("#time").text(currentTime);
    // Set colors based on current time
    timeColor();
    // Update current date/time each second
    let currentTimer = setInterval(function() {
      currentDate = moment().format("MMMM Do, YYYY");
      $("#date").text(currentDate);
      currentTime = moment().format("hh:mm:ss A");
      $("#time").text(currentTime);
      timeColor();
    }, 1000);
  }

  initTime();
});
