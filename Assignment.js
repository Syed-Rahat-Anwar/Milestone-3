//****************Brick Calculator  using javascript***************************

function brickCalculator(buildingFloor){


if(buildingFloor <=0 ){
    return  'Out of the Program';
}
    
else if(buildingFloor <=10){

        var  result = 15*1000*buildingFloor ; // for 1 feet we need to have 1000 brick
        return result;

    }
     
else if (buildingFloor >10 && buildingFloor <=20){

        var result = 150000+12*1000*(buildingFloor-10) ; // for 1 feet we need to have 1000 brick and 150000 for 1st 10 floor
        return result;

    }
else
{

        var result=150000+120000+10*1000*(buildingFloor -20); // for 1 feet we need to have 1000 brick
        return result;

    }

}

var brickOutput= brickCalculator(23);
console.log(brickOutput);

// ******************feet to mile conversion using javascript********************

function feetToMile(feet){

    var result=  feet/5280      //1 mile is equal to 5280 feet
    return result;
}

var feetToMileOutput=feetToMile(500000);

console.log(feetToMileOutput);

//*******************************Wood Calculator *********************************


function woodCalculator(chair,table,bed){

    var resultForChair= chair*1;   // for each chair we have 1cubic feet, for table  3cubic feet and for bed 5 cubic feet
    var resultForTable= table*3;
    var resultForBed= bed*5;
    var totalResult= resultForChair + resultForTable + resultForBed;

    return totalResult;

}

var totalOutput=woodCalculator(10,12,8);
console.log(totalOutput);


// ************find the small name in the array using javascript************

function tinyFriend(freiendListName){
    var smallestName= friendListName[0].length;

for( var i=0; i<friendListName.length; i++){

    var element=friendListName[i].length;

    if( element < smallestName){
        smallestName=element;

}
   
}
return smallestName;

}

var friendListName=['rahim','karim','shahana','abid','pia','babu', 'mushfiqur'];

var tinyFriendOutput = tinyFriend(friendListName);

console.log("smallest name length :",tinyFriendOutput);




 