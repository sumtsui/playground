# Streams

### stderr and stdout

Stdout by default goes to your terminal screen (as does stderr too.)

Direct the text from a **program** to a **file**:

Direct stdout to file

```bash
ls -lash 1> file.txt
```

Direct stderr to file

```bash
ls -lash 2> file.txt
```

Direct both streams to file

```bash
ls -lash > file.txt
```

Append stream to file

```bash
echo "i will be appended" >> file.txt
```





### stdin

With stdin, we can direct the contents of a **file** into a **program** via the stdin.

```bash
grep "error-log" < log.txt
```



### Pipe

Direct the output from **one program** to the **next program**

```bash
cat log.txt | grep "error-log"
```

