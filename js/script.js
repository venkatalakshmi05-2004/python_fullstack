alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("Welcome")
heading.innerHTML = "Welcome Future software Engineers"
console.log("Heading elements: ",heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element:", msg)
function showmessage(){
    alert("Welcome to NRIIT Learning Management System")}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function() {
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",
function (Event) {
    Event.preventDefault();//prevent form submission
    let name = document.getElementById("name").Value;
    let email = document.getElementById("email").Value;
    let password = document.getElementById("password").value;
    if(!name || !email|| !password){
        alert("please fill in all fields.");
        return;
    }
    alert("Registration successful!");
    //perform validation or further processing here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("password:",password);
});