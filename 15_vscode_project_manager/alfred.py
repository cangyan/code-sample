import json
import os
import sys

home = os.path.expanduser("~")
configPath = (
    home
    + "/Library/Application Support/Code/User/globalStorage/alefragnani.project-manager/projects.json"
)

itemList = []
with open(configPath, "r") as f:
    list = json.loads(f.read())
    for config in list:
        item = {}
        item["type"] = "default"
        item["title"] = config["name"]
        item["arg"] = config["rootPath"]
        item["subtitle"] = config["rootPath"]
        item["autocomplete"] = config["name"]
        itemList.append(item)

items = {}
if not itemList:
    item = {}
    item["uid"] = 1
    item[
        "type"
    ] = "default"  # ~/Library/Application\ Support/Code/User/globalStorage/alefragnani.project-manager/projects.json

    item["title"] = "Vscode Open Project - 未找到项目"
    item["subtitle"] = ""
    item["arg"] = ""
    itemList.append(item)
items["items"] = itemList
items_json = json.dumps(items)
sys.stdout.write(items_json)
