const clickMe = (username,password,gender) => {
    let tempOject = {
        username : "",
        password : "",
        gender : ""
    }
    tempOject.username = document.getElementById("username");
    tempOject.password = document.getElementById("passowrd");
    tempOject.gender = document.getElementById("gender");
    alert(tempOject);
}
