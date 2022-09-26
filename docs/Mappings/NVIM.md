# NVIM

**Leader " "**

### Vim Basic shortcuts

| Mapping         | Details
| ----------------| -----------
| ~               | Flip the case of character
| #               | Search backwards for the word nearest to the cursor
| *               | Search forward for the word nearest to the cursor
| $               | Move to the end of the current line
| %               | Move to the matching bracket or parentheses
| ^               | Move to the first non-space character in the current line
| `<C-r>0`        | Paste register 0, works in command mode!
| `<C-r> =`       | Basic Repl to enter math calc
| u               | Undo
| `<ctrl-r>`      | Redo

## Movements

| Mapping         | Details
| --------------- | ------------------------------------------------------------------------------------------
| W               | Jump to the next beginning of WORD
| w               | Jump to the next begging of word
| E               | Jump to the next end WORD
| e               | Jump to the next end word
| b               | Move backward a WORD
| B               | Jump backwards to the start of word (with puntuaction)
| ^               | Move the first non black
| T               | Move to one character before the previous occurrence of a given character in the same line
| t               | Move to one character before the next occurrence of a given character in the same line
| F               | Move to the previous occurrence of a given character in the same line
| f               | Move to next occurrence of a given character un the same line
| ctrl-e          | Scroll one line
| ctrl-y          | Scroll one line
| ctrl-u          | Scroll half a page
| ctrl-d          | Scroll half a page
| ctrl-f          | Scroll fill page
| ctrl-b          | Scroll fill page
| ctrl-E          | Scroll window down
| ctrl-Y          | Scroll window up
| ctrl-F          | Scroll down one page
| ctrl-B          | Scroll up one page
| H               | Move cursor to the top of the window
| M               | Move cursor to the middle of the window
| L               | Move cursor to the bottom

## VIM key Mappings

| Mapping         | Details                                   | Category     | Mode    | Plugin
| -------------   | ------------------------------------------|--------------|-------- | ------
| `<leader>n`       | FileExplorer                              |  FileExplorer  |  N      |  NerdTree
| `<leader>/`       | Comment code                              |  Comment       |  I,N,V  |  Tcoment
| `<leader>c`      | :make                                     |  Compile       |         |
| `<leader>r`      | :compileRun()                             |  Run           |         |
| `<C-L>`           | Clear the highlighting                    |  Search        |         |  vim-sensible
| F5              | undoTreeToogle                            |  History       |         |
| R               | Replacemode                               |                |
| `<leader>|`      | Split horizantal                          |  Split         |
| `<leader>-`      | Split vertical                            |  Split         |
| `<leader>cd`     | cd vim into the directory of the current buffer.           |  cwd
| ctrl + z        | Suspend vim, fg n return                  |                |
| `<C-r> =`        | Basic Repl to enter math calc             |  Registers     |
| `<leader>q`      | Quit buffer                               |  Buffer        |
| `<leader>w`       | Save buffer                               |  Buffer        |
| `<leader>h`       | Move to left panel                        |  Panel         |
| `<leader>j`       | Move to down panel                        |  Panel         |
| `<leader>k`       | Move to up panel                          |  Panel         |
| `<leader>l`       | Move to right panel                       |  Panel         |
| ctrl + w + r    | Rotate panel                              |  Panel         |
| `<C-w>T `         | Buffer to tab                             |  Panel         |
| `<C-w> =`         | Even out splits                           |  Panel         |
| ←, →, up, down  | Resize panel                              |  Panel         |
| sa{motion/textobject}{addition} | saiw( add( to foo - sandwitch add |                  | vim-sandwitch

## Normal mode

| Mapping         | Details
| --------------- | -------------------------------------------------
| cgn             | “change the next match” then press . to repeat
| gUgn            | Uppercase, match
| gugn            | Lowercase, match
| dgn             | delete, match
| sd{deletion}    | sd(  delete
| srb{addition}   | Replace
| ctrl+o          | Inside of quotes exit
| `<leader>x`       | Replace current word forward, in visual select word
| `<leader>X`       | Replace current word Inward

## Insert mode

| Mapping         | Details
| --------------- | -------------------------------------------------
| i               | Insert before cursor
| I               | Insert after cursor
| a               | append after cursor
| A               | append end of line
| o               | append a new line below
| O               | append a new line above
| `<C_h>`           | delete the char before cursor during insert mode
| `<C_w>`           | delete the word before cursor during insert mode
| `<C_j>`           | begin a new line in cursor mode
| `<C_t>`           | indent line right during insert mode
| `<C_d>`           | de indent line left durig  insert mode
| `<C-n>`           | Next word
| `<C-p>`           | Previous word in current file

## Visual mode

| Mapping         | Details
| --------------- | -------------------------------------------------
| `>`               | Shift text right
| `<`               | Shift text left
| u               | text lower case
| U               | text upper case

## Diff

| Mapping               | Details
| --------------------- | -------------------------------------------------
| nvim -d file1 file2   | Start diff file
| ]c                    | next difference
| [cz                   | previous difference
| do                    | diff obtain
| dp                    | diff put
| zo                    | open folded
| zc                    | close folded
| :diffuppdate          | rescab
| :Gwrite

## Git

| Mapping               | Details
| --------------------- | -------------------------------------------------
| :GV                   |  Commit Browser
| `<leader>g`             | Denite gitstatus          (Denite)

## Cut and paste

| Mapping         | Details
  | --------------- | -------------------------------------------------
| dw              | cut word
| dt]             | delete util ]
| diw             | delete inside word

## Editing

| Mapping         | Details
  | --------------- | -------------------------------------------------
| r               | replace single character
| J               | Join line below to the current line
| gJ              | Join without space between
| g~              | Swap case up to motion
| gu              | Change to lower case up to motion
| gU              | Change to Upper case up to motion
| cc              | change entire line
| ciw             | change entire word
| caw             |  change all word

## Marking

| Mapping         | Details
| --------------- | -------------------------------------------------
| v               | visual mode
| V               | start linewise visual mode
| o               | move to end of marked area
| O               | move to other corner of block
| aw              | mark a word
| a(              | inside (
| a"              | visual all including quotes
| viwp            | visual select inner word and paste
| vep             | visual end of word paste
| vi'             | visual inside quotes

## Bookmarks

| Mapping         | Details
| --------------- | -------------------------------------------------
| mk              | mark current position (can use a-z)
| dmk             | delete mark **k**
| `m<space> `     | delete all marks of file
| 'k              | move to mark k
| d'k             | delete from current position to mark k
| 'a-z            | same file
| 'A-Z            | between files
| ]`              | Jump to next mark
| [`              | Jump to prev mark
| ]'              | Jump to start of next line containing a mark
| ['              | Jump to start of prev line containing a mark
| :marks          | View marks
| mm              | Toggle bookmark      (vim-bookmark)
| mn              | Bookmark next        (vim-bookmark)
| mp              | Bookmark previous    (vim-bookmark)
| ma              | Bookmark  show all   (vim-bookmark)
| mc              | Clear bookmark       (vim-bookmark)

## Marks

| Mapping       | Details
| ------------- | -------------------------------------------------
| `<c-i>`         | Jump newer
| `<c-o>`         | Jump older position list
| iw            | select a current word
| aw            | select a current word plus one
| iW            |

## Working with files

| Mapping         | Details
| --------------- | -------------------------------------------------
| :e              | edit file in new buffer
| :ls             | Show buffer
| :bu             |
| :bfirst         | first buffer in the buffer list
| :brewind        |
| :blast          | last buffer in the buffer list
| `<leader> 1`      | Open first tab
| `<leader>,`       |  Previous tab
| `<leader> .`      |  Next tab
| `<leader>tab`     | Jump betweeb buffer

## Registers

| Mapping       | Details
| --------------- | -------------------------------------------------
| :reg          | Display registers
| "0p           | Latest in clipboard
| "ayy          | Put the result yy to register a
| "ap           | Paste what is in register a
| "zdw          | Delete a word and put in register z
| "Zdw          | Delete a word and append to register z
| *"y           | yanks the currently selected lines to the * register which is the clipboard
| *"p           | Paste clipboard
| `<C-r>0`        | Paste register 0, works in command mode!

## Folding

| Mapping     | Details
| --------------- | -------------------------------------------------
| zo          | open
| zO          | open all
| zc          | close
| zC          | close all
| zR          | Unfold all
| zM          | Close all
|:fold        | select block, then

## :terminal

| Mapping         | Details
  | --------------- | -------------------------------------------------
| ctrl+q          | Exit terminal
| `<leader>t`       | :term

## Source current file

  ```php
  :so %
  ```

## Emmet

| Mapping         | Details
| --------------- | -------------------------------------------------
| `<C-x>,`          | Emmet leader, generate html

  ```html
  html:5_
h1{hello}
  ```

**Edit stream**

  ```php
  find . | vim -
  ```

## Search

| Mapping         | Details
| --------------- | -------------------------------------------------
| `<leader>f`        | :flyGrep                        (FlyGrep)
| `<leader>p`       | Denite file                      (Denite)
| `<leader>s`       | Denite buffer                    (Denite)
| `<leader>8`       | DeniterCursorWord grep           (Denite)
| `<leader>f`       | Denite -start-filter grep        (Denite)
| `<leader><space>/` | DeniteBufferDir -start-filter   (Denite)
| `<leader><space>r` | Denite -resume -cursor-pos      (Denite)
| `<leader><C-r>`    | Denite register                 (Denite)

## Spell & Syntax

| Mapping                    | Details
|----------------------------| -------------------------------------------------
| :set spell spelllang=es_mx | Set dictionary
| "[s:                       | go to previous spell error
| ]s:                        | go to next spell error
| z=                         | A list of candidate words will be shown
| :set syntax=php            | Set syntax for buffer

## Easy motion

| Mapping         | Details
| --------------- | -------------------------------------------------
| `<Leader>f{char}` | Find {char} to the right. See             |f|.
| `<Leader>F{char}` | Find {char} to the left. See              |F|.
| `<Leader>t{char}` | Till before the {char} to the right. See  |t|.
| `<Leader>T{char}` | Till after the {char} to the left. See    |T|.
| `<Leader>w`       | Beginning of word forward. See            |w|.
| `<Leader>W`       | Beginning of WORD forward. See            |W|.
| `<Leader>b`       | Beginning of word backward. See           |b|.
| `<Leader>B`       | Beginning of WORD backward. See           |B|.
| `<Leader>e`       | End of word forward. See                  |e|.
| `<Leader>E`       | End of WORD forward. See                  |E|.
| `<Leader>ge`      | End of word backward. See                 |g|.
| `<Leader>gE`      | End of WORD backward. See                 |g|.
| `<Leader>j`       | Line downward. See                        |j|.
| `<Leader>k`       | Line upward. See                          |k|.
| `<Leader>n`       | Jump to latest "/" or "?" forward. See    |n|.
| `<Leader>N`       | Jump to latest "/" or "?" backward. See   |N|.
| `<Leader>s`       | Find(Search) {char} forward and backward.
| See             |f| and  |F|.

## CoC (Conquer of Completion)

- Run `:messages` to get echoed messages in vim.
- Text `JDT.LS` would be in your statusline when you have statusline integration with coc.nvim.
- Enable verbose trace for jdt.ls by add `"java.trace.server": "verbose"` in your settings file, then check output
  by `:CocCommand workspace.showOutput java`
- Run `:CocCommand java.open.serverLog` to open log of jdt.ls.
- Try `:CocCommand java.clean.workspace` to clean workspace cache.

## Misc tricks

| Mapping        | Details
| -------------- | ----------------------------------------------
| `:%!jq .`        | Format json
| `o<Esc>p`        | Paste new line
| `:%bd|e#`        | Close all buffers except actual
| `!!`             | Run last command
| `!python %`      | Run external command

---

## References

* [https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db](https://medium.com/%40schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db)

* [http://vimcasts.org/episodes/operating-on-search-matches-using-gn/](http://vimcasts.org/episodes/operating-on-search-matches-using-gn/)

* [Vim search and replace selected text](https://stackoverflow.com/questions/676600/vim-search-and-replace-selected-text)

* [Vim Cheat Sheet](https://vim.rtorr.com/)

* [Vim as Java and Groovy IDE (again) but now with Neovim](https://www.galiglobal.com/blog/2017/20170226-Vim-as-Java-IDE-again.html)

* [https://docs.emmet.io/cheat-sheet/](https://docs.emmet.io/cheat-sheet/)

* [https://vim.fandom.com/wiki/All_the_right_moves](https://vim.fandom.com/wiki/All_the_right_moves)

* [https://github.com/SpaceVim/SpaceVim/blob/master/autoload/SpaceVim/layers/tools.vim](https://github.com/SpaceVim/SpaceVim/blob/master/autoload/SpaceVim/layers/tools.vim)

* [https://github.com/gaetan-puleo/dotfiles](https://github.com/gaetan-puleo/dotfiles)

* [https://www.cs.oberlin.edu/~kuperman/help/vim/mapping.html](https://www.cs.oberlin.edu/~kuperman/help/vim/mapping.html)

* [https://github.com/spf13/spf13-vim](https://github.com/spf13/spf13-vim)

* [https://github.com/mhartington/dotfiles/blob/master/config/nvim/init.vim](https://github.com/mhartington/dotfiles/blob/master/config/nvim/init.vim)

* [https://github.com/ternjs/tern_for_vim](https://github.com/ternjs/tern_for_vim)

* [https://github.com/terryma/vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors)

* [https://vimawesome.com](https://vimawesome.com/)

* [https://github.com/mhinz/dotfiles/blob/master/.vim/vimrc](https://github.com/mhinz/dotfiles/blob/master/.vim/vimrc)
