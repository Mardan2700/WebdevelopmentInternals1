const studentlistbuttong = document.getElementById("studentListButton");
const staffListButtong = document.getElementById("staffListButton");

studentlistbuttong.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "Studentlist.html";
} )

staffListButtong.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "Stafflist.html";
} )