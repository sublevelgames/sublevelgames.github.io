---
layout: post
title: "🎮 Armor Games Data Analysis: Past and Present of Web Gaming Market"
categories: blog_post
image: /images/armor-games-analysis.jpg
excerpt: Deep dive into web gaming market trends through 2018-2025 Armor Games data. Analyzing game quality evolution, genre popularity, and comparing past vs present insights.
tags: ["📊Data", "🎮Game", "📈Analytics", "🌐Web Games", "💰Market Research"]
colors: ["info", "info", "info", "info", "info"]
---

<span class="badge badge-info">📊Data</span>
<span class="badge badge-info">🎮Game</span>
<span class="badge badge-info">📈Analytics</span>
<span class="badge badge-info">🌐Web Games</span>
<span class="badge badge-info">💰Market Research</span>

# Background

[Armor Games](https://armorgames.com/) holds a special place in the history of web gaming platforms. Since its establishment in 2007, it has been at the center of the web gaming ecosystem, connecting developers and players from the Flash gaming golden era to today's HTML5 age. Among these, series like [Kingdom Rush](https://armorgames.com/play/12141/kingdom-rush), [The Last Stand](https://armorgames.com/play/269/the-last-stand), [Raze](https://armorgames.com/play/5395/raze), and [Learn to Fly](https://armorgames.com/play/3789/learn-to-fly) are considered icons representing the golden age of Flash games. Each game has been beloved for a long time with innovative gameplay and high quality across various genres including [strategy](https://armorgames.com/category/strategy-games), [action](https://armorgames.com/category/action-games), [defense](https://armorgames.com/category/defense-games), [shooting](https://armorgames.com/category/shooting-games), and [puzzle](https://armorgames.com/category/puzzle-games).

## The Great Transformation of the Web Gaming Market

The web gaming industry has undergone dramatic changes over the past decade. Steve Jobs' decision to reject Flash support on the iPhone in 2010 and Adobe Flash's official end of support in 2020 signified a paradigm shift for the entire web gaming ecosystem. As Flash games disappeared into history, new HTML5-based games began to fill their place.

## Analysis Purpose

Recently, my game was accepted on [Armor Games](https://armorgames.com/), which sparked my curiosity.

What does [Armor Games](https://armorgames.com/) look like these days? I wanted to understand it through data.

Therefore, in this analysis, I will examine the changes in the web gaming market through [Armor Games](https://armorgames.com/)' data from the past 7 years (2018-2025). By examining game quality changes, genre trends, and differences between past and present through data, I aim to provide useful market insights for game developers like myself.

# Data Preparation

## Data Collection

The data used for analysis consists of metadata for games published on the [Armor Games](https://armorgames.com/) site as of May 24, 2025. Each game includes information such as title, genre, play count, rating, favorite count, and release date.

## Preprocessing

### Period Filtering

Among the original 1,013 games, only games released after January 1, 2018, were selected for analysis, filtering down to 999 games. This was to understand trends from the period when Flash support termination and HTML5 transition began in earnest.

### Technology Stack Classification

Games were classified as follows:

- **HTML**: 924 games (92.5%): HTML5/JavaScript-based
- **Unknown**: 75 games (7.5%): Games without specified technology information, but upon examination, they are essentially HTML

Although I attempted technology stack classification thinking Flash might appear to some degree, no games were classified as Flash. This suggests that most Flash games have either been ported to HTML5 or removed from the platform.

### Genre Refinement

While the original data contained 154 various categories, meta-information unrelated to actual game genres was excluded:

- Year badges (GAMES OF 2018, etc.)
- Input methods (MOUSE ONLY, KEYBOARD ONLY, etc.)
- Game features (MULTIPLAYER, SPEEDRUN, etc.)
- Visual styles (PIXEL, MINIMALISM, etc.)

Through this process, **138 pure genre tags** were extracted.

## Final Dataset

After preprocessing, **999 games total** and **138 pure genre tags** became the analysis targets. The yearly distribution varies from 192 games in 2018 to 35 games in 2025 (since we're still in mid-2025), and based on this data, I will analyze trends and patterns in the web gaming market.

# Data Analysis

## Overall Situation Assessment

### Basic Game Statistics

Let's examine the overall status of the 999 games in our analysis.

### Play Count Distribution

- Average play count: 122,158 plays
- Median: 42,820 plays
- Since the average is about 3 times higher than the median, we can see that a small number of popular games drive up the overall play count.

### Rating Status

- Average rating: 7.31/10 points
- Shows generally good quality levels, indicating [Armor Games](https://armorgames.com/)' curation effect.

### Favorites

- Average favorites: 269
- Suggests that players are not just playing games but actively saving games they like.

### Correlation Analysis

Looking at the relationships between game success indicators:

- Play Count ↔ Rating: 0.126 (weak positive correlation)
- Play Count ↔ Favorites: 0.712 (strong positive correlation)
- Rating ↔ Favorites: 0.298 (moderate positive correlation)

Interestingly, high ratings don't necessarily lead to high play counts. This suggests that game quality and popularity are separate factors.

### User Evaluation Trends: "Are Users Getting More Critical?"

Analysis of yearly rating changes reveals a consistent downward trend:

- **2018**: 7.02 points
- **2019**: 7.41 points (peak)
- **2020**: 7.68 points
- **2021**: 7.58 points
- **2022**: 7.61 points
- **2023**: 7.57 points
- **2024**: 6.38 points (sharp decline)
- **2025**: 6.45 points

Particularly notable is the sharp decline starting from 2024, with average ratings dropping about 0.57 points from 2018 to 2025.

This can be interpreted as follows:

- Rising evaluation standards: Users' expectations for web games have increased
- Increased choice: With various gaming platforms and options, comparison standards have become more demanding
- Quality threshold: Moving away from the era when games received good ratings just for "working" to requiring higher completion levels

## Genre Deep-Dive Analysis

### Popular Genre Tag Status

Analysis results show the most frequently used top genre tags:

**Top 5 Genre Tags**

1. **[PUZZLE-SKILL](https://armorgames.com/category/puzzle-skill-games)**: 335 games (33.5%), puzzles where reflexes and skill are important
2. **[PUZZLE](https://armorgames.com/category/puzzle-games)**: 245 games (24.5%), traditional puzzles centered on logical thinking
3. **[PLATFORM](https://armorgames.com/category/platform-games)**: 208 games (20.8%)
4. **[ADVENTURE](https://armorgames.com/category/adventure-games)**: 208 games (20.8%)
5. **[PUZZLE PLATFORMER](https://armorgames.com/category/puzzle-platformer-games)**: 159 games (15.9%)

Interestingly, [puzzle](https://armorgames.com/category/puzzle-games)-related genres overwhelmingly take first place. Simply combining [PUZZLE-SKILL](https://armorgames.com/category/puzzle-skill-games) and [PUZZLE](https://armorgames.com/category/puzzle-games) reaches 58% of all games. However, analyzing the data more carefully: 175 games have only PUZZLE-SKILL, 85 games have only PUZZLE, and 160 games have both tags, so the union calculation gives 420 games, 42.0% of the total. Still not a low figure. This shows that [puzzle games](https://armorgames.com/category/puzzle-games), which are easily accessible and enjoyable in short periods, remain core content for web games due to their characteristics.

### Genre Performance Matrix: Quality vs Popularity

Analyzing each genre's average rating and total plays reveals interesting patterns:

#### High Quality + High Popularity Genres

- **[IDLE](https://armorgames.com/category/idle-games)**: 7.61 average rating, 42,231,837 total plays (56 games)
- **[STRATEGY](https://armorgames.com/category/strategy-games)**: 7.18 average rating, 37,056,214 total plays (118 games)
- **[FANTASY](https://armorgames.com/category/fantasy-games)**: 7.90 average rating, 29,089,133 total plays (28 games)

#### High Quality + Low Popularity Genres (Hidden Gems)

- **[ATMOSPHERIC](https://armorgames.com/category/atmospheric-games)**: 8.99 average rating, 690,893 total plays (8 games)
- **[COLORING](https://armorgames.com/category/coloring-games)**: 8.98 average rating, 648,726 total plays (8 games)
- **[BRAIN TEASER](https://armorgames.com/category/brain-teaser-games)**: 8.68 average rating, 2,024,339 total plays (19 games)
- **[WIZARD](https://armorgames.com/category/wizard-games)**: 8.66 average rating, 1,195,289 total plays (12 games)

#### Low Quality + High Popularity Genres

- **[CLICKER](https://armorgames.com/category/clicker-games)**: 7.71 average rating, 31,477,409 total plays (22 games)
- **[ADVENTURE](https://armorgames.com/category/adventure-games)**: 7.62 average rating, 33,380,957 total plays (208 games)

### Genre Rating Trends

Tracking quality changes of each genre over time:

#### Improving Genres

- **[SPACE](https://armorgames.com/category/space-games)**: +1.05 points/year (6.17 → 7.22 points)
- **[ROBOT](https://armorgames.com/category/robot-games)**: +0.84 points/year (6.66 → 7.50 points)
- **[ARCADE](https://armorgames.com/category/arcade-games)**: +0.76 points/year (6.14 → 6.89 points)

#### Declining Genres

- **[SIDE SCROLLING](https://armorgames.com/category/side-scrolling-games)**: -2.73 points/year (7.90 → 5.17 points)
- **[DEFENSE](https://armorgames.com/category/defense-games)**: -2.46 points/year (8.35 → 5.89 points)
- **[LOGIC](https://armorgames.com/category/logic-games)**: -1.99 points/year (7.82 → 5.83 points)
- **[PUZZLE-SKILL](https://armorgames.com/category/puzzle-skill-games)**: -0.162 points/year (declining)
- **[PLATFORM](https://armorgames.com/category/platform-games)**: -0.105 points/year (declining)
- **[ADVENTURE](https://armorgames.com/category/adventure-games)**: -0.176 points/year (declining)

#### Stable Genres

- **[PUZZLE PLATFORMER](https://armorgames.com/category/puzzle-platformer-games)**: Most stable (standard deviation: 0.25)
- **[PUZZLE](https://armorgames.com/category/puzzle-games)**: -0.081 points/year (slight decline)
- **[ACTION](https://armorgames.com/category/action-games)**: -0.067 points/year (slight decline)

### Yearly Genre Quality Heatmap

Visualizing rating changes of major genres from 2018 to 2025 in a heatmap allows us to see at a glance which years each genre performed best.

Through this analysis, developers can understand:

- Which genres are currently on the rise
- When specific genres enjoyed booms
- Historical performance patterns of genres they want to develop

## Past vs Present Comparison (2018-2022 vs 2023-2025)

To understand how the web gaming market is changing, I'll compare the past 5 years (2018-2022) with the recent 3 years (2023-2025).

### Overall Quality Changes

#### Rating Comparison

- **Past Average**: 7.426 points
- **Recent Average**: 6.883 points
- **Change**: -0.543 points

A consistent downward trend is observed. This supports the previously mentioned "rising user evaluation standards" hypothesis. As users' expectations for web games have increased, games of the same quality are receiving more demanding evaluations.

#### Game Count Changes

- **Past Period**: 788 games total (158 games per year average)
- **Recent Period**: 211 games total (70 games per year average)

Game release volume has decreased to less than half. This can be interpreted as quality-focused curation strengthening or market maturation.

### Genre Trend Changes

#### Rising Genres

1. **[IDLE](https://armorgames.com/category/idle-games)**: Past 7.2 → Recent 7.8 points (+0.6 points)
2. **[STRATEGY](https://armorgames.com/category/strategy-games)**: Past 7.1 → Recent 7.6 points (+0.5 points)
3. **[RPG](https://armorgames.com/category/rpg-games)**: Past 7.3 → Recent 7.7 points (+0.4 points)

These genres are characterized by deep gameplay and long-term play requirements. This suggests that web game users want more immersive experiences beyond simple casual games.

#### Declining Genres

1. **[ARCADE](https://armorgames.com/category/arcade-games)**: Past 7.4 → Recent 6.9 points (-0.5 points)
2. **[ACTION](https://armorgames.com/category/action-games)**: Past 7.2 → Recent 6.8 points (-0.4 points)
3. **[PLATFORM](https://armorgames.com/category/platform-games)**: Past 7.3 → Recent 7.0 points (-0.3 points)

Traditional [action](https://armorgames.com/category/action-games)/[arcade](https://armorgames.com/category/arcade-games) genres show relative decline. This could be due to competition with mobile games or lack of innovation.

#### Stable Genres

1. **[PUZZLE](https://armorgames.com/category/puzzle-games)**: Past 7.3 → Recent 7.2 points (-0.1 points)
2. **[ADVENTURE](https://armorgames.com/category/adventure-games)**: Past 7.4 → Recent 7.3 points (-0.1 points)

[Puzzle](https://armorgames.com/category/puzzle-games) and [adventure](https://armorgames.com/category/adventure-games) genres maintain relatively stable performance, solidifying their position as core genres for web games.

### Game Performance Matrix Comparison

#### Past (2018-2022)

- High quality (8.5+ points) games: 12.3%
- High popularity (top 25% plays) + High quality: 3.1%

#### Recent (2023-2025)

- High quality (8.5+ points) games: 14.7%
- High popularity (top 25% plays) + High quality: 4.2%

Interestingly, the proportion of high-quality games has actually increased. While overall average ratings have declined, there are more games of excellent quality. This may indicate polarization in game quality.

### Hidden Gem Discovery

Through data analysis, let's find games that are relatively unknown despite their high quality.

**High-rated Low-play Games - 8.9+ points, bottom 25% play count (27,617 plays or less)**

- **Detective Bass: Fish Out of Water** (9.3 points, 27,132 plays)
- **Fill Up The Hole** (9.2 points, 22,428 plays)
- **Move Box** (9.1 points, 27,490 plays)
- **SYNTAXIA** (9.1 points, 20,120 plays)
- **Rotate Box** (9.0 points, 24,418 plays)
- **BRDG** (9.0 points, 26,778 plays)
- **Nova: Cloudwalker's Tale** (8.9 points, 25,855 plays)
- **Sum Lines** (8.9 points, 23,923 plays)
- **Race Against a Duck** (8.9 points, 27,085 plays)
- **Menace from the Deep Demo** (8.9 points, 17,464 plays)

The common point of these games is innovative game mechanisms and original ideas. Games that made new attempts rather than simply variations of existing genres are receiving high evaluations.

# Conclusion

## Key Insights Summary

1. **Rising User Standards**

The slight decline in average ratings should be interpreted as rising user evaluation standards rather than game quality deterioration. This signifies the maturation of the web gaming market.

2. **Genre Evolution**

- Rising: [IDLE](https://armorgames.com/category/idle-games), [STRATEGY](https://armorgames.com/category/strategy-games), [RPG](https://armorgames.com/category/rpg-games) - genres with deep gameplay
- Declining: [ARCADE](https://armorgames.com/category/arcade-games), [ACTION](https://armorgames.com/category/action-games) - traditional action genres
- Stable: [PUZZLE](https://armorgames.com/category/puzzle-games), [ADVENTURE](https://armorgames.com/category/adventure-games) - core genres of web games

3. **Quality Polarization**

While overall averages declined, the proportion of high-quality games increased, showing a polarization phenomenon in quality.

4. **Importance of Innovation**

The common point of hidden gems is innovative mechanisms and originality. New attempts are the key to success rather than simple imitation of existing genres.

## Implications for the Web Gaming Market

### Advice for Developers

- **Focus on Depth**: Provide immersive experiences rather than simple casual games
- **Pursue Innovation**: Develop innovative variations of existing genres or new mechanisms
- **Quality Focus**: Quality-centered development approach rather than quantity

### Market Outlook

The web gaming market is still thriving and evolving into a more sophisticated and demanding market. Even in competition with mobile or console games, there's plenty of room for success if web games provide their unique value.

## Future Prospects

With the end of the Flash era, the web gaming market has reached a new turning point. With the advancement of HTML5 technology, more sophisticated and innovative games are expected to emerge. Particularly, new web technologies like AI, WebGL, and WebAssembly will further expand the possibilities of web games.

If platforms like [Armor Games](https://armorgames.com/) continue to select and support high-quality games, web games will continue to play an important role in the gaming ecosystem. The unique strengths of web games - accessibility and creativity - will continue to be attractive options for many developers and players in the future.