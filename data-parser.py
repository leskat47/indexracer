import json

classes = {}
with open("pax.txt") as file:
    for line in file:
        line = line.rstrip().rsplit(",")
        if not line[1]:
            category = line[0]
            classes[category] = {}
        else:
            classes[category][line[0]] = line[1]

data = open("data.json", 'w')
data.write(json.dumps(classes))
