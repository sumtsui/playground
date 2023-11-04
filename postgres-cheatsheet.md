```
SELECT
  *
FROM
  "QuestionSaveMyExams"
WHERE
  EXISTS (
    SELECT 1
    FROM jsonb_array_elements(problem) AS problem_item
    WHERE (problem_item->>'body') LIKE '%gradient%'
  );


SELECT DISTINCT
  q.*
FROM
  "QuestionSaveMyExams" q,
  jsonb_array_elements(q.problem) AS problem_item
WHERE
  (problem_item->>'body') LIKE '%decimal places%';


UPDATE "QuestionSaveMyExams"
  SET keywords = keywords || '[{"en": "gradient"}]'
  WHERE id = 'fd7475f5-fefa-4b04-bbea-679187e9e3de'
```