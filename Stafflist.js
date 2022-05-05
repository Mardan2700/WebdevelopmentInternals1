const addButton = document.getElementById("addButton");
const tabelle = document.getElementById("Tabelle");
const formular = document.getElementById("Formular");

formular.classList.add("hidden");
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    formular.classList.remove("hidden");
} )