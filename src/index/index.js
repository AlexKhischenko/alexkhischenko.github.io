import './index.scss';

const name = prompt("Enter loggin");
const secretName = 'admin';
const pass = 123;



if (name === secretName) {
    const password = prompt('Enter password');
    if (password == pass) {
        console.log("Hello, admin");
    } else {
        console.log("Password is wrong");
    }

} else {
    console.log("Loggin is wrong");
}