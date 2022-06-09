const addButton = document.getElementById("addButton");
const tabelle = document.getElementById("Tabelle");
const formular = document.getElementById("Formular");

const departmentDropDown = document.getElementById("sortDepartment");
const semesterDropDown = document.getElementById("Semester");

formular.classList.add("hidden");
addButton.addEventListener("click", (e) => {
   e.preventDefault();
   formular.classList.remove("hidden");
} )

let studentList = [];

let reinhardt = {"id": 22, "firstName": "Reinhardt", "lastName": "Alman", "dob": formatDate("1999-12-11"), "joiningDate": formatDate("2015-06-10") , "gender": "Male", "department": "Fachbereich 2", "email": "Reinal@gmail.com"};
let Hans = {"id": 42, "firstName": "Hans", "lastName": "Müller", "dob": formatDate("2000-06-03"), "joiningDate": formatDate("2015-11-11") , "gender": "Male", "department": "Fachbereich 1", "email": "Hansmüller@gmail.com"};
let Shaytan = {"id": 666, "firstName": "Shaytan", "lastName": "Tidian", "dob": formatDate("1996-06-06"), "joiningDate": formatDate("2015-01-02") , "gender": "Other", "department": "Fachbereich 4", "email": "Ilovewebdevelopment@gmail.com"};
let Mardan = {"id": 27, "firstName": "Mardan", "lastName": "Ali", "dob": formatDate("2000-03-07"), "joiningDate": formatDate("2015-03-03") , "gender": "Male", "department": "Fachbereich 3", "email": "madamardan@gmx.de"};
let Dilara = {"id": 31, "firstName": "Dilara", "lastName": "Anne", "dob": formatDate("1997-09-06"),"joiningDate": formatDate("2015-09-06") , "gender": "Female", "department": "Fachbereich 5", "email": "Dilara69@hotmail.de"};

studentList.push(reinhardt)
studentList.push(Hans)
studentList.push(Shaytan)
studentList.push(Mardan)
studentList.push(Dilara)



function setUpTable (body, student) {
   let row = body.insertRow();
   let idCell = row.insertCell();
   let firstNameCell = row.insertCell();
   let lastNameCell = row.insertCell();
   let DOBCell = row.insertCell();
   let joiningDate = row.insertCell();
   let genderCell = row.insertCell();
   let departmentCell = row.insertCell();
   let emailCell = row.insertCell();

   idCell.innerHTML = student.id;
   firstNameCell.innerHTML = student.firstName;
   lastNameCell.innerHTML = student.lastName;
   DOBCell.innerHTML = student.dob.toISOString().split("T")[0];
   joiningDate.innerHTML = student.joiningDate.toISOString().split("T")[0];
   genderCell.innerHTML = student.gender;
   departmentCell.innerHTML = student.department;
   emailCell.innerHTML = student.email;
}

function formatDate(dateString){
   let date = dateString.split("-")
   return new Date(date[0], date[1] - 1, date[2])
}

function fillUpTable(list){
   let tableBody = document.createElement("tbody");
   for(let i  = 0; i < list.length; i++){
      setUpTable(tableBody, list[i])
   }
   let oldTbody = tabelle.getElementsByTagName("tbody")[0]
   oldTbody.parentNode.replaceChild(tableBody, oldTbody)
}

function filterByDepartment(departmentToFilter){
  let list = studentList.filter(x => x.department === departmentToFilter);
  fillUpTable(list)
}

departmentDropDown.addEventListener("change", (e) =>{
   filterByDepartment(departmentDropDown.options[departmentDropDown.selectedIndex].value)
})

fillUpTable(studentList)

function filterByJoiningDate(JoiningdateFilter) {
   let list = [];
   if (JoiningdateFilter === "Summer") {
      list = studentList.filter(x => x.joiningDate.getMonth() >= 3 && x.joiningDate.getMonth() <= 8 );
   } else if (JoiningdateFilter === "Winter") {
      list = studentList.filter(x => x.joiningDate.getMonth() > 8 || x.joiningDate.getMonth() < 3);
   }
   fillUpTable(list)
}

semesterDropDown.addEventListener("change", (e) => {
  filterByJoiningDate(semesterDropDown.options[semesterDropDown.selectedIndex].value)
})
