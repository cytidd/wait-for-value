import os
import json
import sh

max_to_check = os.environ['MAX_TO_CHECK']
target_value = os.environ['TARGET_VALUE']
file_to_check = os.environ['FILE_TO_CHECK']
key_to_check = os.environ['KEY_TO_CHECK']

tag_match = None

# we only want to check the first 5
tags = filter(None, sh.git("tag").split("\n"))
tags.reverse()
tags = tags[0:5]

for tag in tags:
    branchName = "tags/{}".format(tag)
    sh.git("checkout", "-b", branchName, tag)
    data = json.load(open(file_to_check))
    if data[key_to_check] == target_value:
        tag_match = tag
    sh.git("checkout", "master")
    sh.git("branch", "-D", branchName)
    if tag_match is not None:
        break

print(tag_match)
