---
title: Print rainbow-ed text
description: blog description
published: false
---

# Print rainbow-ed text
Your task is to read user input and then print it back, but every character must be different colored in the order of the colors appearing in the rainbow. <br>

# Notes
The colours of the rainbow are: Red, orange, yellow, green, blue, indigo, violet. <br>
Your program must be split into at least these functions:
```rust
fn main() { } // General logic
```

```rust
fn get_input_from_user() -> &str { } // Read user's input, trim it and returns it.
```

```rust
fn print_rainbowed_text(text: str) { } // Prints text character by character with next rainbow's color.
```

Your code must use `Enum` that is defined like so:
```rust
enum Color {
    Red,
    Orange
    // ...
}


impl Color {
    fn value(&self) -> (u8, u8, u8) {
        match *self {
          Color::Red => (255, 65, 54),
          Color::Orange => (255, 133, 27)
          // ...
        }
    }

    fn write(&self, text: &str) -> String {
        format!("{}/{}/{}", "R", "G", "B") // TODO: Implement actual virtual codes
    }
}
```

Your program should corretly handle this function:
```rust
fn test_red_color() {
    println!("Normal {} Text", Color::Red.write("Red text"));
}
```

> You can get HEX color values of my favorite color palette [here](https://clrs.cc/)
