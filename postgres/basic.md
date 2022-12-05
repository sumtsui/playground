```
# https://sql.holt.courses/lessons/joins-and-constraints/other-types-of-joins
CREATE DATABASE recipeguru;

CREATE TABLE ingredients (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) UNIQUE NOT NULL
);

# list tables
\d

INSERT INTO ingredients (title) VALUES ('bell pepper');

SELECT * FROM ingredients;

DROP TABLE ingredients;

# add column
ALTER TABLE ingredients ADD COLUMN image VARCHAR ( 255 );

# drop column
ALTER TABLE ingredients DROP COLUMN image;

# add column and make it unique
ALTER TABLE ingredients ADD COLUMN type VARCHAR ( 50 ) NOT NULL DEFAULT 'vegetable';

# insert data
INSERT INTO ingredients (
 title, image, type
) VALUES (
  'red pepper', 'red_pepper.jpg', 'vegetable'
);

# Use -- for comments
INSERT INTO "ingredients" (
 "title", "image", "type" -- Notice the " here
) VALUES (
  'broccoli', 'broccoli.jpg', 'vegetable' -- and the ' here
);

# "upsert"
INSERT INTO ingredients (
  title, image, type
) VALUES
  ( 'watermelon', 'banana.jpg', 'this won''t be updated' )
ON CONFLICT (title) DO UPDATE SET image = excluded.image;

# update a field
UPDATE ingredients SET image = 'watermelon.jpg' WHERE title = 'watermelon';

# delete a row
DELETE FROM attendee WHERE contact_email = 'user5@g.com'

# WHERE matching
https://www.geeksforgeeks.org/sql-query-to-match-any-part-of-string/#:~:text=SQL%20Pattern%20Matching%20%3A,pattern%20in%20string%20of%20column.

# query jsonb
https://hevodata.com/learn/query-jsonb-array-of-objects/
SELECT *
FROM "attendee"
where role_tags @> '"organizer"'

```

















