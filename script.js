// NAME DISPLAY
let nameValue = document.getElementById("name");
let nameDisplay = document.getElementById("nameDisplay");

// DESCRIPTION DISPLAY
let description = document.getElementById("description");
let descriptionDisplay = document.getElementById("descriptionDisplay");
descriptionDisplay.textContent = description.value;

function submitButton() {
  const optionValue = document.getElementById("option-value").value;
  const subjectValue = document.getElementById("subjectValue");
  subjectValue.textContent = optionValue;
  nameDisplay.textContent = nameValue.value;
  descriptionDisplay.textContent = description.value;

  // DATE DISPLAY
  const getMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateValue = document.getElementById("dateValue").value;
  const dateDisplay = document.getElementById("dueDisplay");

  if (dateValue) {
    const overAllDate = dateValue.split("-");

    if (overAllDate.length === 3) {
      const dateObject = new Date(
        overAllDate[0],
        overAllDate[1] - 1,
        overAllDate[2]
      );
      const string = `${
        getMonthNames[dateObject.getMonth()]
      } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
      dateDisplay.textContent = string;
    }
  }

  // SUBMIT CONTAINER DISPLAY
  const submitValue = document.getElementById("submitValue");
  submitValue.style.display = "block";
}

// DELETE THE SUBMIT CONTAINER

function deleteButton() {
  submitValue.style.display = "none";
  // REMOVE SUBJECT VALUE
  subjectValue = "";
  // REMOVE DATE VALUE
  if (typeof nameValue == undefined) {
    nameValue.value = "";
  }

  // REMOVE DATE VALUE
  descriptionValue = "";
}

// DELETE THE VALUE OF CONTAINER

function removeBtn() {
  // REMOVE SUBJECT VALUE
  subjectValue.textContent = "";
  // REMOVE DATE VALUE
  nameDisplay.textContent = "";
  // REMOVE DATE VALUE
  descriptionDisplay.textContent = "";
}

// dateValue.addEventListener("change", dateDisplay);
