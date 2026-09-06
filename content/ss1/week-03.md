# WEEK 3 — NUMBER SYSTEMS

**Sub-topics:** Concept of number bases · Decimal, binary, octal and hexadecimal · Conversion between bases · Binary arithmetic

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. explain the concept of a number base and positional place value;
2. list the digits used in the binary, octal, decimal and hexadecimal systems;
3. explain why computers use the binary system;
4. convert from any base to decimal using the expansion method;
5. convert from decimal to binary, octal and hexadecimal using repeated division;
6. convert between binary, octal and hexadecimal using the grouping shortcut;
7. perform simple binary addition and subtraction.

## Entry Behaviour
Students have treated number bases in SS 1 Mathematics. Refer to that lesson directly — this is the same mathematics applied to computing.

## Instructional Materials
Chalkboard, place-value chart, flash cards with binary/hexadecimal digits, calculator with programmer mode (or a phone calculator in scientific mode), worksheets.

---

## PERIOD 1 (45 minutes)

### 3.1 The Concept of a Number Base
A **number base** (or radix) is the number of distinct digits used in a number system, including zero. In every positional system, the value of a digit depends on its **position**.

In decimal, 3 4 7 means:
`3 × 10² + 4 × 10¹ + 7 × 10⁰ = 300 + 40 + 7 = 347`

The same idea applies to every base — only the base number changes.

### 3.2 The Four Number Systems

| System | Base | Digits used | Where used |
|---|---|---|---|
| **Binary** | 2 | 0, 1 | Internal operation of all digital devices |
| **Octal** | 8 | 0–7 | Shorthand for binary; file permissions in UNIX/Linux |
| **Decimal** | 10 | 0–9 | Everyday human counting |
| **Hexadecimal** | 16 | 0–9, A, B, C, D, E, F | Memory addresses, colour codes (#FF0000), MAC addresses |

**Hexadecimal letter values to memorise:** A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

### 3.3 Why Computers Use Binary
1. Electronic components are **two-state devices** — a switch is either ON or OFF, a voltage is either HIGH or LOW, a spot on a disk is either magnetised or not.
2. Two states are **easy to distinguish reliably**, so errors are rare even when the signal weakens.
3. Circuits that handle two states are **simpler and cheaper** to build.
4. Binary matches **Boolean logic** (TRUE/FALSE), which is how processors make decisions.

### 3.4 Converting from Any Base to Decimal — the Expansion Method
Multiply each digit by the base raised to its position power, counting positions from **0 on the right**, then add.

**Example 1:** Convert 1101₂ to decimal.
`= (1×2³) + (1×2²) + (0×2¹) + (1×2⁰)`
`= 8 + 4 + 0 + 1 = **13₁₀**`

**Example 2:** Convert 57₈ to decimal.
`= (5×8¹) + (7×8⁰) = 40 + 7 = **47₁₀**`

**Example 3:** Convert 3A7₁₆ to decimal.
`= (3×16²) + (10×16¹) + (7×16⁰)`
`= (3×256) + (10×16) + 7`
`= 768 + 160 + 7 = **935₁₀**`

**Example 4 (fraction):** Convert 101.11₂ to decimal.
`= 4 + 0 + 1 + (1×2⁻¹) + (1×2⁻²)`
`= 5 + 0.5 + 0.25 = **5.75₁₀**`

**Binary place values worth memorising (right to left):**
`… 256 128 64 32 16 8 4 2 1`

---

## PERIOD 2 (45 minutes)

### 3.5 Converting from Decimal to Another Base — Repeated Division
Divide the number repeatedly by the new base, writing down the remainder each time, until the quotient is 0. **Read the remainders upwards.**

**Example 5:** Convert 245₁₀ to binary.

| Division | Quotient | Remainder |
|---|---|---|
| 245 ÷ 2 | 122 | 1 |
| 122 ÷ 2 | 61 | 0 |
| 61 ÷ 2 | 30 | 1 |
| 30 ÷ 2 | 15 | 0 |
| 15 ÷ 2 | 7 | 1 |
| 7 ÷ 2 | 3 | 1 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

Reading upwards: **11110101₂**
*Check:* 128 + 64 + 32 + 16 + 0 + 4 + 0 + 1 = 245 ✔

**Example 6:** Convert 200₁₀ to octal.
200 ÷ 8 = 25 r **0**; 25 ÷ 8 = 3 r **1**; 3 ÷ 8 = 0 r **3** → **310₈**
*Check:* (3×64) + (1×8) + 0 = 192 + 8 = 200 ✔

**Example 7:** Convert 4095₁₀ to hexadecimal.
4095 ÷ 16 = 255 r **15 (F)**; 255 ÷ 16 = 15 r **15 (F)**; 15 ÷ 16 = 0 r **15 (F)** → **FFF₁₆**

**Example 8 (decimal fraction):** Convert 0.625₁₀ to binary — multiply the fraction repeatedly by 2 and read the whole-number parts **downwards**.
0.625 × 2 = **1**.25 → 1
0.25 × 2 = **0**.5 → 0
0.5 × 2 = **1**.0 → 1
Answer: **0.101₂**

### 3.6 The Grouping Shortcut — Binary ↔ Octal ↔ Hexadecimal
Because 8 = 2³ and 16 = 2⁴:
- **Binary → Octal:** group the binary digits in **threes** from the right.
- **Binary → Hexadecimal:** group the binary digits in **fours** from the right.
- Add leading zeros to complete the last group.

**Example 9:** Convert 110101101₂ to octal.
`110 | 101 | 101` → `6 | 5 | 5` → **655₈**
*Check via decimal:* 429₁₀ both ways ✔

**Example 10:** Convert 11011110₂ to hexadecimal.
`1101 | 1110` → `13 | 14` → `D | E` → **DE₁₆**
*Check:* (13×16) + 14 = 222; binary 11011110 = 128+64+16+8+4+2 = 222 ✔

**Reference table:**

| Decimal | Binary | Octal | Hex |
|---|---|---|---|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

### 3.7 Binary Arithmetic
**Addition rules:** 0+0 = 0 · 0+1 = 1 · 1+0 = 1 · **1+1 = 0 carry 1** · **1+1+1 = 1 carry 1**

**Example 11:** Add 1011₂ + 1101₂
```
   1011
 + 1101
 ------
  11000
```
*Check:* 11 + 13 = 24 = 11000₂ ✔

**Subtraction rules:** 0−0 = 0 · 1−0 = 1 · 1−1 = 0 · **0−1 = 1 borrow 1**

**Example 12:** 1101₂ − 0110₂ = **0111₂** (13 − 6 = 7 ✔)

---

## EVALUATION — WEEK 3

### A. Objective Questions (1 mark each)
1. The digits used in the hexadecimal system are ______.
 (a) 0–7 (b) 0–9 (c) 0–9 and A–F (d) 0 and 1
2. 1010₂ in decimal is ______.
 (a) 8 (b) 10 (c) 12 (d) 20
3. Computers use binary mainly because electronic components ______.
 (a) are cheap (b) have two states (c) count in tens (d) store letters
4. To convert binary to hexadecimal, group the bits in ______.
 (a) twos (b) threes (c) fours (d) fives
5. The hexadecimal digit C represents the decimal value ______.
 (a) 10 (b) 11 (c) 12 (d) 13

**Answers:** 1(c) 2(b) 3(b) 4(c) 5(c)

### B. Theory / Calculation Questions
1. Convert the following to decimal: (a) 11011₂ (b) 764₈ (c) 2F₁₆ **(6 marks)**
2. Convert 178₁₀ to (a) binary (b) octal (c) hexadecimal **(9 marks)**
3. Convert 10110111₂ to (a) octal (b) hexadecimal, using the grouping method. **(6 marks)**
4. Add the binary numbers 10111₂ and 1101₂, showing your working. **(4 marks)**
5. State three reasons why computers use the binary number system. **(6 marks)**

**Worked answers for the teacher:**
1. (a) 27 (b) 500 (c) 47
2. (a) 10110010₂ (b) 262₈ (c) B2₁₆
3. `10 110 111` → 267₈; `1011 0111` → B7₁₆
4. 100100₂ (23 + 13 = 36 ✔)

### C. Class Drill
Rapid-fire board race: two students at the board, teacher calls a decimal number under 64, first correct binary answer scores a point. Excellent for reinforcement in the last five minutes.

---

## TEACHER'S HELPER NOTES — WEEK 3
- **This is the most heavily examined topic of the term** in WAEC/NECO-style papers, and the one students fail most often. Budget extra revision time for it and use it as your first CA test.
- **Teach the check.** Insist that every conversion is verified by converting back. A student who checks catches their own arithmetic slips and gains marks that would otherwise be lost to carelessness.
- **The single most common error** is reading division remainders in the wrong direction. Draw a large upward arrow beside the remainder column on the board every single time. Say it aloud: *"Divide down, read up."*
- **Second most common error:** forgetting that any number raised to power zero equals 1, so the rightmost digit is multiplied by 1, not by the base.
- **Third:** in hexadecimal, writing 10 instead of A. Drill the six letters as flash cards for two minutes at the start of Period 2.
- **Finger binary is a brilliant five-minute activity.** One hand counts 0 to 31: thumb = 1, index = 2, middle = 4, ring = 8, little = 16. Students physically feel place value. It also makes 2⁵ = 32 memorable.
- **Link explicitly to Mathematics.** Say the words: *"This is the same number-bases topic you are doing in Maths this term."* Students who see the subjects as connected perform better in both, and the Mathematics teacher will thank you.
- **If some students are far behind**, drop hexadecimal fractions and two's complement entirely — they are not required at SS 1 level. Secure base-to-decimal and decimal-to-binary first; those two carry most of the marks.
- **Calculator note:** most Android and iOS calculators have a "programmer" mode that converts bases instantly. Show it *only after* students can do it by hand, and warn that calculators are not permitted in the examination for this topic.

## RESOURCE MATERIALS — WEEK 3
- SS 1 Mathematics textbook, "Number Bases" chapter — deliberately use the same book the students already own.
- Approved Data Processing/Computer Studies text, "Number Systems" chapter.
- **Khan Academy — Binary numbers / Number systems**: `khanacademy.org`
- **BBC Bitesize — Binary and data representation**.
- **RapidTables online converters** (for the teacher to prepare and verify worksheets quickly): `rapidtables.com/convert/number`
- Printed conversion worksheets — at least 20 questions per student for drilling.

## ASSIGNMENT
1. Convert your date of birth (in the form DDMMYY, e.g. 150409) to binary and to hexadecimal.
2. Convert 1000₁₀ to base 2, base 8 and base 16.
3. Convert 11111111₂ to decimal and explain why this number is significant in computing. *(Answer: 255 — the largest value that can be stored in one byte.)*

---
---
