// alert("under construction");
function addprField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("prField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let prOb = document.getElementById("pr");
  let prAddButtonOb = document.getElementById("prAddButton");

  prOb.insertBefore(newNode, prAddButtonOb);
}

function addweField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addaqField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generate resume
function generateRes() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  // direct
  document.getElementById("name2T1").innerHTML = nameField;

  // contact
  document.getElementById("conT1").innerHTML = document.getElementById("contactField").value;

  //gmail
  document.getElementById("gmT1").innerHTML = document.getElementById("gmField").value;

  // address
  document.getElementById("addT1").innerHTML = document.getElementById("addressField").value;

  // code for setting image
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader;
  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend = function () {
    document.getElementById("imgT1").src = reader.result;

  }
  // imp links
  document.getElementById("liT1").innerHTML = document.getElementById("ldField").value;
  document.getElementById("igT1").innerHTML = document.getElementById("igField").value;
  document.getElementById("gitT1").innerHTML = document.getElementById("gitField").value;

  // Objective
  document.getElementById("obT1").innerHTML = document.getElementById("obField").value;
  // projects
  let prElement = document.getElementsByClassName("prField");

  let str2 = " ";
  for (let e of prElement) {
    str2 = str2 + `<li> ${e.value}</li>`;
  }
  document.getElementById("prT1").innerHTML = str2;

  // work experiance
  let weElement = document.getElementsByClassName("weField");

  let str = " ";
  for (let e of weElement) {
    str = str + `<li> ${e.value}</li>`;
  }
  document.getElementById("weT1").innerHTML = str;

  // academic qualification
  let aqElement = document.getElementsByClassName("aqField");

  let str1 = " ";
  for (let e of aqElement) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("aqT1").innerHTML = str1;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

}
function printRes() {
  window.print();
}