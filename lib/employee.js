// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
  // //error check for name entry
  // if (typeof name !== "string" || !name.trim().length) {
  //   throw new Error("Expected 'name' to be a non-empty string");
  // };
  // //error check for id entry
  // if (typeof id !== "number" || isNaN(id) || id.length < 0) {
  //   throw new Error("Expected parameter 'id' to be a number and non-empty value");
  // };
  // // //error check for email entry
  // // if (!email.includes("@") || !email.includes(".com")||!email.includes(".edu") || !email.includes(".org")){
  // //   throw new Error("Expected paramter 'email' to contain domain address")
  // // };

  this.name = name;
  this.id = id;
  this.email = email;
}

Employee.prototype.getName= function(){
  return this.name;
}
Employee.prototype.getId= function(){
  return this.id;
}
Employee.prototype.getEmail= function(){
  return this.email;
}
Employee.prototype.getRole= function(){
  return "Employee";
}

module.exports = Employee;
