#Inheritance
class division:
	def __init__(self,a,b):
		self.a=a;
		self.b=b;
	def divide(self):
		return self.a/self.b;
class modulus:
	def __init__(self,a,b):
		self.a=a;
		self.b=b;
	def mod(self):
		return self.a%self.b;
class div_mod(division,modulus):
	def __init__(self,a,b):
		self.a=a;
		self.b=b;
	def divide_mod(self):
		divval=division.divide(self);
		modval=modulus.mod(self);
		return (divval,modval);
x=div_mod(10,3)
print("division:",x.divide())
print("modulus:",x.mod())
print("div_mod:",x.divide_mod())


#Polimorphism

from abc import abstractmethod
class shape:
   @abstractmethod
   def draw(self):
      "Abstract method"
      print ("Draw a shape")
      return

class circle(shape):
   def draw(self):
      super().draw()
      print ("Draw a circle")
      return

class rectangle(shape):
   def draw(self):
      super().draw()
      print ("Draw a rectangle")
      return

shapes = [circle(), rectangle()]
for shp in shapes:
   shp.draw()	


#Method overriding
class Emp:
	def __init__(self,name,sal):
		self.name=name;
		self.sal=sal;
	def get_name(self):
		return self.name;
	def get_sal(self):
		return self.sal;
class Officier(Emp):
	def __init__(self,name,sal,inc):
		super().__init__(name,sal);
		self.inc=inc;
	def get_sal(self):
		return self.sal+self.inc;
y=Emp("LN",20000);
print("Name:{} ,Total_Salary:{} ".format(y.get_name(),y.get_sal()))
x=Officier("LN",20000,200);
print("Name:{} ,Total_Salary:{} ".format(x.get_name(),x.get_sal()))


#method overloading
class example:
   def add(self, a = None, b = None, c = None):
     # x=0
      if(a !=None and b != None and c != None):
         x = a+b+c
      elif(a !=None and b != None and c == None):
         x = a+b
      return x

obj = example()

print (obj.add(10,20,30))
print (obj.add(10,20))

#using @dispacth module
from multipledispatch import dispatch
class example:
   @dispatch(int, int)
   def add(self, a, b):
      x = a+b
      return x
   @dispatch(int, int, int)
   def add(self, a, b, c):
      x = a+b+c
      return x

obj = example()

print (obj.add(10,20,40))
print (obj.add(3,20))

#Abstraction
from abc import ABC, abstractmethod
class democlass(ABC):
   @abstractmethod
   def method1(self):
      print ("abstract method")
      return
   def method2(self):
      print ("concrete method")

class concreteclass(democlass):
   def method1(self):
      super().method1()
      return
      
obj = concreteclass()
obj.method1()
obj.method2()
