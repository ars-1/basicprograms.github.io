#include<iostream>
#include<conio.h>
  using namespace std;
int main()
   {
   cout << "Calculator\n";
   double a, b;
   int res;
   cout << "Enter first number\n";
   cin  >>  a;
   cout <<  "Enter second number\n";
   cin  >>  b;
   cout <<  "Enter Operation\n 1 to add\n 2 to subtract\n 3 to multiply\n 4 to divide\n";
   cin >> res;
   switch(res)
   {
   case 1:
   cout << a << '+' << b << '=' << a+b;
   break;
   
   case 2:
   cout << a << '-' << b << '=' << a-b;
   break;
   
   case 3:
   cout << a << '*' << b << '=' << a*b;
   break;
   
   case 4:
   cout << a << '/' << b << '=' << a/b;
   break;
   
   default:
   cout << "ERROR";
   break;
   }
   getche();
   }
