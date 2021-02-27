https://www.bigocheatsheet.com/

![2020-09-28 at 9.18 PM](/var/folders/kf/qtkby15s1xv60zv0qfkc24g80000gn/T/se.razola.Glui2/C41912EE-AD5C-4815-9A91-1688A14A3BFE-812-000BA5058FC195D4/2020-09-28 at 9.18 PM.png)

O(n) -> Linear

If you want to meaningfully predict how an algorithm will work and how long it will take, then your analysis should not be tied to a specific implementation. A specific implementation of a specific array algorithm might have a running time of approximately f(n)=0.0023⋅n2f(n) = 0.0023 \cdot n^2f(n)=0.0023⋅n2 seconds on arrays of length nnn, but the constant 0.00230.00230.0023 doesn’t tell you much about the algorithm. Many factors could cause specific constants to be different:

    using a different computer,
    using a different programming language, or
    having a different programmer implementing the same algorithm in a slightly different way...

This quiz explores the following question:

    How do you think about the performance of an algorithm without thinking about all the implementation details?

The answer is in the title: counting the number of operations that the algorithm performs!

A more reliable measurement than stopwatch time is counting the number of “basic operations” an algorithm has to perform. The count of basic operations is a kind of "cost" that is more predictable than stopwatch time.

What is a “basic operation”? This depends on the problem that you are trying to solve:

    For algorithms that manipulate numbers, you can count the number of arithmetic operations.
    For algorithms that manipulate arrays, you may count the number of times array elements are written to or read from. There may also be other candidates depending on what you are doing with the array.
    For the sorting algorithms from the last chapter, which only manipulated arrays by comparing and swapping elements, it's natural to count the number of times array elements were compared or swapped.
