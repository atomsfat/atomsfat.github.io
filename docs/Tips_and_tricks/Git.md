# Git tips and tricks

git checkout -b new_local remote

```bash
git log --all --graph --decorate
```

**git config --global core.editor “vim"**

**Delete a local branch**

```bash
git branch -d <local-branch>
```

**Delete remote branch**

```bash
git branch -D bug fix
```

```bash
git push origin :the_remote_branch
```

```bash
git delete-branch integration
```

git config --global core.editor "nvim"

**Merge**

```bash
git merge --no-ff feature/payment-definitions
```

**Remove from stage**

```bash
git reset HEAD filename
```

**Undo commit**

```bash
git reset --soft HEAD~1

```

**Working with remotes**

**Add remote**

```bash
git remote add origin [https://github.com/](https://github.com/)*user*/*repo*.git
```

**Pushing to remote**

```bash
git push  *<REMOTENAME> <BRANCHNAME>*
```

```bash
		git push atoms HEAD:master
```

**New branch From stash**

```bash
git stash branch <branchname> [<stash>]
```

**New branch from commit**

```bash
git branch branchname <sha1-of-commit>
```

```bash
git checkout -b branchname <sha1-of-commit or HEAD~3>
```

**List branch ordered by recent commit**

```python
git for-each-ref --sort=-committerdate refs/heads/
```

[https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

[http://chris.beams.io/posts/git-commit/](http://chris.beams.io/posts/git-commit/)

**Diff file between branches**

```bash
git diff --name-only master..migrationBranch | grep .*.java | tr "\n" " " | xargs checkstyle -c rulesets/google_checks.xml check style
```

**Push** 

TAGS
```bash
git push origin --tags

git tag -d tagName

git push origin <tagname>
```

**Change remote**

```bash
git remote set-url <remote-name> <remote-url>
```

Squash
```bash
git rebase -i <after this commit>
```