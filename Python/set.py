#SET

s1={1,2,3,"hi"}
print(s1)
str="SIVASNEHALAKSHMINARAYANA"
s2=set(str)
print(s2)

#accessing
langs = {"C", "C++", "Java", "Python"}
for i in langs:
	print(i,end=" ")
print ("PHP" in langs)
print ("Java" in langs)
langs.add("Oracle")
print(langs)
la1={"a","b","c"}
langs.update(la1)
print(langs)

#opertions
l1={1,2,3,4}
l2={'a','b','c',3,4}
l3=l1.union(l2)
print(l3)
l4=l1.difference(l2)
print(l4)
l5=l1.difference(l2)
print(l5)

#deleting
l1.discard(2)
print(l1)

s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s3 = s1 | s2
print ("Union of s1 and s2: ", s3)
s4 = s1 & s2
print ("Intersection of s1 and s2: ", s4)
s3 = s1 - s2
print ("Difference of s1 - s2: ", s3)
s3 = s2 - s1
print ("Difference of s2 - s1: ", s3)
s3 = s1 ^ s2
print ("Symmetric Difference in s1 and s2: ", s3)
