#INHERITANCE
class Shape:
	length=0;
	breadth=0;
	def __init__(self):
		print("Parent constructor is called");
	def area(self,l,b):
		Shape.length=l;
		Shape.breadth=b;
		a=Shape.length*Shape.breadth;
		print("Area is:",a);

		
class Rectangle(Shape):
	def __init__(self):
		print("Child constructor is called");
		
r1=Rectangle();
r1.area(2,3);


#Data Hiding
class JustCounter:
   __secretCount = 0
  
   def count(self):
      self.__secretCount += 1
      print(self.__secretCount)

counter = JustCounter()
counter.count()
counter.count()
#print(counter.__secretCount)

#class Methods
class Emp:
	empcount=0;
	def __init__(self,name,salary):
		self.name=name;
		self.salary=salary;
		Emp.empcount+=1;
	@classmethod
	def displaycount(cls):
		print(cls.empcount);
		return;
	@classmethod
	def displayemp(cls,name,salary):
		return cls(name,salary);

e1=Emp("Anu",1230);
e2=Emp("Lucky",2343);
e3=Emp.displayemp("Sneha",10000);
e4=Emp("Luckyluu",2343);
Emp.displaycount();

#staticmethods

class Emp:
	empcount=0;
	def __init__(self,name,salary):
		self.name=name;
		self.salary=salary;
		Emp.empcount+=1;
	'''def displaycount():
		print("Total Employee:",Emp.empcount)
	counter=staticmethod(displaycount);'''

	@staticmethod
	def displaycount():
		print("Total Employee:",Emp.empcount);

e1 = Emp("Bhavana", 24)
e2 = Emp("Rajesh", 26)
e3 = Emp("John", 27)

'''e1.counter()
Emp.counter()'''

e1.displaycount();
Emp.displaycount();
	
	
