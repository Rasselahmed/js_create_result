function sayed() {
    var username, gender;
    var username = document.getElementById("userName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    document.getElementById("result").innerHTML = gender + username;

}
