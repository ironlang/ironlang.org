---
id: types
title: Types
---

# Types

### The Iron type system helps you confidently organize your data in a way that is safe and efficient.

## Primitives

At the foundation of the Iron type system is a set of _primitives_ from which all other types are derived.

### Booleans

The `Boolean` type has only two possible values: `true` or `false`. It works just like boolean types in other languages, used primarily in conditional expressions, which we will dig into later.

### Numbers

Numeric types are available in many sizes, in both signed (-2^(N-1) - 1 to 2^(N-1)) and unsigned (0 to 2^N - 1) varieties.

| Size            | Signed | Unsigned | Floating Point |
| --------------- | ------ | -------- | -------------- |
| 8 bits          | `I8`   | `U8`     |                |
| 16 bits         | `I16`  | `U16`    |                |
| 32 bits         | `I32`  | `U32`    | `F32`          |
| 64 bits         | `I64`  | `U64`    | `F64`          |
| 128 bits        | `I128` | `U128`   | `F128`         |
| Pointer size \* | `Int`  | `Uint`   |                |

_\* Either 32 or 64 bits depending on the system architecture._

## Defining Custom Types

Custom types are defined by using the `type` keyword, using the following format as specified by the Iron language grammar:

```
typedef := `type` ~ <identifier> ~ <type_expr>
```

Custom types generally fall into one of three categories: **alias**, **enum**, and **structure** types.

Let's review some examples of each.

### Alias Types

Alias types are loose but distinct references to existing types.

```fe
type Byte U8
```

```fe
type RGB (Byte, Byte, Byte)
```

```fe
type Colors Array<RGB>
```

### Enum Types

If a variable is an enum type, its value must be one of a pre-defined set of values.

```fe
type WebEvent {
	pageLoad,
	pageUnload,

	keyPress(Character),
	paste(String),
}
```

### Structure Types

Structures contain typed properties, typically related to some sort of entity.

```fe
type Position {
	x I64
    y I64
}

type WebEvent {
	pageLoad,
	pageUnload,

	keyPress(Character),
	paste(String),

	click(Position),
}
```

## Collections

## Generics
