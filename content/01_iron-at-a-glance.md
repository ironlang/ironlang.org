---
id: iron-at-a-glance
title: Iron at a Glance
---

# Iron at a Glance

### Iron aims to maintain a small conceptual surface area. This is reinforced with other language decisions that get out of your way and guide you toward code that "just works."

Systems built in Iron are composed from different primitives: **types**, **functions**, and **protocols**. Iron code is made reusable by organizing it into different **modules**, which can be imported locally or from a remote repository. Modules are versioned with Git and follow the [semantic versioning](https://semver.org/) convention.

```fe
import "io"

// Represents a color.
type RGB (U8, U8, U8)

// Represents a person.
type Person {
	name          String
	favoriteColor RGB?
}

implement Person {
	// Returns a string introducing the `Person`.
	introduce(self Self) String {
		"Hi, my name is ${self.name}!"
	}
}

function main() {
	let name = "Sam"
	let favoriteColor = (0, 122, 255)
	let author = Person{name, favoriteColor}

	io.print(line: author.introduce())
}
```
