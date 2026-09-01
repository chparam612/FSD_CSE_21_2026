const userName = prompt("Enter your username");
const password = prompt("Enter your password");
let isValid=" ";

function check(userName,password){
if(userName === "chparam612" && password === "076076"){
    console.log("Verified user");
    isValid ="true";
}
else {
    alert("Invalid USer try again");
    isValid ="false";
}
}

function validate(check,isValid,msg){

   if(isValid==="true"){
     const result = check(userName,password);
    const fresult = "Hi "+msg+" You are logged in to our system. ";
    console.log(fresult);
   }
   else{
    console.log("You have no authorisation to login in to our system.");
   }
}

validate(check,"Mr. Paramveer");