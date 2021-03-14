## function vs procedure



#### function shows the relation between input and output

![2020-11-02 at 10.28 PM](https://tva1.sinaimg.cn/large/0081Kckwgy1gkb76tw8s4j30d60ahq4u.jpg)

this is a function in math. it shows the relation between the input x and the output y. function in javascript also has this characteristic.

![2020-11-02 at 10.31 PM](https://tva1.sinaimg.cn/large/0081Kckwgy1gkb79toxy3j30fg06ztbq.jpg)

the name of the function show describe the relation between the input and output.



#### function avoids side effects

but side effects can't be completely eliminated. 

Avoid them where possible, make them obvious otherwise.

side effects:

	- I/O
	- database storage
	- network calls
	- DOM
	- Timestamps
	- Random numbers
	- *CPU heat*
	- *CPU time delay*



#### pure function

doesn't use indirect input (variable outside of function scope that will be reassigned)

![2020-11-02 at 11.20 PM](https://tva1.sinaimg.cn/large/0081Kckwgy1gkb8ph91lsj30dy09y77r.jpg)

`z` here is NOT an indirect input, bcoz it is not being reassigned. So as the `addTwo` function. Thus `addAnother` *IS* a pure function. 

![2020-11-02 at 11.27 PM](https://tva1.sinaimg.cn/large/0081Kckwgy1gkb8xwipbwj30fc06vgoe.jpg)

  `z` here is in this code has a **smaller surface area** to be reassigned. it is more readable.

with pure function, every time we call it with the same input, it will always return the same output.



Is a function pure? 

this is not a yes/no question. it should be: I am confident that this function will behave pure. or I am not confident ...



