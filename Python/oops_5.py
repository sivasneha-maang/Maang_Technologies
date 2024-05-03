from abc import ABC, abstractmethod
class demoInterface(ABC):
   @abstractmethod
   def method1(self):
      print ("Abstract method1")
      return

   @abstractmethod
   def method2(self):
      print ("Abstract method1")
      return

class concreteclass(demoInterface):
   def method1(self):
      print ("This is method1")
      return
   
   def method2(self):
      print ("This is method2")
      return
      
obj = concreteclass()
obj.method1()
obj.method2()


#innerclass
class student:
   def __init__(self):
      self.name = "Ashish"
      self.subs = self.subjects()
      return
   def show(self):
      print ("Name:", self.name)
      self.subs.display()
   class subjects:
      def __init__(self):
         self.sub1 = "Phy"
         self.sub2 = "Che"
         return
      def display(self):
         print ("Subjects:",self.sub1, self.sub2)
         
s1 = student()
s1.show()