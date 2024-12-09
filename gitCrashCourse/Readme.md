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

### HTTPS


```sh 
git clone: https://github.com/atulgosain/GithubExample.git
cd GithubExample
```

## You'll need to generate a personal Access Token(PAT)
```
Path: Profile>> Settings>> DeveloperSettings >> Personal Access Token >> Fine-Grained Tokens
https://github.com/settings/tokens
09-12-2024
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

You will use the PAT  as your password when you Login
-Give it access to Contemts for commits


```
## SSH
```
git@github.com:atulgosain/GithubExample.git
```

## Commit
When we want to commit code we can write git commit which will open up the commit window in the editor of choice.

```sh
git commit 
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

```
mkdir /workspaces/tmp/new-project
cd workspaces/tmp/new-project
git init
touch Readme.md
open Readme.md
#make changes to readme.md
git commit


Added a statement.
```