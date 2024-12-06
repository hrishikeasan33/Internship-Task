#!/usr/bin/env python
# coding: utf-8

# In[ ]:


## Technical Task 1
## Program to convert all odd length string as, first half of the string to lowercase and second half of string to lowercase.


# In[1]:


def transform_string(input_string):
    
    length = len(input_string)
    if length % 2 == 1:  
        mid = length // 2
        return input_string[:mid].upper() + input_string[mid:].lower()
    return input_string

if __name__ == "__main__":
    test_cases = ["oriJenBeliret", "orionmeo"]
    for test in test_cases:
        print(f"Actual string: {test} -> Transformed string: {transform_string(test)}")


# In[ ]:




