findNumber = (numbers,target) => {
    for (const i of numbers) {
        if (i == target){
            console.log("Found")
            break
        }
        else if (i < 0) {
            continue
        }
        else {
            console.log("Not  Found")
            break
        }
    }
}
findNumber([1,4,7,9],5)