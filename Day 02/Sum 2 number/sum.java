import java.lang.System;
import java.util.Scanner;
class sum{
    public static void main(String[] args)
    {
        System.out.println("Add Two Numbers");
        Scanner add=new Scanner(System.in);
	    System.out.println("Enter Your First Num :");
	    int a=add.nextInt();
	    System.out.println("Enter your second Num :");
	    int b=add.nextInt();
	    System.out.println();
	    int c=a+b;
	    System.out.println("The sum is :"+c);
	
  }
}