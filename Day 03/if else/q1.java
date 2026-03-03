import java.lang.System;
import java.util.Scanner;


/* 
class cup{
    public static void main (String arg[])

    {
        String a="win";
        if (a.equals("win"))
        {
            System.out.println("Ee Sala Cup Namadey");
        }
        else
        {
            System.out.println("Cup Illa");
        }
    }
}
    */

//taking input from user
class cup{
    public static void main (String arg[])

    {
        Scanner sc=new Scanner(System.in);
        String a=sc.nextLine();
        if (a.equals("win"))
        {
            System.out.println("Ee Sala Cup Namadey");
        }
        else
        {
            System.out.println("Cup Illa");
        }
    }
}