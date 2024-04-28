''' A constructor is an instance method in a class, that is automatically called whenever a new object of the class is created. The constructor's role is to assign value to instance variables as soon as the object is declared.

Python uses a special method called __init__() to initialize the instance variables for the object, as soon as it is declared.'''

'''class Employee:
   'Common base class for all employees'
   def __init__(self, name="Bhavana", age=24):
      self.name = name
      self.age = age

e1 = Employee()
e2 = Employee("Bharat", 25)

print ("Name: {}".format(e1.name))
print ("age: {}".format(e1.age))
print ("Name: {}".format(e2.name))
print ("age: {}".format(e2.age))'''

class Employee:
   'Common base class for all employees'
   message="HII"
   def __init__(self, name="Bhavana", age=24):
      self.name = name
      self.age = age
   @staticmethod
   def display():
      print("Name : ", Employee.message)

   def displayEmployee(self):
      print ("Name : ", self.name, ", age: ", self.age,)
e1 = Employee()
e2 = Employee("Bharat", 25)

e1.displayEmployee()
e2.displayEmployee()
e1.display()


#access modifiers
class Employee:
   def __init__(self, name, age, salary):
      self.name = name # public variable
      self.__age = age # private variable
      self._salary = salary # protected variable
   def displayEmployee(self):
      print ("Name : ", self.name, ", age: ", self.__age, ", salary: ", self._salary)

e1=Employee("Bhavana", 24, 10000)

print (e1.name)
print (e1._salary)
#print (e1.__age) #ERROR
print(e1._Employee__age)


#setter and getter methods
class Student:
	def __init__(self,name,rollno):
		self.__name=name;
		self.__rollno=rollno;
	def get_name(self):
		return self.__name;
	def get_rollno(self):
		return self.__rollno;
	def set_name(self,name):
		self.__name=name;
	def set_rollno(self,rollno):
		self.__rollno=rollno;
s1=Student("Siva",1);
s1.set_name("Sneha");
print("Name:",s1.get_name());
s1.set_rollno(2);
print("Name:",s1.get_rollno());
	
