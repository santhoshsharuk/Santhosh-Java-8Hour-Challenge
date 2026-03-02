# ➕ Java Program – Sum of Two Numbers

## 📌 Objective

Create a simple Java program to calculate the sum of two numbers.

---

## 🧠 Concept Used

* Variables
* Data Types (int)
* Arithmetic Operator (+)
* System.out.println()

---

## 💻 Java Code

```java
import java.util.Scanner;

public class Sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();

        int sum = num1 + num2;

        System.out.println("Sum of the numbers is: " + sum);

        sc.close();
    }
}
```

---

## ▶️ How to Run

### 1️⃣ Compile

```
javac Sum.java
```

### 2️⃣ Run

```
java Sum
```

---

## 🖥 Sample Output

```
Sum of the numbers is: 30
```

---

## 📚 What I Learned

✔ Declaring variables
✔ Performing addition
✔ Printing output
✔ Basic Java program structure

---

🚀 Keep practicing Java daily!
