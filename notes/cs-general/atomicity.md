# Atomicity

In computer programming, an operation done by a computer is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time. Put another way, atomic operations are indivisible.
Atomic operations are critically important when dealing with shared resources. To understand why, let’s look at an example. Imagine two people, Sam and Sally, are trying to buy an item online using the same bank account with a $100 balance:
Sam clicks “buy now” on a $100 Lego set.
Banking software checks to see that at least $100 is in its account database, and confirms that that there is enough to make the purchase.
Sally clicks “buy now” on a $50 video game.
Banking software checks to see that at least $50 is in its account database and confirms that that there is enough to buy the game.
The bank withdraws $100 to pay for Sam’s Lego set. (Balance is now $0.)
The bank withdraws $50 to pay for Sally’s video game. (Balance is now $-50.)
The account is now overdrawn because the banking transaction (checking for and withdrawing funds) is not atomic. To correct this problem, the banking software would need some form of mutual exclusion to ensure that the multi-step process of checking funds and withdrawing funds is indivisible.
One approach is to use a lock, which we set before accessing the shared resource and then release when we are finished. Other threads must wait until the lock is released to use the shared resource. The code within the block is called a critical section.
acquire lock

```c
/_ Entering critical section _/
if $100 is availabile
withdraw $100
/_ Leaving critical section _/
release lock
```

If the bank software used the above algorithm, the sequence of events between Sam and Sally would be:
Sam clicks “buy now” on a $100 Lego set.
Sam’s request acquires the lock, checks to see that at least $100 is in its account database, and confirms that that there is enough to make the purchase.
Sally clicks “buy now” on a $50 video game.
The banking software waits on the lock—it’s currently in use by Sam’s request.
The bank withdraws $100 to pay for Sam’s Lego set (balance is now $0), and releases the lock.
Sally’s request acquires the lock, checks to see if at least $50 is in the account database, and sees that there is not enough.
Sally is unable to buy the video game.
Atomicity is a essential feature of many computer systems, multi-threading, databases, parallel processing, memory management, etc.
