---
layout: post
title: "C# 12: A Kitty's Guide to the Latest Features "
author: thecodecat
feature-img: "assets/img/feature-img/cat-climbing-stairs.png"
thumbnail: "assets/img/thumbnails/feature-img/cat-climbing-stairs.png"
tags: [C#, .NET, Visual Studio, Coding, Programming]
categories: [CSharp]
excerpt_separator: <!--more-->
---

Just as cats are driven by curiosity, I, **The CodeCat**, have been pawing through the latest updates in **C# 12**. Some new features have caught my attention and I'm excited to share them with you! 

If you're eager to try out these features, you can do so with the latest Visual Studio preview or the .NET 8 preview SDK. 

Today, we're going to explore these features<!--more-->:

- [x] 🐾 **Primary constructors**
- [x] 🐾 **Optional parameters in lambda expressions**
- [x] 🐾 **Alias any type**

## 🐾 Primary Constructors

In the past, primary constructors were confined only to record types. But with C# 12, that's no longer the case. You can now use them in any class or struct. 

Primary constructor parameters are accessible throughout the class body. To ensure all primary constructor parameters are definitely assigned, all explicitly declared constructors must call the primary constructor using the `this()` syntax. 

> 🐾 Fun fact: Adding a primary constructor to a class prevents the compiler from declaring an implicit parameterless constructor. In a struct, the implicit parameterless constructor initializes all fields, including primary constructor parameters, to the 0-bit pattern. 

Here's a little twist though. The compiler only generates public properties for primary constructor parameters in record types, either record class or record struct types. Non-record classes and structs might not need this behavior for primary constructor parameters. 

We'll dig deeper into primary constructors in a future article, so stay tuned!

## 🐾 Optional Parameters in Lambda Expressions

Lambda expressions have always been a powerful tool in C#. Now, they're even more powerful with the ability to define default values for parameters. The rules and syntax are the same as adding default values for arguments to any method or local function. 

Don't worry if you're feeling a bit confused - we'll explore optional parameters on lambda expressions in a future article.

## 🐾 Alias Any Type 

Aliasing isn't a new concept in C#. But in C# 12, the `using` alias directive has been enhanced to alias any type, not just named types. This means you can create semantic aliases for tuple types, array types, pointer types, or even other unsafe types. 

We'll explore this cool new feature in more detail in a future post. 

## 🐾 Final Thoughts 

C# is continuously improving, and I'm thrilled to explore what **C# 12** has in store for us. We'll be diving deeper into each of these features in upcoming articles, so make sure to keep an eye out for those. 

Remember, my fellow coding enthusiasts, the secret to staying sharp in this ever-evolving field is perpetual learning. So let's keep our curiosity aflame, continue coding, and like a cat, always land on our feet! 🐾

Whether you're a seasoned programmer or a newbie on the scene, I hope you found this post informative and engaging. I'm here to help you navigate the captivating world of coding. 

Stay curious, stay coding!

{% include aligner.html images="black-cat-learning.png" %}