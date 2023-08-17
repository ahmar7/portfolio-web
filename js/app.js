let radios = document.getElementById("other");
let hiddentoggle = document.getElementById("hidden-toggle");
// let value;
// for (let i = 0; i < radios.length; i++) {
//   if (radios[i].type === "radio" && radios[i].checked) {
//     // get value, set checked flag or do whatever you need to
//     value = radios[i].value;
//   }
// }
let checkLast = () => {
  // if(radio)
  if (radios.checked) {
    hiddentoggle.classList.remove("hidden");
  } else {
    hiddentoggle.classList.add("hidden");
  }
};
