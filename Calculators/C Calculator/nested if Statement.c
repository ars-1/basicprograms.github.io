#include<stdio.h>
#include<conio.h>
#include<math.h>  //if you want a square root option

     void main()
     {
       clrscr();  //it will clear screen and open file in a blank screen
       printf("Calculator\n");  //it will print calculator
       double a, b;  //declaring two variables of long floating data type
       int result;  //declaring variable of character data type

       printf("Enter first number\n");
       scanf("%lf", &a);  // it will store value in a
       printf("Enter second number\n");
       scanf("%lf", &b);  // it will store value in b
       printf("Enter operation\n 1 to add\n2 to subtract\n3 to multiply\n4 to divide\n");
       scanf("%d", &result);  // it will store character you enter and performs specific task

       if(result == 1)
       {
	printf("%lf - %lf = %lf", a, b, a+b); // in case of + this will be executed
       }

       if(result == 2)
       {
       printf("%lf - %lf = %lf", a, b, a-b);  // in case of - this will be executed
       }

       if(result == 3)
       {
       printf("%lf * %lf = %lf", a, b, a*b);   // in case of * this will be executed
       }

       if(result == 4)
       {
       printf("%lf / %lf = %lf", a, b, a/b);   // in case of / this will be executed
       }
       else
       {
       printf("ERROR");     // in case of any other character this will be executed
       }
    getche();
    }
