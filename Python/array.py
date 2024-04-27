#Arrays
import array as arr
a = arr.array('i', [1, 2, 3,4,5])
print (type(a), a)
print()
#accessing
print(a[0])
print()
#operations

a.insert(1,6)
print(a)
print()

a.remove(1)
for x in a:
	print(x,end=" ")

a[3]=111
print(a)

a = arr.array('i', [1, 2, 3])
a.append(10)
print (a)
a.insert(1,20)
print (a)
b = arr.array('i', [6,7,8,9,10])
a.extend(b)
print (a)
a.remove(2)
print (a)

#loops
a = arr.array('d', [1, 2, 3])
l = len(a)
for x in range(l):
   print (a[x])

#reverse an array
a=arr.array('i',[1,2,3,4,5])
b=arr.array('i')
for i in range(len(a)-1,-1,-1):
	b.append(a[i])
print(a)
print("After reversing:",b)

#using reverse() method
a = arr.array('i', [10,5,15,4,6,20,9])
b = a.tolist()
b.reverse()
a = arr.array('i')
a.fromlist(b)
print (a)

#sorting
a=arr.array('i',[23,1,34,22,0])
for i in range(0,len(a)):
	for j in range(1,len(a)):
		if(a[i]>a[j]):
			t=a[i]
			a[i]=a[j]
			a[j]=t
print(a)

#use of sort()
a = arr.array('i', [10,5,15,4,6,20,9])
b = a.tolist()
b.sort()
a = arr.array('i')
a.fromlist(b)
print (a)


#joing arrays
a = arr.array('i', [10,5,15,4,6,20,9])
b = arr.array('i', [2,7,8,11,3,10])
for i in range(len(b)):
   a.append(b[i])
print (a, b)


a = arr.array('i', [10,5,15,4,6,20,9])
b = arr.array('i', [2,7,8,11,3,10])
x=a.tolist()
y=b.tolist()
z=x+y
a=arr.array('i')
a.fromlist(z)
print (a)


a = arr.array('i', [10,5,15,4,6,20,9])
b = arr.array('i', [2,7,8,11,3,10])
a.extend(b)
print (a)

#array methods
a = arr.array('i', [1, 2, 3, 4, 5,5,4,3,1])
a.reverse()
print (a)
c = a.count(2)
print ("Count of 2:", c)
c = a.index(2)
print ("index of 2:", c)

lst = [6, 7, 8, 9, 10]
c = a.fromlist(lst)
print (a)

