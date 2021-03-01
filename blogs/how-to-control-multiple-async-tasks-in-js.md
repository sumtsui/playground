# Having fine-grained control over asynchrouous tasks in JavaScript

Let's say we want to make 100 requests to a server to download 100 pictures. What we want to achieve are:

- These 100 requests will be made simultaneously.
- When each request finished, we want to know if that request was successful or failed.
- There will be a indicator telling us when all request finished.
