- update is_delivered to true for recipient_email's N is between 1 - 30
```
UPDATE "outreach_email_event"
SET is_delivered = true
WHERE recipient_email ~ '.*\+([0-9]+)@.*'
  AND CAST(SUBSTRING(recipient_email FROM '[0-9]+') AS INTEGER) BETWEEN 1 AND 30;
```

```
SELECT *
FROM "QuestionSaveMyExams"
WHERE EXISTS (
    SELECT 1
    FROM jsonb_array_elements("QuestionSaveMyExams".solution) AS problem_element
    WHERE problem_element->>'body' ILIKE '%https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=1920/uploads/2022/11/6-4-medium-q9c.png%'
);
```