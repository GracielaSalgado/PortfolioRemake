const roles = ["UI / UX Designer", "Graphic Designer", "Photographer", "Student"];
const word = document.getElementById("role-word");
let index = 0;

function nextRole() {
    word.classList.add("exit");
    
    setTimeout(() => {
        index = (index + 1) % roles.length;
        word.textContent = roles[index];

        word.classList.remove("exit");
        word.classList.add("enter-start");

        void word.offsetWidth;

        word.classList.remove("enter-start");
    }, 500);
}

setInterval(nextRole, 2500);