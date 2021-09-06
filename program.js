// Number -> Any value from Positive, Negative, Fractional, Decimal

// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var roll_number = 1547;
console.log(roll_number);

var name = "Karthick Kumar";
console.log(name);

var result = true;
console.log(result);

var student_information = {
  name: "Karthick",
  age: 27,
  result: true,
  roll_number: 4578
}
console.log(student_information);

//Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

//To Read a Value -> object_variable_name.key;
console.log(student_information.name);
console.log(student_information.age);
console.log(student_information.roll_number);

//To Insert a new Value -> object_variable_name.key = value;
student_information.location = "Mumbai";
student_information.last_name = "Kumar";
console.log(student_information);

//To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
student_information.location = "Banglore";
student_information.age = 30;
console.log(student_information)

//To delete a existing Record -> delete object_variable_name.key
delete student_information.result;
console.log(student_information)

//Array -> It is a collection of List data (List of Data)
//Syntax of creating an Array
//var variable_name = [ value_1, value_2, .... , Value_n ];

var total_marks = [68, 78, 57, 34, 51, 44];
console.log(total_marks);

var name_list = ["Karthick", "Kumar", "Ankit", "Harsh", "Yuvaraj"];
console.log(name_list);

var record_list = [
  {
    name: 'xpshj',
    age: 45
  },
  {
    name: 'sfsd',
    age: 78
  },
  {
    name : 'erter',
    age : 45
  }
];
console.log(record_list);

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

//push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);
total_marks.push(200,300,400,500);

//unshift() -> Insert a new value at the start of array record
total_marks.unshift(1000, 2000, 3000);

//To Read value from Array
// array_variable_name[index]
total_marks[10];

//To edit a value from Array
// array_variable_name[index] = new value;
total_marks[10] = 20000;

//To delete an value 
// array_variable_name.splice(index, deleteCount);
total_marks.splice(4, 1);


//Function -> Block of Code 
//Syntax for Creating a Function (Function Definition)
/*
function function_name(vaiable1, vaiable2, vaiableN){ 
   // code block
};
*/
// function_name = should be a Proper text value -> a-z, A-Z, 0-9, $, _

//Syntax for Executing/Running the Function (Function Invocation)
//function_name(value1, value2, value_n);

function onSubmitForm(){
  var output = "The form has been submitted successfully";
  console.log(output);
};

function onLogin(){
  var result = "You have loggin to the application";
  console.log(result);
}

//Operations 
/* 
1. Arithmetic Operator -> +, -, *, /, %, ++, --
2. Assignment Operator -> =, == 
2. Comparision Operator -> <, <=, >, >=
4. Logical Operator -> &&, ||, !
*/

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

function check_voting_age(){
  var vaule = prompt("Enter your Age");
  var age = parseInt(vaule);

  if(age >= 18){
    console.log('Eligible for Voting');
  }
  else{
    console.log('Not Eligible for Voting');
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/
