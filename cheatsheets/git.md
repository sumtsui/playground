| Command                                                      | Meaning                                     | Link                                                         |
| ------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------ |
| git diff-tree --no-commit-id --name-only -r <commit hash>    | List files changed of commit                | https://stackoverflow.com/questions/424071/how-to-list-all-the-files-in-a-commit |
| git branch \\                                                | grep "<pattern>" \\                         | xargs git branch -D                                          |
| git log --pretty=tformat:"%h %ad \| %s%d [%an]" --graph --date=short | Git log with nicer format                   |                                                              |
| git diff mybranch master -- myfile.js                        | diff file btw branches                      |                                                              |
| git diff HEAD~5 HEAD -- myfile.js                            | diff file btw latest commit and old commits | https://stackoverflow.com/questions/3338126/how-do-i-diff-the-same-file-between-two-different-commits-on-the-same-branch |
| git log \<commit hash>..HEAD                                  | list commits after a commit, not inclusive  |                                                              |
| git log \<commit hash>^..HEAD                                 | list commits after a commit, inclusive      |                                                              |
| git log --follow -- <filename>                               | list commits on a specific file             | https://stackoverflow.com/questions/3701404/how-can-i-list-all-commits-that-changed-a-specific-file?rq=1 |
| git branch -r                                                | list all remote branches                    |                                                              |
|                                                              | get all remote branches to local            | https://stackoverflow.com/questions/9537392/git-fetch-remote-branch |
| git config --global credential.helper osxkeychain            | let git prompt password again               | https://stackoverflow.com/questions/9537392/git-fetch-remote-branch |
| git checkout --track <branchname>                            | get remote branches to local                | https://stackoverflow.com/questions/9537392/git-fetch-remote-branch |
| git revert --no-commit HEAD~\<number of commits>..           | revert several commits from head            | https://stackoverflow.com/questions/1463340/how-to-revert-multiple-git-commits |
| git commit --amend -m "New commit message."                  | Amend last commit message                   |                                                              |

