## SSH

Try to connect to your laptop at home, should be fun.

https://superuser.com/questions/214759/connect-to-another-mac-via-terminal

## SFTP

It works the same way as SSH. So if you got SSH setup, you can use SFTP right away. 

Commands in the sftp shell:

```bash
sftp brian@<the same ip from the previous step>
lpwd # ubuntu's local home directory
pwd # brian's remote home directory
lls # the list of files in ubuntu's home directory
ls # the list of files in brian's home directory
help # see all the commands you can do
```

Prefix a command with `!` to run it in the sftp shell. 

```bash
!touch file-to-put.tx
```

Uploading and downloading

```bash
put file-to-put.txt putted-file.txt # second argument is optional, if you omit it'll just use the same name
get putted-file.txt gotten-file.txt # same thing, second one is optional
```

## wget

wget works like cp but instead of copying a local file you're copying something off the net. So you'll identify a remote file (usually a URL) that you want to fetch and save to your local file system. 

```bash
wget https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh
chmod 700 bash2048.sh
. bash2048.sh
```

The one case you'll want to use wget is if you want recursive downloads of site. wget has a peculiar ability that it will read the incoming document and download all the links it finds within it, crawling all the documents until it downloads all the files it founds. That can occasionally be useful and not something curl does by itself.

## curl

