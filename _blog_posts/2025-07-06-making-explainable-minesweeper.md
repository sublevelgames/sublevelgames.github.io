---
layout: blog_post
title: "💣Making Explainable Minesweeper(DRAFT)"
image: /images/making-explainable-minesweeper.png
excerpt: "Exploring how Wave Function Collapse (WFC) algorithm solved map generation failures for Logic Islands' Modern, Minimal, and Yin-Yang rulesets at sizes above 7x7. Learn how proper tile connections and constraints can automatically generate maps satisfying complex puzzle rules."
tags: ["🎮Game", "🧩Puzzle", "💣Minesweeper", "🤖Algorithm", "💻Game Dev"]
colors: ["info", "info", "info", "info", "info"]
id: making-explainable-minesweeper
comments: true
hidden: true
---

<span class="badge badge-info">🎮Game</span>
<span class="badge badge-info">🧩Puzzle</span>
<span class="badge badge-info">💣Minesweeper</span>
<span class="badge badge-info">🤖Algorithm</span>
<span class="badge badge-info">💻Game Dev</span>

# Background

I recently purchased and played a game called [14 Minesweeper Variants](https://store.steampowered.com/app/1865060/14/) during a Steam sale. It was a fun game. However, I became curious while looking at the hints provided in the game. What exactly are these?

![This is the screen when using hints. Can you figure out what this means?](/images/ems01.png)

Actually, when I played Minesweeper, which was a default Windows game, I could solve cases where there was a definite answer, but I remember stepping on countless mines in ambiguous situations. For example, situations like this:

![What should you do here? Usually, you step on a mine.](/images/ems02.png)

The numbers 1 and 2 indicate the number of mines in each cell's 8 neighbors (up, down, left, right, and diagonals). Empty cells mean there are no mines in their neighbors. However, in situations like the image above, it's not easy to figure out which squares have mines and which don't. It's also difficult to accurately guess the mine locations because there are too few mines.

# 50/50 Situations

Let's look at this situation. This image is from [this source](https://funnyjunk.com/funny_pictures/4582680/5050+chance/), and it's exactly a 50/50 probability. There's 1 mine left, and whichever of the two remaining squares you choose, there's a chance it could be a mine.

![Should I cut the red wire or the blue wire? What if I cut both?](/images/ems03.png)

This situation occurs due to Minesweeper's map generation algorithm. The original Minesweeper usually doesn't let you step on a mine on your first click. This is because it places mines in locations other than the square the user selects on their first click. Since mines are placed at that moment, it can't perform enough calculations to prevent 50/50 situations. When I experimented, finding boards solvable only through logical deduction required about 250,000 attempts per level on a 9x9 board with 33 mines.

# Situations Where Deduction is Possible

However, there's a common mistake that beginners like my past self often make. They think it's a 50/50 situation and leave it to luck when deduction is actually possible! The [14 Minesweeper Variants](https://store.steampowered.com/app/1865060/14/) I mentioned earlier provides hints for such situations. Let's go back to the previous image:

![This is the screen when using hints. Can you figure out what it means now?](/images/ems04.png)

Here's how to interpret this image. The purple square is the **common area** shared by the two highlighted 2 cells. The upper 2 still has 7 neighbors remaining, but the lower 2 is at the edge of the game map, so it only has 4 neighbors. Due to the existence of the lower 2, there must be exactly 2 mines in the common area. So what's in the 3 cells above the upper 2? At least they're not mines. That's why those cells are safe to open.

![Indeed! There were no mines in the 3 upper cells!](/images/ems05.png)

Now I've explained the ambiguous part. While it's relatively easy to understand when explained in natural language like this, that game, although excellent, shows this with symbols, which took me a long time to interpret. I thought I probably wasn't the only one. So what if there was a game that explained this in natural language? Wouldn't it be able to show many people that they can solve more problems by making one step of deduction in Minesweeper? With this thought, I decided to create a game.


