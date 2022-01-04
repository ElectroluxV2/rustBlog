---
title: Making proper .desktop entry
description: blog description
published: true
---

# Making proper .desktop entry
Our showcase program will be `psst-gui` located in `/home/mate/psst/target/release` and has icon located `/home/mate/icons/psst.png`. You can use `which psst` command to get installation path of program.
>**Psst** is fast and multi-platform Spotify client with native GUI written in Rust [GitHub repository](https://github.com/jpochyla/psst).

## Run `psst` as you would normally run it.
We need to get proper StartupWMClass value for our program. While running `psst` open terminal and type this command: `xprop WM_CLASS`, notice your cursor turned into a crosshair. That is because you must click on the main window of the program. <br>
After doing such you will be left with something like that: `WM_CLASS(STRING) = "psst-gui", "Psst-gui"`. Remember these values between quotes. We will be using one of them in a second.

## Create a `psst-gui.desktop` file under one of locations.
* `~/.local/share/applications` (launcher will be visible only for your user)
* `~/Desktop` (same as above but you may like launcher to be clickable from desktop, requires being executable)
* `/usr/share/applications` (launcher will be visible for all users, requires root privileges)

## Put following content into newly created `.desktop` file.
StartupWMClass's value is one of the strings obtained by executing `xprop psst`. Which one? The one that works for you. But probably the latest to the right.
```properties
[Desktop Entry]
Encoding=UTF-8
Name=Psst
Exec=/home/mate/psst/target/release/psst-gui
Icon=/home/mate/icons/psst.png
Type=Application
StartupWMClass=Psst-gui
Categories=Audio;
```
You can list all possible categories [here](https://specifications.freedesktop.org/menu-spec/latest/apa.html)
You can also read specification of .desktop files [here](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html)

## Save and savor newly created launcher.
Now you should have working desktop launcher for any program you can possibly have. In case something went wrong, remember that Unix is a case-sensitive system, so watch out for that!
