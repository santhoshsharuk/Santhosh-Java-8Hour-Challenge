import java.lang.System;
import java.util.Scanner;

class e1{
    public static void main(String args[])
    {
        String a="one";
        String b="one";
        String c=b;
        System.out.println(a==b); // true
        System.out.println(b==c); // true
        System.out.println(a==c); // true
    }
}