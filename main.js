//register popup
var modal_register = document.getElementById('register');
//register button
var btn_register = document.getElementById('btn_register');
//register popup
var modal_login = document.getElementById('login');
//register button
var btn_login = document.getElementById('btn_login');
//register 
var id = null;
var fname = null;
var lname = null;
var pw = null;
var cpw = null;
var email = null;
//add
var description = null; 
var amount = null;
//go main
window.onclick = function (event) {
    if (event.target == modal_register || event.target == modal_login) {
        modal_register.style.display = "none";
        btn_register.style.display = 'block';
        modal_login.style.display = "none";
        btn_login.style.display = 'block';
    }
};
//register popup display
function registerModal() {
    modal_register.style.display = 'block';
    btn_register.style.display = 'none';
}
//login popup display
function loginModal() {
    modal_login.style.display = 'block';
    btn_login.style.display = 'none';
}

function registerSubmit() {
    id = document.getElementById("register_username").value;
    fname = document.getElementById("register_firstname").value;
    lname = document.getElementById("register_lastname").value;
    pw = document.getElementById("register_password").value;
    cpw = document.getElementById("register_confirmpassword").value;
    email = document.getElementById("register_email").value;
    var fwords = fname.toString().split('');
    var lwords = lname.toString().split('');
    var a = 0;
    if (a == 0) {
        fwords[fwords.length + 1] = ' ';
        for (var i = 1; i < fwords.length + 1; i++) {
            if (!/^[a-z\s]/.test(fwords[i + 1])) {
                alert("first name and last name must be start with a capital characters whilst the rest must be lower case.");
                a = 1;
                continue;
            }
        }
        lwords[lwords.length + 1] = ' ';
        for (var i = 1; i < lwords.length + 1; i++) {
            if (!/^[a-z\s]/.test(lwords[i + 1])) {
                alert("first name and last name must be start with a capital characters whilst the rest must be lower case.");
                a = 1;
                continue;
            }
        }
    } 
    if (id == "" || pw == "") {
        alert("Please complete write your information.");
    } else if (id.length < 5) {
        alert("Username field must be at least 5 characters long.");
    }else if (!/^[a-zA-Z0-9_-\s]{5,}$/.test(id)) {
        alert("Username must be made 'A-z', '0-9', '_', '-', and space.")
    } else if (!/^[a-zA-Z0-9\s]{0,}$/.test(fname) || !/^[a-zA-Z0-9\s]{0,}$/.test(lname)) {
         alert("first name and last name must be made 'A-z', '0-9', and space.")
    } else if (!/^[A-Z]/.test(fwords[0])) {
        alert("first name and last name must be start with a capital characters whilst the rest must be lower case.");
    } else if (!/^[A-Z]/.test(lwords[0])) {
        alert("first name and last name must be start with a capital characters whilst the rest must be lower case.");
    } else if (pw != cpw) {
        alert("your password and confirm password are not matching!");
    } else if (pw.length < 4) {
        alert("Password field must be at least 4 characters long .");
    } else if(a != 1){
        alert("Thanks to join us!");
        modal_register.style.display = 'none';
        modal_login.style.display = 'block';
    }
    
    return false;
}
function loginSubmit() {
    var loginId = document.getElementById("username").value;
    var loginPw = document.getElementById("password").value;
    if (loginId == id && loginPw == pw) {
        alert(loginId + ", you are login now!");
        window.location = "dashboard.html";
    }else if (loginId.length < 5) {
        alert("Username field must be at least 5 characters long.");
    }else if (loginPw.length < 4) {
        alert("Password field must be at least 4 characters long .");
    }else if (loginId == id && loginPw != pw) {
        alert("wrong password. Try again!");
    }else {
        alert("No exist username. Please join us!");
    }
    return false;
}
//add transaction
function addSubmit() {
    description = document.getElementById("description").value;
    amount = document.getElementById("amount").value;
    var addPopup = document.getElementById('add');
    if (description.length < 10) {
        alert("Description field must be at least 10 characters long.");
    } else if (!/^[a-zA-Z0-9_-\s]{10,}$/.test(description)) {
        alert("Description field must be made 'A-z', '0-9', '_', '-', and space.")
    } else if (isNaN(amount)) {
        alert("Amount field must be numbers.");
    } else if (amount >= 10000 || amount <= -10000){
        alert("Amount has to be -10000.00 <= Amount <= 10000.00");    
    } else {
        amount = Math.round(amount * 100) / 100;
        alert("Add Success!");
        addPopup.style.display = "none";
    }
    return false;
}
function addModal() {
    var addPopup = document.getElementById('add');
    add.style.display = 'block';
    window.onclick = function (event) {
        if (event.target == addPopup) {
            addPopup.style.display = "none";
        }
    };
}
