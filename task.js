const formContainer = document.querySelector('#signin__form');
const url = "https://students.netoservices.ru/nestjs-backend/auth";
let xhr = new XMLHttpRequest();
const userName = document.getElementById("user_id");
const welcome = document.querySelector(".welcome");
const signin = document.getElementById("signin");


if (localStorage.getItem("user_id")) {
    signin.classList.remove('signin_active');
    userName.innerText = localStorage.getItem("user_id");
    welcome.classList.add('welcome_active');

}


formContainer.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(formContainer);
    xhr.open('POST', url, true);

    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 201) {
            const serverResponse = JSON.parse(xhr.responseText);
            const userId = serverResponse["user_id"];
            if (!serverResponse["success"]){
                alert("Ошибка логин пароль");
                setTimeout(() => {
                    window.location.reload(); },
                    1000);
                return;
            }
            localStorage.setItem("user_id", userId);
            location.reload();
        }
    })
})

