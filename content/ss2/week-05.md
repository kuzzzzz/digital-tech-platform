# WEEK 5 — MIDTERM TEST

**Coverage:** Weeks 1–4 — Review of SS 1, Advanced Word Processing, Advanced Spreadsheet I and II
**Duration:** 1 hour 30 minutes (both periods)
**Total:** 50 marks, scaled to 15 for the CA record

## Instructions to the Teacher
This test has a **theory** section and a **written practical** section. Where a laboratory is available, replace Section C with a 30-minute hands-on task at the computer and mark the saved file. Where it is not, the written practical below assesses the same skills in the format used by the WAEC/NECO practical paper.

---

## SS 2 DIGITAL TECHNOLOGIES — MIDTERM TEST

**Name: ________________________ Class: SS 2 ____ Date: ____________**

### SECTION A — Objective Questions (15 marks)
*Answer all questions. Each carries 1 mark.*

1. Convert 174₁₀ to hexadecimal. (a) AE (b) BE (c) A4 (d) B4
2. Which is volatile memory? (a) ROM (b) RAM (c) SSD (d) DVD
3. A pre-designed document used as a pattern is a ______. (a) macro (b) style (c) template (d) merge field
4. Mail merge combines a main document with a ______. (a) macro (b) template (c) data source (d) style
5. A macro-enabled Word document has the extension ______. (a) .docx (b) .dotx (c) .docm (d) .odt
6. The reference `$C$5` is ______. (a) relative (b) mixed (c) absolute (d) circular
7. `=COUNTIF(H2:H41,">=50")` returns the ______. (a) total of scores ≥50 (b) number of scores ≥50 (c) average (d) highest score
8. In VLOOKUP, FALSE requests ______. (a) approximate match (b) exact match (c) sorted data (d) an error
9. A pivot table is used to ______. (a) delete records (b) summarise data (c) encrypt data (d) print data
10. Which pivot table area holds the numbers being summarised? (a) Rows (b) Columns (c) Values (d) Filters
11. The function for periodic loan repayment is ______. (a) FV (b) PV (c) PMT (d) RATE
12. An annual rate of 24% expressed monthly is ______. (a) 24% (b) 12% (c) 2% (d) 0.24%
13. Goal Seek adjusts ______. (a) a formula cell (b) one input cell (c) the chart (d) the whole sheet
14. Break-even occurs when total revenue equals ______. (a) profit (b) total cost (c) fixed cost (d) variable cost
15. In a well-built model, typed values belong in the ______ section. (a) outputs (b) calculations (c) inputs (d) charts

**Marking key:** 1(a) 2(b) 3(c) 4(c) 5(c) 6(c) 7(b) 8(b) 9(b) 10(c) 11(c) 12(c) 13(b) 14(b) 15(c)

### SECTION B — Theory (20 marks)
*Answer any TWO questions. Each carries 10 marks.*

**1.** (a) Define mail merge and name its three components. **(4 marks)**
 (b) Outline six steps in performing a mail merge. **(6 marks)**

**2.** (a) Differentiate between relative, absolute and mixed cell references with one example each. **(6 marks)**
 (b) Name the four areas of a pivot table and state the function of each. **(4 marks)**

**3.** (a) Define a financial model and state three of its uses. **(4 marks)**
 (b) Explain the inputs–calculations–outputs structure and why it matters. **(4 marks)**
 (c) State the purpose of Goal Seek. **(2 marks)**

**4.** (a) Define a macro and state two benefits. **(3 marks)**
 (b) Explain two security risks of macros and one precaution against each. **(4 marks)**
 (c) State three ways of protecting a word-processing document. **(3 marks)**

### SECTION C — Written Practical (15 marks)

**1.** A result sheet holds scores as follows: CA1 in D2, CA2 in E2, Assignment in F2, Exam in G2, and totals run from H2 to H41. Write the formula for:
 (a) the total score in H2 **(1 mark)**
 (b) the position in J2 **(2 marks)**
 (c) the number of students who scored 50 and above **(2 marks)**
 (d) a remark showing "PASS" for 50 and above, otherwise "FAIL" **(2 marks)**

**2.** Write a nested IF formula grading a total in H2 as A1 (≥75), B2 (≥70), B3 (≥65), C4 (≥60), C5 (≥55), C6 (≥50), D7 (≥45), E8 (≥40) and F9 below 40. **(4 marks)**

**3.** A business borrows ₦600,000 at 18% per annum repayable monthly over 18 months.
 (a) State the monthly rate and the number of periods. **(2 marks)**
 (b) Write the spreadsheet formula for the monthly repayment. **(2 marks)**

**Marking key — Section C:**
1. (a) `=SUM(D2:G2)` (b) `=RANK(H2,$H$2:$H$41,0)` (c) `=COUNTIF(H2:H41,">=50")` (d) `=IF(H2>=50,"PASS","FAIL")`
2. `=IF(H2>=75,"A1",IF(H2>=70,"B2",IF(H2>=65,"B3",IF(H2>=60,"C4",IF(H2>=55,"C5",IF(H2>=50,"C6",IF(H2>=45,"D7",IF(H2>=40,"E8","F9"))))))))`
3. (a) 1.5% per month; 18 periods (b) `=PMT(1.5%,18,-600000)` — award full marks for `=PMT(18%/12,18,-600000)`

---

## TEACHER'S HELPER NOTES — WEEK 5

- **Mark the formulas the way an examiner does.** Award marks for correct function name, correct arguments in the correct order, correct range, and correct use of `$`. A formula with the right idea but a missing `$` should lose part marks, not all — but say so, so students learn that precision carries weight.
- **Accept valid alternatives.** `=D2+E2+F2+G2` is as correct as `=SUM(D2:G2)`. `=VLOOKUP` with a grade band is as correct as a nested IF if the student sets out the band table. Reward correct thinking rather than one memorised answer.
- **Analyse by section, not just by total.** If the class does well in Section B but badly in Section C, the problem is practice, not understanding, and your remedy is laboratory time or dry practical — not more explanation.
- **The most likely failure point is Section C question 2.** Nested IF with eight branches defeats many students under time pressure. If more than half lose marks here, drill it for five minutes at the start of every remaining lesson.
- **Use Period 2 for correction, not for a new topic.** Work through Section C on the board with the class, then have students correct their own scripts in a different colour. Formula errors are only fixed by seeing the correct formula next to the wrong one.
- **Record the score the same week** in the CA book, scaled to 15.
- **Collect the Week 4 mini-project** at the start of Week 6 as announced; do not let the deadline slip, or half the class will not submit at all.

## RESOURCE MATERIALS — WEEK 5
- Duplicated question papers (one per student plus five spares).
- Continuous assessment record book.
- Past WAEC and NECO **Data Processing** papers, especially the practical paper, as a source of extra questions in the correct style.
- Marking scheme printed for your own use and for any colleague assisting with invigilation.

---
---
