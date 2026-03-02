import java.lang.System;
import java.util.Scanner;

// Q4. Write a program to take name, score and department from user and print it in the following format:
// My name is xyz
// My score is 8/10
// My Department is xyz  
//Note: Methord 1 if the soce is 56 then the output should be 5.6/10, but in methord 2 the output should be 5.6/10 for the same score of 56. So, in methord 1 you have to use double data type for the score and in methord 2 you can use int data type for the score.


class q4{
    
    public static void main(String args[])
	{
	  Scanner sc=new Scanner(System.in);
	  String a=sc.nextLine();
	  double b=sc.nextDouble();
      sc.nextLine();
	  String c=sc.nextLine();
      System.out.println("My name is "+a);
      System.out.println("My score is "+(b/10)+"/10");	  
      System.out.println("My Department is "+c);

	}
}

// Methord 2 use 10.0 this value instead of 10 to get the double value of the score

/*
class q4{
    
    public static void main(String args[])
	{
	  Scanner sc=new Scanner(System.in);
	  String a=sc.nextLine();
	  int b=sc.nextInt();
      sc.nextLine();
	  String c=sc.nextLine();
      System.out.println("My name is "+a);
      System.out.println("My score is "+(b/10.0)+"/10");	  
      System.out.println("My Department is "+c);

	}
}
 */
