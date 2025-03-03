window.onload; {
  let element = document.getElementById("modalContainer");
    element.style.display = "none";
}

function openLogin() {
    //document.getElementById("navBar").style.backgroundColor = "red";

    let element = document.getElementById("modalContainer");
    element.style.display = "flex";
    element.style.transition= "1.0s";
};

function closeLogin(){
  let element = document.getElementById("modalContainer");
  element.style.display = "none";
}