def KelvinToFahrenheit(Temperature):
   assert (Temperature >= 0),"Colder than absolute zero!"
   return ((Temperature-273)*1.8)+32
print (KelvinToFahrenheit(273))
print (int(KelvinToFahrenheit(505.78)))
print (KelvinToFahrenheit(-5))

#Try-Exception
try:
   fh = open("testfile", "w")
   fh.write("This is my test file for exception handling!!")
except IOError:
   print ("Error: can\'t find file or read data")
else:
   print ("Written content in the file successfully")
   fh.close()

#Try-Finally

try:
   fh = open("testfile", "w")
   fh.write("This is my test file for exception handling!!")
finally:
   print ("Error: can\'t find file or read data")

#Argument Exception

def temp_convert(var):
   try:
      return int(var)
   except ValueError as Argument:
      print ("The argument does not contain numbers\n", Argument)
temp_convert("xyz")

#Raising Exception
def functionName( level ):
   if level < 1:
      raise "Invalid level!", level

#User-defined Exception

class Networkerror(RuntimeError):
   def __init__(self, arg):
      self.args = arg
try:
   raise Networkerror("Bad hostname")
except Networkerror,e:
   print (e.args)

#Nested Try Block
a=10
b=0
try:
   print (a/b)
except Exception:
   print ("General Exception")
finally:
   print ("inside outer finally block")

a=10
b=0
try:
   print ("This is outer try block")
   try:
      print (a/b)
   except ZeroDivisionError:
      print ("Division by 0")
   finally:
      print ("inside inner finally block")
      
except Exception:
   print ("General Exception")
finally:
   print ("inside outer finally block")