#LISTS

list=["python",10,40,"Java",1995]
print(list[0])
print(list[1:3])

#updating
list[1]="C"
print(list)


#delete
list1=[10,20,30,0]
print("Before deleting:",list1)
del list1[0]
print("After deleting:",list1)

#list operations
concat=[1,2,3]+[4,5,6]
rep=["HI"]*3
mem=3 in  [1,2,3]
print(concat)
print(rep)
print(mem)

list2=[1,2,3,4]
print("Before appending:",list2)
list2.append("Anu")
print("After appending:",list2)
list2.insert(2,"HI")
print("After inserting:",list2)
list2.extend([20,30])
print("After extending:",list2)
list2.remove("Anu")
print("After removing:",list2)

#Loops
list3=[1,2,3,4,5]
for i in list3:
	print(i,end=" ")

list4=[x for x in range(1,10) if x%2==0]
print(list4)
