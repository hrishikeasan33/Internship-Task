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
![image](https://github.com/user-attachments/assets/a7dec6ad-1123-4c48-b36f-990fd0e46099)
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
# Task 3: Find Second and Fourth Greatest Numbers in a List

## Problem Description
Write a program to find the **second** and **fourth greatest numbers** in a list of numbers. If the length of the list is less than 4, or if there are fewer than 4 unique numbers, the program should return an appropriate error message.

## Code Explanation
1. **Input**:
   - A list of numbers.

2. **Logic**:
   - Check if the list contains fewer than 4 elements. If true, return an error: `Error: The list must contain at least 4 elements.`
   - Use the `set()` function to remove duplicates from the list.
   - Check if the unique numbers are fewer than 4. If true, return another error: `Error: The list must contain at least 4 unique numbers.`
   - Sort the unique numbers in descending order.
   - Return the **second** and **fourth greatest numbers** using indexing.

3. **Output**:
   - Returns the second and fourth greatest numbers in the list if valid.
   - ![image](https://github.com/user-attachments/assets/3fc5a3d9-d664-4e37-9639-6bcaf6c4db66)
   -  Returns an error message otherwise.
   -  ![image](https://github.com/user-attachments/assets/45c4b098-d2e8-423e-bd14-421029da26c1)
# Task 4: Date Format Converter

## Problem Description
Create a web page where users can input a date, its current format, and a desired format. On clicking a button, the date is converted and displayed in the desired format.

## Code Explanation
1. **HTML**:
   - Includes input fields for the date, current format, and desired format.
   - A button triggers the date conversion.
   - An output box displays the converted date.

2. **CSS**:
   - The page is centered with `flexbox`.
   - Features a gradient background and interactive focus/hover effects.

3. **JavaScript**:
   - Splits the input date into `DD`, `MM`, `YYYY` parts.
   - Replaces placeholders in the desired format with the corresponding values.
   - Displays the converted date or an error message if fields are empty.

## Example
![image](https://github.com/user-attachments/assets/6147a611-5736-49f7-8271-b83ec7eabc94)

- **Input**: `12/11/2012`, `DD/MM/YYYY`, `MM/YYYY/DD`
- ![image](https://github.com/user-attachments/assets/3940422f-6212-4cff-b923-2e4edfa14e8f)


- **Output**: `11/2012/12`
![image](https://github.com/user-attachments/assets/b2eb0071-4d44-4d8b-ad8a-14c0ccffc2d0)

# Task 5: Electronic Device Information Page

## Problem Description
Create a frontend webpage with:
1. Multiple clickable device names (e.g., MobilePhone, Laptop, Desktop).
2. On clicking a device, a new tab/iframe opens to show:
   - Device description.
   - A colorful gradient background.
   - An icon representing the device.

## Code Explanation
1. **HTML**:
   - Contains a list of clickable buttons with device names.
   - Each button has an image and triggers a JavaScript function (`showDeviceInfo`) on click.

2. **CSS**:
   - Centers the content vertically and horizontally using `flexbox`.
   - Applies gradient backgrounds and hover effects to enhance the design.
   - Device buttons are styled with shadow, rounded edges, and animations for a modern look.

3. **JavaScript**:
   - `showDeviceInfo` dynamically generates and opens a new tab:
     - Displays the device name, icon, and description.
     - Applies a unique gradient background for each device.
     - Includes a "Go Back" button to close the new tab.
    
Output :
![image](https://github.com/user-attachments/assets/0b8722c3-1e83-4fb2-8fce-e0880bb364b2)
![image](https://github.com/user-attachments/assets/48d0d24b-8909-4fd6-9d08-ba7c905c07e9)
![image](https://github.com/user-attachments/assets/146fb36e-135c-4199-a6df-2ae4b5ba3b19)
![image](https://github.com/user-attachments/assets/b30cf96f-6506-494f-9cbc-07cfc7cc16e2)




