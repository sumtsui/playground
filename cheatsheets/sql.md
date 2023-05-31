```
## update is_delivered to true for recipient_email's N is between 1 - 30
UPDATE "outreach_email_event"
SET is_delivered = true
WHERE recipient_email ~ '.*\+([0-9]+)@.*'
  AND CAST(SUBSTRING(recipient_email FROM '[0-9]+') AS INTEGER) BETWEEN 1 AND 30;
```