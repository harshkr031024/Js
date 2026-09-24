findNumber = (numbers,target) => {
    for (const i of numbers) {
        if (i < 0) {
            continue
        }
        else if (i == target){
            console.log("Found")
            break
        }
        else {
            console.log("Not  Found")
        }
    }
}
findNumber([-5,10,-2,7,20],7)