function randomNumber(min, max){ //returns random number
    return(Math.round(Math.random() * (max - min) + min));
}

function randomBool(){ //retunrs true or false
    let randomValue = randomNumber(0, 1);
    if (randomValue == 1) return(true);
    return(false);
}
