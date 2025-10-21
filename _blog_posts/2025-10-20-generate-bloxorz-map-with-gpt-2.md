---
layout: blog_post
title: "✨Generating Bloxorz Game Levels with GPT-2"
image: /images/generating_bloxorz_gpt2.png
excerpt: "Exploring how GPT-2, a 2019 language model, can generate Bloxorz puzzle levels through text-based map representation. This post examines the limitations of traditional search-based puzzle generation and introduces LLM-based procedural content generation as an alternative approach for indie game developers facing content production bottlenecks."
tags: ["🎮Game", "🧩Puzzle", "🤖Algorithm", "🎲PCG", "💻Game Dev"]
colors: ["info", "info", "info", "info", "info"]
id: generating-bloxorz-gpt2
comments: true
hidden: true
---

<span class="badge badge-info">🎮Game</span>
<span class="badge badge-info">🧩Puzzle</span>
<span class="badge badge-info">🤖Algorithm</span>
<span class="badge badge-info">🎲PCG</span>
<span class="badge badge-info">💻Game Dev</span>


![Mindcraft on Steam](/images/mindcraft.jpg)


Want to try the game first? You can play the [web demo version](https://sublevelgames.itch.io/mindcraft-demo) here. Don't forget to add it to your [Steam wishlist](https://store.steampowered.com/app/3974510/Mindcraft/)!

This blog post explores how to generate Bloxorz game maps using GPT-2, a topic that has not been addressed with LLM + PCG techniques before.

# Why LLM+PCG

In modern video game development, producing game design content is a representative bottleneck that requires high costs and time investment. The market is changing rapidly, and notably, more games are being released on the Steam platform every year. [^1] Among all games released on Steam in 2024, 98.9% were indie games [^2], showing an overwhelming proportion of small-scale developers. The smaller the development company, the more limited the manpower and resources, which increases the burden of game design content production. Recently, in the fields of game art and marketing assets, various content production has become possible with tools like Stable Diffusion, Midjourney, and Veo3, but specialized content production tools and techniques targeting game design are still lacking.

The infinite possibilities when LLM is applied to other fields, combined with the fact that no remarkable achievements have been made in this area yet, are attracting game developers and researchers to game design content production. Recent major research includes Sokoban level generation through direct level data learning [^3], VGDL (Videogame Description Language)-based simultaneous game and rule/level generation [^4], and automatic PuzzleScript game generation and testing [^5].

![VGDL game generation prompt example](/images/gpt2b01.png)  
Prompt structure for VGDL (Videogame Description Language)-based simultaneous generation of games and rules/levels. It learns game rules and level structures together.[^4]

# Bloxorz

[Bloxorz](https://www.crazygames.com/game/bloxorz) is a classic puzzle game famous for its simple rules and high difficulty, which gained great popularity during the Adobe Flash era in the mid-2000s.

![Bloxorz screenshot](/images/gpt2b02.png)

Players must roll a 1x1x2 rectangular block with arrow keys to fit it precisely into a designated hole. The floor has various gimmicks, including bridges that can be created or removed, orange blocks that collapse unless weight is distributed, and switches that temporarily split the block into two pieces.

The controls are very easy and responsive, but the game requires players to think about many elements, such as moving a 3D block to progress and facing game over with a single mistake, which creates an engaging gaming experience.

# Traditional Puzzle Design Method: Backward Reasoning

One traditional puzzle design method is backward reasoning. Starting from the solution state, you take actions in reverse to move to the initial state.

Let's apply this method to Bloxorz puzzle maps. While the game is 3D, the map itself is 2D, consisting of tiles without different heights. There are empty spaces and spaces where blocks can be positioned. If we set empty spaces as `_`, spaces where blocks can be positioned as `.`, and the goal point as `g`, we can represent an example map on a 6x6 grid like this:
```
...___
_...._
_...._
_.....
_...g.
_.....
```

![Map image visualization](/images/gpt2b03.png)

How should we determine the starting point with the backward reasoning technique? First, we must start from the solution state, so we start at point g. Let's arbitrarily mark the block as `1`.
```
...___
_...._
_...._
_.....
_...1.
_.....
```

![Map image visualization starting from solution state](/images/gpt2b04.png)

What about the next state? There are two cases where the block can move to reach the correct position. Moving right or down would cause the block to fall below the game space and end the game, so these are not appropriate actions.

![Map image visualization starting from solution state+1](/images/gpt2b05.png)

Continue taking actions this way, and set the game starting position as a state sufficiently far from the goal. Any repetitive movements in between should be removed. For example, starting from the top-left starting point as shown below, the problem can be solved in just 6 turns.

![Solving problem from starting state](/images/gpt2b06.gif)

This is called search-based generation technique. What's the problem? First, code processing becomes complex when gimmicks are intertwined. In the case of the bridge gimmick below, it must start in an activated state and then be deactivated. If there are about two more such gimmicks, each case must be considered.

![Processing bridge gimmick](/images/gpt2b07.gif)

Additionally, as the search space grows, the number of nodes to search increases exponentially. While effective search techniques can be used to prune as much as possible, otherwise problems such as infinite loops may occur. If you present "a problem that requires at least 20 moves on a 12x12 map," the backward reasoning technique may or may not be effective. And having more tools in the toolbox is always better than having fewer. The tool newly attracting attention from PCG researchers is LLM.

# GPT-2

GPT-2 is the second version of OpenAI's large-scale artificial intelligence language model released in 2019. The parameters, which are used as a unit almost equivalent to LLM performance, range from 117M to 1.5B in various sizes. The successor model GPT-3 had a significantly increased parameter size of 175B, and as of 2025, LLMs have parameters ranging from tens of billions to hundreds of billions. In short, GPT-2 has lower performance than current LLMs.

![GPT-2, auto-regressive model](/images/gpt2b08.gif)

GPT-2 is auto-regressive. This characteristic means that generated tokens are added to the input sequence at the next step, becoming new input. Game levels have sequential dependencies—when a block is placed, there's a high probability that related blocks will be placed next to it—which makes auto-regressive generation a useful feature for game level generation. For example, in Super Mario, if you place a block at a certain position, the adjacent space must be within jumpable distance and there must be a platform to land on.

![Image showing sequential dependencies in Mario](/images/gpt2b09.gif)  
[Image Source Link](https://medium.com/@eway/using-a-generative-adversarial-network-to-author-playable-super-mario-bros-levels-223736bd4ce)






[^1]: [Steam Game Releases](https://steamdb.info/stats/releases/)

[^2]: [Indie Games Market Reached Unprecedented Success in 2024, 80lv](https://80.lv/articles/indie-games-market-reached-unprecedented-success-in-2024)

[^3]: [Todd, Graham, et al. "Level generation through large language models." Proceedings of the 18th International Conference on the Foundations of Digital Games. 2023.](https://arxiv.org/abs/2302.05817)

[^4]: [Hu, Chengpeng, Yunlong Zhao, and Jialin Liu. "Game generation via large language models." 2024 IEEE Conference on Games (CoG). IEEE, 2024.](https://arxiv.org/abs/2404.08706)

[^5]: [Earle, Sam, et al. "ScriptDoctor: Automatic Generation of PuzzleScript Games via Large Language Models and Tree Search." arXiv preprint arXiv:2506.06524 (2025).](https://arxiv.org/abs/2506.06524)

