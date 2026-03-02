import java.lang.System;
import java.util.Scanner;

class q2{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your name and age and place you live");
        String name=sc.nextLine();
        int age=sc.nextInt();
        sc.nextLine();
        String place=sc.nextLine();
        System.out.println("My name is "+name);
        System.out.println("My age is "+age);
        System.out.println("I live in "+place);
    }
}