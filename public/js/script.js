const responseDivSuccess = document.getElementById("responseSuccess")
const responseDivInvalidPass = document.getElementById("responseDivInvalidPass")
const responseDivUserNotExist = document.getElementById("responseUserNotExist")
const usernameInput = document.getElementById("userName")
const passwordInput = document.getElementById("userPass")
const signBtn = document.getElementById("signBtn")
// import responseDiv from "document.getElementById("response")"
// import signBtn from "document.getElementById("signBtn")"
// import ejs from 'ejs'
// import document from '../../views/home.ejs'

// window.onload; {
//   let element = document.getElementById("modalContainer");
//   element.style.display = "none";
//   let logoutBtn = document.getElementById("logoutBtn");
//   logoutBtn.style.display= "none";
// }

signBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission if needed
    const userName = usernameInput.value;
    const userPass = passwordInput.value;
    login(userName, userPass);
});

passwordInput.addEventListener("keydown", function (event) {
    responseDivInvalidPass.textContent = "";
})
usernameInput.addEventListener("keydown", function (event) {
    responseDivUserNotExist.textContent = "";
    responseDivInvalidPass.textContent = "";
})

function login(userName, userPass) {
    fetch ("http://127.0.0.1:8080/smc-webassist/login", {
        method: "POST",
        credentials: "include",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, userPass })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data);
        if (data.statusCode == '11') {
            responseDivSuccess.textContent = data.message; // Display the result
        } else if (data.statusCode == '01') {
            responseDivUserNotExist.textContent = data.message; // Display the result
        } else {
            responseDivInvalidPass.textContent = data.message; // Display the result
        }
    })
    .catch(err => {
        console.log("Fetched JSON:", data);
        responseDiv.textContent = "Error fetching user.";
    });
    // .then(res => console.log(res))
    // .then(data => (responseDiv.textContent = data))  
}

function openLogin() {
    //document.getElementById("navBar").style.backgroundColor = "red";

    let element = document.getElementById("modalContainer");
    element.style.display = "flex";
    //let accOptTab = document.getElementById("accOpt");
    //accOptTab.hide.bs.collapse;
    // let accNavBarElement = document.getElementById("accNavBarBtn");
    // accNavBarElement.hasAttribute("disabled");
    
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

function toggleInvalidNotice(page){

    let ticket = document.getElementById("ticketInvalidNotice");
    let feedback = document.getElementById("feedbackInvalidNotice");

    if (page == 'ticket') {
        if (document.getElementById("ticketStudName").value != "" &&
        document.getElementById("ticketIdNum").value != "" &&
        document.getElementById("ticketSubj").value != "" &&
        document.getElementById("ticketDesc").value != "" ){
        ticket.style.display = "none"; 
        } else {
        ticket.style.display = "flex";
        }
    } else {
        if (document.getElementById("feedbackSubj").value != "" &&
        document.getElementById("feedbackDesc").value != "" ){
        feedback.style.display = "none";
        } else {
        feedback.style.display = "flex";
        }
    }

}
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')
//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)

//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//         form.classList.add('was-validated')
//       }, false)
//     })
// })()