---
layout: blog_post
title: "🏝️Nurikabe Map Generation with WFC algorithm(DRAFT)"
image: /images/nurikabe-map-gen.jpg
excerpt: excerpt
tags: ["🎮Game", "🧩Puzzle", "🤖Algorithm", "🎲PCG", "💻Game Dev"]
colors: ["info", "info", "info", "info", "info"]
id: nurikabe-map-gen-with-wfc
comments: true
hidden: true
---

<span class="badge badge-info">🎮Game</span>
<span class="badge badge-info">🧩Puzzle</span>
<span class="badge badge-info">🤖Algorithm</span>
<span class="badge badge-info">🎲PCG</span>
<span class="badge badge-info">💻Game Dev</span>

# Background

[Logic Islands](https://sublevelgames.github.io/logic-islands/), released by sublevelgames on June 20, 2025, is a game where players place islands and walls according to predefined rule sets. The game features 6 different rule sets, and WFC was used to create stages for 3 of these rules. Today, I'd like to share the story behind this implementation.

## WFC

[WFC (Wave Function Collapse)](https://github.com/mxgmn/WaveFunctionCollapse) is a type of PCG (Procedural Contents Generation) algorithm that analyzes the connectivity patterns of source material to generate output with identical connectivity relationships. Texture Synthesis is the general term for this technique, which creates large result images from small source images.

![WFC creates large images from original images](/images/nmg01.png)

WFC creates new results based on complex connectivity relationships from the source. Since denser connectivity patterns require more computational resources, it's better suited for generating sparse outputs. Examples include simple 2D pixel art, 3D tile models, or tile-based game maps shown in the original algorithm.

## Nurikabe

Logic Islands is heavily influenced by [Nurikabe](https://www.nikoli.co.jp/en/puzzles/nurikabe/) published by Nikoli and the Logic Puzzles from Islands of Insight developed by Lunarch Studios. Nurikabe is a game where each cell in a grid is designated as either island or wall. Numbers in the grid indicate island sizes, each island must contain exactly one number, all walls must be connected, and no 2x2 wall blocks are allowed. Logic Islands uses these conditions as its Classic rule set.

![The process of solving nurikabe puzzles, from Nikoli](/images/nmg02.png)

Nurikabe has many derivative rules, each existing as separate games.

## Islands of Insight

[Islands of Insight](https://store.steampowered.com/app/2071500/Islands_of_Insight/) is a fantastic 3D game offering over 10,000 puzzles across 24 types. These puzzles require various skills including reflexes, logic, and observation. Among them, Logic Grid is a game that purely requires logical thinking. Logic Grid breaks down Nurikabe's basic form further, creating various variations by having players complete patterns without numbers, adding exceptions to certain rules, or introducing additional rules.

![Islands of Insight's Logic Grid rule types](/images/nmg03.png)

# Logic Islands' 6 Rule Sets

Logic Islands' 6 rules are as follows:

| Rule Set | Wall Connection | Island Connection | Island Separation | 2×2 Walls | 2×2 Islands | Special Rules |
|------|---------|---------|---------|---------|---------|-----------|
| **Classic** | ✅ Required | ❌ | ✅ Required | ❌ Forbidden | ✔️ Allowed | - |
| **Modern** | ✅ Required | ❌ | ✅ Required | ✔️ Allowed | ❌ Forbidden | - |
| **Strict** | ✅ Required | ❌ | ✅ Required | ❌ Forbidden | ✔️ Allowed | Wall junction limit (3+ way connections forbidden) |
| **Minimal** | ❌ | ❌ | ✅ Required | ✔️ Allowed (irrelevant) | ✔️ Allowed | All wall groups must be exactly 3 cells |
| **Orb** | ❌ | ❌ | ✅ Required | ✔️ Allowed | ❌ Forbidden | - Each island needs 1 orb<br>- Single-cell islands forbidden |
| **Yin-Yang** | ✅ Required | ✅ Required | ❌ | ❌ Forbidden | ❌ Forbidden | Islands without numbers allowed |


**Classic**, as mentioned above, uses identical rules to the original Nurikabe. 

**Modern** allows 2x2 walls but forbids 2x2 islands, creating a fresh map feel. 

**Strict** adds wall junction restrictions to Classic - walls cannot have 3 or more neighbors - creating more constrained wall patterns. 

**Minimal** removes the wall connectivity requirement and adds a restriction that all wall groups must be exactly 3 cells. 

**Orb** requires each island to contain one purple orb and removes the wall connectivity requirement. 

Finally, **Yin-Yang** removes numbers from islands but requires all walls to be connected, all islands to be connected, and forbids both 2x2 walls and 2x2 islands, creating map patterns resembling interlocking yin-yang symbols.

![Map examples of Logic Islands' 6 Rule Sets](/images/nmg04.png)

# Problems with 3 Rules

If everything had ended after creating the map generator, there wouldn't have been any issues. The game uses maps ranging from 4x4 to 12x12, but some rule sets had problems generating maps larger than 7x7. Modern, Minimal, and Yin-Yang were the problematic rule sets. This was something we couldn't have known without trying.

The issue with these rule sets was their inability to generate valid wall patterns. The puzzle generation order in my generator worked like this:

![Simplified process](/images/nmg05.png)

For Modern, Minimal, and Yin-Yang, I implemented wall pattern generation using WFC.

![Process using WFC for Modern, Minimal, Yin-Yang](/images/nmg06.png)

# Solving Problems with WFC in Detail

When creating wall patterns with WFC, there are two crucial considerations:
- How to represent wall connectivity requirements?
- How to represent the prohibition of 2x2 walls?

If we can effectively express these two conditions with WFC, we can significantly reduce the time spent searching for random walls.

For map generation, we commonly used Simple-Tiled WFC. Unlike the more complex Overlapping WFC, Simple-Tiled WFC stores each tile and its connection information, then uses this to generate outputs. In the figure below, Simple-Tiled WFC defines 7 types of tiles (a), uses the connection relationships where roads meet non-roads (b), and generates the result (c).

![Example of Simple-Tiled WFC output generation. Source: [https://ieeexplore.ieee.org/abstract/document/10443044/](https://ieeexplore.ieee.org/abstract/document/10443044/), Tileset: kenney](/images/nmg07.png)

Now let's apply this model to creating wall patterns for Logic Islands. First, we need to define tiles. The basic tiles we'll use are these 15 types:

![15 types of tiles to use](/images/nmg08.png)

I defined the tiles this way because I used a similar method when creating [Flow Free](https://play.google.com/store/apps/details?id=com.bigduckgames.flow) game maps, and it was very effective. For those interested in more details, please refer to [this paper](https://www.researchgate.net/publication/378377175_Puzzle-Level_Generation_with_Simple-tiled_and_Graph-based_Wave_Function_Collapse_Algorithms), and also check out [this game](https://sublevelgames.github.io/dot-king/) and [this game](https://sublevelgames.github.io/dot-and-dot/).

To briefly discuss Flow Free map generation, since all given node pairs must be connected and all given surfaces must be filled, we actively used constraints in WFC. After filling the entire game map, we completed the Flow Free map by giving each line a different color.

![Flow Free map generation example](/images/nmg09.png)

Now returning to Logic Islands, let me explain the tiles used here.

Tiles 0 through 3 are terminal nodes. They connect in only one direction, with the other three directions being empty spaces. We can represent this in data as follows:

```javascript
// left, up, right, down
const tiles = {
 0: [0, null, null, null],
 1: [null, 0, null, null],
 2: [null, null, 0, null],
 3: [null, null, null, 0]
};
```

Tile definitions consist of 4 values per tile. Each position represents connections from the current tile in the left, up, right, and down directions. 0 indicates a connection exists and represents the first color. null means no connection.

Tiles 4 through 9 are 6 L-shaped tiles that connect in 2 directions. These can be represented in code as follows:

```javascript
// left, up, right, down
const tiles = {
 ...,
 4: [0, 0, null, null],
 5: [0, null, 0, null],
 6: [0, null, null, 0],
 7: [null, 0, 0, null],
 8: [null, 0, null, 0],
 9: [null, null, 0, 0]
};
```

Tiles 10 through 13 are 4 T-shaped tiles that connect in 3 directions. Tile 14 is cross-shaped, connecting in all 4 directions. Tile 15 is empty space, which is essential for defining data and specifying constraints.

```javascript
// left, up, right, down
const tiles = {
  ...,
  10: [0, 0, 0, null],
  11: [0, 0, null, 0],
  12: [0, null, 0, 0],
  13: [null, 0, 0, 0],
  14: [0, 0, 0, 0],
  15: [null, null, null, null]
};
```

Now that we've finished defining tiles, let's look at connection relationships. For connections, it seems we should connect tiles that have connections with each other, and tiles without connections with each other. Following this logic, Tile 0 would meet these tiles:

![Tile 0's Left/Up/Right/Down connection relationships](/images/nmg10.png)

Looking at Tile 0's connection relationships, we can see that tiles attached to the Left have connections at the center-right. The same applies to other directions.

![Tiles attached to Tile 0's Left. They have connections at the center-right](/images/nmg11.png)

There are many tiles that can connect in each direction. However, arranging them this way makes the wall shapes too busy. The key to this map generation is to remove as much as possible from these connection relationships according to each ruleset's conditions.

## Modern

Let's revisit the Modern ruleset:
- Wall connection required
- Island connection X
- Island separation required
- 2x2 walls allowed
- 2x2 islands forbidden

Unlike the original Nurikabe Classic rules, it allows 2x2 walls while forbidding 2x2 islands. The challenging generation condition here is whether islands can be generated to satisfy other rules while 2x2 islands are forbidden. If we can generate the most difficult part using WFC with proper constraints, we can reduce generation time. Therefore, in Modern, we generate islands, not walls, using WFC. Non-island parts will become walls in post-processing.

Lines generated by WFC become islands, where tiles with connections become islands and the rest become walls.

![WFC tile settings and completed Modern map example](/images/nmg12.png)

To ensure these connections are made correctly, first we need to prevent lines from touching each other. In other words, there should always be an empty tile (tile 15) between lines. Otherwise, lines will stick together and we won't be able to identify island regions.

![Map generation example when lines stick together](/images/nmg13.png)

To achieve this, we need to modify tile connection relationships so that only empty tile 15 can appear in non-line directions.

![Modified so only empty tiles come to Tile 0's Up/Right/Down](/images/nmg14.png)

This separates islands and reduces the probability of 2x2 islands forming. Additional measures are needed to prevent 2x2 islands from forming. Specifically, we need to restrict connections between L-L, L-T, and T-T. To prevent complexity, we don't use tile 14 (Cross). If we were to use it, we'd also need to restrict connections between L-Cross, T-Cross, and Cross-Cross.

Below are the connection relationships for tiles 4 and 10 (L tile and T tile) with these constraints applied. Tiles that can meet L and T are limited to horizontal/vertical lines and terminal nodes. Since we don't use the Cross tile, tile 14 has been removed, and the empty tile has been renumbered from 15 to 14.

![Connection relationships for Tile 4 and Tile 10 for Modern](/images/nmg15.png)

One final processing step remains. To ensure lines appear as intended, we force empty tiles to appear on the map's outer edges - that is, cells where `x=-1 || x=width || y=-1 || y=height`. This way, tiles inside the map that touch the outer edges will have tiles adjacent to empty tiles, eliminating cases where lines extend outside the map and get cut off.

![Forcing empty tiles on the map's outer edges](/images/nmg16.png)
