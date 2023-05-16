function validate()
{
    var name = document.forms["userinfo"]["nme"].value;
    var eml = document.forms["userinfo"]["email"].value;
    var phn = document.forms["userinfo"]["phone"].value;
    var user = document.forms["userinfo"]["username"].value;
    var pass = document.forms["userinfo"]["password"].value;
    var cpass = document.forms["userinfo"]["confirm"].value;

        if(name ==""){
        alert("Name Required !!");
        return false;
        }
        else if(eml ==""){
        alert("E-mail Required !!");
        return false;
        }
       else if(phn ==""){
        alert("Phone Number Required !!");
        return false;
        }
       else  if(user ==""){
        alert("User Name Required !!");
        return false;
        }
        else if(pass =="")
        {
        alert("Password Required !!");
        return false;
        }
    
        else if(cpass==""){
        alert("Confirm Password Required !!");
        return false;
        }
        else if (cpass!=pass)
        {
                alert("Write Correct Confirm Password  !!");
                return false;

        }
        

}