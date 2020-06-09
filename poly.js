//create a function that takes in an integer for a person's age and an array of objects of type : "country minimum age checker" that checks the minimum age for different activities in different countries

var minimumAgeChecker = (ckage, objarr) =>{
  objarr.forEach(val => {
    val.isOfDrivingAge(ckage);
    val.isOfVotingAge(ckage);
    val.isOfDrinkingAge(ckage);
    console.log("--------------------------")
  })
  }

  var personage = (perarr,array) =>{
      for (var key in perarr){
        console.log("Is " + perarr[key].name + " able to do these activities at " + perarr[key].age + " years old?\n")
        minimumAgeChecker(perarr[key].age, array);
      }
  }

class CountryMinimumAgeChecker{

  //set the default age for driving,drinking,and voting to be 21
    constructor(){
      this.driving = false;
      this.drinking = false;
      this.voting = false;
    }
  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){ this.driving = value ? value>=16 : value<16;
    return console.log("Old enough to drive in most countries: " + this.driving);
  }
   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfVotingAge(value){ this.voting = value ? value>=18 : value<18;
    return console.log("Old enough to vote in most countries: " + this.voting);
  }
   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrinkingAge(value){this.drinking = value ? value>21 : value<21;
     return console.log("Old enough to drink in most countries: " + this.drinking);
  }
}

class UsaMinimumAgeChecker extends CountryMinimumAgeChecker{
  constructor(){
    super();
  }
  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){ this.driving = value ? value>=16 : value<16;
    return console.log("Old enough to drive in USA: " + this.driving);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfVotingAge(value){ this.voting = value ? value>=18 : value<18;
  return console.log("Old enough to vote in USA: " + this.voting);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfDrinkingAge(value){ this.drinking = value ? value>=21 : value<21;
  return console.log("Old enough to drink in USA: " + this.drinking);
}
}

class CanadaMinimumAgeChecker extends CountryMinimumAgeChecker{
  constructor(){
    super();
  }
  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){ this.driving = value ? value>=16 : value<16;
    return console.log("Old enough to drive in Canada: " + this.driving);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfVotingAge(value){ this.voting = value ? value>=18 : value<18;
  return console.log("Old enough to vote in Canada: " + this.voting);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfDrinkingAge(value){ this.drinking = value ? value>=19 : value<19;
  return console.log("Old enough to drink in Canada: " + this.drinking);
}
}

class FranceMinimumAgeChecker extends CountryMinimumAgeChecker{
  constructor(){
    super();
  }
  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){ this.driving = value ? value>=18 : value<18;
    return console.log("Old enough to drive in France: " + this.driving);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfVotingAge(value){ this.voting = value ? value>=18 : value<18;
  return console.log("Old enough to vote in France: " + this.voting);
}
 //takes in an integer for age and returns true or false if that age is allowed to drive in that country
isOfDrinkingAge(value){ this.drinking = value ? value>=16 : value<16;
  return console.log("Old enough to drink in France: " + this.drinking);
}
}

//*************************   MAIN   ************************ */
var array = [new CountryMinimumAgeChecker,new UsaMinimumAgeChecker,new CanadaMinimumAgeChecker,new FranceMinimumAgeChecker]
var perarr = [{'name' : "John Doe", 'age' : 17}, {'name' : "Jane Smith", 'age' : 20}, {'name' : "Jack Daniels", 'age' : 14}]

personage(perarr, array);

