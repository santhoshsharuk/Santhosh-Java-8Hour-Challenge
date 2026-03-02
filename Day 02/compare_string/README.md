# Java String Comparison (== vs equals())

## Overview

This program demonstrates how **String comparison works in Java**, especially the difference between:

* `==` operator
* `.equals()` method

Understanding this is very important for avoiding logical errors in Java programs.

---

## 1️⃣ String Literal vs `new String()`

### String Literal

```java
String a = "Hello";
String b = "Hello";
```

* Stored inside the **String Pool**.
* Java reuses the same object if the value already exists.
* Both `a` and `b` point to the same memory location.

---

### Using `new` Keyword

```java
String c = new String("Hello");
String d = new String("Hello");
```

* Stored in the **Heap memory**.
* Every time `new` is used, a new object is created.
* `c` and `d` point to different memory locations.

---

## 2️⃣ Difference Between `==` and `.equals()`

### `==` Operator

* Compares **memory reference (address)**.
* Returns `true` only if both variables point to the same object.

### `.equals()` Method

* Compares **actual content (value)** inside the String.
* Returns `true` if the text is the same.

---

## 3️⃣ Expected Output Explanation

| Statement     | Result  | Reason                                |
| ------------- | ------- | ------------------------------------- |
| `a == b`      | `true`  | Both refer to same String Pool object |
| `c == d`      | `false` | Different objects created using `new` |
| `a.equals(b)` | `true`  | Same content                          |
| `c.equals(d)` | `true`  | Same content                          |

---

## 4️⃣ Important Concept: String Pool

* String literals are stored in a special memory area called the **String Constant Pool**.
* This improves memory efficiency.
* Using `new String()` forces object creation in heap.

---

## 🔥 Key Takeaway

* Use `==` only when checking if two references are the same object.
* Use `.equals()` when comparing String values.

For content comparison in Java Strings, always prefer:

```java
string1.equals(string2);
```

---

## Conclusion

This example clearly shows how Java handles memory allocation for Strings and why
