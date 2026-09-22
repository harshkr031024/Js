menuChoice = (choice) => {
    switch (choice) {

        case 1:
            console.log("Start Game");
            break
        case 2:
            console.log("Load Game");
            break

        case 3:
            console.log("Settings");
            break
        case 4:
            console.log("Exit")
            break

        default:
            console.log("Invalid Choice")
            break
    }
}
menuChoice(3)