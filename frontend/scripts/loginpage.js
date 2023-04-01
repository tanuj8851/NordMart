let continueBtn = document.querySelector("#continuebtn");
let MobileNumberForm = document.querySelector("#form-container")
let MobileNumber  =  document.querySelector("#NumberInput")
let userMobileData = JSON.parse(localStorage.getItem("Number"))||[];
let CreatedAccountData = JSON.parse(localStorage.getItem("Account"))||[];
let passwordform = document.querySelector("#form-container2");
let createAccountBtn = document.querySelector("#CreateAccount")
let CreatepasswordInput = document.querySelector("#passwordinput")
let fullname = document.querySelector("#fullName");
let email = document.querySelector("#email");
let Aternate_number = document.querySelector("#AlernateNumber");
let RegisteredNumber = document.querySelector("#registeredNum");
let ProfileText = document.querySelector("#UserName");
let SignUpBtn = document.querySelector(".signupBtn");
let SignUpFormBtn = document.querySelector(".signupFormBtn");
let SignupFormContainer = document.querySelector("#signupContainer")
let SignupformNumberInput = document.querySelector("#registeredMobileNumber");




continueBtn.addEventListener("click",()=>{
    let userMobInfo = {
        Mobile: MobileNumber.value
    }

    let NumberRegistered = false;
    for(let i=0;i<userMobileData.length;i++){
        if(userMobileData[i].Mobile == MobileNumber.value){
            NumberRegistered=true;
            alert("User is Already Registered With this Mobile Number")
            break;

        }
    }
    if(NumberRegistered==false){
        userMobileData.push(userMobInfo);
        localStorage.setItem("Number",JSON.stringify(userMobileData));
        MobileNumberForm.style.display="none";
        passwordform.style.display="block";
    }
    let UserMobile = (userMobileData[userMobileData.length-1].Mobile);
    RegisteredNumber.textContent=UserMobile;
})


createAccountBtn.addEventListener("click", function(){
    let userpassInfo = {
        Password: CreatepasswordInput.value,
        FullName: fullname.value,
        Email: email.value,
        AlternateNumber:Aternate_number.value
    }
    CreatedAccountData.push(userpassInfo)
    localStorage.setItem("Account",JSON.stringify(CreatedAccountData));

    window.location = "./index.html";
   
})

let userName = (CreatedAccountData[CreatedAccountData.length-1].FullName);
document.querySelector("#UserName").textContent=userName;

SignUpBtn.addEventListener("click",()=>{
    MobileNumberForm.style.display="none";
    SignupFormContainer.style.display="block";
   
})

SignUpFormBtn.addEventListener("click",()=>{
    let userPresent = false
    for(let i=0;i<userMobileData.length;i++){
        
        if(userMobileData[i].Mobile===SignupformNumberInput.value){
            userPresent=true;
        }
    }
    if(userPresent){
        alert("Signup Successfully!");
        window.location="./index.html";
    }
    else{
        alert("User does not exist!!");

    }
})
