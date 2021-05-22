function registration() {
    let name, phone, age, country, email, password;

    name = document.getElementById('username').value;
    phone = document.getElementById('phonenumber').value;
    age = document.getElementById('age').value;
    country = document.getElementById('country').value;
    email = document.getElementById('mail').value;
    password = document.getElementById('userpass').value;

phone = parseInt(phone);
// age = parseInt(age);

if (name == '') {
    alert("Empty name. Please tell your name");
}
else if (phone < 10) {
    alert("Uncorrect phone. Please tell your phone number");
}
else if (age < 18) {
    alert("You are too young. Come back later");
}
else if (email == '') {
    alert("Where is your mail? Please tell your mail");
}
else if (password == '') {
    alert("No password. Please create password");
}
else {
    alert(`Hello, ${name}!`);
}

}