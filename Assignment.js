//Brick Calculator  using javascript

function brickCalculator(buildingFloor){


if(buildingFloor <=0 ){
    return  'Out of the Program' ;
}
    
else if(buildingFloor <=10){

        var result= 15*1000; // for 1 feet we need to have 1000 brick
        return result;

    }
     
else if(buildingFloor >10 && buildingFloor <=20){

        var result= 12*1000; // for 1 feet we need to have 1000 brick
        return result;

    }
else(buildingFloor >20)
{

        var result= 10*1000; // for 1 feet we need to have 1000 brick
        return result;

    }

}

var brickOutput= brickCalculator(3);
console.log(brickOutput);