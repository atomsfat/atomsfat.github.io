# Tmux

# "c-a" prefix

```bash
tmux list-sessions

tmux kill-server

tmux kill-session -a to close all other sessions.

c-q remote prefix

c-b default prefix

tmux new -s basic → creates new session

**prefix + d** → detach where ctrl + b is default prefix for tmux

tmux ls → list sessions

tmux attach

tmux attach -t <session name>

tmux kill-session -t <session name>

**prefix + r** → reload

**prefix + c** → clear

**Windows**

tmux new -s windows - n shell

prefix + c → create a window

**prefix + ,** → rename window

prefix + n → move to next window

prefix + p → move to previous

prefix + 1 → move to window 1

prefix + 2 → move to window 2

prefix + f → find window by name

prefix + w → display windows on menu

prefix + & → exit window with confirmation

**Panes**

tmux new -s panes

prefix + | → divide vertical

prefix + - → divide horizontal

prefix + o → cycle through panes

prefix + <up, down left, right> → move around panes

prefix + spacebar → cycle layouts

prefix + x → close pane

prefix + H → resize right

prefix + J → resize down

prefix + K → resize up

prefix + L → resize left

**Command mode**

prefix + : → enter command mode

new window -n console → create window and give a name

new window -n processes “top” → create window and give a name ant start top program

**help**

prefix + ? tmux keybinding

**Scripting**

**Working with text buffers**

prefix + [ → copy mode

prefix + v → paster buffer

prefix + ] → paster current buffer contents

prefix + = → List all paste buffers

**Vim Mode settings**

prefix + Esc → copy mode

prefix + p → paste current buffer contents

Search

? search up

/ search down

buffers

show-buffer

list-buffer

choose-buffer

save-buffer [filename]

rename-session
```

[https://gist.github.com/spikegrobstein/5724689](https://gist.github.com/spikegrobstein/5724689)

[https://blog.victormendonca.com/2019/03/10/colorful-banners-with-figlet-and-lolcat/](https://blog.victormendonca.com/2019/03/10/colorful-banners-with-figlet-and-lolcat/)

figlet -f ~/.local/share/fonts/3d.flf -c Hello | lolcat

tmux display-popup -E 'figlet -f ~/.local/share/fonts/3d.flf -c "Reloaded !!!" | lolcat & sleep .4'

[https://unix.stackexchange.com/questions/52091/read-with-history](https://unix.stackexchange.com/questions/52091/read-with-history)

tmux send-keys -t %35 "date" ENTER

tmux send -X search-forward "foo"

Training Kubernetes

