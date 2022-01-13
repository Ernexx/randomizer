function randomNumber(min, max){ //returns random number
    return(Math.round(Math.random() * (max - min) + min));
}

function randomBool(){ //retunrs true or false
    let randomValue = Math.round(Math.random());
    if (randomValue == 1) return(true);
    if (randomValue == 0) return(false);
}