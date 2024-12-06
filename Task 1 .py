#!/usr/bin/env python
# coding: utf-8

# In[1]:


## Technical Task 1
## Task 1: Remove Numbers and Replace Special Characters


# In[3]:


import re

def process_string(input_string):
    
    without_numbers = re.sub(r'\d', '', input_string)

    result = re.sub(r'[^A-Za-z\s]', ' ', without_numbers)
    return result.strip()

if __name__ == "__main__":
    input_str = "LendEZ2024@EPIKInDiFi#Software!"
    print("Original String:", input_str)
    print("Processed String:", process_string(input_str))



# In[ ]:





# In[ ]:





# In[ ]:




