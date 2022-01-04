---
title: Find woman name in text
description: Rust exercise
published: true
---

# Find woman name in text
Your task is to get input from user, print message depending on if input contains woman name until name equals `Laura`<br>
We assume that word that starts with big letter and ends with small letter `a` is a valid woman given name.

# Example
Input: `Alicja is dumb.`<br>
Output: `Found woman name "Alicja"`
<br>
<br>
Input: `Marcin is my the richest fellow content maker.`<br>
Output: `No woman name in text`
<br>
<br>
Input: `Laura is my bro <3`<br>
Output: `Found target name, exiting`

# Notes
Your program must be split into four functions:
```rust
fn main() { } // Loop logic
```

```rust
fn get_input_from_user() -> &str { } // Read user's input, trim it and returns it.
```

```rust
fn get_woman_name_from_text(text: &str) -> Option<T> { } // Returns woman name from user input, consumes user input
```

```rust
fn print_message_based_on_name_presence(name: Option<T>) { } // Prints message
```
