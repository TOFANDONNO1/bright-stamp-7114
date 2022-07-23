let form=document.getElementById("signupform");
let arrsignup=JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(document.getElementById("number").value==""||document.getElementById("email").value==""||
    document.getElementById("password").value==""){
        alert("Please enter a everything");
    }else{
    let obj={
        number:document.getElementById("number").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
   console.log(obj)
   arrsignup.push(obj);
localStorage.setItem("signup",JSON.stringify(arrsignup)); 
    }
});