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
    // let accNavBarElement = document.getElementById("accNavBarBtn");
    // accNavBarElement.hasAttribute("disabled");
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

function toggleTicketInvalidNotice(){
  let element = document.getElementById("ticketInvalidNotice");
  if (document.getElementById("ticketStudName").value != "" &&
  document.getElementById("ticketIdNum").value != "" &&
  document.getElementById("ticketSubj").value != "" &&
  document.getElementById("ticketDesc").value != "" ){
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
   
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          console.log("test");
        }
        form.classList.add('was-validated')
      }, false)
    })
})()