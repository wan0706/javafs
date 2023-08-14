$(function () {
  // mother child
  const mother = document.querySelector(".oejmother");
  const childs = document.querySelectorAll(".oejchild");
  let btns = document.querySelectorAll(".oejAllbtn");

  function change() {
    for (let j = 0; j < btns.length; j++) {
      btns[j].onclick = function () {
        for (let i = 0; i < childs.length; i++) {
          childs[i].style.zIndex = 0;
        }
        childs[j].style.zIndex = 1;
      };
    }
  }

  change();

});