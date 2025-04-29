function sub(){
    let formData = document.getElementById("myform");
    console.log(formData)
    const fullname = formData.fullname.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const err = {};
    console.log(fullname , email , password);
    
    
    if (!fullname){
         msg = document.getElementById("fullnameMsg")
         msg.innerHTML = "<span class='err'> Please enter your fullname</span>";
    }
    if (!email){
        msg = document.getElementById("emailMsg");
        msg.innerHTML = "<span class='err'> Please enter your email</span>";
    }
    if(!password){
        msg = document.getElementById("passwordMsg");
        msg.innerHTML = "<span class='err'> Please enter your password</span>";
    }
    if(fullname && email && password){
        msg = document.getElementById("submitMsg");
        msg.innerHTML = "<span class='err'> Form Submitted</span>";
        
    }
}
function passwordchecking(){
    console.log("test")
    const password = document.getElementById("password");
    console.log(password);
    if(Password > 4){
        msg.innerHTML = "<span>'Password is weak'</span>";
    }
}