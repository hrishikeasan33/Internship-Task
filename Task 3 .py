#!/usr/bin/env python
# coding: utf-8

# In[ ]:


## Technical Task 3
##A program to find second and fourth greatest number in an list of numbers (if length
##of list is less than 4, should give error message in response)


# In[6]:


def find_second_and_fourth(numbers):
    
    if len(numbers) < 4:
        return "Error: The list must contain at least 4 elements."
    
    unique_numbers = sorted(set(numbers), reverse=True)  # Remove duplicates and sort in descending order
    if len(unique_numbers) < 4:
        return "Error: The list must contain at least 4 unique numbers."
    
    return unique_numbers[1], unique_numbers[3]  # Return the second and fourth greatest numbers

# Example usage
if __name__ == "__main__":
    test_list = [950, 800, 130, 76, 40, 95]  # Change this list to test different inputs
    result = find_second_and_fourth(test_list)
    if isinstance(result, str):  # Check if result is an error message
        print(result)
    else:
        print("Second Greatest Number:", result[0])
        print("Fourth Greatest Number:", result[1])


# In[7]:


def find_second_and_fourth(numbers):
    
    if len(numbers) < 4:
        return "Error: The list must contain at least 4 elements."
    
    unique_numbers = sorted(set(numbers), reverse=True)  # Remove duplicates and sort in descending order
    if len(unique_numbers) < 4:
        return "Error: The list must contain at least 4 unique numbers."
    
    return unique_numbers[1], unique_numbers[3]  # Return the second and fourth greatest numbers

# Example usage
if __name__ == "__main__":
    test_list = [950, 800,]  # Change this list to test different inputs
    result = find_second_and_fourth(test_list)
    if isinstance(result, str):  # Check if result is an error message
        print(result)
    else:
        print("Second Greatest Number:", result[0])
        print("Fourth Greatest Number:", result[1])


# In[ ]:





# In[ ]:




