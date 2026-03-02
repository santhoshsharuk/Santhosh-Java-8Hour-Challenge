import java.lang.System;
import java.util.Scanner;

class q1{
    public static void main(String args[])
    {
        System.out.println("Enter your name and age");
        Scanner sc=new Scanner(System.in);
        String name=sc.nextLine();
        int age=sc.nextInt();
        System.out.println("My name is "+name);
        System.out.println("My age is "+age);

    }

}