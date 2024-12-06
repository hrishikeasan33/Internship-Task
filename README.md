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

