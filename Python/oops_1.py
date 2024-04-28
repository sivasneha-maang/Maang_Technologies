#Object and class
class Emp:
	empcount=0;
	def __init__(self,name,salary):
		self.name=name;
		self.salary=salary;
		Emp.empcount+=1;
	def displaycount(self):
		print("Total Employee %d"%Emp.empcount)
	def displayemp(self):
		print("Name:",self.name," Salary:",self.salary);

emp1=Emp("Anusha",20000);
emp1.displayemp();
emp2=Emp("Lucky",20000);
emp2.displayemp();
print("Total employees:",Emp.empcount);

print("Emp.__doc__",Emp.__doc__);
print("Emp.__name__",Emp.__name__);
print("Emp.__module__",Emp.__module__);

