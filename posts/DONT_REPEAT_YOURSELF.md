---
title: "DON'T REPEAT YOURSELF (aka. DRY)"
date: "Jan 26, 2022"
excerpt: "Keeping in mind the DRY principal will be one of your north stars for writing clean code"
cover_image: "/images/posts/DONT_REPEAT_YOURSELF.png"
category: "Design Principles & Patterns"
author: "Ken Fowler"
author_image: "/images/profile-photo.jpg"
---

# DON'T REPEAT YOURSELF (aka. DRY)

## Intro

Woah! That title was a little much, but it is REALLY important to keep your code DRY. This week I've been paying attention to why DRY has become a design principle by observing what happens to your codebase when you don't follow it and how your codebase improves when you refactor it to follow DRY.

## What is DRY?

DRY is a _software design principal_ that suggests if you want to write clean code then you should not repeat yourself. If you're re-writing code all over your program then you might be violating the principal.

## What are the pros and cons of DRY

Following DRY has the effect of isolating your code and making it more reusable. If you can refactor your duplicated code into a function or a method then, if you need to update that code, you can do it in one place and have it apply everywhere. If you need to use the same logic elsewhere in the program it is easy to implement.

Another benefit is that if you can abstract some duplicated code out into a reusable function or method you can give it a descriptive name. This improves your readability even further as the function/method call explains itself.

Additionally, DRY encourages you to write fewer total lines of code. Having less code duplication and therefore less code to read can make it easier to maintain because there is simply less information to process while reading it.

The cost to writing DRY code can be that initially it takes longer to develop. You spend more time designing, partitioning, and refactoring code up front. In the long run you save time because your code is easier to read and maintain.

**SUMMARY - DRY code is:**

- Reusable
- Readable
- Maintainable
- Saves time in the long run
- Demands an initial investment in designing, partitioning and refactoring in the short run.

## Let's see some examples

Here's a couple examples of violating the DRY principle and how code can be refactored to bring it into conformance.
I'm going to demonstrate it using an example in CSS and then in JavaScript, but you can apply this principle to any language.

Let's start with an example of CSS code that violates DRY:

```css
.section {
  display: flex;
  flex-direction: column;
}

.article {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
}
```

In this example we are styling three classes with the same declarations. As our front-end grows we may repeat this combination over and over as laying out elements in a flexbox is fairly common.

To keep this dry we could create a utility class that combines these declarations. Here's an example:

```css
.flex-col {
  display: flex;
  flex-direction: column;
}
```

There we go! Now we've abstracted this common combination of declarations into a single class that can be applied to any element we need instead of creating new selectors to implement the same behavior. Our code is more readable because there is simply less of it and we have a descriptive selector name that says exactly what the code does.

That's nice! Let's look at another example to show that we can apply this principle to different languages - specifically JavaScript. Here we are writing a program that fetches data from our file system to build into our blog.

```javascript
export function getPosts() {
  //gets posts from the file system
}
```

Instead of duplicating the logic of this function in our program where we need it, we keep our code dry by creating a utility folder and exporting this function from it.

Now all we have to do is import the function where it's needed. No duplicated logic or long winded, complicated files.
