// NAME DISPLAY
let nameValue = document.getElementById("name");
let nameDisplay = document.getElementById("nameDisplay");

// DESCRIPTION DISPLAY
let description = document.getElementById("description");
let descriptionDisplay = document.getElementById("descriptionDisplay");
descriptionDisplay.textContent = description.value;

let optionValue = document.getElementById("option-value");
let subjectValue = document.getElementById("subjectValue");

const dateValue = document.getElementById("dateValue");
const dateDisplay = document.getElementById("dueDisplay");

function submitButton() {
  subjectValue.textContent = optionValue.value;
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

  if (dateValue.value) {
    const overAllDate = dateValue.value.split("-");

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
  nameValue.value = "";

  // REMOVE DATE VALUE
  description.value = "";

  optionValue.value = "";

  dateValue.value = "";
}

// DELETE THE VALUE OF CONTAINER

function removeBtn() {
  subjectValue = "";
  // REMOVE DATE VALUE
  nameValue.value = "";

  // REMOVE DATE VALUE
  description.value = "";

  optionValue.value = "";

  dateValue.value = "";
  // REMOVE SUBJECT VALUE
  subjectValue.textContent = "";
  // REMOVE DATE VALUE
  nameDisplay.textContent = "";
  // REMOVE DATE VALUE
  descriptionDisplay.textContent = "";

  subjectValue = "";

  dateDisplay.textContent = "";
}

// dateValue.addEventListener("change", dateDisplay);
