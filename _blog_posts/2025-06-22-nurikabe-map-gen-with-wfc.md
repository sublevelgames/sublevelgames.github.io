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

Logic Islands is heavily influenced by Nurikabe published by Nikoli and the Logic Puzzles from Islands of Insight developed by Lunarch Studios. Nurikabe is a game where each cell in a grid is designated as either island or wall. Numbers in the grid indicate island sizes, each island must contain exactly one number, all walls must be connected, and no 2x2 wall blocks are allowed. Logic Islands uses these conditions as its Classic rule set.

[Nurikabe diagram]

Nurikabe has many derivative rules, each existing as separate games.

[https://www.amazon.com/1000-Nurikabe-Variants-Nurimisaki-10/dp/B0BKSCTX2F]

## Islands of Insight

Islands of Insight is a fantastic 3D game offering over 10,000 puzzles across 24 types. These puzzles require various skills including reflexes, logic, and observation. Among them, Logic Grid is a game that purely requires logical thinking. Logic Grid breaks down Nurikabe's basic form further, creating various variations by having players complete patterns without numbers, adding exceptions to certain rules, or introducing additional rules.

[Islands of Insight's Logic Grid rule types]

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

Classic, as mentioned above, uses identical rules to the original Nurikabe. Modern allows 2x2 walls but forbids 2x2 islands, creating a fresh map feel. Strict adds wall junction restrictions to Classic - walls cannot have 3 or more neighbors - creating more constrained wall patterns. Minimal removes the wall connectivity requirement and adds a restriction that all wall groups must be exactly 3 cells. Orb requires each island to contain one purple orb and removes the wall connectivity requirement. Finally, Yin-Yang removes numbers from islands but requires all walls to be connected, all islands to be connected, and forbids both 2x2 walls and 2x2 islands, creating map patterns resembling interlocking yin-yang symbols.

[6 rule set map images]

# Problems with 3 Rules

If everything had ended after creating the map generator, there wouldn't have been any issues. The game uses maps ranging from 4x4 to 12x12, but some rule sets had problems generating maps larger than 7x7. Modern, Minimal, and Yin-Yang were the problematic rule sets. This was something we couldn't have known without trying.

The issue with these rule sets was their inability to generate valid wall patterns. The puzzle generation order in my generator worked like this:

[Simplified process]

For Modern, Minimal, and Yin-Yang, I implemented wall pattern generation using WFC.

[Process using WFC for Modern, Minimal, Yin-Yang]

# Solving Problems with WFC in Detail