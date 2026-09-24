checkPassword = () => {
    let Password;
    do {
        Password = prompt("Enter the password : ");
    } while (Password !== "1234");
        
    console.log("Correct Password");
        
}
checkPassword();