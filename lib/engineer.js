// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit fromEngineer.
function Engineer(name,id,email,github){
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
      this.email= email
      this.github= github
    }
    
    Engineer.prototype.getName= function(){
      return this.name;
    }
   Engineer.prototype.getId= function(){
      return this.id;
    }
   Engineer.prototype.getEmail= function(){
      return this.email;
    }
    Engineer.prototype.getGithub= function(){
      return this.github;
    }

   Engineer.prototype.getRole= function(){
      return "Engineer";
    }

  module.exports=Engineer