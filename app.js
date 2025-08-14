let inp = document.querySelector("input");
let tadd = document.querySelector(".add");
let ul = document.querySelector("ul");

tadd.addEventListener("click", function (event) {
  let li = document.createElement("li");
  li.innerText = inp.value;
  ul.appendChild(li);
  inp.value = "";
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("red", "delete");
  li.appendChild(del);
});

inp.addEventListener("keydown", function (event) {
  if (event.code == "NumpadEnter") {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = "";
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("red", "delete");
    li.appendChild(del);
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let tbd = event.target.parentElement;
    tbd.remove();
  }
});
