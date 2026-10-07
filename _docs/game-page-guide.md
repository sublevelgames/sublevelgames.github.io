# 게임 페이지 작성 가이드

새 게임을 sublevelgames.com에 올릴 때 따르는 규칙입니다.
`_docs/` 폴더는 Jekyll이 무시하므로 이 문서는 사이트에 공개되지 않습니다.

---

## 1. 파일 만들기

- 위치: `_posts/`
- 파일 이름: `YYYY-MM-DD-게임-슬러그.md` (예: `2026-10-07-park-sort.md`)
- 날짜는 출시일입니다. 홈 정렬 순서와 NEW 배지(14일)에 그대로 쓰입니다.
- 페이지 주소는 제목에서 만들어집니다(`permalink: /:title/`). 출시 후에는 제목을 바꾸지 마세요. 주소가 바뀌면 기존 링크와 댓글이 끊깁니다.

## 2. 템플릿

```markdown
---
layout: post
title: "🚗Park Sort"
categories: game
image: /images/park-sort.png
excerpt: A colorful parking puzzle.
pitch: Tap the arrow, clear the jam, park every car in the right garage.
links:
  - { platform: googleplay, url: "https://play.google.com/store/apps/details?id=..." }
  - { platform: playgama,   url: "https://playgama.com/game/..." }
  - { platform: toss,       url: "https://minion.toss.im/..." }
tags: ["📱Mobile", "🌐Web", "🧩Puzzle", "📥Collect"]
colors: ["danger", "primary", "info", "info"]
comments: false
# featured: 2
# screenshots: [/images/park-sort-1.webp, /images/park-sort-2.webp]
# trailer: dQw4w9WgXcQ
---
Park Sort is a colorful parking puzzle where every move is clear and every choice matters.

### HOW IT WORKS

Every vehicle has an arrow on its roof...

### FEATURES

- Simple one-tap controls
- ...
```

## 3. front matter 필드

| 필드 | 필수 | 설명 |
|---|---|---|
| `layout` | ✅ | 항상 `post` |
| `title` | ✅ | 이모지 1개 + 게임 이름. 카드에서는 30자에서 잘립니다. |
| `categories` | ✅ | 항상 `game` |
| `image` | ✅ | 대표 이미지. 홈 카드, 히어로, 상세 상단, OG 이미지로 쓰입니다. 규격은 5장 참고 |
| `excerpt` | ✅ | 한 줄 요약(영문). 카드 설명, 검색 결과, SEO description |
| `pitch` | | 히어로와 상세 상단에 보이는 문구. 없으면 `excerpt`를 씁니다. 한 문장, 120자 이내 |
| `links` | ✅ | 플레이 버튼 목록. 4장 참고 |
| `tags` | ✅ | `📱Mobile`/`🌐Web`을 먼저, 그다음 장르. 기존 태그 문자열을 그대로 복사하세요(이모지 포함). |
| `colors` | ✅ | `tags`와 같은 순서. Mobile=`danger`, Web=`primary`, 장르=`info` |
| `comments` | | 기본 `false` |
| `featured` | | 홈 강조. 6장 참고 |
| `screenshots` | | 상세 페이지 가로 스크롤 갤러리. 세로 스크린샷 3~6장 권장 |
| `trailer` | | YouTube 영상 ID(주소의 `v=` 뒤 값). 상세 페이지 상단에 임베드됩니다. |

> 예전에 쓰던 `platform: [...]` 배열은 더 이상 쓰지 않습니다. 플랫폼 배지, 플랫폼 페이지, 개수 집계는 모두 `links`에서 만들어집니다.

## 4. 플레이 버튼 (`links`)

**본문에 `<a class="btn ...">Play at ...</a>`를 직접 쓰지 마세요.** 버튼은 레이아웃이 `links`에서 자동으로 만듭니다.

```yaml
links:
  - { platform: googleplay, url: "https://..." }
  - { platform: itchio, url: "https://...", note: Demo }   # note → 버튼에 "(Demo)" 표시
```

- `platform` 값은 `_data/platforms.yml`의 키여야 합니다. 오타가 있으면 그 버튼은 조용히 빠지므로, 빌드 후 꼭 확인하세요.
- **적는 순서는 상관없습니다.** 버튼 순서와 메인 버튼은 `_data/platforms.yml`에 적힌 순서(= 플랫폼 우선순위)로 정해집니다.
- **메인 버튼(크고 색 있는 버튼)은 바로 플레이할 수 있는 웹 플랫폼이 우선입니다.** 모든 기기에 똑같이 적용됩니다.

| 순위 | 플랫폼 |
|---|---|
| 1 | 📺 YouTube Playables |
| 2 | 💜 Playgama |
| 3 | 🫙 GetJar |
| 4 | 🎮 CrazyGames |
| 5 | 🎮 itch.io |
| 6 | 🕹️ Y8 |
| 7 | ▶️ GamePix |
| 8 | 🎯 Lagged |
| 9 | 🧮 Coolmath Games |
| 10 | 🐜 Kongregate |
| 11 | 🎨 Newgrounds |
| 12 | ⚔️ Armor Games · 🔥 Addicting Games |
| 13 | 💜 Official site |
| 메인 제외 | ▶️ GameMonetize · ▶️ GameDistribution · 🤖 Reddit (`main: false` — 작은 버튼으로만 표시) |
| 웹 링크가 없을 때 | 기기별로 정합니다. Android → Google Play / Galaxy Store / ONE store, iPhone → App Store, PC → Steam / MS Store. 그다음이 💙 Toss |

  예를 들어 YouTube, Playgama, Google Play가 있는 게임이면 어떤 기기에서든 YouTube Playables가 메인이고, 나머지는 "Also available on" 아래 작은 버튼으로 보입니다. Google Play와 Toss만 있는 게임이면 Android에서는 Google Play가 메인입니다.
- 우선순위를 바꾸려면 `_data/platforms.yml`에서 줄 순서를 바꾸면 됩니다.

### 사용 가능한 플랫폼 키

| 키 | 표시 이름 | 종류 |
|---|---|---|
| `googleplay` `galaxystore` `onestore` | Google Play, Galaxy Store, ONE store | Android 스토어 |
| `appstore` | App Store | iOS 스토어 |
| `steam` `msstore` | Steam, Microsoft Store | PC 스토어 |
| `toss` | Toss | 앱인앱 |
| `playgama` `getjar` `itchio` `youtube` `crazygames` `gamepix` `y8` `lagged` `gamemonetize` `newgrounds` `coolmathgames` `kongregate` `addictinggames` `armorgames` `gamedistribution` `reddit` | 각 포털 | 웹(바로 플레이) |
| `standalone` | Official site | 자체 사이트 |

### 새 플랫폼 추가

1. `_data/platforms.yml`에 한 줄을 추가합니다. **넣는 위치가 곧 우선순위**입니다. `icon`은 버튼·카드·목록에서 이름 앞에 항상 붙는 이모지이고, `label`의 이모지와 같은 것을 씁니다. `kind`와 `os`가 메인 버튼 선택 규칙을 정합니다. 배경이 밝은 색이면 `text: "#212529"`도 넣으세요.
2. `_platforms/<키>.md`를 만듭니다.
   ```yaml
   ---
   layout: platform
   key: <키>
   platform: "🆕Name"
   permalink: /platforms/<키>/
   ---
   ```
3. 1번의 `page`와 2번의 `permalink`를 같은 값으로 맞춥니다.

## 5. 이미지

- **대표 이미지(`image`)**: 16:9, **1280×720** 권장. 카드와 히어로 모두 16:9로 잘리므로 로고와 핵심 그림은 가운데 80% 안에 두세요.
- 용량은 **300KB 이하**를 목표로 합니다. 지금 `images/`에는 1~3MB짜리 PNG가 있어 홈 로딩이 느립니다. 새 이미지는 WebP(품질 80)나 압축된 JPG로 올리세요.
- 파일 이름은 페이지 슬러그와 맞춥니다: `images/park-sort.webp`, 스크린샷은 `images/park-sort-1.webp` …
- 스크린샷은 스토어용 세로 이미지를 그대로 써도 됩니다(갤러리 높이 320px 기준으로 표시).

## 6. 홈 강조 (`featured`)

| 값 | 위치 |
|---|---|
| `featured: 1` | 홈 1페이지 맨 위 전체 폭 히어로. **사이트 전체에서 하나만** 둡니다(현재 Magic Tower). |
| `featured: 2`, `featured: 3` | 히어로 아래 그리드에서 2칸 차지 카드(★ PICK). |
| 없음 | 날짜순 일반 카드 |

- 강조한 게임은 1페이지 그리드에서 중복으로 나오지 않습니다.
- 히어로를 바꿀 때는 기존 게임의 `featured: 1`을 지우고 새 게임에 붙입니다. 같은 번호가 둘이면 최신 글 하나만 쓰입니다.

## 7. 본문 작성

- **첫 문단**: 게임을 한두 문장으로 설명합니다. 상세 페이지 상단 아래에 바로 이어서 보입니다.
- **소제목**: 대문자 한 줄로 쓰지 말고 `### FEATURES`처럼 `###`를 붙입니다. 앞뒤에 빈 줄을 하나씩 두세요.
- 기능 목록은 `- ` 리스트로 씁니다. 줄마다 빈 줄로 띄우면 문단이 따로따로 렌더링됩니다.
- 리뷰나 기사 링크처럼 플레이가 아닌 버튼은 본문에 둬도 됩니다(예: `btn-info`).
- 본문은 영문으로 씁니다.

## 8. 올리기 전 체크리스트

- [ ] `links`의 모든 `platform` 키가 `_data/platforms.yml`에 있다
- [ ] URL을 브라우저에서 열어 봤다(특히 Toss, GetJar 같은 짧은 링크)
- [ ] 대표 이미지가 16:9이고 300KB 이하다
- [ ] `tags`와 `colors` 개수가 같다
- [ ] 새 태그를 썼다면 `_tags/`에 태그 페이지가 있다
- [ ] 로컬에서 미리 보기(9장)로 홈 카드, 상세 페이지, 플랫폼 페이지를 확인했다
- [ ] 모바일 폭에서 상세 페이지를 스크롤하면 하단 고정 Play 버튼이 나타난다

## 9. 로컬에서 미리 보기

올리기 전에 내 컴퓨터에서 사이트를 띄워 확인합니다(http://localhost:4000).

### 처음 한 번만: Ruby 설치

1. [RubyInstaller](https://rubyinstaller.org/downloads/)에서 **Ruby+Devkit 3.x (x64)** 를 받아 설치합니다.
2. 설치가 끝나고 나오는 창에서 `3` (MSYS2 and MINGW development toolchain)을 선택합니다.
3. 사이트 폴더(`D:\github\sublevelgames.github.io`)에서 PowerShell을 열고 다음을 실행합니다.
   ```powershell
   bundle add webrick
   bundle update
   ```
   - 기존 `Gemfile.lock`이 Jekyll 3.8.0(2018년)으로 고정되어 있어서, 최신 Ruby에서는 `cannot load such file -- webrick`이나 `undefined method 'untaint'` 오류가 납니다. 위 두 줄이 이 문제를 해결합니다.
   - GitHub Pages 기본 빌드는 저장소의 `Gemfile`을 쓰지 않으므로, 이 변경은 배포에 영향을 주지 않습니다.

### 매번: 서버 실행

```powershell
bundle exec jekyll serve --livereload
```

- 브라우저에서 http://localhost:4000 을 엽니다. 파일을 저장하면 자동으로 다시 빌드되고 페이지가 새로고침됩니다.
- `_config.yml`을 고쳤을 때는 자동으로 반영되지 않습니다. `Ctrl+C`로 끄고 다시 실행하세요.
- 빌드 오류는 PowerShell 창에 표시됩니다. front matter 오타(따옴표, 들여쓰기)가 가장 흔한 원인입니다.

### 확인할 곳

- **홈**: 히어로(`featured: 1`), 2칸 카드(`featured: 2·3`), 새 게임 카드의 Play 버튼과 NEW 배지
- **새 게임 상세 페이지**: 상단 버튼, 오른쪽 "Available on", 아래 "More … games", 본문의 `###` 소제목
- **`/platforms/`**: 새 게임을 올린 플랫폼의 개수가 1 늘었는지
- **모바일**: 크롬 `F12` → 기기 툴바(`Ctrl+Shift+M`)에서 Pixel이나 iPhone을 고른 뒤 **새로고침**합니다.
  - 기기에 따라 메인 버튼이 바뀌는지 확인합니다(Android → 스토어, PC → 웹 포털).
  - 상세 페이지를 스크롤했을 때 하단 고정 Play 버튼이 나타나는지 확인합니다.
  - 메인 버튼은 접속 기기 정보(user agent)로 정해지므로, 기기를 바꾼 뒤에는 반드시 새로고침해야 합니다.

> 로컬에서 누른 Play 버튼 클릭도 GA4에 실제로 기록됩니다. 테스트 클릭이 신경 쓰이면 GA4 DebugView로 보거나 확인 후 무시하세요.

## 10. 클릭 측정 (GA4)

플레이 버튼을 누르면 GA4로 `play_click` 이벤트가 전송됩니다.

| 파라미터 | 값 |
|---|---|
| `game` | 게임 제목 |
| `platform` | 플랫폼 키 |
| `placement` | `hero`(홈 히어로) / `card`(카드) / `detail`(상세 상단) / `sticky`(모바일 하단 고정) |
| `is_main` | 메인 버튼이면 `yes` |
| `device_type` | `android` / `ios` / `mobile` / `desktop` |

보고서에서 이 값들로 나눠 보려면 GA4 관리 → 맞춤 정의 → **맞춤 측정기준**에서 `game`, `platform`, `placement`, `is_main`, `device_type`을 이벤트 범위로 한 번 등록해야 합니다. 등록 전 데이터는 보고서에 나오지 않으니 배포 직후 등록하세요.
