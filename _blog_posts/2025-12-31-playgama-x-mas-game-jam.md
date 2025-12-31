---
layout: blog_post
title: ""
image: /images/pxj00.png
excerpt: ""
tags: ["🎮Game", "🧩Puzzle", "🎲PCG", "💻Game Dev", "🔧Development", "⏱️Jam"]
colors: ["info", "info", "info", "info", "info"]
id: playgama-x-mas-game-jam
comments: true
hidden: true
---

<span class="badge badge-info">🎮Game</span>
<span class="badge badge-info">🧩Puzzle</span>
<span class="badge badge-info">🎲PCG</span>
<span class="badge badge-info">💻Game Dev</span>
<span class="badge badge-info">🔧Development</span>
<span class="badge badge-info">⏱️Jam</span>


![](/images/pxj00.png)

# What is a Game Jam?

Since I started developing games, participating in a game jam has always been on my wishlist. The term "Game Jam" originates from the jazz culture of "jamming," where musicians improvise together spontaneously. Similarly, game jams are events where developers create games improvisationally within a short timeframe based on a given theme.

There are a few general rules that apply to all jams: games must be created only during the jam period, games must align with the jam's theme, and mutual evaluation among participants takes place. Additional rules vary by jam: there may or may not be rewards, source code may or may not be required to be open, specific engines, technologies, or assets may be mandated or completely unrestricted, and rankings may be given or the focus may simply be on participation.

| Category | Rules |
|----------|-------|
| **General Rules (All Jams)** | - Must create game during jam period only<br>- Must align with jam theme<br>- Peer evaluation among participants |
| **Special Rules (Varies by Jam)** | - Rewards: Yes/No<br>- Source code disclosure: Required/Optional<br>- Engine/Tech restrictions: Specific requirements/No restrictions<br>- Rankings: Ranked/Participation-focused |

*General and Special Rules of Game Jams*

Game jams are held both offline and online, organized by various entities including companies, local communities, schools, and game engine developers. Among these, the largest platform is itch.io. On itch.io, anyone can upload games and host game jams at no additional cost. According to [a 2023 article contributed to Skeleton Code Machine](https://www.skeletoncodemachine.com/p/ten-years-of-game-jams), approximately 10,800 game jams were held on itch.io over the 10-year period from 2013 to 2023, with 250,000 people participating annually and over 500,000 games created. As of December 2025, these numbers are likely even higher. According to [annual Steam game release statistics](https://steamdb.info/stats/releases/) and [web game engine statistics for the first half of 2025 published by playgama](https://wiki.playgama.com/playgama/articles/introducing-web-based-game-engine-rankings-first-issue-h1-2025), more and more games are being released on both PC and web platforms. I personally believe that generative AI-assisted coding is having a significant impact on this trend.

Game jams serve as a venue to test the potential of ideas. The famous indie game [Baba is You](https://hempuli.itch.io/baba) also started as a [game jam version](https://hempuli.itch.io/baba-is-you).

![](/images/pxj01.png)
*Comparison of Baba is You's Jam Build and Actual Build*


# Playgama X-Mas Things Jam

Playgama is an HTML5 platform and distributor that boasts 300 million monthly visitors. By simply integrating the Playgama SDK, developers can publish their games across various networks including y8.com, lagged.com, MSN, and Xiaomi Game Center. Of course, not all games can be published everywhere—Playgama adds networks where games will be published based on certain criteria. Sublevelgames has launched 8 games on Playgama. I believe Playgama is developing faster than other web game platforms, and communication with game managers and community managers through Discord is also smooth.

[Playgama has hosted 4 game jams so far](https://itch.io/search?q=playgama%20jam&type=jams), and this X-Mas Things Jam is the fifth. Except for the [Green Web Jam](https://itch.io/jam/green-web-game-jam-playgama), all have offered rewards, and game jams with rewards had at least twice as many submissions.

![](/images/pxj02.png)
*List of Game Jams Hosted by Playgama*

The X-Mas Things Jam hosted by Playgama this time had a total prize pool of $1,000, with $250, $150, and $100 awarded to the 1st, 2nd, and 3rd place games selected by both participant voting and organizer selection. Notable rules for this game jam include:

1. HTML5/Web only
2. Build size under 100MB
3. Mandatory integration of Playgama Bridge SDK

These rules indicate that this game jam also serves the purpose of discovering new titles that can be served on the Playgama platform. The theme was the conflict between darkness and light, requiring participants to define dark and light elements and show them in opposition.


# My Attempt

I had a game I'd wanted to make for two years but hadn't yet created. It was inspired by the legendary puzzle game Cosmic Express and the popular mobile puzzle game RGB Express. When I lacked the technical skills to make a game similar to these, I created [Pick & Go!](https://sublevelgames.github.io/pick-n-go/) as a compromise.

![](/images/pxj03.png)
*Cosmic Express, RGB Express*

![](/images/pxj04.png)
*Pick & Go!*

I had been particularly wanting to make a seasonal game, thinking it would be great to create a Christmas-themed game where Santa Claus delivers presents. I wanted to make it last Christmas too, but it was pushed back by other work priorities. This year, I was just thinking about making it when I saw the announcement for this game jam. Realizing that if I didn't make it now, I'd have to wait another year, I decided to give it my best shot despite having a trip planned in a few days.

The game's rules involve moving along a path to pick up presents and deliver them to houses that match each color. The presents are picked up in a cart that follows the character, and delivered from the cart. Presents are picked up when they are one space adjacent to the cart in any of the four directions, and delivered when the destination house hasn't received a present yet and the cart contains the appropriate present. No more than two presents can be delivered to one house, and the cart cannot hold more than two presents at once.

I decided to use the title I'd thought of before: CPR: Christmas Present Rush. It felt like a title that would catch people's attention while clearly conveying the theme. I used the Candy Cane font as the main font.

![](/images/pxj05.png)
*CPR Screenshot*

While searching for assets suitable for the Christmas theme, I found the [Christmas Village Asset Pack](https://murphysdad.itch.io/christmas-village-asset-pack). It had snow-covered paths, coniferous trees, houses, and even a cute boy character that fit the background, making it perfect for the game. I used this as the main theme, and to express a village shrouded in darkness at the start (for the theme of conflict between darkness and light), I slightly lowered the brightness of the tiles. Then, to have the boy character move instead of Santa Claus, I created a very simple narrative—Santa has disappeared and the boy must deliver the presents.

For the important assets of presents and houses, I used the [Admurin's Holiday: Christmas Items](https://admurin.itch.io/admurins-christmas-items) asset for presents and drew the houses myself. Since it's a puzzle game, the visibility of the gimmicks was crucial, so I focused on making them simple while ensuring the colors that pair with the presents were clearly visible.

![](/images/pxj06.png)
*Game Screen*

Maps were generated using the BFS algorithm. BFS (Breadth-First Search) is a search algorithm that starts from the root node, explores all reachable nodes at the current depth, then proceeds to explore nodes at the next depth. While it always finds the shortest path, it has the disadvantage of taking a long time to search because it checks all possible cases. However, since the maximum puzzle size provided in this game was 8x8, BFS was sufficient to search within the desired time, so I used BFS without any additional optimization.

I created 3 types of present-house pairs, allowed up to 2 carts to follow the character, and set the total number of presents to n. The maximum number of moves was n, and the minimum number of moves was n. I initially planned to generate and provide 50 maps, but since there seemed to be no tutorial, I created a very simple text-based tutorial and made one 4x4 map, reducing the existing maps by one. As a result, I provided 1+49=50 maps for service.

![](/images/pxj07.png)
*Game map visualization. White is the starting point, black is the ending point, small circles are presents, large hollow circles are houses to deliver presents to, and pink lines represent the solution moves*

