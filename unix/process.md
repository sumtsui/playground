Every process you run is assigned a process ID which everyone refers to as a pid. Every process is also owned by a user. Some processes will always be owned by root, others by whatever user you are.

```bash
ps

// output
  PID TTY           TIME CMD
72440 ttys000    0:00.21 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server /usr/bi
72755 ttys000    0:01.77 -zsh
83204 ttys001    0:00.16 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server /usr/bi
83206 ttys001    0:01.10 -zsh
26414 ttys003    0:00.09 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server /usr/bi
26416 ttys003    0:00.24 -zsh
28881 ttys004    0:00.15 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server /usr/bi
28883 ttys004    0:00.78 -zsh
  426 ttys006    0:00.36 npm
```



Kill a process

```bash
kill -s SIGKILL <pid>
```

or

```bash
kill -9 <pid>
```



## Foreground and background

`&` tells the process to run in the background.

```bash
sleep 2 &
```



## Exit codes

Whenever a process exits, it exits with an exit code. This exit code corresponds to if a process successfully completed whatever you told it to do. Sometimes this is a bit misleading because sometime programs are meant to be stopped before they complete (as some like `yes` will never actually complete by themselves).

> - 0: means it was successful. Anything other than 0 means it failed
> - 1: a good general catch-all "there was an error"
> - 2: a bash internal error, meaning you or the program tried to use bash in an incorrect way
> - 126: Either you don't have permission or the file isn't executable
> - 127: Command not found
> - 128: The exit command itself had a problem, usually that you provided a non-integer exit code to it
> - 130: You ended the program with CTRL+C
> - 137: You ended the program with SIGKILL
> - 255: Out-of-bounds, you tried to exit with a code larger than 255



## Running multiple commands

Run second command if the first one succeed

```bash
true && echo hi
```

Run second command if the first one fails

```bash
false || echo hi
```

Always run the second one

```bash
false ; echo hi
```



## Subcommands

Involve a command within a command

``` bash
echo I think $(whoami) is a very cool user
```

```bash
echo today is $(date +%x)
```



 

