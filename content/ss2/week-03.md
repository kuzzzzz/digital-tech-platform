# WEEK 3 — ADVANCED SPREADSHEET I

**Sub-topics:** Review of spreadsheet basics · Cell referencing · Named ranges · Logical and lookup functions · Data tools (sort, filter, validation, conditional formatting) · Pivot tables and pivot charts

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. distinguish between relative, absolute and mixed cell references and apply each correctly;
2. write and use logical functions including IF, nested IF, AND, OR and IFERROR;
3. use COUNTIF, SUMIF, AVERAGEIF and their multi-criteria versions;
4. use VLOOKUP and INDEX/MATCH to retrieve data from a table;
5. apply sorting, filtering, conditional formatting and data validation;
6. define a pivot table, create one and interpret its output;
7. build a complete student result sheet with automatic totals, grades and positions.

## Entry Behaviour
Students used spreadsheets at an introductory level in SS 1 Third Term — cells, ranges, SUM, AVERAGE, MAX, MIN, COUNT and simple charts.

## Instructional Materials
Computers with Microsoft Excel, LibreOffice Calc, WPS Spreadsheet or Google Sheets; projector; printed sample data set (a class result sheet of 20 students and a small sales record); printed function reference sheet; graph/squared paper for board work.

---

## PERIOD 1 (45 minutes)

### 3.1 Rapid Review and Cell Referencing

A **spreadsheet** is application software that organises data in a grid of **rows** (numbered) and **columns** (lettered), where the intersection is a **cell** with an address such as `B7`.

**Key terms:** workbook (the file) · worksheet (one sheet) · cell · range (`A1:D20`) · formula (begins with `=`) · function (a built-in formula) · argument (the input to a function) · active cell · fill handle.

**Three types of cell reference — the most important concept in this lesson:**

| Type | Written as | Behaviour when copied |
|---|---|---|
| **Relative** | `A1` | Both column and row change |
| **Absolute** | `$A$1` | Neither changes — locked completely |
| **Mixed** | `$A1` or `A$1` | Only the part **without** the `$` changes |

> The `$` sign means **"do not move this"**. Press **F4** while editing a reference to cycle through the four combinations.

**Why it matters — a worked case:** to convert a column of Naira amounts to dollars using a single exchange rate held in cell `E1`:
- `=B2/E1` copied down becomes `=B3/E2`, `=B4/E3` — **wrong**, because the rate reference slides down into empty cells.
- `=B2/$E$1` copied down becomes `=B3/$E$1`, `=B4/$E$1` — **correct**.

**Named ranges:** select a range → click the Name Box (left of the formula bar) → type a name → Enter. Now `=SUM(FirstTerm)` is clearer than `=SUM(C2:C41)` and cannot break when rows shift.

### 3.2 Logical Functions

**IF** — makes a decision between two outcomes.
```
=IF(condition, value_if_true, value_if_false)
=IF(B2>=50,"PASS","FAIL")
```

**Nested IF** — an IF inside another IF, for more than two outcomes. The full WAEC grading formula, assuming the total score is in column H:
```
=IF(H2>=75,"A1",IF(H2>=70,"B2",IF(H2>=65,"B3",IF(H2>=60,"C4",
 IF(H2>=55,"C5",IF(H2>=50,"C6",IF(H2>=45,"D7",IF(H2>=40,"E8","F9"))))))))
```
> **Order matters.** The conditions must run from highest to lowest. If you test `>=40` first, every score above 40 returns "E8" and the formula is useless.

**AND / OR / NOT**
```
=IF(AND(B2>=50,C2>=50),"PROMOTED","REPEAT")     both conditions must be true
=IF(OR(B2>=75,C2>=75),"DISTINCTION","")          either condition suffices
```

**IFERROR** — replaces an error message with something readable.
```
=IFERROR(B2/C2,"No data")
```

### 3.3 Conditional Counting and Summing

| Function | Purpose | Example |
|---|---|---|
| `COUNT` | Counts cells containing numbers | `=COUNT(B2:B41)` |
| `COUNTA` | Counts all non-empty cells | `=COUNTA(A2:A41)` |
| `COUNTIF` | Counts cells meeting one condition | `=COUNTIF(H2:H41,">=50")` — how many passed |
| `COUNTIFS` | Counts on several conditions | `=COUNTIFS(C2:C41,"SS2A",H2:H41,">=50")` |
| `SUMIF` | Adds cells meeting a condition | `=SUMIF(B2:B41,"Lagos",D2:D41)` |
| `SUMIFS` | Adds on several conditions | `=SUMIFS(D2:D41,B2:B41,"Lagos",C2:C41,"Q1")` |
| `AVERAGEIF` | Averages cells meeting a condition | `=AVERAGEIF(C2:C41,"Female",H2:H41)` |
| `RANK` | Gives the position of a value in a list | `=RANK(H2,$H$2:$H$41,0)` — note the absolute range |

**Other frequently used functions:** `ROUND(number, digits)` · `LEN(text)` · `LEFT`, `RIGHT`, `MID` · `CONCATENATE` or `&` · `UPPER`, `LOWER`, `PROPER` · `TODAY()` · `NOW()` · `MAX`, `MIN`, `MEDIAN`.

### 3.4 Lookup Functions

**VLOOKUP** — searches for a value in the **first column** of a table and returns a value from a specified column to the right.
```
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
=VLOOKUP(A2,$L$2:$N$10,3,FALSE)
```
- `FALSE` (or 0) = **exact match** — use this almost always.
- `TRUE` (or 1) = approximate match — used for grade bands, and requires the table to be sorted ascending.

**Grade-band example using approximate match:**

| L | M |
|---|---|
| 0 | F9 |
| 40 | E8 |
| 45 | D7 |
| 50 | C6 |
| 55 | C5 |
| 60 | C4 |
| 65 | B3 |
| 70 | B2 |
| 75 | A1 |

`=VLOOKUP(H2,$L$2:$M$10,2,TRUE)` returns the grade — far shorter and easier to maintain than a nested IF with eight branches.

**INDEX and MATCH** — a more flexible alternative that can look leftwards:
```
=INDEX($C$2:$C$41, MATCH(A2,$A$2:$A$41,0))
```

**Limitation of VLOOKUP to teach explicitly:** it can only look to the **right** of the lookup column. If the value you need sits to the left, VLOOKUP cannot reach it — use INDEX/MATCH.

---

## PERIOD 2 (45 minutes)

### 3.5 Data Tools

**Sorting:** `Data → Sort` — arrange records in ascending or descending order, on one column or several (e.g. sort by class, then by total score descending).

**Filtering:** `Data → Filter` — display only the rows meeting a criterion (only SS 2B, only scores above 70) while hiding the rest. The data is not deleted.

**Conditional formatting:** `Home → Conditional Formatting` — automatically colours cells that meet a rule. Highly effective on a result sheet:
- Highlight all scores below 40 in red.
- Highlight all scores of 75 and above in green.
- Apply data bars to show relative performance at a glance.

**Data validation:** `Data → Data Validation` — restricts what may be typed into a cell. Essential for accuracy:
- Whole number between 0 and 100 for a score column (prevents a mark of 150 or −20).
- A drop-down list for Sex (Male/Female) or Class (SS2A/SS2B/SS2C).
- A custom input message and error alert.

**Other tools:** Remove Duplicates · Text to Columns · Freeze Panes (`View → Freeze Panes`, so headings stay visible while scrolling) · Find and Replace.

### 3.6 Pivot Tables

A **pivot table** is an interactive summary tool that reorganises and aggregates a large table of data — totalling, counting or averaging it by category — without altering the original data.

**Why it exists:** given 2,000 rows of sales records, a pivot table answers *"what did each branch sell, by month?"* in about fifteen seconds, and rearranges the answer instantly when the question changes.

**Requirements of the source data:** one heading row · one record per row · no blank rows or columns · no merged cells · consistent data types in each column.

**Creating a pivot table:**
1. Click any cell inside the data.
2. `Insert → PivotTable`.
3. Confirm the range and choose **New Worksheet**.
4. In the PivotTable Fields pane, drag fields into the four areas.

**The four areas:**

| Area | Function |
|---|---|
| **Rows** | The categories listed down the left |
| **Columns** | The categories spread across the top |
| **Values** | The numbers to be summarised (Sum, Count, Average, Max, Min) |
| **Filters** | A control to show only part of the data |

**Worked example — school shop sales:**

Source data (columns): `Date | Branch | Item | Quantity | Amount`

To answer *"total sales amount by branch, split by item"*:
- **Rows:** Branch
- **Columns:** Item
- **Values:** Sum of Amount

Result:

| Branch | Books | Uniforms | Stationery | Grand Total |
|---|---|---|---|---|
| Ikeja | 120,000 | 340,000 | 45,000 | 505,000 |
| Yaba | 98,000 | 210,000 | 62,000 | 370,000 |
| Ikorodu | 76,000 | 155,000 | 38,000 | 269,000 |
| **Grand Total** | **294,000** | **705,000** | **145,000** | **1,144,000** |

**Changing the summary:** click the field in Values → **Value Field Settings** → choose Count, Average, Max or Min.

**Refreshing:** a pivot table does **not** update automatically when the source data changes. Right-click → **Refresh**, or `PivotTable Analyze → Refresh`. Teach this explicitly; it is the source of most confusion.

**Slicers:** `PivotTable Analyze → Insert Slicer` — clickable buttons that filter the pivot table visually.

**Pivot charts:** `PivotTable Analyze → PivotChart` — a chart linked to the pivot table that updates with it.

### 3.7 Guided Practical — Build a Complete Result Sheet

**Task:** Build an automated result sheet for 20 students.

| Column | Heading | Content |
|---|---|---|
| A | S/N | 1–20 |
| B | Name | Student names |
| C | Class | SS2A / SS2B (use data validation drop-down) |
| D | CA1 (10) | Scores, validated 0–10 |
| E | CA2 (15) | Scores, validated 0–15 |
| F | Assignment (15) | Scores, validated 0–15 |
| G | Exam (60) | Scores, validated 0–60 |
| H | Total (100) | `=SUM(D2:G2)` |
| I | Grade | Nested IF or VLOOKUP grade band |
| J | Position | `=RANK(H2,$H$2:$H$21,0)` |
| K | Remark | `=IF(H2>=50,"PASS","FAIL")` |

**Then add, below the table:**
- Class average: `=AVERAGE(H2:H21)`
- Highest score: `=MAX(H2:H21)`
- Lowest score: `=MIN(H2:H21)`
- Number passed: `=COUNTIF(H2:H21,">=50")`
- Number failed: `=COUNTIF(H2:H21,"<50")`
- Number of A1s: `=COUNTIF(I2:I21,"A1")`

**Finally:** apply conditional formatting (red below 40, green at 75 and above), freeze the heading row, and build a pivot table summarising the count of each grade by class.

*Where there is no computer:* students rule the table on paper and write the exact formula for each column in the cell where it belongs. Mark the formulas for correct syntax, correct ranges and correct use of `$`. This is exactly the format of the written practical paper.

---

## EVALUATION — WEEK 3

### A. Objective Questions (1 mark each)
1. The reference `$B$4` is described as ______.
 (a) relative (b) absolute (c) mixed (d) circular
2. Which function counts cells that meet a stated condition?
 (a) COUNT (b) COUNTA (c) COUNTIF (d) SUM
3. In VLOOKUP, the argument FALSE requests ______.
 (a) an approximate match (b) an exact match (c) a sorted table (d) an error
4. A pivot table is used mainly to ______.
 (a) delete data (b) summarise and reorganise data (c) print data (d) protect data
5. Which key cycles through reference types while editing a formula?
 (a) F2 (b) F4 (c) F9 (d) F11

**Answers:** 1(b) 2(c) 3(b) 4(b) 5(b)

### B. Theory Questions
1. Differentiate between relative, absolute and mixed cell references, giving one example of each. **(6 marks)**
2. Explain, with an example, why `$` is necessary when copying a formula that refers to a fixed cell. **(5 marks)**
3. Write the syntax of the IF function and give an example that displays "PASS" for a score of 50 and above and "FAIL" otherwise. **(4 marks)**
4. Define a pivot table and state four advantages of using one. **(6 marks)**
5. Name the four areas of a pivot table and state the function of each. **(8 marks)**
6. State three requirements that source data must satisfy before a pivot table can be created from it. **(3 marks)**
7. Differentiate between sorting and filtering. **(4 marks)**

### C. Practical Questions
1. In a result sheet, the total score for the first student is in cell H2 and the totals run from H2 to H41. Write the formula to (a) compute the total from D2:G2 (b) find the position (c) count how many students scored 50 and above (d) display "PASS" or "FAIL". **(8 marks)**
2. Write a nested IF formula that awards grades A1, B2, B3, C4, C5, C6, D7, E8 and F9 using the WAEC scale, for a total score in cell H2. **(9 marks)**
3. Describe, in steps, how you would create a pivot table showing the number of students in each grade for each class. **(8 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 3

- **Cell referencing is the gate.** A student who does not understand `$` will fail every subsequent spreadsheet topic, including the whole of Week 4. Do not move past section 3.1 until the class can predict what `=B2*$E$1` becomes when copied down. Test it orally: *"I copy this formula from C2 to C3. What does it become?"* Ask ten students before continuing.
- **The best demonstration of `$`** is deliberate failure. Build the Naira-to-dollar column *without* the dollar signs first, copy it down, and let the class see the nonsense results. Then add the `$` and copy again. Two minutes, permanently learnt.
- **Common error 1 — nested IF in the wrong order.** Students write the `>=40` test first and cannot understand why every score returns "E8". Show the failure on the board, then state the rule: *test from the top down.*
- **Common error 2 — unbalanced brackets.** Eight nested IFs need eight closing brackets. Teach students to count the IFs, then count the brackets, before pressing Enter. Excel's colour-coding of brackets helps if a computer is available.
- **Common error 3 — RANK without absolute references.** `=RANK(H2,H2:H41,0)` copied down slides the range and produces wrong positions. This is a favourite examination trap.
- **Common error 4 — forgetting to refresh a pivot table** after editing the source data, then insisting the software is faulty. Address it before it happens.
- **Common error 5 — messy source data.** Merged cells and blank rows break pivot tables. Since Nigerian result sheets are traditionally typed with merged heading cells, students arrive with exactly the wrong habit. Teach the clean-data rule as a discipline: *the data table is for the computer; the pretty layout comes afterwards.*
- **VLOOKUP vs nested IF:** show both methods for grading. Nested IF is what most textbooks and examinations expect, so students must know it. VLOOKUP with a grade-band table is what a real school office would use, so show it too and let students see why professionals prefer it. Students find this comparison genuinely interesting.
- **Use real school data.** A result sheet is the most motivating spreadsheet exercise you can set in a Nigerian secondary school, because every student understands the output and many will check whether your grade formula matches their own report card. Use anonymised or invented names.
- **Software differences:**
 - *LibreOffice Calc:* pivot tables are called **Pivot Table** under `Insert → Pivot Table` (older versions call it DataPilot). Function names are identical.
 - *Google Sheets:* `Insert → Pivot table`. Has `QUERY` and `ARRAYFORMULA` as extras. Works on phones.
 - *WPS Spreadsheet:* near-identical to Excel, including the ribbon layout.
- **Low-resource adaptation:** draw a grid of about 8 columns by 10 rows on the board with the column letters and row numbers labelled, and keep it there for both periods. Every formula you discuss should be pointed to on that grid. Students copy the grid into their notes and write formulas onto it. This is genuinely effective and it mirrors the written practical paper.
- **Cross-curricular link:** Mathematics (statistics, averages, ranking), Economics (data tables), Book-keeping (records).
- **Differentiation:** stronger students should attempt INDEX/MATCH, COUNTIFS and slicers. Weaker students must secure SUM, AVERAGE, a single IF, and the meaning of `$` — these alone carry substantial marks.

## RESOURCE MATERIALS — WEEK 3
- Approved SSS Data Processing text, "Spreadsheet Packages" chapter.
- **GCFGlobal — Excel tutorials** (free, well-sequenced, strong on functions and pivot tables): `edu.gcfglobal.org/excel`
- **Microsoft Support — Excel functions reference**: `support.microsoft.com`
- **ExcelJet** — concise function explanations with worked examples: `exceljet.net`
- **Google Sheets Help Centre** for schools using Workspace.
- **LibreOffice Calc Guide**: `documentation.libreoffice.org`
- Prepared sample data files on a flash drive: (i) a 20-student result sheet with scores but no formulas, (ii) a 200-row sales record for the pivot-table exercise.
- Printed one-page function reference sheet for each student (IF, nested IF, SUM, AVERAGE, COUNTIF, SUMIF, VLOOKUP, RANK, MAX, MIN).
- Squared paper or a permanently drawn board grid for dry practical.

## ASSIGNMENT
1. On paper, rule a result sheet for ten students with the columns S/N, Name, CA (40), Exam (60), Total, Grade, Position and Remark. Write the exact formula that belongs in each calculated column for row 2.
2. Write the nested IF formula for the full WAEC grading scale and count your brackets to confirm they balance.
3. Explain in your own words what would go wrong if a teacher wrote `=RANK(H2,H2:H41,0)` instead of `=RANK(H2,$H$2:$H$41,0)` and copied it down the column.

---
---
