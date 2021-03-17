https://stackoverflow.com/questions/56910169/difference-between-return-error-and-throw-error

don't return error in a Promise, throw it. So the caller will easily not if the promise is resolved or rejected. otherwise, the caller will have to look at the type of the returned value to determine if the Promise is successful or not.
