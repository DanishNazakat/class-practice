// Function to set cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookie by name
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i=0; i<ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    if(username) {
        setCookie("username", username, 1); // cookie 1 din ke liye
        showWelcome();
    } else {
        alert("Please enter username");
    }
}

// Logout function
function logout() {
    setCookie("username", "", -1); // delete cookie
    document.getElementById("loginDiv").style.display = "block";
    document.getElementById("welcomeDiv").style.display = "none";
}

// Show welcome message if cookie exists
function showWelcome() {
    const user = getCookie("username");
    if(user) {
        document.getElementById("welcomeMsg").innerText = "Welcome " + user + "!";
        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("welcomeDiv").style.display = "block";
    }
}

// Run on page load
window.onload = function() {
    showWelcome();
}
 