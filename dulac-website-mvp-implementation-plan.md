# DU LẠC — Website MVP Implementation Plan

> Tài liệu này dùng để triển khai MVP website cho game **Du Lạc**: một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, xoay quanh hành trình Lan Anh dẫn Tính đi qua các làng quê, phong tục, trò chơi và ký ức để đánh thức phần con người đã ngủ quên.

---

## 0. Mục tiêu MVP

MVP website không cần quá nhiều trang. Mục tiêu đầu tiên là tạo một landing page đủ đẹp, đủ cảm xúc và đủ rõ để:

1. Giới thiệu game trong 10 giây đầu tiên.
2. Truyền được mood: **cổ điển giao thoa hiện đại / cyber-folklore / chữa lành / dân gian Việt Nam**.
3. Cho người xem hiểu gameplay loop cơ bản.
4. Tạo điểm chuyển đổi: **Wishlist / Join Discord / Subscribe Devlog**.
5. Có cấu trúc dễ mở rộng thành website đầy đủ về sau.

### MVP outcome

Sau MVP, website cần có:

- 1 landing page hoàn chỉnh.
- Responsive mobile/desktop.
- Hero cinematic.
- Story hook rõ.
- Gameplay pillars rõ.
- Episode 1 showcase.
- Character preview.
- Folklore codex preview.
- Media placeholder.
- Community CTA.

---

## 1. Định vị sản phẩm

### Tên game

**Du Lạc**

### Tagline chính

**Đi qua văn hóa. Chạm lại ký ức.**

### One-liner

**Du Lạc là game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, nơi Lan Anh đưa người chồng mất trí nhớ của mình trở lại những làng quê, phong tục và trò chơi tuổi thơ để đánh thức ký ức đã ngủ quên.**

### Elevator pitch

Tính và Lan Anh từng là đôi bạn thanh xuân, cùng nhau đi khắp Việt Nam để ghi chép văn hóa, phong tục và lịch sử. Sau một biến cố, Tính tỉnh dậy sau 3 năm sống thực vật nhưng mang nhận thức của một đứa trẻ lên bốn. Tin rằng ký ức không mất đi mà chỉ bị khóa lại, Lan Anh đưa anh trở về những nơi họ từng đi qua. Mỗi tiếng trống hội, mỗi trò chơi dân gian, mỗi gốc đa, giếng làng hay vật kỷ niệm đều có thể là chìa khóa mở lại một phần con người Tính.

### Core emotions

- Thương
- Nhớ
- Dịu
- Bí ẩn
- Chữa lành
- Hoài cổ
- Linh thiêng
- Việt Nam

### Không khí cần tránh

- Quá horror.
- Quá fantasy phương Tây.
- Quá du lịch quảng cáo.
- Quá web3/cyber làm mất chất dân gian.
- Quá nhiều chữ nhưng thiếu hình ảnh cảm xúc.

---

## 2. Website reference principle

Website có thể học từ các game narrative/RPG lớn ở cách tổ chức landing page:

- Hero rõ, cinematic.
- Tagline mạnh.
- Story premise ngắn gọn.
- Key features chia thành các card.
- Character/world section để tăng chiều sâu.
- Media/trailer để tạo niềm tin.
- CTA rõ ràng ở đầu và cuối.

Nhưng **Du Lạc không nên clone visual của game fantasy phương Tây**. Website cần giống một **cuốn nhật ký sống**, nơi người xem vừa đọc một câu chuyện, vừa bước vào một làng quê bị phủ bởi ký ức, đom đóm và tín hiệu số.

---

## 3. MVP sitemap

MVP chỉ cần 1 trang chính:

```txt
/
```

Các trang mở rộng để Phase 2:

```txt
/story
/gameplay
/world
/characters
/media
/devlog
/press-kit
```

---

## 4. Home page structure

Homepage MVP gồm 9 section:

1. Header
2. Hero
3. Story Hook
4. Gameplay Pillars
5. Episode 1 Showcase
6. Characters Preview
7. Folklore Codex Preview
8. Media Preview
9. Community CTA + Footer

---

## 5. Section detail specification

## 5.1 Header

### Mục tiêu

Giúp người xem điều hướng nhanh, giữ CTA wishlist luôn dễ thấy.

### Content

Logo:

```txt
DU LẠC
```

Navigation:

```txt
Cốt truyện | Gameplay | Thế giới | Nhân vật | Media | Cộng đồng
```

CTA:

```txt
Wishlist
```

### Behavior

- Desktop: header fixed hoặc sticky, nền trong suốt trên hero, chuyển sang nền vàng giấy khi scroll.
- Mobile: menu hamburger.
- CTA luôn nổi bật bằng đỏ chu sa.

### Visual

- Logo serif, có thể có dấu chấm sáng như đom đóm ở chữ “Lạc”.
- Header không chiếm quá nhiều chiều cao.

---

## 5.2 Hero Section

### Mục tiêu

Trong 10 giây đầu, người xem phải hiểu:

- Đây là game cốt truyện Việt Nam.
- Có yếu tố dân gian/ký ức/chữa lành.
- Nhân vật trung tâm là Lan Anh và Tính.

### Copy đề xuất

```txt
DU LẠC
```

```txt
Đi qua văn hóa. Chạm lại ký ức.
```

```txt
Một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, nơi Lan Anh đưa Tính trở lại những làng quê, trò chơi tuổi thơ và truyền thuyết cũ để đánh thức phần ký ức đã ngủ quên.
```

CTA buttons:

```txt
Xem Trailer
Wishlist Now
Khám phá câu chuyện
```

### Background

Loại: **Cinematic background**

Cảnh đề xuất:

- Lan Anh nắm tay Tính trước cổng làng Bắc Bộ.
- Sáng sớm, sương nhẹ.
- Tre, mái ngói, đường đất.
- Một vài đom đóm hoặc đốm sáng ký ức rất mờ.
- Có lớp glitch nhẹ gợi đoạn video rối nước bị lặp.

### Implementation notes

- Dùng `background-image` WebP/AVIF.
- Overlay gradient để text dễ đọc.
- Tránh video thật ở MVP nếu chưa tối ưu performance.
- Có thể dùng particle CSS đơn giản cho đom đóm.

### Acceptance criteria

- Hero không vỡ trên mobile.
- Text đọc rõ trên background.
- CTA thấy ngay không cần scroll.
- Background truyền được cảm giác Việt Nam, không generic fantasy.

---

## 5.3 Story Hook Section

### Mục tiêu

Tóm tắt premise bằng cảm xúc, không kể quá dài.

### Heading

```txt
Khi ký ức không biến mất, nó chỉ ngủ quên.
```

### Body copy

```txt
Tính và Lan Anh từng cùng nhau đi qua nhiều vùng đất Việt Nam để ghi chép văn hóa, phong tục và lịch sử. Ở tuổi 30, khi cả hai chuẩn bị nhận một người con nuôi, biến cố xảy ra.

Lan Anh gặp tai nạn lao động. Trên đường đến bệnh viện với vợ, Tính bị xe tải tông và rơi vào trạng thái sống thực vật.

Ba năm sau, một đoạn video rối nước bị lặp lại trên máy tính. Tiếng nước, tiếng trống hội và âm thanh dân gian quen thuộc đã chạm đến tầng sâu ý thức của Tính. Anh tỉnh lại, nhưng trí não trống rỗng như một đứa trẻ lên bốn.

Lan Anh quyết định đưa anh trở về những nơi họ từng đi qua. Không phải để du lịch. Mà để tìm lại người chồng của mình.
```

### Timeline items

```txt
Thanh xuân — Hai người cùng nuôi giấc mơ khám phá văn hóa Việt.
Tuổi trẻ — Họ đi qua phố cổ, sông nước, lễ hội và làng nghề.
Tuổi 30 — Cả hai quyết định xây dựng mái ấm và nhận con nuôi.
Biến cố — Tai nạn kép làm cuộc đời họ đứt gãy.
Ba năm — Lan Anh chăm sóc Tính trong im lặng.
Thức tỉnh — Tiếng trống rối nước đánh thức phản xạ của Tính.
Hành trình mới — Lan Anh đưa Tính trở về làng cổ đầu tiên.
```

### Background

Loại: **Texture background**

- Nền giấy cũ màu vàng tơ tằm.
- Vết mực, đường chỉ đỏ, texture sổ tay.
- Một lớp waveform/trống hội rất mờ.

### Layout

Desktop:

- Left: heading + body.
- Right: vertical timeline.

Mobile:

- Heading trên.
- Body dưới.
- Timeline dạng card dọc.

### Acceptance criteria

- Người xem hiểu premise mà không phải đọc toàn bộ prologue.
- Timeline dễ scan.
- Không quá u tối; vẫn có hy vọng.

---

## 5.4 Gameplay Pillars Section

### Mục tiêu

Chuyển cảm xúc/cốt truyện thành gameplay rõ ràng.

### Heading

```txt
Khám phá bằng bước chân. Ghi nhớ bằng trái tim.
```

### Subheading

```txt
Trong Du Lạc, mỗi phong tục, trò chơi và địa điểm đều có thể trở thành một mảnh khóa ký ức.
```

### Feature cards

#### Card 1 — Dẫn Tính qua ký ức

```txt
Quan sát trạng thái của Tính khi anh phản ứng với âm thanh, đồ vật và những địa điểm quen thuộc. Anh có thể yên lặng, tò mò, bồn chồn hoặc bất ngờ đi theo một tín hiệu ký ức.
```

#### Card 2 — Trò chuyện và ghi nhật ký

```txt
Lan Anh trò chuyện với người làng, ghi chép phong tục, chụp ảnh, thu âm và lưu lại các manh mối trong Nhật Ký Du Lạc.
```

#### Card 3 — Giải đố bằng văn hóa

```txt
Những trò chơi dân gian, truyền thuyết, vật kỷ niệm và địa danh trở thành câu đố để người chơi mở khóa ký ức.
```

#### Card 4 — Mini-game dân gian

```txt
Ô Ăn Quan, rối nước, đan cói, hội làng và các trò chơi tuổi thơ không chỉ là hoạt động phụ. Chúng là cách cơ thể nhớ lại điều trí não đã quên.
```

### Background

Loại: **Symbolic/gameplay background**

- Bản đồ làng mờ.
- 4 điểm sáng: Gốc Sung, Giếng Làng, Bờ Ao, Gốc Đa.
- Đường nối ký ức.
- UI nhỏ: `Tính đang... yên / bồn chồn / biến mất`.

### Visual assets

- `memory-map.webp`
- `diary-icon.svg`
- `o-an-quan-icon.svg`
- `firefly-icon.svg`
- `dialogue-icon.svg`

### Acceptance criteria

- Người xem hiểu được game chơi như thế nào.
- Section không chỉ thơ, mà có thông tin gameplay cụ thể.
- Cards đọc tốt trên mobile.

---

## 5.5 Episode 1 Showcase

### Mục tiêu

Biến Episode 1 “Tuổi Thơ” thành section showcase có cảm xúc cao nhất sau Hero.

### Heading

```txt
Tập 01 — Tuổi Thơ
```

### Subheading

```txt
Trạm dừng đầu tiên là một làng cổ Bắc Bộ, nơi tiếng trống hội từng đánh thức Tính sau ba năm im lặng.
```

### Body copy

```txt
Lan Anh đưa Tính trở về ngôi làng cũ. Ở đó, họ gặp lại những người từng biết Tính khi còn nhỏ: ông Nhiêu, Minh, Hùng, bà Tư. Qua chiếc vòng rơm, trò Ô Ăn Quan, bốn điểm ký ức và một đêm đom đóm dưới gốc đa, quá khứ bắt đầu hé mở.

Nhưng ký ức đầu tiên Tính gọi tên không phải Lan Anh.

Đó là một cái tên khác:

“Thủ.”
```

### Key moments

```txt
Trước cổng làng — Lan Anh dắt Tính trở về nơi mọi thứ bắt đầu.
Chiếc vòng rơm — Vật kỷ niệm bà Ngần để lại.
Ô Ăn Quan — Trò chơi tuổi thơ trở thành chìa khóa ký ức.
Bốn hướng gió — Gốc Sung, Giếng Làng, Bờ Ao và Gốc Đa nối thành bản đồ bí mật.
Đêm gốc đa — Đom đóm xuất hiện, Tính mỉm cười và thì thầm: “Thủ.”
```

### Background

Loại: **Cinematic background**

- Gốc đa ban đêm.
- Đèn lồng.
- Sân đình sau hội làng.
- Đom đóm xanh lam.
- Chiếu Ô Ăn Quan mờ ở foreground.

### Layout

Desktop:

- Left: text + quote.
- Right: image/card stack key moments.

Mobile:

- Background still.
- Content stacked.
- Key moments dạng accordion hoặc list card.

### Acceptance criteria

- Section này phải khiến người xem muốn biết “Thủ là ai?”.
- Có cảm giác trailer/cao trào.
- Không spoil quá nhiều beyond Episode 1.

---

## 5.6 Characters Preview

### Mục tiêu

Giới thiệu dàn nhân vật Episode 1 và vai trò cảm xúc của họ.

### Heading

```txt
Hai người đi cùng nhau, nhưng chỉ một người còn nhớ đường.
```

### Character cards

#### Lan Anh

```txt
Người dẫn đường của hành trình. Dịu dàng, bền bỉ và thực tế, Lan Anh vừa chăm sóc Tính, vừa ghi lại những mảnh văn hóa đang mở khóa ký ức của anh.
```

Quote:

```txt
Em không cần anh nhớ hết. Chỉ cần anh còn muốn đi cùng em.
```

#### Tính

```txt
Một người đàn ông 33 tuổi với nhận thức của đứa trẻ lên bốn. Anh không còn nhớ Lan Anh, nhưng cơ thể vẫn phản ứng với tiếng trống hội, trò chơi cũ và những nơi từng thuộc về mình.
```

Quote:

```txt
...Thủ.
```

#### Ông Nhiêu

```txt
Người giữ ký ức của làng. Ông nhận ra Tính qua đôi mắt và mở ra những manh mối đầu tiên về bà Ngần.
```

#### Minh

```txt
Bạn cũ của Tính, chủ quán nước đầu làng. Anh giấu sự xúc động sau những câu nói bình thường.
```

#### Hùng

```txt
Người đan lát cuối làng. Ít lời, vụng về trong an ủi, nhưng thể hiện tình cảm bằng hành động.
```

#### Bà Tư

```txt
Người giữ chiếc vòng rơm bà Ngần để lại. Bà là cầu nối giữa Tính hiện tại và một lời hứa từ quá khứ.
```

### Background

Loại: **Texture + portrait atmosphere**

- Nền giấy cũ.
- Mỗi card có motif riêng.
- Không dùng quá nhiều ảnh nền lớn.

### Acceptance criteria

- Lan Anh và Tính nổi bật nhất.
- NPC tạo cảm giác làng có đời sống thật.
- Card không quá dài.

---

## 5.7 Folklore Codex Preview

### Mục tiêu

Cho thấy game không chỉ mượn dân gian làm trang trí, mà biến văn hóa thành gameplay/lore.

### Heading

```txt
Một Việt Nam vừa quen, vừa linh thiêng.
```

### Subheading

```txt
Mỗi biểu tượng văn hóa trong Du Lạc đều có câu chuyện, âm thanh, ký ức và vai trò gameplay riêng.
```

### Codex cards

#### Ô Ăn Quan

```txt
Trò chơi tuổi thơ trở thành cách bàn tay Tính nhớ lại điều trí não đã quên.
```

#### Rối nước

```txt
Tiếng nước và trống hội là tín hiệu đầu tiên đánh thức Tính sau ba năm im lặng.
```

#### Gốc đa

```txt
Không gian linh thiêng của làng, nơi đom đóm tụ lại và cái tên “Thủ” xuất hiện.
```

#### Giếng làng

```txt
Một điểm ký ức yên tĩnh, nơi Tính thả lá xuống nước như đang nghe một điều rất xa.
```

#### Nghề đan cói

```txt
Mùi cói, vòng rơm và đôi tay người làng lưu giữ những ký ức không nằm trong lời nói.
```

#### Rùa thần giữ làng

```txt
Truyền thuyết mở ra lớp bí ẩn sâu hơn phía sau tuổi thơ của Tính.
```

### Background

Loại: **Sổ tay / thư viện văn hóa**

- Nền vàng tơ tằm.
- Hoa văn trống đồng opacity thấp.
- Card dạng trang sổ tay/codex.

### Acceptance criteria

- Người xem thấy được bản sắc Việt Nam rõ.
- Không biến codex thành bài Wikipedia dài.
- Mỗi card có 1 câu hook gameplay/lore.

---

## 5.8 Media Preview

### Mục tiêu

Tạo niềm tin sản phẩm đang được phát triển, dù MVP có thể chưa có đủ trailer/screenshot thật.

### Heading

```txt
Nhìn thấy ký ức trước khi nó biến mất.
```

### Content MVP

Nếu chưa có trailer thật:

- 1 trailer placeholder image.
- 3–6 concept art/screenshot placeholder.
- 1 audio ambience placeholder.

### Suggested media blocks

```txt
Trailer Teaser
Cổng làng sáng sớm
Chiếc vòng rơm
Bản đồ bốn điểm ký ức
Gốc đa đom đóm
Nhật Ký Du Lạc
```

### Background

Loại: **Dark gallery**

- Nền xanh rêu rất đậm hoặc nâu đen.
- Media card nổi lên.
- Viền vàng nhẹ như ảnh cũ.

### Acceptance criteria

- Không làm người xem nghĩ game đã hoàn thiện nếu chưa có asset thật.
- Placeholder cần có style thống nhất, không dùng ảnh stock lệch mood.

---

## 5.9 Community CTA

### Mục tiêu

Kết thúc bằng hy vọng và chuyển đổi.

### Heading

```txt
Cùng lưu giữ những điều đang dần bị quên.
```

### Body copy

```txt
Du Lạc đang được phát triển như một hành trình dài qua ký ức, văn hóa và những vùng đất Việt Nam. Theo dõi quá trình phát triển, tham gia cộng đồng và chia sẻ những ký ức tuổi thơ của bạn.
```

### CTA buttons

```txt
Wishlist trên Steam
Tham gia Discord
Đăng ký Devlog
```

### Optional user-generated idea

```txt
Gửi ký ức tuổi thơ của bạn: một trò chơi, một lễ hội, một câu hát ru, một ngôi làng hoặc một câu chuyện dân gian mà bạn không muốn bị lãng quên.
```

### Background

Loại: **Cinematic warm ending**

- Đường làng hoàng hôn.
- Lan Anh và Tính đi xa dần.
- Đom đóm nhẹ.
- Mood hy vọng.

### Acceptance criteria

- CTA cuối rõ.
- Tone ấm, không tuyệt vọng.
- Người xem hiểu đây là hành trình dài.

---

## 6. Background system

## 6.1 Nguyên tắc

Mỗi section nên có background, nhưng background không nhất thiết phải là ảnh minh họa lớn. Chia thành 3 cấp độ:

| Cấp độ      | Dùng cho                    | Ví dụ                                   |
| ----------- | --------------------------- | --------------------------------------- |
| Cinematic   | Hero, Episode 1, Final CTA  | Cổng làng, gốc đa, đường làng hoàng hôn |
| Texture     | Story, Characters, Folklore | Giấy cũ, vết mực, hoa văn dân gian      |
| Symbolic/UI | Gameplay, Codex             | Bản đồ ký ức, Nhật ký, Ô Ăn Quan        |

## 6.2 Background rhythm

```txt
Hero: Cổng làng sáng sớm
Story: Giấy nhật ký + timeline chỉ đỏ
Gameplay: Bản đồ ký ức
Episode 1: Gốc đa đom đóm ban đêm
Characters: Texture giấy + motif nhân vật
Folklore: Sổ tay văn hóa
Media: Gallery tối
CTA: Đường làng hoàng hôn
```

## 6.3 Color palette

```txt
Imperial Red / Đỏ chu sa: #B71C1C
Silk Yellow / Vàng tơ tằm: #FFF8E1
Moss Green / Xanh rêu: #2E7D32
Firefly Cyan / Xanh đom đóm: #7FE7C4
Wood Brown / Nâu gỗ: #5D4037
Ink Black / Đen mực: #1E1A17
Deep Moss / Rêu tối: #10251A
```

## 6.4 Usage

```txt
#B71C1C
- CTA chính
- Mốc biến cố
- Chi tiết trống hội/rối nước

#FFF8E1
- Background chính
- Section nhiều text
- Card content

#2E7D32
- Healing
- Làng cổ
- Các section yên tĩnh

#7FE7C4
- Memory signal
- Đom đóm
- Yếu tố siêu nhiên

#5D4037
- Text phụ
- Border
- Wood/card UI
```

---

## 7. Typography system

## 7.1 Font recommendation

Heading:

```txt
Noto Serif Vietnamese
Playfair Display
Cormorant Garamond
```

Body:

```txt
Be Vietnam Pro
Inter
Roboto
```

## 7.2 MVP recommendation

Dùng:

```txt
Heading: Noto Serif Vietnamese
Body: Be Vietnam Pro
```

Lý do:

- Hỗ trợ tiếng Việt tốt.
- Giữ được cảm giác văn hóa nhưng vẫn hiện đại.
- Ít rủi ro lỗi dấu tiếng Việt.

## 7.3 Type scale

```txt
Hero title: 64–96px desktop, 44–56px mobile
Section title: 40–56px desktop, 32–40px mobile
Card title: 22–28px
Body large: 18–20px
Body: 16px
Caption: 13–14px
```

---

## 8. Tech stack MVP

## 8.1 Recommended stack

```txt
Framework: Next.js
Language: TypeScript
Styling: Tailwind CSS
Animation: Motion hoặc Framer Motion
Content: TypeScript data files hoặc MDX
Hosting: Vercel
Images: WebP/AVIF trong public/images
Analytics: Plausible hoặc Google Analytics
```

## 8.2 Vì sao chọn stack này

- Next.js phù hợp landing page, SEO, image optimization, deployment dễ.
- TypeScript giúp code maintainable.
- Tailwind giúp làm design system nhanh.
- Motion đủ cho animation nhẹ: fade, reveal, firefly, scroll effects.
- MVP chưa cần CMS. Content để trong file `.ts` là đủ.

---

## 9. Project structure

```txt
dulac-website/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
      Header.tsx
      Footer.tsx

    sections/
      HeroSection.tsx
      StorySection.tsx
      GameplaySection.tsx
      EpisodeSection.tsx
      CharactersSection.tsx
      FolkloreSection.tsx
      MediaSection.tsx
      CommunitySection.tsx

    ui/
      Button.tsx
      Section.tsx
      BackgroundLayer.tsx
      DiaryCard.tsx
      CharacterCard.tsx
      FeatureCard.tsx
      FolkloreCard.tsx
      MediaCard.tsx

  content/
    home.ts
    characters.ts
    gameplay.ts
    folklore.ts
    episode-one.ts

  lib/
    cn.ts

  public/
    images/
      backgrounds/
        hero-village-gate.webp
        story-paper-texture.webp
        memory-map.webp
        banyan-night-fireflies.webp
        folklore-pattern.svg
        gallery-dark-texture.webp
        cta-sunset-road.webp
      characters/
        lan-anh.webp
        tinh.webp
        ong-nhieu.webp
        minh.webp
        hung.webp
        ba-tu.webp
      icons/
        o-an-quan.svg
        water-puppet.svg
        banyan-tree.svg
        village-well.svg
        straw-bracelet.svg
        turtle-symbol.svg
        diary.svg
        firefly.svg
      media/
        trailer-placeholder.webp
        screenshot-01.webp
        screenshot-02.webp
        screenshot-03.webp

    audio/
      village-ambience.mp3
      festival-drum-soft.mp3
      water-loop.mp3
```

---

## 10. Data content structure

## 10.1 `content/home.ts`

```ts
export const siteConfig = {
  name: "Du Lạc",
  tagline: "Đi qua văn hóa. Chạm lại ký ức.",
  description:
    "Một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, nơi Lan Anh đưa Tính trở lại những làng quê, trò chơi tuổi thơ và truyền thuyết cũ để đánh thức phần ký ức đã ngủ quên.",
  cta: {
    primary: "Wishlist Now",
    secondary: "Xem Trailer",
    tertiary: "Khám phá câu chuyện"
  }
};
```

## 10.2 `content/gameplay.ts`

```ts
export const gameplayPillars = [
  {
    title: "Dẫn Tính qua ký ức",
    description:
      "Quan sát trạng thái của Tính khi anh phản ứng với âm thanh, đồ vật và những địa điểm quen thuộc."
  },
  {
    title: "Trò chuyện và ghi nhật ký",
    description:
      "Lan Anh trò chuyện với người làng, ghi chép phong tục, chụp ảnh, thu âm và lưu lại manh mối trong Nhật Ký Du Lạc."
  },
  {
    title: "Giải đố bằng văn hóa",
    description:
      "Những trò chơi dân gian, truyền thuyết, vật kỷ niệm và địa danh trở thành câu đố để mở khóa ký ức."
  },
  {
    title: "Mini-game dân gian",
    description:
      "Ô Ăn Quan, rối nước, đan cói và hội làng là cách cơ thể nhớ lại điều trí não đã quên."
  }
];
```

## 10.3 `content/characters.ts`

```ts
export const characters = [
  {
    name: "Lan Anh",
    role: "Người dẫn đường",
    description:
      "Dịu dàng, bền bỉ và thực tế, Lan Anh vừa chăm sóc Tính, vừa ghi lại những mảnh văn hóa đang mở khóa ký ức của anh.",
    quote: "Em không cần anh nhớ hết. Chỉ cần anh còn muốn đi cùng em."
  },
  {
    name: "Tính",
    role: "Người đang tìm lại chính mình",
    description:
      "Một người đàn ông 33 tuổi với nhận thức của đứa trẻ lên bốn. Anh không còn nhớ Lan Anh, nhưng cơ thể vẫn phản ứng với những nơi từng thuộc về mình.",
    quote: "...Thủ."
  },
  {
    name: "Ông Nhiêu",
    role: "Người giữ ký ức làng",
    description:
      "Ông nhận ra Tính qua đôi mắt và mở ra những manh mối đầu tiên về bà Ngần."
  },
  {
    name: "Minh",
    role: "Bạn cũ ở quán nước đầu làng",
    description:
      "Anh giấu sự xúc động sau những câu nói bình thường."
  },
  {
    name: "Hùng",
    role: "Người đan lát cuối làng",
    description:
      "Ít lời, vụng về trong an ủi, nhưng thể hiện tình cảm bằng hành động."
  },
  {
    name: "Bà Tư",
    role: "Người giữ chiếc vòng rơm",
    description:
      "Bà là cầu nối giữa Tính hiện tại và một lời hứa từ quá khứ."
  }
];
```

## 10.4 `content/folklore.ts`

```ts
export const folkloreItems = [
  {
    title: "Ô Ăn Quan",
    description:
      "Trò chơi tuổi thơ trở thành cách bàn tay Tính nhớ lại điều trí não đã quên."
  },
  {
    title: "Rối nước",
    description:
      "Tiếng nước và trống hội là tín hiệu đầu tiên đánh thức Tính sau ba năm im lặng."
  },
  {
    title: "Gốc đa",
    description:
      "Không gian linh thiêng của làng, nơi đom đóm tụ lại và cái tên “Thủ” xuất hiện."
  },
  {
    title: "Giếng làng",
    description:
      "Một điểm ký ức yên tĩnh, nơi Tính thả lá xuống nước như đang nghe một điều rất xa."
  },
  {
    title: "Nghề đan cói",
    description:
      "Mùi cói, vòng rơm và đôi tay người làng lưu giữ những ký ức không nằm trong lời nói."
  },
  {
    title: "Rùa thần giữ làng",
    description:
      "Truyền thuyết mở ra lớp bí ẩn sâu hơn phía sau tuổi thơ của Tính."
  }
];
```

---

## 11. Component specification

## 11.1 `Section.tsx`

Mục tiêu: wrapper thống nhất spacing, max-width, background.

Props:

```ts
type SectionProps = {
  id?: string;
  variant?:
    | "paper"
    | "villageMorning"
    | "memoryMap"
    | "banyanNight"
    | "folklorePattern"
    | "darkGallery"
    | "sunsetRoad";
  children: React.ReactNode;
  className?: string;
};
```

Behavior:

- Section full-width.
- Nội dung trong `max-w-7xl`.
- Padding desktop `py-24` hoặc `py-32`.
- Padding mobile `py-16`.

---

## 11.2 `BackgroundLayer.tsx`

Mục tiêu: quản lý background theo variant.

Pseudo logic:

```ts
const backgrounds = {
  paper: "bg-[#FFF8E1] with paper texture",
  villageMorning: "hero village gate image + dark gradient",
  memoryMap: "paper background + memory map overlay",
  banyanNight: "banyan tree night image + dark overlay + fireflies",
  folklorePattern: "silk background + folklore pattern",
  darkGallery: "deep moss background + subtle grain",
  sunsetRoad: "sunset road image + warm overlay"
};
```

Rules:

- Background image phải dùng absolute layer.
- Nội dung section luôn `relative z-10`.
- Overlay luôn kiểm soát readability.
- Không để background animate nặng ở MVP.

---

## 11.3 `Button.tsx`

Variants:

```ts
primary: red background, silk text
secondary: transparent, border red/wood
ghost: no border, underline/arrow
```

Sizes:

```ts
sm
md
lg
```

---

## 11.4 `FeatureCard.tsx`

Dùng cho gameplay pillars.

Props:

```ts
type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};
```

Style:

- Nền silk hoặc semi-transparent.
- Border nâu gỗ opacity thấp.
- Hover: nâng nhẹ, border đỏ chu sa.

---

## 11.5 `CharacterCard.tsx`

Props:

```ts
type CharacterCardProps = {
  name: string;
  role: string;
  description: string;
  quote?: string;
  image?: string;
};
```

Style:

- Lan Anh và Tính card lớn hơn.
- NPC card nhỏ hơn.
- Có motif riêng ở góc card.

---

## 11.6 `FolkloreCard.tsx`

Props:

```ts
type FolkloreCardProps = {
  title: string;
  description: string;
  icon?: string;
};
```

Style:

- Card như trang sổ tay/codex.
- Có icon nét vẽ.
- Hover hiện dòng: `Xem trong Sổ Tay Du Lạc`.

---

## 12. Animation plan

MVP nên dùng animation nhẹ, không làm chậm website.

## 12.1 Animation nên làm

| Element             | Animation                   |
| ------------------- | --------------------------- |
| Hero title          | Fade up                     |
| Hero CTA            | Fade up delay               |
| Fireflies           | Floating loop bằng CSS      |
| Timeline            | Reveal từng item khi scroll |
| Gameplay cards      | Stagger fade                |
| Memory map dots     | Pulse nhẹ                   |
| Episode quote “Thủ” | Fade in chậm                |
| CTA cuối            | Button pulse rất nhẹ        |

## 12.2 Animation không nên làm ở MVP

- Scroll hijacking.
- Parallax quá mạnh.
- Video background nặng.
- Glitch liên tục.
- Cursor custom phức tạp.
- Audio autoplay.

## 12.3 Firefly CSS idea

```css
.firefly {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: #7FE7C4;
  box-shadow: 0 0 12px #7FE7C4;
  animation: floatFirefly 6s ease-in-out infinite;
}

@keyframes floatFirefly {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.35;
  }
  50% {
    transform: translate3d(12px, -20px, 0);
    opacity: 1;
  }
}
```

---

## 13. SEO plan

## 13.1 Metadata

Title:

```txt
Du Lạc — Vietnamese Folklore Narrative Adventure Game
```

Description:

```txt
Du Lạc is a Vietnamese folklore-inspired narrative adventure game about memory, love, ancient villages, folk games, and forgotten legends.
```

Vietnamese description:

```txt
Du Lạc là game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, kể về hành trình Lan Anh đưa Tính đi qua làng quê, trò chơi tuổi thơ và truyền thuyết cũ để đánh thức ký ức đã ngủ quên.
```

Keywords:

```txt
game dân gian Việt Nam
Vietnamese folklore game
narrative adventure Vietnam
Vietnamese indie game
Ô Ăn Quan game
rối nước game
folklore adventure game
Du Lạc game
```

## 13.2 Open Graph

OG image:

```txt
Lan Anh dắt Tính trước cổng làng, xa xa có đom đóm, đình làng và ánh trống hội.
```

OG title:

```txt
Du Lạc — Đi qua văn hóa. Chạm lại ký ức.
```

OG description:

```txt
Một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam.
```

---

## 14. Asset checklist

## 14.1 Required for MVP

Background:

```txt
hero-village-gate.webp
story-paper-texture.webp
memory-map.webp
banyan-night-fireflies.webp
folklore-pattern.svg
gallery-dark-texture.webp
cta-sunset-road.webp
```

Character placeholder:

```txt
lan-anh.webp
tinh.webp
ong-nhieu.webp
minh.webp
hung.webp
ba-tu.webp
```

Icons:

```txt
o-an-quan.svg
water-puppet.svg
banyan-tree.svg
village-well.svg
straw-bracelet.svg
turtle-symbol.svg
diary.svg
firefly.svg
```

Media placeholder:

```txt
trailer-placeholder.webp
screenshot-01.webp
screenshot-02.webp
screenshot-03.webp
```

## 14.2 Optional after MVP

Audio:

```txt
village-ambience.mp3
festival-drum-soft.mp3
water-loop.mp3
bamboo-wind.mp3
firefly-night.mp3
```

Interactive:

```txt
interactive-map.svg
memory-fragment-animation.json
journal-page-flip.json
```

---

## 15. Development milestones

## Milestone 1 — Foundation

Goal: setup project và design tokens.

Tasks:

```txt
[ ] Init Next.js project
[ ] Setup TypeScript
[ ] Setup Tailwind CSS
[ ] Add font config
[ ] Add color tokens
[ ] Create global layout
[ ] Create Header
[ ] Create Footer
[ ] Create Button component
[ ] Create Section component
[ ] Create BackgroundLayer component
```

Acceptance:

```txt
[ ] Website chạy local
[ ] Header/Footer hiển thị đúng
[ ] Color/font system hoạt động
[ ] Có thể render section với các background variant
```

---

## Milestone 2 — Content sections

Goal: hoàn thành layout không animation.

Tasks:

```txt
[ ] Build HeroSection
[ ] Build StorySection
[ ] Build GameplaySection
[ ] Build EpisodeSection
[ ] Build CharactersSection
[ ] Build FolkloreSection
[ ] Build MediaSection
[ ] Build CommunitySection
[ ] Connect content from /content files
```

Acceptance:

```txt
[ ] Homepage đủ 9 section
[ ] Copy đã đúng tone Du Lạc
[ ] Layout desktop ổn
[ ] Layout mobile không vỡ
```

---

## Milestone 3 — Visual polish

Goal: làm website có mood riêng.

Tasks:

```txt
[ ] Add real/placeholder background assets
[ ] Add texture overlays
[ ] Add firefly particles
[ ] Polish card style
[ ] Polish spacing
[ ] Polish typography
[ ] Add hover states
[ ] Add mobile menu
```

Acceptance:

```txt
[ ] Website nhìn ra chất cyber-folklore Việt Nam
[ ] Background không làm khó đọc text
[ ] CTA nổi bật
[ ] Mobile trải nghiệm tốt
```

---

## Milestone 4 — Motion & interaction

Goal: thêm animation nhẹ.

Tasks:

```txt
[ ] Add hero fade animation
[ ] Add section reveal animation
[ ] Add gameplay card stagger
[ ] Add memory map dot pulse
[ ] Add episode quote fade
[ ] Add CTA hover/pulse
[ ] Respect prefers-reduced-motion
```

Acceptance:

```txt
[ ] Animation mượt nhưng không rối
[ ] Không ảnh hưởng readability
[ ] Người dùng reduced motion vẫn dùng tốt
```

---

## Milestone 5 — SEO, performance, deploy

Goal: sẵn sàng public.

Tasks:

```txt
[ ] Add metadata
[ ] Add OG image
[ ] Add favicon
[ ] Optimize images
[ ] Check Lighthouse
[ ] Add analytics
[ ] Deploy to Vercel
[ ] Test share preview
```

Acceptance:

```txt
[ ] Lighthouse Performance >= 85
[ ] Accessibility >= 90
[ ] SEO >= 90
[ ] Mobile không lỗi layout
[ ] Link social preview đúng
```

---

## 16. MVP task board

## Design

```txt
[ ] Logo text DU LẠC version 1
[ ] Color palette final
[ ] Typography final
[ ] Hero key art placeholder
[ ] Background texture set
[ ] Character card placeholder art
[ ] Icon motif set
[ ] OG image
```

## Content

```txt
[ ] Finalize tagline
[ ] Finalize one-liner
[ ] Finalize story section copy
[ ] Finalize gameplay pillars
[ ] Finalize Episode 1 section
[ ] Finalize character short bios
[ ] Finalize folklore codex preview
[ ] Finalize CTA copy
```

## Frontend

```txt
[ ] Project setup
[ ] Layout
[ ] Header/Footer
[ ] Background system
[ ] Section components
[ ] Homepage sections
[ ] Responsive
[ ] Animation
[ ] SEO
[ ] Deploy
```

## QA

```txt
[ ] Desktop Chrome
[ ] Desktop Safari
[ ] Desktop Firefox
[ ] iPhone Safari
[ ] Android Chrome
[ ] Text contrast
[ ] Keyboard navigation
[ ] Reduced motion
[ ] Image loading
[ ] CTA links
```

---

## 17. MVP content draft for homepage

This section contains the homepage copy in order.

---

# Hero

## DU LẠC

**Đi qua văn hóa. Chạm lại ký ức.**

Một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, nơi Lan Anh đưa Tính trở lại những làng quê, trò chơi tuổi thơ và truyền thuyết cũ để đánh thức phần ký ức đã ngủ quên.

**CTA:**

```txt
Xem Trailer
Wishlist Now
Khám phá câu chuyện
```

---

# Story Hook

## Khi ký ức không biến mất, nó chỉ ngủ quên.

Tính và Lan Anh từng cùng nhau đi qua nhiều vùng đất Việt Nam để ghi chép văn hóa, phong tục và lịch sử. Ở tuổi 30, khi cả hai chuẩn bị nhận một người con nuôi, biến cố xảy ra.

Lan Anh gặp tai nạn lao động. Trên đường đến bệnh viện với vợ, Tính bị xe tải tông và rơi vào trạng thái sống thực vật.

Ba năm sau, một đoạn video rối nước bị lặp lại trên máy tính. Tiếng nước, tiếng trống hội và âm thanh dân gian quen thuộc đã chạm đến tầng sâu ý thức của Tính. Anh tỉnh lại, nhưng trí não trống rỗng như một đứa trẻ lên bốn.

Lan Anh quyết định đưa anh trở về những nơi họ từng đi qua. Không phải để du lịch. Mà để tìm lại người chồng của mình.

---

# Gameplay

## Khám phá bằng bước chân. Ghi nhớ bằng trái tim.

Trong Du Lạc, mỗi phong tục, trò chơi và địa điểm đều có thể trở thành một mảnh khóa ký ức.

### Dẫn Tính qua ký ức

Quan sát trạng thái của Tính khi anh phản ứng với âm thanh, đồ vật và những địa điểm quen thuộc. Anh có thể yên lặng, tò mò, bồn chồn hoặc bất ngờ đi theo một tín hiệu ký ức.

### Trò chuyện và ghi nhật ký

Lan Anh trò chuyện với người làng, ghi chép phong tục, chụp ảnh, thu âm và lưu lại các manh mối trong Nhật Ký Du Lạc.

### Giải đố bằng văn hóa

Những trò chơi dân gian, truyền thuyết, vật kỷ niệm và địa danh trở thành câu đố để người chơi mở khóa ký ức.

### Mini-game dân gian

Ô Ăn Quan, rối nước, đan cói, hội làng và các trò chơi tuổi thơ không chỉ là hoạt động phụ. Chúng là cách cơ thể nhớ lại điều trí não đã quên.

---

# Episode 1

## Tập 01 — Tuổi Thơ

Trạm dừng đầu tiên là một làng cổ Bắc Bộ, nơi tiếng trống hội từng đánh thức Tính sau ba năm im lặng.

Lan Anh đưa Tính trở về ngôi làng cũ. Ở đó, họ gặp lại những người từng biết Tính khi còn nhỏ: ông Nhiêu, Minh, Hùng, bà Tư. Qua chiếc vòng rơm, trò Ô Ăn Quan, bốn điểm ký ức và một đêm đom đóm dưới gốc đa, quá khứ bắt đầu hé mở.

Nhưng ký ức đầu tiên Tính gọi tên không phải Lan Anh.

Đó là một cái tên khác:

**“Thủ.”**

### Key moments

- Trước cổng làng — Lan Anh dắt Tính trở về nơi mọi thứ bắt đầu.
- Chiếc vòng rơm — Vật kỷ niệm bà Ngần để lại.
- Ô Ăn Quan — Trò chơi tuổi thơ trở thành chìa khóa ký ức.
- Bốn hướng gió — Gốc Sung, Giếng Làng, Bờ Ao và Gốc Đa nối thành bản đồ bí mật.
- Đêm gốc đa — Đom đóm xuất hiện, Tính mỉm cười và thì thầm: “Thủ.”

---

# Characters

## Hai người đi cùng nhau, nhưng chỉ một người còn nhớ đường.

### Lan Anh

Người dẫn đường của hành trình. Dịu dàng, bền bỉ và thực tế, Lan Anh vừa chăm sóc Tính, vừa ghi lại những mảnh văn hóa đang mở khóa ký ức của anh.

> Em không cần anh nhớ hết. Chỉ cần anh còn muốn đi cùng em.

### Tính

Một người đàn ông 33 tuổi với nhận thức của đứa trẻ lên bốn. Anh không còn nhớ Lan Anh, nhưng cơ thể vẫn phản ứng với tiếng trống hội, trò chơi cũ và những nơi từng thuộc về mình.

> ...Thủ.

### Ông Nhiêu

Người giữ ký ức của làng. Ông nhận ra Tính qua đôi mắt và mở ra những manh mối đầu tiên về bà Ngần.

### Minh

Bạn cũ của Tính, chủ quán nước đầu làng. Anh giấu sự xúc động sau những câu nói bình thường.

### Hùng

Người đan lát cuối làng. Ít lời, vụng về trong an ủi, nhưng thể hiện tình cảm bằng hành động.

### Bà Tư

Người giữ chiếc vòng rơm bà Ngần để lại. Bà là cầu nối giữa Tính hiện tại và một lời hứa từ quá khứ.

---

# Folklore Codex

## Một Việt Nam vừa quen, vừa linh thiêng.

Mỗi biểu tượng văn hóa trong Du Lạc đều có câu chuyện, âm thanh, ký ức và vai trò gameplay riêng.

### Ô Ăn Quan

Trò chơi tuổi thơ trở thành cách bàn tay Tính nhớ lại điều trí não đã quên.

### Rối nước

Tiếng nước và trống hội là tín hiệu đầu tiên đánh thức Tính sau ba năm im lặng.

### Gốc đa

Không gian linh thiêng của làng, nơi đom đóm tụ lại và cái tên “Thủ” xuất hiện.

### Giếng làng

Một điểm ký ức yên tĩnh, nơi Tính thả lá xuống nước như đang nghe một điều rất xa.

### Nghề đan cói

Mùi cói, vòng rơm và đôi tay người làng lưu giữ những ký ức không nằm trong lời nói.

### Rùa thần giữ làng

Truyền thuyết mở ra lớp bí ẩn sâu hơn phía sau tuổi thơ của Tính.

---

# Media

## Nhìn thấy ký ức trước khi nó biến mất.

Trailer teaser, screenshot, concept art và âm thanh môi trường sẽ được cập nhật trong quá trình phát triển.

Media slots:

- Trailer Teaser
- Cổng làng sáng sớm
- Chiếc vòng rơm
- Bản đồ bốn điểm ký ức
- Gốc đa đom đóm
- Nhật Ký Du Lạc

---

# Community CTA

## Cùng lưu giữ những điều đang dần bị quên.

Du Lạc đang được phát triển như một hành trình dài qua ký ức, văn hóa và những vùng đất Việt Nam. Theo dõi quá trình phát triển, tham gia cộng đồng và chia sẻ những ký ức tuổi thơ của bạn.

**CTA:**

```txt
Wishlist trên Steam
Tham gia Discord
Đăng ký Devlog
```

Optional:

```txt
Gửi ký ức tuổi thơ của bạn: một trò chơi, một lễ hội, một câu hát ru, một ngôi làng hoặc một câu chuyện dân gian mà bạn không muốn bị lãng quên.
```

---

## 18. Suggested implementation order

```txt
Day 1:
- Setup project
- Add design tokens
- Build Header/Footer/Button/Section

Day 2:
- Build Hero
- Build Story
- Build Gameplay

Day 3:
- Build Episode
- Build Characters
- Build Folklore

Day 4:
- Build Media
- Build Community CTA
- Add responsive polish

Day 5:
- Add background assets
- Add light animation
- Add SEO
- Deploy MVP
```

Nếu làm solo, có thể kéo thành 1–2 tuần để có thời gian polish visual.

---

## 19. Definition of Done

MVP được xem là hoàn thành khi:

```txt
[ ] Người xem hiểu game trong 10 giây đầu.
[ ] Website có mood dân gian Việt Nam + ký ức + chữa lành.
[ ] Có đầy đủ 9 section.
[ ] Có CTA ở Hero và cuối page.
[ ] Mobile responsive tốt.
[ ] Background từng section không làm text khó đọc.
[ ] Gameplay được mô tả rõ, không chỉ có story.
[ ] Episode 1 tạo được hook “Thủ là ai?”.
[ ] SEO/social preview cơ bản đã có.
[ ] Website deploy được public.
```

---

## 20. Phase 2 ideas after MVP

Sau khi MVP ổn, có thể mở rộng:

```txt
[ ] Trang Story riêng
[ ] Trang Characters riêng
[ ] Trang World/Folklore Codex riêng
[ ] Trang Devlog
[ ] Trang Press Kit
[ ] Interactive village map
[ ] Clickable memory objects
[ ] Audio ambience toggle
[ ] User submission: “Ký ức tuổi thơ của bạn”
[ ] Song ngữ VI/EN
[ ] Steam widget / wishlist integration
```

---

## 21. Final creative direction

Website Du Lạc nên đi theo nhịp:

```txt
Cổng làng → Giấy nhật ký → Bản đồ ký ức → Gốc đa đom đóm → Sổ tay văn hóa → Hành trình tiếp tục
```

Tinh thần chính:

```txt
Không phải website bán một game fantasy.
Đây là cánh cửa bước vào một cuốn nhật ký dân gian, nơi ký ức, tình yêu và văn hóa Việt Nam cùng dẫn đường.
```
