let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
  engine(number, 3, "Number cannot be blank");
  engine(dob, 4, "DOB cannot be blank");
});

let engine = (id, serial, message) => {
  let (id.value.trim() === "") 
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
} 


function checkDob(){
     curDate = new Date();
    let newDob= new Date(document.regisform.userdob.value);
        if(newDob > curDate)
        {alert('You do not exist yet!'); return false;}
};