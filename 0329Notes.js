var b = "Dog"
function test1(){
  var a = "Tom"
  a
  return a
  b = "David"
  //return a
}
console.log(test1())
b 

//Global Scope
//Available anywhere in application

var name = "Tom"

nameCaller1();

function nameCaller1(){
  console.log(name)
}

//Local Scope
//Available within function
var nameChanger = function(name){
  var nameChangername = "Jerry";
}

nameChanger('Greg');
console.log(name)

//Block Scope
//Available within block
{} <== this is a block

if(true){
  let thing = 'block scope ar'
}

//Objects thru Closures
//object is a set of key value codes
//Creating an object in JavaScript is easy:
var person = { name: "Alex Keaton", phone: 123456789 };
//Then we can access the properties with the "dot" notation:
person.name;    -> "Alex Keaton"
person.phone;   -> 123456789

// Object with Function/Method
// Objects can also contain functions which are then called methods:
var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData: function() { return this.name+"-"+this.phone }
};

person.getData();   -> "Alex Keaton-123456789"

//get.Data is actual function

//Creating New Objects

function createSuperHero(name, alias, location){
  var mode = name
  return {
    name: name,
    alias: alias,
    location: location,
    findID: function(){ console.log(mode)},
    switchID: function(){
      if(mode == this.name){
//what does "this. do?"
        mode = this.alias
      } else {
        mode = this.name
      }
    }
  }
}

var hero = createSuperHero('Bruce Watne', 'Batman', 'Gotham')

hero.findID()
hero.switchID() <== literal switch that changes it from Batman to Bruce Wayne vice versa (expression) 
