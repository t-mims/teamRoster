// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name,id,email,school){
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
      this.email= email;
      this.school= school;
    }
    
    Intern.prototype.getName=function(){
      return this.name
    }
    Intern.prototype.getId=function(){
      return this.id
    }
    Intern.prototype.getEmail=function(){
      return this.email
    }
    Intern.prototype.getSchool=function(){
      return this.school
    }
    Intern.prototype.getRole=function(){
      return "Intern";
    } //Overridden to return 'Intern'

    
module.exports= Intern;
