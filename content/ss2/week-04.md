# WEEK 4 — ADVANCED SPREADSHEET II

**Sub-topics:** Financial functions · Structure of a financial model · Building a business model · What-If Analysis: Goal Seek, Data Tables, Scenario Manager · Break-even and sensitivity analysis

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. explain the meaning and purpose of a financial model;
2. use the financial functions PMT, FV, PV, RATE, NPER and NPV correctly;
3. describe and apply the inputs–calculations–outputs structure of a well-built model;
4. build a simple business profit projection with clearly separated assumptions;
5. use Goal Seek to find the input required for a desired result;
6. use a one-variable data table and the Scenario Manager for what-if analysis;
7. calculate and interpret a break-even point.

## Entry Behaviour
Students mastered cell referencing, IF and lookup functions in Week 3. They have studied simple interest and percentages in Mathematics, and many have encountered profit, cost and revenue in Economics, Commerce or Book-keeping.

## Instructional Materials
Computers with a spreadsheet package; projector; printed model template; calculator; a real POS-agent or small-business costing example; printed step sheets for Goal Seek and Scenario Manager.

---

## PERIOD 1 (45 minutes)

### 4.1 What Is a Financial Model?

A **financial model** is a spreadsheet that represents the financial position or future performance of a business or project in figures, so that the effect of changing any assumption can be seen immediately.

**Uses:** projecting profit and loss · planning loan repayments · deciding whether a business idea is viable · budgeting · comparing investment options · calculating break-even · testing "what if" situations before spending real money.

### 4.2 The Structure of a Good Model — Inputs, Calculations, Outputs

This is the single most important professional habit in this lesson.

| Section | Contains | Rule |
|---|---|---|
| **INPUTS (assumptions)** | Every number that could change — prices, costs, interest rate, quantity | Typed values only. **Shade them one colour (traditionally blue)** so anyone can see what may be edited |
| **CALCULATIONS** | The working — formulas only | **Never type a number into a formula.** Refer to the input cell instead |
| **OUTPUTS (results)** | Profit, total, repayment, break-even | Formulas only; clearly labelled and formatted |

**Why this matters:** a model with `=B5*250` buried inside it is broken the moment the price changes, because nobody can find the 250. A model with `=B5*$C$3`, where `C3` is a labelled input cell, is changed once and updates everywhere.

**Other good practice:** label every row and column · use consistent units and state them (₦, %, months) · format currency properly · add a Notes or Assumptions sheet · use named ranges for key inputs · never hide a formula inside a merged cell.

### 4.3 Financial Functions

| Function | Purpose | Syntax |
|---|---|---|
| **PMT** | Periodic loan repayment | `=PMT(rate, nper, pv, [fv], [type])` |
| **FV** | Future value of an investment | `=FV(rate, nper, pmt, [pv], [type])` |
| **PV** | Present value | `=PV(rate, nper, pmt, [fv], [type])` |
| **RATE** | Interest rate per period | `=RATE(nper, pmt, pv)` |
| **NPER** | Number of periods needed | `=NPER(rate, pmt, pv)` |
| **NPV** | Net present value of a series of cash flows | `=NPV(rate, values) + initial_investment` |
| **IRR** | Internal rate of return | `=IRR(values)` |

**Three rules students must learn:**
1. **The rate and the number of periods must match.** For monthly repayments, use the **monthly** rate (annual ÷ 12) and the number of **months**.
2. **Money paid out is entered as a negative**, money received as positive. This is why `pv` is often written with a minus sign.
3. **Rate is a decimal or a percentage**, never a whole number: 24% is `0.24` or `24%`, not `24`.

**Worked example 1 — a loan repayment**
A trader borrows **₦500,000** at **24% per annum**, repayable monthly over **1 year**.
```
Monthly rate      = 24% ÷ 12 = 2%   (cell B3)
Number of months  = 12              (cell B4)
Loan amount       = 500,000         (cell B2)

Monthly repayment: =PMT(B3, B4, -B2)
```
**Result: ₦47,279.80 per month**

Total repaid = 47,279.80 × 12 = **₦567,357.58**
Total interest = 567,357.58 − 500,000 = **₦67,357.58**

**Worked example 2 — a savings plan**
A student's parent saves **₦20,000** at the end of every month for **2 years** in an account paying **12% per annum** (1% per month).
```
=FV(1%, 24, -20000)
```
**Result: ₦539,469.30**

Total deposited = 20,000 × 24 = ₦480,000, so interest earned = **₦59,469.30**.

**Worked example 3 — how long will it take?**
How many months of ₦25,000 repayments are needed to clear a ₦300,000 loan at 2% monthly?
```
=NPER(2%, -25000, 300000)
```
**Result: approximately 14.1 months** — so 15 payments, the last one smaller.

---

## PERIOD 2 (45 minutes)

### 4.4 Building a Simple Business Model

**Scenario:** A student runs a small bakery. Build a monthly profit projection.

**INPUTS (shaded)**

| Cell | Item | Value |
|---|---|---|
| B3 | Selling price per loaf (₦) | 1,200 |
| B4 | Cost of ingredients per loaf (₦) | 700 |
| B5 | Loaves sold per month | 900 |
| B6 | Monthly rent (₦) | 80,000 |
| B7 | Monthly staff wages (₦) | 120,000 |
| B8 | Monthly fuel/electricity (₦) | 60,000 |

**CALCULATIONS**

| Item | Formula | Result (₦) |
|---|---|---|
| Revenue | `=B3*B5` | 1,080,000 |
| Variable cost | `=B4*B5` | 630,000 |
| Gross profit | `=B10-B11` | 450,000 |
| Total fixed cost | `=SUM(B6:B8)` | 260,000 |
| **Net profit** | `=B12-B13` | **190,000** |
| Profit margin | `=B14/B10` | 17.6% |
| Contribution per loaf | `=B3-B4` | 500 |
| **Break-even (loaves)** | `=B13/B16` | **520 loaves** |

**Interpretation to discuss with the class:** the bakery must sell **520 loaves each month simply to cover its costs**. Every loaf beyond 520 contributes ₦500 of pure profit. If sales fall below 520, the business loses money.

### 4.5 What-If Analysis

**What-if analysis** is the process of changing the values in a model to see how they affect the result.

**(a) Goal Seek** — works backwards from a desired result to find the input needed.
`Data → What-If Analysis → Goal Seek`

| Box | Entry |
|---|---|
| **Set cell** | The result cell (the formula) — e.g. Net profit, B14 |
| **To value** | The target — e.g. 300000 |
| **By changing cell** | The single input to adjust — e.g. loaves sold, B5 |

*Question answered:* "How many loaves must we sell to make ₦300,000 profit?"
*Answer:* 1,120 loaves.

> **Rule:** the *Set cell* must contain a **formula**; the *By changing cell* must contain a **typed value**. Getting these the wrong way round is the commonest error.

**(b) One-variable Data Table** — shows the result for a whole list of input values at once.
1. List the input values down a column (e.g. loaves sold: 600, 700, 800, 900, 1000, 1100, 1200).
2. In the cell one row up and one column right, reference the result formula: `=B14`.
3. Select the whole block including both the list and the formula cell.
4. `Data → What-If Analysis → Data Table`.
5. Enter the input cell (B5) in the **Column input cell** box.

Excel fills in the profit for every sales level. A **two-variable data table** does the same for two inputs at once (e.g. price and quantity), using both the Row and Column input boxes.

**(c) Scenario Manager** — stores several complete sets of assumptions under names and switches between them.
`Data → What-If Analysis → Scenario Manager → Add`

| Scenario | Price | Loaves | Ingredient cost | Net profit |
|---|---|---|---|---|
| **Best case** | 1,300 | 1,100 | 650 | 455,000 |
| **Base case** | 1,200 | 900 | 700 | 190,000 |
| **Worst case** | 1,100 | 650 | 780 | −52,000 |

`Scenario Manager → Summary` produces a comparison report of all scenarios on a new sheet.

**Interpretation:** the worst case makes a **loss**. A model that shows this before the business opens has done its job.

### 4.6 Sensitivity Analysis
**Sensitivity analysis** identifies which assumption the result depends on most. Change one input by 10% at a time, leaving the others alone, and record the effect on profit. The input causing the largest swing is the one the business must watch most closely — usually price or volume.

### 4.7 Guided Practical
**Task:** Build the bakery model exactly as set out in 4.4, with inputs shaded and no typed numbers inside any formula. Then:
1. Use **Goal Seek** to find the sales volume required for a profit of ₦250,000.
2. Build a **one-variable data table** for sales of 500 to 1,200 loaves in steps of 100.
3. Create three **scenarios** (best, base, worst) and produce a scenario summary.
4. Insert a line chart of profit against loaves sold.

*Where there is no computer:* students build the model on paper, writing the formula in each calculation cell, and compute the break-even point and the three scenarios with a calculator. Set out the Goal Seek dialogue box as a labelled diagram with the three boxes filled in correctly.

---

## EVALUATION — WEEK 4

### A. Objective Questions (1 mark each)
1. The function used to calculate a periodic loan repayment is ______.
 (a) FV (b) PMT (c) NPER (d) RATE
2. In a well-built financial model, typed numbers should appear only in the ______ section.
 (a) calculations (b) outputs (c) inputs (d) charts
3. Goal Seek changes ______ to achieve a target result.
 (a) a formula cell (b) one input cell (c) several input cells (d) the chart
4. The break-even point is reached when ______.
 (a) profit is highest (b) total revenue equals total cost (c) revenue is zero (d) fixed cost is zero
5. To convert an annual rate of 18% to a monthly rate you ______.
 (a) multiply by 12 (b) divide by 12 (c) divide by 100 (d) leave it unchanged

**Answers:** 1(b) 2(c) 3(b) 4(b) 5(b)

### B. Theory Questions
1. Define a financial model and state four of its uses. **(6 marks)**
2. Explain the inputs–calculations–outputs structure and state why typed numbers should never appear inside a formula. **(8 marks)**
3. State the purpose of each: PMT, FV, NPER, NPV. **(8 marks)**
4. What is Goal Seek? Name the three entries required in its dialogue box and state what each must contain. **(7 marks)**
5. Differentiate between a data table and the Scenario Manager. **(4 marks)**
6. Define break-even point and state its importance to a small business. **(4 marks)**

### C. Practical / Calculation Questions
1. A trader borrows ₦800,000 at 18% per annum, repayable monthly over 2 years.
 (a) State the monthly rate and the number of periods. **(2 marks)**
 (b) Write the formula for the monthly repayment. **(3 marks)**
 (c) Write the formula for the total amount repaid. **(2 marks)**
2. A tailoring business has fixed costs of ₦150,000 per month. Each garment sells for ₦4,500 and costs ₦2,700 to make.
 (a) Calculate the contribution per garment. **(2 marks)**
 (b) Calculate the break-even quantity. **(3 marks)**
 (c) Calculate the profit if 150 garments are sold. **(3 marks)**
3. Describe the steps you would take to use Goal Seek to find the number of garments needed for a profit of ₦200,000. **(6 marks)**

**Worked answers for the teacher:**
- 1(a) 1.5% per month; 24 periods. 1(b) `=PMT(1.5%,24,-800000)` ≈ **₦39,960.55**. 1(c) `=PMT(1.5%,24,-800000)*24` ≈ **₦959,053.20**
- 2(a) ₦1,800 (b) 150,000 ÷ 1,800 = **83.33, so 84 garments** (c) (150 × 1,800) − 150,000 = **₦120,000**

---

## TEACHER'S HELPER NOTES — WEEK 4

- **This is the hardest week of the term.** It combines spreadsheet skill with financial reasoning, and students who are weak in either will struggle with both. Plan for it: do not schedule anything else demanding in the same week, and expect to revisit break-even in Week 11.
- **Teach the structure before the functions.** The inputs–calculations–outputs discipline is worth more to students in the long run than memorising PMT syntax. Insist on shaded input cells in every model they build, and deduct marks in the practical file when a number is found buried inside a formula. Employers and accountants apply exactly this standard.
- **Common error 1 — mismatched rate and period.** Students enter `=PMT(24%,12,-500000)` using the annual rate with monthly periods and get a wildly wrong figure. Make the rule a chant: **monthly payments, monthly rate.**
- **Common error 2 — the sign convention.** `=PMT(2%,12,500000)` returns a negative number and students think it is an error. Explain the logic: the spreadsheet treats money leaving you as negative. Entering the loan as `-B2` returns a positive repayment, which reads more naturally.
- **Common error 3 — Goal Seek boxes reversed.** Students put the input cell in *Set cell*. Excel then reports that the cell must contain a formula, and the student gives up. Pre-empt it: **Set cell = the answer (a formula); By changing cell = the assumption (a number).**
- **Common error 4 — forgetting that break-even must be rounded up.** 83.33 garments means 84, because you cannot sell a third of a garment. Examiners award the mark for the reasoning, not just the arithmetic.
- **Make the examples local and real.** POS agency, bakery, tailoring, printing/business centre, phone accessories, poultry, barbing salon, transport. Many of your students' families run exactly these businesses. Ask a student whose family trades to supply real cost figures and build the model around them — engagement rises sharply, and the lesson stops being abstract.
- **The worst-case scenario showing a loss is the teaching moment of the week.** Pause on it. Ask: *"What should the owner do now — raise the price, cut costs, or sell more?"* Then let them test each answer in the model. This is what financial modelling is actually for, and students understand it immediately once they see it.
- **Software differences:**
 - *LibreOffice Calc:* Goal Seek is at `Tools → Goal Seek`; Scenario Manager at `Tools → Scenarios`; data tables are called **Multiple Operations** under `Data → Multiple Operations` and work differently — check before demonstrating.
 - *Google Sheets:* has PMT, FV, NPER and NPV, but **no built-in Goal Seek or Scenario Manager** (an add-on is required). If your school uses Sheets, teach Goal Seek as a concept and demonstrate on a single machine running Excel or LibreOffice.
 - *WPS Spreadsheet:* matches Excel closely.
- **Low-resource adaptation:** the bakery model works perfectly on paper with a calculator. Students rule three columns — Item, Formula, Result — and complete all three. The financial reasoning, which is the harder half of this lesson, is fully preserved. The three scenarios can be computed by hand in about ten minutes.
- **Cross-curricular link:** Economics (cost, revenue, profit, break-even), Commerce, Financial Accounting, Mathematics (simple and compound interest). Speak to those teachers — a coordinated week reinforces all four subjects.
- **Differentiation:** stronger students should attempt NPV, IRR and a two-variable data table. Weaker students must secure the break-even calculation and one working PMT formula.

## RESOURCE MATERIALS — WEEK 4
- Approved SSS Data Processing text, spreadsheet chapters; SS 2 Economics text, "Cost, Revenue and Profit".
- **Microsoft Support — PMT, FV, NPER, NPV function pages**: `support.microsoft.com`
- **ExcelJet — financial functions and Goal Seek**: `exceljet.net`
- **GCFGlobal — Excel: What-If Analysis**: `edu.gcfglobal.org/excel`
- **Corporate Finance Institute** — free articles on financial-model structure and best practice: `corporatefinanceinstitute.com`
- Prepared bakery model file (inputs only, formulas removed) on a flash drive for students to complete.
- Printed blank model templates on paper for the dry practical.
- Calculators — at least one per pair for the manual computation.

## ASSIGNMENT
**Term mini-project (5 marks, counts towards CA):**
Choose any small business you know — a POS agent, provisions shop, tailoring shop, barbing salon, poultry, printing/business centre or okada/keke operator. Build a one-month financial model showing:
1. At least six clearly labelled inputs.
2. Revenue, variable cost, fixed cost and net profit as formulas.
3. The break-even quantity.
4. Three scenarios: best, base and worst case.
5. One sentence of advice to the owner based on what your model shows.

Submit as a spreadsheet file or as a neatly ruled paper model with every formula written out. Due at the beginning of Week 6.

---
---
