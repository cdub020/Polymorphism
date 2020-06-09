//create a function that takes in an integer for a person's age and an array of objects of type : "country minimum age checker" that checks the minimum age for different activities in different countries

age = 17

array = [CountryMinimumAgeChecker,UsaMinimumAgeChecker,CanadaMinimumAgeChecker,FranceMinimumAgeChecker]

minimumAgeChecker(age,array)
//prints the below output to the screen (these responses may not be accurate but is just an example)

//you can drive in most countries:false
//you can drive in most countries:false
//you can drive in most countries:false

//you can drive in United States: true
//you can vote in United States: false
//you can drink in United States: false

//you can drive in Canada: true
//you can vote in Canada: true
//you can drink in Canada: false

//you can drive in France: true
//you can vote in France: true
//you can drink in France: false

class CountryMinimumAgeChecker{

  //set the default age for driving,drinking,and voting to be 21

  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){

  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfVotingAge(value){
    
  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrinkingAge(value){
    
  }
}

//UsaMinimumAgeChecker,CanadaMinimumAgeChecker,FranceMinimumAgeChecker
//are classes that inherit from CountryMinimumAgeChecker

//wikipedia page to check ages...if multiple ages, go with the minimum, if no ages, assume 21 is the correct age.

//driving - https://en.wikipedia.org/wiki/List_of_minimum_driving_ages
//voting - https://en.wikipedia.org/wiki/Voting_age
//drinking - https://en.wikipedia.org/wiki/Legal_drinking_age

//for extra credit create another function that takes an array of person objects like the one below and prints to the screen their status for an array of country checkers
person = {name: "John Doe", age:17}

minimumAgeChecker(age,array)

//for extra credit add additional countries other than Usa,Canada, and France to the array and create minimum age checker classes for them


//post link learn

