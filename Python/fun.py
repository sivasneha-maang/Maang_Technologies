#Functions
def printme( str ):
   "This prints a passed string into this function"
   print (str)
   return;

printme("I'm first call to user defined function!")
printme("Again second call to the same function")

def testfunction(arg):
   print ("ID inside the function:", id(arg))

var="Hello"
print ("ID before passing:", id(var))
testfunction(var)


def greetings(name):
   "This is docstring of greetings function"
   print ("Hello ",name)
   return
   
greetings("Samay")
greetings("Pratima")
greetings("Steven")

def printinfo( name, age ):
   "This prints a passed info into this function"
   print ("Name: ", name)
   print ("Age: ", age)
   return;

printinfo( age=50, name="miki" )

def printinfo( name, age=24 ):
   "This prints a passed info into this function"
   print ("Name: ", name)
   print ("Age: ", age)
   return;

printinfo(name="Likki" )

def posFun(num1, num2, num3):
    print(num1 * num2 * num3)

print("Evaluating keyword-only arguments: ")
posFun( num2=8, num3=5,num1=6) 


def printme(arg ,*vararg):
	print("Output is :",arg)
	for var in vararg:
		print(var)
	return;
printme(10)
printme(70,60,80)


def add(a,b):
	z=a+b
	return z
result=add(10,20)
print("The summ of {} and {} is {}".format(10,20,result))

sum=lambda val1,val2:val1+val2;
print("The summ of {} and {} is {}".format(20,30,sum(20,30)))


total = 0;
def sum( arg1, arg2 ):
  
   total = arg1 + arg2;
   print ("Inside the function local total : ", total)
   return total;


sum( 10, 20 );
print ("Outside the function global total : ", total)
