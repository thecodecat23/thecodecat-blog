---
layout: post
title: "Exploring Primary Constructors in C#: A Purr-posal"
author: thecodecat
feature-img: "assets/img/feature-img/primary-constructors.png"
thumbnail: "assets/img/thumbnails/feature-img/primary-constructors.png"
tags: [C#, .NET, Visual Studio, Coding, Programming, PrimaryConstructors, CodingTips]
categories: [CSharp]
excerpt_separator: <!--more-->
---

Hello, coding kittens and tech tigers! TheCodeCat here, whiskers twitching and tail high. Today, we're going to explore a new feature that's currently under proposal and discussion in the C# world - the concept of **primary constructors**. 
<!--more-->

## Trying Out C# 12 Features 🚀

Before we dive into the world of primary constructors, let's first make sure you have the right tools to try out these new features. You can experiment with the new features of C# 12 **using the latest Visual Studio preview or the latest .NET 8 preview SDK**. 

### Visual Studio Preview 🛠️

Visual Studio Preview gives you early access to the latest features and improvements not yet available in the main release. It's a fully functional version of Visual Studio, so you can use it just like you would the regular version. You can download the latest Visual Studio Preview from [here](https://visualstudio.microsoft.com/vs/preview/).

### .NET 8 Preview SDK 📦

The .NET 8 Preview SDK includes everything you need to start building .NET applications. It comes with the latest features and improvements that are currently under development. You can download the latest .NET 8 Preview SDK from [here](https://dotnet.microsoft.com/download/dotnet).


**Now that you have the right tools, let's dive into the world of primary constructor**

## What are Primary Constructors? 🏗️

{% include aligner.html images="primary-constructors-worker.png" %}

Imagine a world where you could **declare constructor parameters directly on the class declaration**. Sounds purr-ty cool, right? This is the concept of primary constructors, a feature seen in languages like *Kotlin* and *Swift*, and now proposed for C#. 

```csharp
public class Cat(string name, int age);
```

This feature is not yet implemented in C#, and the document we're discussing is part of the ongoing language design process.

## Primary Constructors in Other Languages 🌍

{% include aligner.html images="primary-constructors-what.png" %}

To understand the potential **benefits** of primary constructors in C#, it's helpful to look at how they're implemented in other languages. *Kotlin* and *Swift*, for example, allow developers to declare constructor parameters directly on the class declaration. Here's how you would define a class with a primary constructor in *Kotlin*:

```kotlin
class Cat(val name: String, val age: Int)
```

## Proposed Syntax for C# 📝

{% include aligner.html images="primary-constructors-syntax.png" %}

The proposed syntax for primary constructors in C# is similar to *Kotlin* and *Swift*. The idea is to declare the constructor parameters directly in the class declaration, allowing developers to **define the class and its constructor in a single line of code**. Here's the proposed syntax:

```csharp
public class Cat(string name, int age);
```

## Example Usage 📖

{% include aligner.html images="primary-constructors-usage.png" %}

The proposal provides an example of how primary constructors could be used in C#. The example shows a class with a primary constructor and demonstrates how this feature can simplify the code. Here's the example:

```csharp
public class Cat(string name, int age)
{
    public string Name { get; } = name;
    public int Age { get; } = age;
}
```

## Semantics of Primary Constructors 🧠

{% include aligner.html images="primary-constructors-semantics.png" %}

The proposal also delves into the **semantics** of primary constructors, explaining how they would work with inheritance, how they would interact with other constructors in the class, and how they would handle default values. Here's an example of how primary constructors could work with inheritance:

```csharp
public class Lion(string name, int age, string pride) : Cat(name, age)
{
    public string Pride { get; } = pride;
}
```

## Interaction with Object Initializers 🔄

{% include aligner.html images="primary-constructors-interactions.png" %}

The proposal discusses how primary constructors would work with object initializers. It suggests that **object initializers could be used to override the values provided by the primary constructor**. Here's an example:

```csharp
var cat = new Cat("Whiskers", 3) { Age = 4 };
```

In this example the values provided in the initializer `{ Age = 4 }` would override the value provided in the primary construcotr `3`.

## Potential Issues and Proposed Solutions ⚠️

{% include aligner.html images="primary-constructors-issues.png" %}

While the introduction of primary constructors in C# could offer many benefits, the proposal also acknowledges **potential challenges** that need to be addressed. Two key issues are highlighted: potential **conflicts with property declarations** and possible **confusion with constructor chaining**.

### Conflicts with Property Declarations 🏷️

In C#, it's common to declare properties within a class. However, if a primary constructor parameter has the same name as a property, it could lead to **ambiguity**. For example:

```csharp
public class Cat(string name, int age)
{
    public string Name { get; set; }
    public int Age { get; set; }
}
```

In this example, it's unclear whether the `name` and `age` parameters of the primary constructor are related to the `Name` and `Age` properties.

### Confusion with Constructor Chaining 🔄

Constructor chaining is a technique in C# where one constructor calls another in the same class using the `: this` keyword. However, with primary constructors, there could be **confusion** about which constructor is being called. For example:

```csharp
public class Person(string name, int age) : this(name)
{
    public Person(string name)
    {
        // ...
    }
}
```

In this example, it's unclear whether the `: this(name)` is calling the primary constructor or the additional constructor.

### Proposed Solutions 🛠️

To address these issues, the proposal suggests a few solutions. One idea is to **introduce a new keyword or syntax to distinguish primary constructor parameters from property declarations**. This would help to resolve any ambiguity and make the code clearer.

For the issue of constructor chaining, the proposal suggests **adjusting the syntax to avoid confusion**. However, the exact details of these solutions are still under discussion, and the proposal invites feedback from the C# community.

## Conclusion 🎯

{% include aligner.html images="primary-constructors-conclusion.png" %}

The proposal concludes by stating that primary constructors could **simplify C# code and make it more readable**. It also emphasizes that the feature is not yet implemented and that feedback is welcome. This indicates that the design process is ongoing and that user input is valued in shaping the final implementation of the feature.

Primary constructors represent an exciting potential development for C#. By learning from other languages and considering the unique needs of C# developers, this proposal offers a thoughtful approach to enhancing the language's capabilities. As the C# language design process continues, it will be interesting to see how this proposal evolves and what impact it might have on the future of C# programming.

## Fur-ther Reading 📚

{% include aligner.html images="primary-constructors-reading.png" %}

For those interested in delving **deeper** into this topic, the full proposal provides a wealth of information. It offers a comprehensive look at the potential benefits and challenges of implementing primary constructors in C#. It also provides a valuable insight into the C# language design process, demonstrating how new features are proposed, discussed, and refined before they become part of the language. You can read the full proposal on the [Microsoft C# Language Proposals page](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/primary-constructors).

## Your Thoughts 💭

{% include aligner.html images="primary-constructors-thoughts.png" %}

As the proposal emphasizes, **feedback is a crucial part of the language design process**. Whether you're a seasoned C# developer or a newcomer to the language, your thoughts and experiences can contribute to the evolution of C#. So, what do you think about the idea of primary constructors in C#? How would you use this feature in your code? What potential issues do you foresee, and how might they be addressed?

Remember, the future of C# is not just in the hands of its designers, but also in the hands of its users. Your input can help shape the future of the language, making it more powerful, more flexible, and more suited to the needs of developers. So don't hesitate to share your thoughts and join the conversation.

## Explore Primary Constructors in Action! 🐱

{% include aligner.html images="primary-constructors-project.png" %}

Now, if you're itching to see primary constructors in action, I've got a treat for you! I've created a GitHub repository called [CSharp 12 Catventures](https://github.com/thecodecat23/csharp12-catventures), where I'll be adding projects showcasing each new C# 12 feature. For our exploration of primary constructors, I've added a project called **"CatCafe"**. It's a simple console application that simulates a cat café, with different types of cats represented by different classes. Each cat has its own properties and behaviors, defined using primary constructors. Feel free to check it out, play around with it, and let me know what you think!

*Stay curious, stay bold, and as always, keep your whiskers in the wind and your paws on the keyboard!*