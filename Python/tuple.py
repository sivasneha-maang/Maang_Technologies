#TUPLES
t=(1,2,"hii",4,5)
#accessing

print(t[2])
print(t[:4])

#operations
t1=('a','v','b')
print(t+t1)
print(t1*3)

t2=(10,20,30)
x,y,z=t2
print("x=",x,"y=",y,"z=",z)

t3=(1,23,4,4,5,56)
x,*y,z=t3
print("x=",x,"y=",y,"z=",z)

#loops
tup1 = (25, 12, 10, -21, 10, 100)
indices = range(len(tup1))
for i in indices:
   print ("tup1[{}]: ".format(i), tup1[i])

#delete
del t1
print(t1)

