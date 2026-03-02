import java.lang.System;
import java.util.Scanner;

class sum{
    public static void main(String[] args)
    {
        System.out.println("Add Two Strings");
        Scanner add=new Scanner(System.in);
        System.out.println("Enter Your First String :");
        String a=add.nextLine();
        System.out.println("Enter your second String :");
        String b=add.nextLine();
        System.out.println();
        String c=a+b;
        System.out.println("The sum is :"+c);
    
  }
}