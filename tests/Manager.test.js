const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
test("Can set name, id, and email via the Employee constructor argument",()=>{
  const name="Jane";
  const id= "2";
  const email="tester@test.com";
  const employee= new Employee(name,id,email);
  expect(employee.getName()).toBe(name);
  expect(employee.getId()).toBe(id);
  expect(employee.getEmail()).toBe(email);

});

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getMRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
