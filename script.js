function validateform()
{
    var n=document.getElementById("name");
    var pwd=document.myform.pwd.value;
    var pno=document.getElementById("phno");

    if(n.value==""){
        alert("Name can't be blank..");
        return false;
    }
    else if(pwd.length<6){
        alert("Password must contain atleast 6 characters..");
        return false;
    }
    if(pno.value.length<10 || pno.value.length>10)
    {
        alert("Invalid Phone Number");
        return false;
    }
    document.getElementById("myform").reset();

}
