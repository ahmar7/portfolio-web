let radios = document.getElementById("other");
let hiddentoggle = document.getElementById("hidden-toggle");

let checkLast = () => {
  if (radios.checked) {
    hiddentoggle.classList.remove("hidden");
  } else {
    hiddentoggle.classList.add("hidden");
  }
};

// Creating Resume button
let resumeButton = () => {
  let btnContainer = document.getElementById("heroBtns");
  let resumeBtn = document.createElement("a");
  resumeBtn.setAttribute("href", "./doc/Pratham Resume.docx");
  resumeBtn.setAttribute("class", "resume-btn btn white-btn");
  resumeBtn.innerHTML = "Resume";
  let btnIcon = document.createElement("i");
  btnIcon.setAttribute("class", "fa-solid fa-download");
  resumeBtn.appendChild(btnIcon);
  btnContainer.appendChild(resumeBtn);
};
// Create contact button
let contactButton = () => {
  let btnContainer = document.getElementById("heroBtns");
  let contactBtn = document.createElement("a");
  contactBtn.setAttribute("href", "#contact");
  contactBtn.setAttribute("class", "contact-btn btn black-btn");
  contactBtn.innerHTML = "Contact me";

  btnContainer.appendChild(contactBtn);
};
// Form Validation

function validateForm() {
  var name = document.myform.name.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  }
}
resumeButton();
contactButton();
