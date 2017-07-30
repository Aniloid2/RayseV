# for a quick fix it would be possible to create a python script that for the number of N
# it would generate a equal number of filter functions and save them to a file.
# firpm(Naps, f, a) where f = [0.0, delta, delta , delta , 0, 1]. delta is (1/N)/2
# N iterates between 1 and 50. at N = 1 we have one filter, 
# between N > 1 & N < N -1
# last filter f can be hardcoded 
# so inbetween we must extend the code, 
# if statement N = 1: hardcode
# python script that for ammount of specified N's will extend the middle

import time



def f(x) : return x**2

a = time.time()
print (f(8))
print (time.time() - a)

g = lambda x: x**2

a = time.time()
print (g(8))

