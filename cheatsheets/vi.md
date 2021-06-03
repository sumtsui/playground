# vi Commands

------

Below you can see some of the most important **vi** commands.

## **Starting, Exiting, Reading and Writing Files in vi**

| Command                 | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| **vi myfile**           | Start **vi** and edit **myfile**                             |
| **vi -r myfile**        | Start **vi** and edit **myfile** in recovery mode from a system crash |
| **:r file2<RET>**       | Read in **file2** and insert at current position             |
| **:w<RET>**             | Write out the file                                           |
| **:w myfile<RET>**      | Write out the file to **myfile**                             |
| **:w! file2<RET>**      | Overwrite **file2**                                          |
| **:x<RET> or :wq<RET>** | Exit **vi** and write out modified file                      |
| **:q<RET>**             | Quit **vi**                                                  |
| **:q!<RET>**            | Quit **vi** even though modifications have not been saved    |



## **Changing Position in vi**

| Command                | Description                                          |
| :--------------------- | :--------------------------------------------------- |
| arrow keys             | Use the arrow keys for up, down, left and right; or: |
| **j** or **<RET>**     | One line down                                        |
| **k**                  | One line up                                          |
| **h** or Backspace     | One character left                                   |
| **l** or Space         | One character right                                  |
| **0**                  | Move to beginning of line                            |
| **$**                  | Move to end of line                                  |
| **w**                  | Move to beginning of next word                       |
| **b**                  | Move back to beginning of preceding word             |
| **:0 <RET>** or **1G** | Move to beginning of file                            |
| **:n <RET>** or **nG** | Move to line n                                       |
| **:$ <RET>** or **G**  | Move to last line in file                            |
| **^f** or **PageDown** | Move forward one page                                |
| **^b** or **PageUp**   | Move backward one page                               |
| **^l**                 | Refresh and center screen                            |



## **Searching for Text in vi**

| Command           | Description                                   |
| :---------------- | :-------------------------------------------- |
| **/pattern<RET>** | Search forward for pattern                    |
| **n**             | Move to next occurrence of search pattern     |
| **string<RET>**   | Search backward for pattern                   |
| **N**             | Move to previous occurrence of search pattern |



## **Changing, Adding and Deleting Text in vi**

| Command            | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| **a**              | Append text after cursor; stop upon **Escape** key           |
| **A**              | Append text at end of current line; stop upon **Escape** key |
| **i**              | Insert text before cursor; stop upon **Escape** key          |
| **I**              | Insert text at beginning of current line; stop upon **Escape** key |
| **o**              | Start a new line below current line, insert text there; stop upon **Escape** key |
| **O**              | Start a new line above current line, insert text there; stop upon **Escape** key |
| **r**              | Replace character at current position                        |
| **R**              | Replace text starting with current position; stop upon **Escape** key |
| **x**              | Delete character at current position                         |
| **Nx**             | Delete **N** characters, starting at current position        |
| **dw**             | Delete the word at the current position                      |
| **D**              | Delete the rest of the current line                          |
| **dd**             | Delete the current line                                      |
| **Ndd** or **dNd** | Delete N lines                                               |
| **u**              | Undo the previous operation                                  |
| **yy**             | Yank (cut) the current line and put it in buffer             |
| **Nyy** or **yNy** | Yank (cut) N lines and put it in buffer                      |
| **p**              | Paste at the current position the yanked line or lines from the buffer |