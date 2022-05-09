let userRaceNumber = Math.floor(Math.random() * 1000)
let userRegisterEarly = false;
let userAge = 18;

if (userAge > 18 && userRegisterEarly === true) {
    userRaceNumber += 1000;
}

if (userRegisterEarly === true && userAge > 18) {
    console.log(`Runner ${userRaceNumber}, your race time is 9:30AM.  You are registered in the Adult Race`)
} else if (userRegisterEarly === false && userAge > 18) {
    console.log(`Runner ${userRaceNumber}, your race time is 11:00AM.  You are registered in the Adult Race`)
} else if (userAge < 18) {
    console.log(`Runner ${userRaceNumber}, your race time is 12:30PM.  You are registered in the All Youth Race.`)
}