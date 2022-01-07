## Definition

To create a single object that shared amount different resouces without having to recreate that object. The state of the single object is shared to all other objects that are using it. 

Singleton is global to the application

We only want to have a single instance of the object.

## Upsides

## Downsides

Codes are coupled, and hard to test

There might be a race condition when different part of the application trying to change the state in the singleton.
