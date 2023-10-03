function dis(){
    var fname = document.getElementById("firstname").value;
    if(fname==""){
        document.getElementById("para").innerHTML="Enter first name";
        document.getElementById("para").style.color="red";
        return false;
    }
    else{
        document.getElementById("para").style.display="none";
        return true;
        
    }
}
function dis1(){
    var mname = document.getElementById("middlename").value;
    if(mname==""){
        document.getElementById("para1").innerHTML="Enter Middle Name";
        document.getElementById("para1").style.color="red";
        return false;
    }
    else{
        document.getElementById("para1").style.display="none";
        return true;
        
    }
}
function dis2(){
    var lname = document.getElementById("lastname").value;
    if(lname==""){
        document.getElementById("para2").innerHTML="Enter Last name";
        document.getElementById("para2").style.color="red";
        return false;
    }
    else{
        document.getElementById("para2").style.display="none";
        return true;
        
    }
}
function dis3(){
    var mail = document.getElementById("email").value;
    if(mail==""){
        document.getElementById("para3").innerHTML="Enter Email Address";
        document.getElementById("para3").style.color="red";
        return false;
    }
    else{
        document.getElementById("para3").style.display="none";
        return true;
        
    }
}
function dis4(){
    var num = document.getElementById("number").value;
    if(num==""){
        document.getElementById("para4").innerHTML="Enter mobile Number";
        document.getElementById("para4").style.color="red";
        return false;
    }
    else{
        document.getElementById("para4").style.display="none";
        return true;
        
    }
}
function dis5(){
    var pass = document.getElementById("password").value;
    if(pass==""){
        document.getElementById("para5").innerHTML="Enter Password";
        document.getElementById("para5").style.color="red";
        return false;
    }
    else{
        document.getElementById("para5").style.display="none";
        return true;
        
    }
}
function dis6(){
    var pass = document.getElementById("username").value;
    if(pass==""){
        document.getElementById("para6").innerHTML="Enter User Name";
        document.getElementById("para6").style.color="red";
        return false;
    }
    else{
        document.getElementById("para6").style.display="none";
        return true;
        
    }
}


function sub() {
    var fname= document.getElementById("firstname").value;
    var mname = document.getElementById("middlename").value;
    var lname = document.getElementById("lastname").value;
    var mail  = document.getElementById("email").value;
    var num   = document.getElementById("number").value;
    var pass  = document.getElementById("password").value;
    var uname  = document.getElementById("username").value; 
   
    if(fname==""|| mname=="" || lname=="" || mail=="" || num=="" || pass=="" ){
        document.getElementById("error").innerHTML="Must Fill All * Fields";
        document.getElementById("para6").innerHTML="Enter User Name";
        document.getElementById("para5").innerHTML="Enter Password";
        document.getElementById("para4").innerHTML="Enter Mobile Number";
        document.getElementById("para3").innerHTML="Enter Email Address";
        document.getElementById("para2").innerHTML="Enter Last Name";
        document.getElementById("para1").innerHTML="Enter Middle Name";
        document.getElementById("para").innerHTML="Enter First Name";
        document.getElementById("error").style.color="red"; 
        document.getElementById("para").style.color="red"; 
        document.getElementById("para1").style.color="red"; 
        document.getElementById("para2").style.color="red"; 
        document.getElementById("para3").style.color="red"; 
        document.getElementById("para4").style.color="red"; 
        document.getElementById("para5").style.color="red";
        document.getElementById("para6").style.color="red";    
        return false;
    }
    else{
        document.getElementById("error").style.display="none";
        document.getElementById("para").style.display="none";
        document.getElementById("para1").style.display="none";
        document.getElementById("para2").style.display="none";
        document.getElementById("para3").style.display="none";
        document.getElementById("para4").style.display="none";
        document.getElementById("para5").style.display="none";
        document.getElementById("para6").style.display="none";
        return true;    
    }
}