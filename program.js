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

//Function -> Block of Code 
//Syntax for Creating a Function (Function Definition)
function function_name(){ 
   // code block
};

// function_name = should be a Proper text value -> a-z, A-Z, 0-9, $, _

//Syntax for Executing/Running the Function (Function Invocation)
function_name();