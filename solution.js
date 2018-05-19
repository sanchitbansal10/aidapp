var hero ={
    healthInitial:2000,
    injuryInitial:1,
    injuryMaximum:1000000,
    healthCurrent:2000,
    injuryCurrent:1
}


function healthDecrease(monkeyDam){  //monkeyDam is the damage done by a particular monkey
    hero.healthCurrent=hero.healthCurrent+monkeyDam
}

function injuryDecrease(monkeyDam){
    hero.injuryCurrent=hero.injuryCurrent*monkeyDam
}


//input is the complete array of mokeys
//startingPoint is the index at which hero start to attack
function monkeyKilledInOneCase(input,startingPosition){
    var monkeyKilled=0;
    var currenPosition = startingPosition
    while(hero.healthCurrent>0&&hero.injuryCurrent<1000000){
        monkeyKilled=monkeyKilled+1;
        currenPosition=currenPosition+1;
        injuryDecrease(input[currenPosition]);
        healthDecrease(input[currenPosition])
    }
    return monkeyKilled
}


function finalDestination(input){
    let monkeyKilledArray=[]
    for(var i=1;i<input.length;i++){
        var noOfMonkeysKilledForI = monkeyKilledInOneCase(input,i)
        monkeyKilledArray.push(noOfMonkeysKilledForI)
    }
    return //the index having maximum value in monkeyKilledArray
}

//i ran out of time had some wifi issue 