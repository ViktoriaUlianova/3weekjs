function registration() {

    let name = document.getElementById('username').value;
    let phone = document.getElementById('phonenumber').value;
    let age = document.getElementById('age').value;
    let country = document.getElementById('country').value;
    let email = document.getElementById('mail').value;
    let password = document.getElementById('userpass').value;

    phone = parseInt(phone);

    if (name == '') {
        alert("Empty name. Please tell your name");
    } else if (phone.length < 10) {
        alert("Uncorrect phone. Please tell your phone number");
    } else if (age == '') {
        alert("Empty place. How old are you?");
    } else if (age < 18) {
        alert("You are too young. Come back later");
    } else if (email == '') {
        alert("Where is your mail? Please tell your mail");
    } else if (password == '') {
        alert("No password. Please create password");
    } else {
        alert(`Hello, ${name}!`);
    }

}