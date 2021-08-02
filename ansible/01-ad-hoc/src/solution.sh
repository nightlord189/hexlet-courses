#!/bin/bash

# BEGIN (write your solution here)
ansible all -i inventory.ini -u tirion -m ansible.builtin.file -a 'path=/tmp/hello_world state=touch'
# END

