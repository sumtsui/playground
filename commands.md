```
# inside mongo shell
# login
db.auth("my_username", "my_password")

show dbs

use <db_name>

show collections

db.<collection_name>.find()

# backup and restore (outside mongo shell)

mongodump --uri="<uri>"

mongorestore --nsInclude "<db_name>" --uri="<uri>" path/to/dump

# run a node js sendbox with docker
docker run -it -v .:/app --rm node:18 bash

# ls with sorted created date
ls -tUl

# count file total in folder
ls -l | wc -l
```