### mongodb

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
```