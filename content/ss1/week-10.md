# WEEK 10 — DATA REPRESENTATION

**Sub-topics:** Data and information · Bits, bytes and units · Coding schemes: BCD, EBCDIC, ASCII, Unicode · Representation of numbers, text, images and sound · File sizes and compression

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. distinguish between data and information;
2. define bit, nibble, byte and word, and convert between storage units;
3. explain the BCD, EBCDIC, ASCII and Unicode coding schemes and state the differences;
4. encode simple characters into ASCII and binary;
5. explain how images are represented using pixels, resolution and colour depth;
6. explain how sound is represented using sampling rate and bit depth;
7. calculate the file size of a simple image and a simple sound file;
8. differentiate between lossy and lossless compression.

## Entry Behaviour
Students learnt number systems in Week 3 and storage units in Week 4. They routinely notice that photographs occupy more space than text messages.

## Instructional Materials
Chalkboard, ASCII code chart, graph paper or squared exercise-book paper for the pixel activity, coloured pencils, a computer showing file properties, a magnified screenshot showing individual pixels.

---

## PERIOD 1 (45 minutes)

### 10.1 Data and Information
- **Data** — raw, unprocessed facts and figures with no meaning on their own. *Example: 45, 62, 78, 39.*
- **Information** — data that has been processed, organised and given meaning. *Example: "The class average in the midterm test was 56%, and one student scored below the pass mark."*
- **Data processing cycle:** **Input → Processing → Output**, with **Storage** and **Feedback** supporting it.

### 10.2 Units of Data

| Unit | Meaning |
|---|---|
| **Bit** (binary digit) | The smallest unit — a single 0 or 1 |
| **Nibble** | 4 bits |
| **Byte** | **8 bits** — enough to store one character |
| **Word** | The number of bits a CPU processes at once (16-bit, 32-bit, 64-bit) |
| Kilobyte (KB) | 1,024 bytes = 2¹⁰ bytes |
| Megabyte (MB) | 1,024 KB |
| Gigabyte (GB) | 1,024 MB |
| Terabyte (TB) | 1,024 GB |
| Petabyte (PB) | 1,024 TB |

> **Note on 1,000 vs 1,024:** computer memory is counted in powers of 2, so 1 KB = 1,024 bytes. Manufacturers of hard disks and flash drives, however, often advertise using powers of 10 (1 KB = 1,000 bytes). This is why a "500 GB" hard drive shows as about 465 GB in Windows. It is not a fault and it is not fraud — it is two different counting conventions. Students find this genuinely interesting and it makes the units memorable.

### 10.3 Character Coding Schemes
Since the computer only understands 0s and 1s, every letter, digit and symbol must be given a unique binary code.

| Scheme | Bits | Characters | Notes |
|---|---|---|---|
| **BCD (Binary Coded Decimal)** | 4 or 6 | Limited | Each decimal digit coded separately in 4 bits; used in early machines, calculators and some financial systems |
| **EBCDIC** | 8 | 256 | Extended Binary Coded Decimal Interchange Code; developed by IBM for mainframes |
| **ASCII** | 7 (extended: 8) | 128 (extended: 256) | American Standard Code for Information Interchange; the long-standing standard for English text |
| **Unicode** | 8, 16 or 32 (UTF-8, UTF-16, UTF-32) | Over 149,000 | Universal — covers every major writing system in the world |

**Key ASCII values to know:**

| Character | Decimal | Binary (8-bit) |
|---|---|---|
| Space | 32 | 00100000 |
| '0' | 48 | 00110000 |
| 'A' | 65 | 01000001 |
| 'Z' | 90 | 01011010 |
| 'a' | 97 | 01100001 |
| 'z' | 122 | 01111010 |

**Useful patterns:** the codes are sequential, so if 'A' = 65 then 'B' = 66 and 'E' = 69. Lower-case letters are exactly **32 more** than their upper-case equivalents ('A' = 65, 'a' = 97).

**Worked example 1:** Encode the text `SS1` in ASCII.
- S = 83 → 01010011
- S = 83 → 01010011
- 1 = 49 → 00110001
Total storage: 3 characters × 1 byte = **3 bytes = 24 bits**.

**Why Unicode matters in Nigeria:** ASCII cannot represent the sub-dot and diacritical characters used in written Yoruba (ẹ, ọ, ṣ), Igbo (ị, ọ, ụ, ṅ) or the tone marks used across Nigerian languages, nor the Naira sign **₦** (Unicode U+20A6). Unicode can. This is why properly typed Nigerian-language text, and the Naira symbol, display correctly on modern devices but became strings of question marks on older systems.

---

## PERIOD 2 (45 minutes)

### 10.4 Representation of Numbers
- **Unsigned integers** — only positive values; 8 bits store 0 to 255.
- **Signed magnitude** — the leftmost bit is the sign bit (0 = positive, 1 = negative).
- **Two's complement** — the standard method for representing negative numbers in modern computers (introduced here by name only; treated fully in later classes).
- **Floating point** — used for very large, very small and fractional numbers, storing a mantissa and an exponent.

### 10.5 Representation of Images
A digital image is a grid of tiny coloured squares called **pixels** (picture elements).

- **Resolution** — the number of pixels across and down, e.g. 800 × 600. Higher resolution means more detail and a larger file.
- **Colour depth (bit depth)** — the number of bits used to store the colour of one pixel:

| Bit depth | Colours available |
|---|---|
| 1 bit | 2 (black and white) |
| 4 bits | 16 |
| 8 bits | 256 |
| 16 bits | 65,536 (high colour) |
| **24 bits** | **16,777,216 (true colour)** — 8 bits each for Red, Green and Blue |

- **RGB colour model** — every colour is a mixture of red, green and blue. Pure red is (255, 0, 0), written in hexadecimal as **#FF0000** — a direct application of Week 3's hexadecimal.
- **Bitmap (raster) vs vector:** bitmaps store individual pixels and lose quality when enlarged (JPEG, PNG, BMP, GIF); vector images store mathematical descriptions of shapes and can be scaled to any size without loss (SVG, CorelDRAW .cdr, AI).

**File-size formula:**
`File size (bits) = width × height × colour depth`
Then divide by 8 for bytes, by 1,024 for KB, and by 1,024 again for MB.

**Worked example 2:** Find the size of an uncompressed image of 800 × 600 pixels with 24-bit colour depth.
```
Bits  = 800 × 600 × 24 = 11,520,000 bits
Bytes = 11,520,000 ÷ 8 = 1,440,000 bytes
KB    = 1,440,000 ÷ 1,024 ≈ 1,406.25 KB
MB    = 1,406.25 ÷ 1,024 ≈ 1.37 MB
```
**Answer ≈ 1.37 MB**

### 10.6 Representation of Sound
Sound in nature is an **analogue** wave. To store it digitally the wave must be measured at rapid intervals — a process called **sampling** — by an **Analogue-to-Digital Converter (ADC)**. To play it back, a **Digital-to-Analogue Converter (DAC)** rebuilds the wave.

- **Sampling rate** — how many measurements are taken per second, in hertz. CD quality is **44,100 Hz (44.1 kHz)**.
- **Sample resolution (bit depth)** — how many bits store each measurement. CD quality uses **16 bits**.
- **Channels** — 1 for mono, 2 for stereo.

Higher sampling rate and bit depth give better sound quality but larger files.

**File-size formula:**
`File size (bits) = sampling rate × bit depth × channels × duration in seconds`

**Worked example 3:** Find the size of a 30-second stereo recording at 44.1 kHz and 16-bit depth.
```
Bits  = 44,100 × 16 × 2 × 30 = 42,336,000 bits
Bytes = 42,336,000 ÷ 8 = 5,292,000 bytes
MB    = 5,292,000 ÷ 1,048,576 ≈ 5.05 MB
```
**Answer ≈ 5.05 MB**

**Video** is a rapid sequence of images (frames). Its size depends additionally on the **frame rate** (frames per second, typically 24, 25 or 30) and the length of the clip — which is why video files are by far the largest.

### 10.7 Compression
**Compression** reduces file size for cheaper storage and faster transfer — an important consideration where data costs money and bandwidth is limited.

| Lossless | Lossy |
|---|---|
| No data is discarded | Some data is permanently discarded |
| Original file can be perfectly restored | Original cannot be fully restored |
| Smaller reduction in size | Much greater reduction in size |
| Used for text, program files, spreadsheets | Used for photographs, music and video |
| Formats: ZIP, RAR, PNG, GIF, FLAC | Formats: JPEG, MP3, MP4, AAC |

---

## EVALUATION — WEEK 10

### A. Objective Questions (1 mark each)
1. Eight bits make one ______.
 (a) nibble (b) byte (c) word (d) kilobyte
2. The ASCII value of the character 'A' is ______.
 (a) 64 (b) 65 (c) 90 (d) 97
3. A coding scheme that supports over 149,000 characters from world languages is ______.
 (a) ASCII (b) EBCDIC (c) BCD (d) Unicode
4. The tiny squares that make up a digital image are called ______.
 (a) bits (b) pixels (c) samples (d) vectors
5. Which of these uses lossy compression?
 (a) ZIP (b) PNG (c) JPEG (d) FLAC

**Answers:** 1(b) 2(b) 3(d) 4(b) 5(c)

### B. Theory and Calculation Questions
1. Differentiate between data and information, giving one example of each. **(4 marks)**
2. Define bit, nibble, byte and word. **(4 marks)**
3. State three differences between ASCII and Unicode. **(6 marks)**
4. Given that 'A' = 65, write the ASCII decimal codes for the word **DIGITAL**. **(7 marks)**
5. Calculate the file size, in megabytes, of an uncompressed image measuring 1,024 × 768 pixels with a colour depth of 24 bits. **(6 marks)**
6. Calculate the file size, in megabytes, of a 60-second mono sound recording sampled at 44,100 Hz with 16-bit resolution. **(6 marks)**
7. Differentiate between lossy and lossless compression, giving two examples of each. **(6 marks)**

**Worked answers for the teacher:**
- Q4: D=68, I=73, G=71, I=73, T=84, A=65, L=76
- Q5: 1,024 × 768 × 24 = 18,874,368 bits ÷ 8 = 2,359,296 bytes ÷ 1,048,576 = **2.25 MB exactly**
- Q6: 44,100 × 16 × 1 × 60 = 42,336,000 bits ÷ 8 = 5,292,000 bytes ≈ **5.05 MB**

### C. Class Activity — "Be the Computer"
Give each student a sheet of squared paper. Ask them to shade an 8 × 8 grid to form a simple letter or smiley face, then write out the binary code row by row (shaded = 1, blank = 0). Students then exchange codes and reconstruct one another's images from the binary alone. This single activity teaches pixels, resolution, bit depth and binary encoding at once, requires no electricity, and students genuinely enjoy it.

---

## TEACHER'S HELPER NOTES — WEEK 10
- **This lesson ties the whole term together.** Number systems (Week 3), storage units (Week 4) and file types (Week 8) all converge here. Say so explicitly — students who see the connections retain far more.
- **The 8 × 8 pixel-grid activity is the best twenty minutes of the term.** Do not skip it, even if you are short of time. It is the only activity in this scheme that makes binary encoding physically visible, and it works perfectly in a classroom with no power supply.
- **Common error 1:** dividing by 8 in the wrong direction. Drill the rule: *bits are small, bytes are big, so bits ÷ 8 = bytes.* Have students state the unit at every line of working — most lost marks here are unit errors, not arithmetic errors.
- **Common error 2:** forgetting to multiply by the number of channels in sound calculations, or forgetting the duration entirely.
- **Common error 3:** writing that 24-bit colour gives 24 colours. Make them compute 2²⁴ once on paper so the number 16,777,216 means something.
- **Real-file demonstration:** if a computer is available, right-click any photograph → Properties, and show the dimensions and the file size. Then note that the actual size is *smaller* than the calculated size, and ask why. The answer — compression — introduces section 10.7 far better than a definition does.
- **The 500 GB drive that shows as 465 GB** is a question students always ask. Answer it before they do; it builds credibility and cements the 1,024 convention.
- **The Unicode/Nigerian-languages point is worth two full minutes.** Ask students who speak Yoruba or Igbo to type their name correctly with all diacritics on a phone. Most can. Then explain that this was impossible on older systems. It makes an abstract standard feel personal.
- **Differentiation:** the calculations are the hardest part of the term for weaker students. Set a floor of competence at the image formula only, and let stronger students attempt the sound formula and file-size comparisons.
- **This topic is heavily examined**, so schedule it into revision in Week 11 rather than treating it as finished.

## RESOURCE MATERIALS — WEEK 10
- Approved SSS Data Processing/Computer Studies text, "Data Representation" chapter.
- **BBC Bitesize — Data Representation** (binary, characters, images, sound): excellent, concise and free.
- **Khan Academy — Digital Information / Bits and bytes**: `khanacademy.org/computing`
- **ASCII table reference**: `asciitable.com`
- **Unicode Consortium** (for the Naira sign and African language character sets): `unicode.org`
- Physical aids: squared/graph paper, coloured pencils, a printed ASCII chart per group, a magnifying glass and an old screen for viewing real pixels.

## ASSIGNMENT
1. Write your **full name** in ASCII decimal codes and state how many bytes it would occupy.
2. A photograph is 1,600 × 1,200 pixels with 24-bit colour. Calculate its uncompressed size in MB. Then find any photograph on a phone or computer, check its actual size, and explain the difference. *(Answer to the calculation: 5.49 MB.)*
3. Explain why a three-minute song is smaller than a three-minute video.

---
---
