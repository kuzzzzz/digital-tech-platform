# WEEK 2 — ADVANCED WORD PROCESSING

**Sub-topics:** Review of word-processing basics · Templates · Styles and table of contents · Mail merge · Macros · Document security and protection

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. explain the meaning and uses of a template and create a document from one;
2. apply styles and generate an automatic table of contents;
3. define mail merge and state its three components;
4. carry out a complete mail merge to produce personalised letters;
5. define a macro, record a simple macro and run it;
6. state the security risks associated with macros;
7. apply basic document protection.

## Entry Behaviour
Students used a word processor at an introductory level in SS 1 Third Term. They can type, save, format text, and insert tables and images.

## Instructional Materials
Computers with Microsoft Word, LibreOffice Writer or WPS Office installed; projector; a sample PTA invitation letter; a sample list of parents' names; printed screenshots of the Mailings tab; a sample school letterhead template; printed step sheets.

---

## PERIOD 1 (45 minutes)

### 2.1 Rapid Review of Word-Processing Basics
A **word processor** is application software for creating, editing, formatting, storing and printing text documents.

**Core features already known:** typing and editing · font formatting (type, size, colour, bold, italics, underline) · paragraph formatting (alignment, line spacing, indentation) · bullets and numbering · tables · inserting images · spelling and grammar check · page setup · headers and footers · printing.

**Common file extensions:** `.docx` (Word document) · `.dotx` (Word **template**) · `.docm` (macro-enabled document) · `.odt` (OpenDocument text) · `.pdf` (portable document format).

### 2.2 Templates

A **template** is a pre-designed document that serves as a **pattern or starting point** for creating new documents of the same type. Opening a template creates a **new copy**, leaving the original untouched.

**Uses in a Nigerian school or office:**
- School letterhead for all official correspondence
- Report card and result sheet layouts
- Certificates of participation and attendance
- Memo, minutes and invoice formats
- Lesson-note format (this document is itself built on a repeating template)

**Advantages:** saves time · ensures a consistent house style · reduces errors · maintains a professional appearance · protects the master design from accidental alteration.

**To use a built-in template (Microsoft Word):**
`File → New → choose a template from the gallery → click Create`

**To create and save your own template:**
1. Design the document — insert the school crest, name, address, motto and any fixed text.
2. Add placeholder text where variable content will go.
3. `File → Save As`
4. In the *Save as type* box choose **Word Template (.dotx)**
5. Name it (e.g. `School Letterhead`) and save.
6. To use it later: `File → New → Personal → select your template`.

> *LibreOffice Writer:* `File → Templates → Save as Template`, and `File → New → Templates` to use.

### 2.3 Styles and Automatic Table of Contents

A **style** is a named set of formatting instructions (font, size, colour, spacing) applied to text with one click.

**Why styles matter:** applying "Heading 1" to twenty headings and then changing the style once updates all twenty at the same time. Formatting each heading manually means twenty separate edits.

**Applying a style:** select the text → `Home tab → Styles gallery → click the style` (Heading 1, Heading 2, Normal, Title, Quote).

**Generating an automatic table of contents:**
1. Apply Heading 1, Heading 2 and Heading 3 styles to all headings in the document.
2. Place the cursor where the table of contents should appear.
3. `References tab → Table of Contents → choose an automatic style`.
4. When the document changes, click the table and choose **Update Table → Update entire table**.

**Related long-document tools:** page numbering (`Insert → Page Number`) · section breaks (`Layout → Breaks`) · different headers for different sections · footnotes (`References → Insert Footnote`) · captions and cross-references.

---

## PERIOD 2 (45 minutes)

### 2.4 Mail Merge

**Mail merge** is a word-processing feature that combines a **main document** with a **data source** to produce many personalised copies of the same document automatically.

**The three components:**

| Component | What it is | Example |
|---|---|---|
| **Main document** | The letter, label or certificate containing the fixed text and the merge fields | The PTA invitation letter |
| **Data source** | The list of variable information — a table, Excel sheet, Access database or Outlook contacts | A table of parents' names, addresses and students' names |
| **Merged document** | The final output — one personalised copy per record | 300 individually addressed letters |

**Merge fields** are placeholders in the main document, shown in angle brackets as `«FirstName»`, which are replaced by the actual data during merging.

**Nigerian uses:** PTA meeting invitations to every parent · admission and acceptance letters · certificates for a whole class · staff appointment and confirmation letters · reminder letters for outstanding school fees · envelope and address labels · personalised result-slip covering letters.

**Step-by-step mail merge in Microsoft Word:**

| Step | Action |
|---|---|
| 1 | Type and save the main document (the letter), leaving blanks where personal details will go |
| 2 | Prepare the data source — an Excel sheet whose **first row contains the column headings** (FirstName, Surname, Address, StudentName) |
| 3 | In Word: `Mailings tab → Start Mail Merge → Letters` |
| 4 | `Mailings → Select Recipients → Use an Existing List` → browse to the Excel file → choose the sheet → OK |
| 5 | Click where a detail should appear → `Mailings → Insert Merge Field` → choose the field. Repeat for each field |
| 6 | `Mailings → Preview Results` and use the arrows to check several records |
| 7 | `Mailings → Edit Recipient List` to filter or exclude records if needed |
| 8 | `Mailings → Finish & Merge` → **Edit Individual Documents** (creates one long file for checking) or **Print Documents** (prints directly) |

**Worked classroom example — the main document:**
```
                    GOVERNMENT SECONDARY SCHOOL, IKEJA
                         P.M.B. 1234, Lagos State

Date: 15th September, 2026

Dear Mr/Mrs «Surname»,

RE: PARENT-TEACHER ASSOCIATION MEETING

I write to invite you to the First Term PTA meeting concerning
your ward, «StudentName», of class «Class».

The meeting holds on Saturday, 3rd October 2026 at 10:00 a.m.
in the school hall.

Yours faithfully,

Principal
```

**The matching data source (Excel):**

| Surname | StudentName | Class |
|---|---|---|
| Adeyemi | Tolu Adeyemi | SS 2A |
| Okonkwo | Chidi Okonkwo | SS 2A |
| Bello | Aisha Bello | SS 2B |

Merging produces three separate, correctly addressed letters.

### 2.5 Macros

A **macro** is a recorded sequence of commands and keystrokes saved under a single name, which can then be replayed to perform a repetitive task automatically.

**Purpose:** automates repetitive work, saves time, reduces human error, and ensures the same steps are performed identically every time.

**Recording a macro in Microsoft Word:**
1. `View tab → Macros → Record Macro` (or the `Developer` tab if enabled).
2. Give the macro a name — no spaces allowed (e.g. `FormatHeading`).
3. Assign it to a **button** or a **keyboard shortcut**.
4. Choose where to store it (this document, or all documents).
5. Click **OK** — recording begins and the pointer shows a cassette icon.
6. Perform the actions to be recorded (e.g. set font to Calibri 14, bold, centred, blue).
7. `View → Macros → Stop Recording`.

**Running a macro:** `View → Macros → View Macros → select the macro → Run`, or press the assigned shortcut.

**Macro security — this must be taught, not skipped:**
- Documents containing macros must be saved as **`.docm`** (macro-enabled), not `.docx`.
- Macros are small programs, so a malicious macro can damage files or install malware. This is a genuine and common attack route.
- Word therefore disables macros by default and shows a **security warning bar**.
- **Never click "Enable Content" on a document received from an unknown or unexpected source.** Attackers deliberately disguise malicious files as invoices, results or job offers.
- Keep macros only in documents you created or received from a trusted source.

### 2.6 Document Protection
- **Password to open:** `File → Info → Protect Document → Encrypt with Password`.
- **Read-only / restrict editing:** `Review → Restrict Editing`.
- **Mark as final:** `File → Info → Protect Document → Mark as Final`.
- **Export to PDF** (`File → Save As → PDF`) to prevent easy alteration — the standard way to send an official letter or a CV.

### 2.7 Guided Practical (to run inside Period 2 or in the next laboratory slot)
**Task:** Produce a mail-merged PTA invitation letter for **ten** parents.
1. Create the data source with the columns Surname, StudentName, Class and ten rows of data.
2. Type the main document on the school letterhead template.
3. Insert the three merge fields.
4. Preview, then Finish & Merge to a new document.
5. Print the first two letters, or save the merged file as `Surname_MailMerge.docx`.

*Where there is no computer:* students write out the complete step sequence, the data-source table and the main document with merge fields shown in angle brackets. Mark this exactly as you would mark practical output.

---

## EVALUATION — WEEK 2

### A. Objective Questions (1 mark each)
1. A pre-designed document used as a pattern for new documents is a ______.
 (a) macro (b) template (c) style (d) merge field
2. The file extension for a Word template is ______.
 (a) .docx (b) .docm (c) .dotx (d) .pdf
3. Mail merge requires a main document and a ______.
 (a) macro (b) data source (c) template (d) style
4. A macro-enabled Word document is saved with the extension ______.
 (a) .docx (b) .docm (c) .dotx (d) .odt
5. An automatic table of contents is generated from ______.
 (a) bookmarks (b) macros (c) heading styles (d) merge fields

**Answers:** 1(b) 2(c) 3(b) 4(b) 5(c)

### B. Theory Questions
1. Define a template and state four advantages of using one. **(6 marks)**
2. What is mail merge? Name and explain its three components. **(8 marks)**
3. Outline, in order, the steps involved in performing a mail merge in a word processor. **(10 marks)**
4. Define a macro and state three benefits of using macros. **(5 marks)**
5. Explain two security risks associated with macros and how a user can guard against them. **(6 marks)**
6. State three ways a word-processing document can be protected. **(3 marks)**

### C. Practical Questions
1. You are the school secretary. Describe the steps you would take to send a personalised end-of-term letter to the parents of all 120 students in SS 2, using their surnames and their children's names. **(10 marks)**
2. Write out the exact sequence of menu commands used to (a) save a document as a template (b) record a macro (c) insert a merge field. **(9 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 2

- **Mail merge is the centrepiece of this lesson.** If time runs short, cut the styles section and preserve mail merge — it is the most examined, the most useful, and the most impressive to students when they see 300 letters generate in two seconds.
- **Demonstrate first, always.** Show the complete merge from start to finish once, without commentary, at normal speed. Then repeat it slowly with explanation. Students need to see the finished effect before the steps mean anything.
- **The single most common student error** is a badly built data source: no heading row, merged cells, blank rows in the middle, or spaces in the column headings. Teach the rule firmly: **row one is headings, one record per row, no blank rows, no merged cells, no spaces in field names.** Most merge failures in the practical examination trace back to this.
- **Second common error:** typing the field name manually as `«Surname»` instead of using Insert Merge Field. The angle brackets must be inserted by Word — typed brackets are just text and will not merge. Show this failure deliberately; it teaches faster than a warning.
- **Third common error:** clicking Finish & Merge before Preview Results, then printing 300 wrong letters. Insist on previewing at least three records every time.
- **Macros are where students disengage** because the concept feels abstract. Make it concrete with a genuinely useful macro: record one that formats a selected line as a section heading, assign it to `Ctrl+Shift+H`, then let students use it repeatedly. Five uses and they understand automation.
- **Do not soften the macro security warning.** Macro-borne malware distributed as "results", "invoices" and "job offers" is a real and current threat in Nigeria. Tie it back to SS 1 Second Term cybersecurity. The single sentence students must retain: *never enable content on a document you were not expecting.*
- **Software differences to note if you are not using Microsoft Word:**
 - *LibreOffice Writer:* `Tools → Mail Merge Wizard`; macros are at `Tools → Macros → Record Macro` (Basic language).
 - *Google Docs:* has no built-in mail merge; it requires an add-on. If your school uses Google Workspace, either use an add-on or teach the concept on a shared laptop with Word or LibreOffice installed.
 - *WPS Office:* mail merge is under `References → Mail Merge`.
- **Low-resource adaptation:** the "dry practical" works remarkably well here. Give each student a printed screenshot of the Mailings tab and have them number the buttons in the order they would click them. It is a genuine test of understanding and it marks quickly.
- **Cross-curricular link:** English (formal letter writing conventions) and Office Practice/Commerce (business correspondence).
- **Differentiation:** fast finishers should merge to **envelopes** or **labels** instead of letters, or add an IF field. Slower students should master the seven-step letter merge only.

## RESOURCE MATERIALS — WEEK 2
- Approved SSS Data Processing text, "Word Processing" chapter.
- **Microsoft Support — Mail merge documentation**: `support.microsoft.com` (search "mail merge Word")
- **GCFGlobal — Word tutorials**, including a clear mail-merge lesson: `edu.gcfglobal.org/word`
- **LibreOffice documentation** — Writer Guide, Mail Merge chapter: `documentation.libreoffice.org`
- **WPS Office** — free, light, widely used in Nigerian business centres: `wps.com`
- Printed screenshots of the Mailings tab and the Mail Merge Wizard (essential if you have no projector).
- A real school letterhead, PTA letter and result sheet as authentic worked examples.
- Prepared sample data-source file with 20 records, on a flash drive, ready for the practical.

## ASSIGNMENT
1. Design a **template** for a school certificate of participation, showing where the recipient's name, the event and the date would be inserted as merge fields. Submit on paper or as a file.
2. Prepare a data source of **fifteen** records for a mail merge, with the columns Surname, FirstName, Class and Position. Rule the table neatly if handwritten.
3. Explain in your own words why a school with 900 students would use mail merge rather than typing each letter, and calculate roughly how much time it would save if each letter takes four minutes to type individually.

---
---
