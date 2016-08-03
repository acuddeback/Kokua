import math
import random
#creates empty student list
studentlist = []
#asks for number of students
studentnum = int(input("How many students are in your class?"))
#asks for student names 
for i in range (studentnum):
	studentlist.append(input("Add a student name: "))
#generates group names
def groupnumber(index):
	num = str(index+1)
	output = ("Group "+ num)
	return output
def groupgenerator():
	studentgenlist = studentlist 
	maxstudent = int(input("What's the largest number of students you want in each group?"))
	groupnum = math.ceil((len(studentgenlist)/maxstudent))
	#creates list of groups
	grouplist = []
	#creates individual group list
	for i in range (groupnum):
		group = groupnumber(i)
		group = [] 
		#adds individual group to master group list 
		grouplist.append(group)
	#adds students to individual lists
	for i in range(len(studentgenlist)):
		listindex = random.randint(0, len(studentgenlist)-1)
		groupindex = (i % groupnum)
		grouplist[groupindex].append(studentlist[listindex])
		del(studentlist[listindex])
	#prints lists in a comprehensive format
	for i in range(len(grouplist)):	
		print(groupnumber((i)))
		index = i 
		for i in range(len(grouplist[index])):
			print(grouplist[index][i])
		
groupgenerator()