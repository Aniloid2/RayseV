from django.shortcuts import render

from authentication.models import FacebookProfile


def king(request):
	if request.method == 'GET':

		return render(request, "authapp/GetAPITEST.html")


		users = FacebookProfile.objects.all()
		list_users = []
		for item in users:
			list_users.append(item)



		for passnum in range(len(list_users)-1,0,-1):
			for i in range(passnum):
				if list_users[i].level>list_users[i+1].level:
					temp = list_users[i]
					list_users[i] = list_users[i+1]
					list_users[i+1] = temp
		
	

		winner = list_users.pop()
		print (winner.user.first_name)
		return render(request, "kingapp/king.html", {'winner': winner})
