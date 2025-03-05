window.onload; {
  let element = document.getElementById("modalContainer");
  element.style.display = "none";
  let logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.style.display= "none";
}

function openLogin() {
    //document.getElementById("navBar").style.backgroundColor = "red";

    let element = document.getElementById("modalContainer");
    //let accOptTab = document.getElementById("accOpt");
    //accOptTab.hide.bs.collapse;
    let accNavBarElement = document.getElementById("accNavBarBtn");
    accNavBarElement.hasAttribute("disabled");
    element.style.display = "flex";
};

function signIn(){
  console.log("signIn Funct call")
  if (document.getElementById("userName").value != "") {
    console.log("Signed in!");
  } else {
    console.log("Fill in the username first!");
  }
}

function closeLogin(){
  let element = document.getElementById("modalContainer");
  let accNavBarElement = document.getElementById("accNavBarBtn");
  accNavBarElement.removeAttribute("disabled");
  element.style.display = "none";
}