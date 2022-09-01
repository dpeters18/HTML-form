function stringConverter(){
    const strung=document.getElementById("psswrd").value;
    const exp=/[0-9][a-z]|[a-z][0-9]/;
    const match =strung.search(exp);
    if(strung.length<6||match<0) {
        alert("Password must have a length of at least 6 characters and have at least one number.");
    } 
    else{
        alert("The password "+strung+" contains at least 6 characters and at least one number and is therefore valid.");
    }
}