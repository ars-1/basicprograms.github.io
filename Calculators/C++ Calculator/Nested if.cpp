#include<iostream>
#include<conio.h>
  using namespace std;
int main()
   {
   cout << "Calculator\n";
   double a, b;
   char res;
   cout << "Enter first number\n";
   cin  >>  a;
   cout <<  "Enter second number\n";
   cin  >>  b;
   cout <<  "Enter Operation\n + to add\n - to subtract\n * to multiply\n \/ to divide\n";
   cin  >>  res;
   
   if(res == '+')
   {
   cout << a << "+" << b << "=" << a+b;
   }
   
   if(res == '-')
   {
   cout << a << "-" << b << "=" << a-b;
   }
   
   if(res == '*')
   {
   cout << a << "*" << b << "=" << a*b;
   }
   
   if(res == '/')
   {
   cout << a << "\/" << b << "=" << a/b;
   }
   getche();
   }
