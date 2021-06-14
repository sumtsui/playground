## Operating System

_Linux_ is only the kernel of the operating system.

OS is also consist of **important system libraries** and **important system services** (daemons)

The default shell for Linux: bash (Bourne Again Shell)

The Linux Foundation: OSDL merged with the Free Standards Group in 2007 to form The Linux Foundation, with a base mission to promote, protect, improve and standardize Linux.

#### Linux vs UNIX

Linux has its roots in UNIX. As such, some of its most basic components are completely rooted in UNIX: inode-based filesystem, multi-process scheduling, process creation and destruction, accessing hardware though device nodes, etc.

The 3 major Linux distribution families are: Red Hat, Debian, and SUSE.

## Shells

A shell is a command line interpreter which can constitute the user interface for terminal windows. It can also be used as a mechanism to run scripts, even in non-interactive sessions without a terminal window, as if the commands were being typed in.

### Bash

```bash
# see all the shells available in the system
cat /etc/shells
```

### Expression

```bash
# set variable x
x=10

echo $(($x - 3)) # 7

echo $(expr $x - 3) # 7
```
