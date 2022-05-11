"use strict";
const panelItems = document.querySelectorAll(".container__panel");

// const getClassList = function (item) {
//   item.classList.includes("active")
// };

panelItems.forEach((item) => {
  item.addEventListener("click", function () {
    deleteActiveClass();
    item.classList.add("active");
  });
});

const deleteActiveClass = () => {
  panelItems.forEach((item) => {
    item.classList.remove("active");
  });
};
