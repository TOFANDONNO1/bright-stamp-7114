
let form=document.getElementById("form");

let arrlogin=JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(e){
    e.preventDefault();
 for(let i=0;i<arrlogin.length;i++){
    if(arrlogin[i].email==document.getElementById("email").value)  {
        alert("login successful")
        window.location.href="index.html"
        break;
      
    }else if(document.getElementById("email").value==""){
        alert("fill email")
        break;
    }
    else{
        alert("Don't have an account login failed signup first");
      break;
    }
 }
});

let 

