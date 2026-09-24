checkEntry = (Age,hasID) => {
    if (Age >=18 && hasID == true) {
        console.log("Allowed");
    }
    else if (Age >= 18 && hasID == false) {
        console.log("Id Required");

    }
    else {
        console.log("Too Young");
    }
}
checkEntry(19,false)