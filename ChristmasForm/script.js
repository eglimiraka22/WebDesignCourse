function validateformOnsubmit(forma){
    reason="";
    reason+=validateEmer(forma.username);
    reason+=validateEmail(forma.email);
    reason+=validateMosha(forma.mosha);
    if(reason.length >0){
        return true;
    }
    else{
        return false;
    }



}

function validateEmer(username) {
    var error ="";
   if (username.value.length == 0) {
        username.style.background = 'Red';
        document.getElementById( 'name-error').innerHTML =
"The required field has not been filled in";
        var error = "1";
     } else {
        username.style.background = 'White';
        document.getElementById( 'name-error'). innerHTML ='';}
    return error;
}


function validateEmail(email) {
   var  error = "" ;
   var temail = trim(email.value);
    
   
     var emailFilter  = /^[^@]+@[^@. ]+\.[^@]*\w\w$/;

     var illegalChars = /[\(\)\<\>\, \;\:\\\"\[\]]/;
             
                
    
    if( email.value== ""){
    email.style.background='Red';
    document.getElementById('email-error').innerHTML="Please enter an email address.";
   var error="2";
    }
    else if(!emailFilter.test(temail)){
        email.style.background='Red';
        document.getElementById('email-error').innerHTML="Please enter a valid email addres";
        var error="3";

    }
    else if(email.value.match(illegalChars)){
        email.style.background='Red';
        var error="4";
        document.getElementById('email-error').innerHTML="Email contains invalid characters";     

    }
    else{
        email.style.background='White';
        document.getElementById('email-error').innerHTML='';
    }
    return error
}

function validateMosha(mosha) {
    var error ="";
   if (mosha.value.length == 0) {
        mosha.style.background = 'Red';
        document.getElementById( 'mosha-error').innerHTML =
"The required field has not been filled in";
        var error = "5";
     } else {
        mosha.style.background = 'White';
        document.getElementById( 'mosha-error'). innerHTML ='';}
    return error;
}
    