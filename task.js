const formContainer = document.querySelector('#signin__form');
const url = "https://students.netoservices.ru/nestjs-backend/auth";

const userName = document.getElementById("user_id");
const welcome = document.querySelector(".welcome");
const signin = document.getElementById("signin");


formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();

    let formData = new FormData(formContainer);
    xhr.open('POST', url, true);
    xhr.responseType = 'json'
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        // const serverResponse = xhr;
        const userId = xhr.response["user_id"];
        if (!xhr.response["success"]){
            alert("Ошибка логин пароль");
            formContainer.reset();
            return;
        }
        localStorage.setItem("user_id", userId);
        signin.classList.remove('signin_active');
        userName.innerText = localStorage.getItem("user_id");
        welcome.classList.add('welcome_active');
        formContainer.reset();


    })
})



