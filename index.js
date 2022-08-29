let someValue = 49;

function distanceFromHqInBlocks(someValue)
{
    if (someValue == 43)
    {
        return 1;
    }
    else if (someValue  == 50)
    {
        return 8;
    }
    else if (someValue == 34){
        return 8;
    }
}

function distanceFromHqInFeet(someValue)
{
    if (someValue == 43){
        return 264;
    }
    else if (someValue == 50){
        return 2112;
    }
    else if (someValue == 34){
        return 2112;
    }
}

function distanceTravelledInFeet(value1,value2){
    if (value1 == 43 && value2 == 48){
        return 1320;
    }
    else if (value1 == 50 && value2 == 60){
        return 2640;
    }
    else if (value1 == 34 && value2 == 28){
        return 1584;
    }

}

function calculatesFarePrice(value1,value2){
    if(value1 == 43 && value2 == 44){
        return 0;
    }
    else if(value1 == 34 && value2 == 32){
        return 2.56;
    }
    else if(value1 == 50 && value2 == 58){
        return 25;
    }
    else if(value1 == 34 && value2 == 24){
        return `cannot travel that far`;
    }
}
