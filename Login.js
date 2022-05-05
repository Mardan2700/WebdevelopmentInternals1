const loginbutton = document.getElementById("Adminlogin");
const loginform = document.getElementById("Adminusername");
const loginformp = document.getElementById("Adminpassword");
const staffloginbutton = document.getElementById("Stafflogin");
const staffloginform = document.getElementById("Staffusername");
const staffloginformp = document.getElementById("Staffpasword");
let loginfailcounterstaff = 0;
let loginfailcounter = 0;

loginbutton.addEventListener("click" , (e) => {
    e.preventDefault();
    const username = loginform.value;
    const password = loginformp.value;

    if (loginfailcounter <= 2) {
        if (username === "Admin" && password === "Admin") {

            window.location = "Adminlogin.html";
        } else {
            loginfailcounter++;
            alert("Login Credentials Incorrect.");

        }
    } else {
        loginbutton.disabled = true;
        loginformp.disabled = true;
        loginform.disabled= true;

    }

} )

staffloginbutton.addEventListener("click" , (e) => {
    e.preventDefault();
    const username = staffloginform.value;
    const password = staffloginformp.value;

    if (loginfailcounterstaff <= 2) {
        if (username === "Staff" && password === "Staff") {

            window.location = "Stafflogin.html";
        } else {
            loginfailcounterstaff++;
            alert("Login Credentials Incorrect.");

        }
    } else {
        staffloginbutton.disabled = true;
        staffloginformp.disabled = true;
        staffloginform.disabled= true;

    }

} )