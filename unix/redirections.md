# Redirections

## stderr and stdout

Stdout and stderr by default goes to your terminal screen.

Direct the text from a **program** to a **file**:

```bash
# Direct stdout to file
ls -lash 1> file.txt


# Direct stderr to file
foo 2> file.txt

# Do it in one line (passwd_not dosn't exist)
ls /etc/passwd /etc/passwd_not 1> ./std_out 2> ./std_err

# Direct both streams to file
ls -lash >& file.txt

# Append stream to file
echo "i will be appended" >> file.txt

# Direct stderr to file and stdin to another program then to a file
ls /etc/passwd /etc/passwd_not 2> stderr_out | sort > stdout_out
```

## stdin

Direct the contents of a **file** into a **program** via the stdin:

```bash
# Direct stdin to grep
grep "error-log" < log.txt
```

## Pipe

```bash
# Direct the output from one program to the next program
cat log.txt | grep "error-log"
```
