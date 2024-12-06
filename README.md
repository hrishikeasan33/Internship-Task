# Task Explanations and Code Documentation

## Task 1: Remove Numbers and Replace Special Characters with a Space

### Problem Description
Write a program to remove all numbers from a string and replace all special characters with a space.

### Code Explanation
1. **Input:** The program accepts a string containing numbers, letters, and special characters.
2. **Process:**
   - First, it removes all numbers using a regular expression (`\d` matches digits).
   - Then, it replaces all special characters (anything not a letter or space) with a space using another regular expression.
   - The `strip()` method ensures that leading and trailing whitespace is removed from the final string.
![image](https://github.com/user-attachments/assets/d32f2496-b2c7-46d7-a5a4-ab00d50703df)

# Task 2: Transform Odd-Length Strings

## Problem Description
For strings with an odd length, convert the first half of the string to **uppercase** and the second half to **lowercase**. If the string's length is even, return the original string unchanged.

## Code Explanation
1. **Input**: Accepts a string.
2. **Logic**:
   - Calculate the length of the string.
   - If the string's length is **odd**:
     - Find the midpoint of the string using integer division (`length // 2`).
     - Split the string into two halves:
       - Convert the **first half** to uppercase.
       - Convert the **second half** to lowercase.
   - If the string's length is **even**, the string is returned unchanged.
![image](https://github.com/user-attachments/assets/d5c6c0f0-ce8b-4d7b-b1e6-eda919f3aa3c)
