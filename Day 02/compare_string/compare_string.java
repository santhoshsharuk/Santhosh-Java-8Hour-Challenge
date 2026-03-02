import java.lang.System;
import java.util.Scanner;   

class compare_string{
    public static void main(String args[])
    {
        String a="Hello";
        String b="Hello";

        String c=new String("Hello");
        String d=new String("Hello");
        System.out.println(a==b); // it will give true because both a and b are pointing to the same string in the string pool.
        System.out.println(c==d); // it will give false because c and d are pointing to different objects in the heap.
        System.out.println(a.equals(b)); // it will give true because both a and b are having the same content.
        System.out.println(c.equals(d)); // it will give true because both c and d are having the same content.
    }
}