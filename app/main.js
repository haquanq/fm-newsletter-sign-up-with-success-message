const emailInput = document.querySelector("#email-input");
const form = document.querySelector(".subscription__form");

const subscriptionCard = document.querySelector(".subscription");
const messageCard = document.querySelector(".appreciation");
const btnDismiss = document.querySelector(".appreciation__dismiss");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    subscriptionCard.classList.add("hide");
    messageCard.classList.add("show");
    emailInput.value = "";
});

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    emailInput.blur();
    form.classList.add("error");
});

emailInput.addEventListener("focus", (e) => {
    form.classList.remove("error");
});

btnDismiss.addEventListener("click", () => {
    subscriptionCard.classList.remove("hide");
    messageCard.classList.remove("show");
});
