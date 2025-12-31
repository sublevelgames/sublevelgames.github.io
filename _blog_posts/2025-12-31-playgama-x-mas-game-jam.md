---
layout: blog_post
title: "Christmas Present Rush - My Game Jam Award Story"
image: /images/pxj00.png
excerpt: "After two years of wanting to create a puzzle game inspired by Cosmic Express and RGB Express, I finally brought it to life during the Playgama X-Mas Things Jam. Despite tight deadlines, implementing dual grid systems, and discovering critical bugs just before a vacation, CPR (Christmas Present Rush) won 2nd place in the jury's choice, fulfilling a long-held bucket list item of winning a game jam award."
tags: ["🎮Game", "🧩Puzzle", "🎲PCG", "💻Game Dev", "🔧Development", "⏱️Jam"]
colors: ["info", "info", "info", "info", "info"]
id: playgama-x-mas-game-jam
comments: true
hidden: false
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


## Dual Grid

One of the parts where I spent the most time was implementing Dual Grid on the tile map. A few years ago, I had encountered Marching Squares while implementing the WFC algorithm in 3D voxel space, so I thought it would be easy. However, as I progressed with the work, I realized that I had never actually implemented Dual Grid on 2D tiles myself.

Dual Grid refers to two overlapping grids. When the first grid represents the space actually used in the game—where characters move, obstacles are placed, etc.—you can create a new grid using the center of each cell that composes that grid as vertices, and this is the Dual Grid. By placing tiles on the Dual Grid, you can achieve visually smooth transitions.

![](/images/pxj08.jpg)  
*[Example of dual grid applied to a tilemap](https://github.com/GlitchedinOrbit/dual-grid-tilemap-system-godot-gdscript)*

Another reason to use Dual Grid is that it uses fewer tiles. In a [2-corner tileset](https://www.boristhebrave.com/permanent/24/06/cr31/stagecast/wang/2corn.html) where each tile's corners are painted in one of two colors, while 47 tiles would be needed without using Dual Grid, it can be covered with just 15 tiles.

![](/images/pxj09.png)  
*[Comparison of tile count when using and not using dual grid](https://www.youtube.com/watch?v=jEWFSv3ivTg)*

If rotation is also possible, it can be covered with just 5 tiles. However, in 2D, rotation is often impossible because shadow effects need to be applied.

After various trials and tribulations, once I implemented the dual grid, quite a bit of time had passed. To be precise, I spent about a day on it.

![](/images/pxj10.gif)  
*Dual grid applied to CPR*


## First Version (v1.0.0)

There were about 4 days left until the deadline. I decided to first create a working version and then fix the problems. I selected 49 game maps, created the tutorial map to be shown first, and made the stage playable from start to finish. In other words, I implemented present pickup -> present delivery -> victory condition check.

Unexpected problems occurred with present pickup and delivery. Unlike when creating the maps, when actually playing, I discovered that after a present left (was delivered from) a cart, you couldn't pick up a present with the same cart. So I modified it to allow pickup after delivery until there were no more candidates remaining next to the cart. To capture the winter atmosphere, I added a snow-falling effect, and also added toast messages to guide users when they performed incorrect actions. I also added a confetti effect to celebrate users who cleared all stages.

![](/images/pxj11.gif)  
*Snow-falling effect*

I belatedly realized I hadn't drawn any obstacles, so I hurriedly searched for a rock image among free assets and added it. I also implemented saving and loading of user progress. Since background music and sound are considered important in almost all game jams, I searched for and added mainly free assets, added UI buttons to turn background music and sound on/off, and made the arrow UI representing the character's movement path move sensibly. I also added more detailed tutorial text to the first map.

There were other minor bugs, but I fixed many parts and uploaded the first version to itch.io. I then discovered that the game wasn't yet uploaded to the game jam. When I clicked the submit button on the game jam, I could select from already registered games, so I selected and added it. My game was added as the third submission, which was very early compared to other entries.

![](/images/pxj12.png)  
*Submit result. Submitted as 3rd place.*


## Second Version (v1.1.0)

Until this point, I thought everything was finished, but after posting an introduction about the game on Thinkygames.com's Discord for promotion, I received a large amount of feedback. Certainly, unlike when making a game alone, when someone views the game from an external perspective, you discover many areas that need correction. In particular, Sergiu, who gave the feedback, is a contributor to Thinkygames.com, so his feedback on puzzle games was accurate and made sense.

I applied most of Sergiu's feedback to the second version, and the game's revision history was as follows:

- Added hard mode. Unlocked after clearing all 50 stages in normal mode
- Fixed the issue where the game could be cleared even if the path didn't end at the target point, fixed the issue where you could pass the target
- Fixed the issue where spacebar input reset the game map draw state
- Made spacebar work like pressing the next button when clearing a stage
- Changed from Candy Cane font to Arial for readability of some text
- Enabled path modification with keyboard controls such as arrow keys and WASD

It was quite a lot of content, but without difficulties like dual grid, I was able to work on it within a few hours. After applying the changes, I upgraded to version 1.1.0, and as a gesture of gratitude, I added the name of the person who gave feedback to the Credits section as Special Thanks to.

![](/images/pxj13.png)  
*Sergiu's name added to special thanks to*

![](/images/pxj14.png)  
*Hard Mode Unlocked


## Final Version (v1.1.1)

Until this point, I really thought everything was finished, but while playing alone, I discovered that I absolutely could not clear stage 1 of hard mode. What on earth was happening? My heart sank.

Upon closer inspection, there was still a bug related to pickup and delivery. After picking up, if delivery was possible from the same cart, it should be able to deliver immediately, but that part wasn't working, which was causing the problem. The correct answer calculated by the map generation script was designed on the basis that the cart after pickup would not deliver immediately, while the actual game, as improved through multiple revisions from the first version, checked until there was nothing left to pick up or deliver next to the cart. So it was a map without errors in the map generation script, but errors occurred in the actual game.

![](/images/pxj15.png)  
*The map where the problem occurred*

There were about two days left until the game jam submission deadline, but I had to catch a flight to Vienna for vacation, and there were about 12 hours left until the flight departure. Large-scale modifications were impossible, but the hard mode I had just added was completely unplayable. First, I wondered if there were many such stages, so I created a validation script to verify, and fortunately, out of 50 hard stages, only stages 1 and 21 were unclearable, and the rest were clearable. It was only a 4% probability, but fortunately I discovered the unclearable map while playing. By the way, the normal mode stages all safely passed the validation script, perhaps because they were simpler.

Then the solution was simple. I just needed to serve only safe maps that passed the validation script among the originally created maps. So I ran the validation script again, selected 50 safe hard mode maps again, and uploaded that as the final version. There were about 9 hours left until the flight departure. During the remaining time, I kept playing hard mode maps and then slept. Hoping there would be no more bugs...

![](/images/pxj16.png)  
*100% passed script validation*


## Evaluation Phase

After arriving in Vienna, the game jam submission period ended and the evaluation phase began. It's a time for participants to play each other's games, evaluate them, and exchange constructive feedback. During my last game jam participation, it was also a time when I gained many insights I hadn't thought of. Since I had greatly improved the game by receiving feedback between the first and second versions, I thought I could gain insights on what direction would be good for future updates, even though it wouldn't be for the game jam version.

Issues regarding fraudulent participants were also actively discussed on Discord. The game jam had fewer than 50 participants. Several participants on Discord reported cases of fraudulent behavior where people created multiple bot accounts, made games for each account, participated in the game jam, gave low scores to other participants' games and high scores to their own games. Naturally, the smaller the number of participants, the more effective this is. If there are rewards, they can obtain them, and even without rewards, achieving good results in a game jam would be a plus for one's career. With the advancement of generative AI, games that look like proper games can be made quickly, so it felt bitter that the environment has become easier for such fraudulent activities.

![](/images/pxj17.png)  
*Reports about fraudulent participants on Discord*

Another form of fraud was when previously made games that had participated in other game jams and even won awards were submitted to this game jam. Some were made by the submitter themselves, and some seemed not to be. Several entries were exposed by other participants and removed from the participation list. Still, it was a positive factor that self-purification was working.

At the end, there were cases where the number of ratings suddenly increased without comments, and some participants raised suspicions that this was also voting using multiple bot accounts. In cases like [Gamedev.js Jam 2025](https://itch.io/jam/gamedevjs-2025) which had 408 submissions, a few bot accounts would be difficult to change the situation, but the Playgama X-Mas Things Jam with 38 submissions (some disqualified by the organizers) seemed vulnerable to this structure.



## Results Announcement

After voting ended, it was time for the results announcement. Heated debates continued until the end about which games were fraudulent entries, so the organizers didn't announce the results immediately and waited a bit before announcing them. I waited for the results while eating trdelník at Prague's Christmas market in the cold. About 30 minutes later, the final results came out, and surprisingly, I won 2nd place in the jury's choice. For reference, I was 4th in participant evaluation. Considering that top 3 placements were awarded, I received good scores in public evaluation as well.

![](/images/pxj18.png)  
*Discord announcement, CPR's final score*

I was grateful to place and receive a prize of $150. Winning an award at a game jam was one of my bucket list items, and I was very happy to achieve it this time.

The area where I scored the lowest was the theme, and I thought perhaps others also noticed that I had a game I wanted to make and attached the theme later. I have some regret that it might have been better if I had strengthened the theme more, such as by lighting up houses when they received presents.

I was so proud to actually make a game I had wanted to make for a long time, and I was even happier to unexpectedly receive an award. I plan to further develop this game and release it for mobile and web. If possible, I think it would be an even better game if I add more gimmicks and improve the graphics a bit more.
