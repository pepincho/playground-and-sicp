# print all prime numbers in a range with a function in python
def isprime(n):
    if n == 1:
        print("1 is special")
        return False
    for x in range(2, n):
        if n % x == 0:
            print("{} equals {} x {}". format(n, x, n//x))
            return False
    else:
       print(n, " is a prime number")
       return True

for n in range(1, 20):
    isprime(n)
print("Done.")