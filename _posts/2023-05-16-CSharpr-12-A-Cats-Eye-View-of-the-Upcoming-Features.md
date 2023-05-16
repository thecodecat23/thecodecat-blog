---
layout: post
title: "A Curious Cat's Adventure in C# 12 Land"
author: thecodecat
feature-img: "assets/img/feature-img/cat-climbing-stairs.png"
thumbnail: "assets/img/thumbnails/feature-img/cat-climbing-stairs.png"
tags: [C#, .NET, Visual Studio, Coding, Programming]
categories: [CSharp]
excerpt_separator: <!--more-->
---

Hello fellow coding adventurers! Imagine being a cat, full of curiosity, exploring the nooks and crannies of a house. As **"The CodeCat,"** that's how I feel, prowling through the vast landscape of **C# 12**, uncovering its hidden treasures. 
<!--more-->
If you're itching to join me on this adventure, grab your adventurer's kit: the latest Visual Studio preview or the .NET 8 preview SDK. 

Our expedition map features some fascinating locations:

- 🏞️ **Primary Constructors Plains**
- 🏜️ **Optional Parameters Oasis**
- 🏔️ **Alias Any Type Mountain**

## 🏞️ Primary Constructors Plains

Imagine you're in a vast plain, where once only record types could roam. With the dawn of C# 12, primary constructors are no longer confined to these plains - they have ventured into the wilds of any class or struct.

The scope of primary constructor parameters is as broad as the plain itself, spreading across the entire body of the class. To ensure that no parameter is left unattended, all explicitly declared constructors call the primary constructor using the `this()` syntax, like a headcount before embarking on a journey. 

> 🐾 Cat's tip: Adding a primary constructor to a class is like hiding the yarn from a kitten - it stops the compiler from declaring an implicit parameterless constructor. 

But remember, every plain has its pitfalls. The compiler only generates public properties for primary constructor parameters in record types, either record class or record struct types. It's like marking your territory, and non-record classes and structs might prefer a more private domain.

In our next blog post, we'll go on a safari across these plains, examining primary constructors in detail.

##  🏜️ Optional Parameters Oasis

Lambda expressions, the powerful cheetahs of C#, have found an oasis where they can define default values for parameters. This oasis follows the same rules as any method or local function - a tranquil pond mirroring its surroundings.

If this oasis seems like a mirage, fear not! We'll dive into its waters and explore optional parameters on lambda expressions in an upcoming article.

## 🏔️ Alias Any Type Mountain

Aliasing, a seasoned mountaineer in C#, has discovered a new peak in C# 12. The `using` alias directive can now tackle any type of terrain, not just named types. This means you can create semantic aliases for tuple types, array types, pointer types, and even other tricky paths. 

Pack your climbing gear because we'll be scaling this exciting feature in a future blog post. 

## 🐾 Journey's End 

Our journey through the evolving landscape of C# has just begun. **C# 12** is an uncharted territory full of exciting discoveries, and I can't wait to continue our adventure.

Remember, fellow coding explorers, the secret to mastering this vast terrain is to keep learning. So let's ignite our curiosity, sharpen our coding skills, and claw our way to the top, just like a cat climbing a tree!

Our next adventure awaits us. Until then, stay curious, and keep coding!

{% include aligner.html images="black-cat-learning.png" %}