// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email,officeNumber){
  // // error check for manager office number 
  // if (typeof officeNumber !== "number" || isNaN(age) || officeNumber.length !=9) {
  //   throw new Error("Expected parameter 'age' to be a non-negative number");
  // }
      this.name = name;
      this.id = id;
      this.email = email
      this.officeNumber=officeNumber;
    };

    Manager.prototype.getOfficeNumber=function(){
      return this.officeNumber;
    }
    Manager.prototype.getMRole=function(){
      return "Manager";
    } 

    module.exports = Manager;
