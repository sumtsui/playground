https://btholt.github.io/complete-intro-to-linux-and-the-cli

| Command                                             | Meaning                                                      | Link                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| history \| grep <string u r looking for>            | Look for command history                                     |                                                              |
| lsof -i -P -n \| grep <port>                        | See if port is in use                                        | https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/ |
| lsof -i:<port>                                      | Same as above                                                |                                                              |
| lsof -i -P -n \| grep listen                        | List all ports in use                                        |                                                              |
| kill -9 <pid>                                       | kill a process by pid                                        | https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux |
| kill -9 $(lsof -t -i:<port>)                        | Same as above                                                |                                                              |
| ctrl + r                                            | reverse search, hit ctrl + r again to go to an older command |                                                              |
| yes                                                 | keep saying yes                                              |                                                              |
| sudo su                                             | su stands for change user                                    |                                                              |
| ctrl + D                                            | get out of root                                              |                                                              |
| uptime                                              | print uptime of machine                                      |                                                              |
| date                                                | print date                                                   |                                                              |
| ls -al \| grep -E ".sh\|gradle"                     | search for file name matching ".sh" or "gradle". `-E` is `--extended-regexp` | https://linuxize.com/post/grep-multiple-patterns/            |
| scp [source file] [username]@[destination server]:. | upload file to server                                        |                                                              |
| ls -tr                                              | list dir content in reversed and last modified order         | https://www.zerotouch.com/faqs/111/ls-by-date                |
