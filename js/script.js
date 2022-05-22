const user = document.querySelector("#user");
const date = "01-23-2022";
const btn = document.querySelector("#btn");
const form = document.querySelector("#form-verify");
const error = document.querySelector("#error");



setInterval(() => {
    document.querySelector(".date").innerHTML = new Date();
}, 1000);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value.length === 0) {
        error.innerHTML = "<div class='msg'>Please do not empty the input field</div>";

        setTimeout(() => document.querySelector('.msg').remove(), 3000);
    } else if (user.value !== date) {
        error.innerHTML = `<div class='msg'>Sorry your input ${user.value} is wrong date</div>`;
        user.value = "";

        setTimeout(() => document.querySelector('.msg').remove(), 3000);
    } else {
        user.value = "";
        form.submit();
    }
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.onkeydown = (e) => {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "U".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;  
    }
}