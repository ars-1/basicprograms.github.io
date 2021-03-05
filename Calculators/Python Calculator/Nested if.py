print("Calculator in python\n")
a = int(input("Enter First Number=\n "))
b = int(input("Enter Second Number=\n "))
operation = input("Enter Operation\n + to add\n - to subtract\n * to multiply\n / to divide")

if(operation == '+'):
    {
 print(a, '+', b, '=', a+b)
    }
if(operation == '-'):
 {
print(a, '-', b, '=', a-b)
 }

if(operation == '*'):
 {
print(a, '*', b, '=', a*b)
}

if(operation == '/'):
 {
 print(a, '/', b, '=', a/b)
}

else:
  {
   print("ERROR")
 }
