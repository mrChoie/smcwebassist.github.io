var showPassIndicator=false;

function showPassIcon(){
  let divBox = document.getElementById("showPassIconDiv");
  let userPass = document.getElementById("userPass");
  if (userPass.value!=""){
    divBox.style.display = "flex";
  } else {
    divBox.style.display = "none";
    let eyeIcon = document.getElementById("showPassIcon");
  }
}

function showHidePass(){
  let eyeIcon = document.getElementById("showPassIcon");
  let opacityIcon = document.getElementById("showPassIconDiv");
  if (showPassIndicator==true){
    showPassText();
    showPassIndicator=false;
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
    opacityIcon.style.opacity = "0.3";
    // console.log("pass hide");
  } else {
    showPassText();
    showPassIndicator=true;
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
    opacityIcon.style.opacity = "0.6";
    // console.log("pass show");
  }
}

function showPassText() {
  var x = document.getElementById("userPass");
  if (x.type === "password") {
    x.type = "text";
    showPassIndicator=true;
  } else {
    x.type = "password";
    showPassIndicator=false;
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
        }
        form.classList.add('was-validated')
      }, false)
    })
})()