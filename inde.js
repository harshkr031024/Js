let temp = (temparature) => {
    if (temparature < 20 ) {
        console.log("Cold");
    } else if( 20 > temparature < 30 ) {
        console.log("Normal");

    } else if(temparature > 30) {
        console.log("Hot");
    }
}
temp(15);
temp(25);
temp(35);
