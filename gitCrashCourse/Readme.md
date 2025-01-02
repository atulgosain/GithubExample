## Cloning
We are using git Hub
we can clone in three ways:https, SSH, GIThub CLI

Since we are using GitHub codespace, we'll create a temporary directory in our work space
```sh
mkdir /workspace/tmp/new-project
git init
touch readme.md
code Readme.md
```
## Make changes to readme.md
```
git commit -a -m "add readme file"

# If any changes 
git rest
```

## HTTPS
```sh 
git clone https://github.com/atulgosain/GithubExample.git
cd GithubExample
```

>You will need to generated a personal Access token (PAT)
https://github.com/settings/token

You will use PAT as your password when you login

-Give it access to contents for Commits

## SSH

```
need to add ssh details for clone and commit
git@github.com:atulgosain/GithubExample.git
cd GithubExample

```
We will create our own ssh rsa key pair
cat /home/atulgosain/.ssh/alt-github_id_rsa.pub

## Manage SSH key:
```
ssh-add ~/.ssh/github_atul

ssh-add:
A command to add private SSH keys to the SSH authentication agent (ssh-agent). The SSH agent caches your key so you don't need to repeatedly enter your passphrase when accessing SSH servers (like GitHub).

~/.ssh/github_atul:
This specifies the private SSH key file you are adding.github_atul is the name of your private key file stored in the ~/.ssh/ directory.


```

## CLI Branch
Gn auth login
gh repo clone atulgosain/GithubExample




## Branches
List of Branches
```
git branch : to get all the branches
git -no-pager branch : for only required output and not with multiple lines
```
Create a new Branch
```
git branch branch-name : to create a new branch with name "new-branch"
git fetch
git push --set-upstream origin dev
or 
git push -u origin dev

```

## Commit
When we want to commit code we can write git commit which will open up the commit window in the editor of choice.

```sh
git commit -m "your message"

git commit -a >> for adding all the changes and commiting it..We dont require "git add ." it is handled here

git commit -am "git message" >> fcimmit with adding all the git changes and writing the commit message.


```
## git config file
When we file istall Git on a machine  you are suppose to setup
your name and email Id

```sh
git config --global user.name "AtulGosain"
git config --global user.email "atul.gosain2005@gmail.com"

```

## branches
## Remotes
## Staging
## Merging

## Add
When we want to stage changes that will be included in the commit
We can use the . to add all possible files changed.
```
git add Readme.md
git add .
```

## Reset
Reset allows you to staged change to be unstaged.
This is useful when you to revert all files not to be commited.

```
git add .
git reset
```
git reset will revert a git add . changes

## Show Hidden files
```
ls -a
```
ls -a will show the hidden files like .git file which ls doesn't show
## Status
shows the status of the files which are tracked or untracked in the folder
```
git status

```

## Log
```
git log : for all the logs in the repository
git log --oneline :to get the last log details
```

## Push
When we want to push our changes  

## Change name of folder or file
```
mv /Users/atulgosain/gHub/PlayWrightJSRepoWithCli /Users/atulgosain/gHub/PlayWrightJSRepoWithCLI

```

```
mkdir /workspaces/tmp/new-project
cd workspaces/tmp/new-project
git init
touch Readme.md
open Readme.md
#make changes to readme.md
git commit


Added a statement.
Line added on 13th Dec and updated.
<13th Error resolved>