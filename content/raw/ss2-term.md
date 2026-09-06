# SS 2 DIGITAL TECHNOLOGIES — FIRST TERM LESSON NOTES

**Curriculum:** New NERDC Senior Secondary Scheme of Work
**Class:** Senior Secondary Two (SS 2)
**Term:** First Term
**Allocation:** 2 periods per week × 45 minutes (double period, 90 minutes)
**Weeks:** 13 (10 teaching/assessment weeks + 3 weeks revision and examination)

---

## SECTION A — TERM PLANNER

| Week | Topic | Status |
|---|---|---|
| 1 | Review of SS 1 Work | Teaching / Diagnostic |
| 2 | Advanced Word Processing | Teaching (practical) |
| 3 | Advanced Spreadsheet I | Teaching (practical) |
| 4 | Advanced Spreadsheet II | Teaching (practical) |
| 5 | **Midterm Test** | Assessment |
| 6 | Advanced Presentation Tools | Teaching (practical) |
| 7 | **Midterm Break** | Break |
| 8 | Web Design I | Teaching (practical) |
| 9 | Web Design II | Teaching (practical) |
| 10 | Web Publishing & Hosting | Teaching (practical) |
| 11–13 | Revision & Examinations | Assessment |

### Assessment Structure (typical Nigerian model — adjust to your school policy)

| Component | Weight |
|---|---|
| 1st Continuous Assessment Test (Week 3) | 10 marks |
| Midterm Test — theory and practical (Week 5) | 15 marks |
| Practical file / class exercises | 10 marks |
| Term project — website (Weeks 8–10) | 5 marks |
| **Total Continuous Assessment** | **40 marks** |
| Terminal Examination — theory and practical (Weeks 12–13) | 60 marks |
| **TERM TOTAL** | **100 marks** |

**WAEC/NECO grading scale:** A1 (75–100), B2 (70–74), B3 (65–69), C4 (60–64), C5 (55–59), C6 (50–54), D7 (45–49), E8 (40–44), F9 (0–39).

---

### ⚠ IMPORTANT — READ BEFORE THE TERM BEGINS

**This is a practical term.** Every topic from Week 2 to Week 10 is a *doing* topic. SS 1 taught students what digital technology **is**; SS 2 First Term teaches them to **produce** with it — documents, spreadsheets, presentations and websites.

**If your school has a functioning computer laboratory,** aim for at least one of the two weekly periods to be hands-on. Two or three students per machine works; four does not.

**If your school has few or no computers,** this term is still fully teachable, but you must plan for it deliberately:

1. **Teach from the board with screenshots.** Print or draw the ribbon, dialogue boxes and menus. Students must be able to name and locate a command even if they cannot click it.
2. **Use "dry practical".** Students write out, on paper, the exact sequence of steps and the exact formula or code they would use. This is precisely how the WAEC/NECO Data Processing practical paper is answered in writing, so it is not a compromise — it is direct examination preparation.
3. **Use phones.** Google Docs, Google Sheets, Google Slides and WPS Office all run on Android. A ₦40,000 phone can do genuine mail merge, pivot tables and slide design. For Weeks 8–10, free code editors and preview apps allow students to write and view HTML on a phone.
4. **Rotate.** If you have five computers and forty students, run a rotation: eight groups of five, each group getting fifteen minutes at a machine across two weeks, with written work for the rest.
5. **Build a departmental laptop pool.** One functioning laptop plus a projector lets you demonstrate everything in this term to a whole class.

**A note on software:** these notes reference Microsoft Office because it dominates Nigerian offices and examinations. Every task described can also be done in **LibreOffice** (free, offline, low system requirements), **WPS Office** (free tier, very popular in Nigeria, light) or **Google Workspace** (free, online). Where the command differs, it is noted in the Teacher's Helper Notes.

---

### Standard lesson procedure used in every week below

| Step | Activity | Time |
|---|---|---|
| I | Introduction — revision of previous lesson, entry behaviour check | 5 min |
| II | Presentation — teacher exposition and demonstration | 18 min |
| III | Guided practice — students replicate the demonstration | 15 min |
| IV | Evaluation — oral, written and practical checks | 5 min |
| V | Summary, board note, assignment | 2 min |

**Teaching methods:** demonstration, guided discovery, project method, discussion, question-and-answer, peer tutoring, hands-on laboratory practice.

---
---

# WEEK 1 — REVIEW OF SS 1 WORK

**Sub-topics:** Foundations of digital technology · Number systems and data representation · Hardware and software · Operating systems · Networks and the internet · Cybersecurity and digital ethics · Office applications and databases · Emerging technologies · Diagnostic assessment

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. recall and state the key concepts covered across the three terms of SS 1;
2. perform number-base conversions and data-representation calculations accurately;
3. classify hardware and software correctly;
4. explain the main functions of an operating system and the basic concepts of networking and the internet;
5. state the main cybersecurity threats and protective measures;
6. identify their own areas of weakness through a diagnostic test;
7. state what will be required of them in SS 2 and why this term is practical.

## Entry Behaviour
Students completed the full SS 1 Digital Technologies syllabus. They have used word processors, spreadsheets and presentation software at an introductory level in SS 1 Third Term.

## Instructional Materials
SS 1 notebooks, chalkboard, diagnostic test papers, a computer with an office suite installed, projector where available, charts of the computer block diagram and software classification.

---

## PERIOD 1 (45 minutes) — Rapid Review

### 1.1 First Term of SS 1 — Foundations

**Digital technology** — tools and systems that generate, store, process and transmit data as discrete values (0s and 1s), as opposed to analogue systems which use continuously varying signals.

**Generations of computers:** vacuum tubes → transistors → integrated circuits → microprocessors → artificial intelligence. Across the generations, size and cost fell while speed, storage and reliability rose.

**Number systems — the essential conversions:**

| Task | Method |
|---|---|
| Any base → decimal | Expansion: multiply each digit by base^position, add |
| Decimal → any base | Repeated division; **divide down, read remainders up** |
| Binary → octal | Group bits in **threes** from the right |
| Binary → hexadecimal | Group bits in **fours** from the right |

*Quick drill:* 156₁₀ = 10011100₂ = 234₈ = 9C₁₆

**Hardware:** input unit → CPU (Control Unit + ALU + registers) → output unit, supported by memory and storage.
- **RAM** — volatile, temporary working memory. **ROM** — non-volatile, permanent instructions.
- **System unit** (motherboard, CPU, RAM, PSU, drives) vs **peripherals** (keyboard, monitor, printer, flash drive).

**Software:**
```
SOFTWARE → SYSTEM (OS, utilities, translators, drivers)
         → APPLICATION (general-purpose, special-purpose, integrated)
```
- **Compiler** translates the whole program at once; **interpreter** translates line by line.

**Operating system functions:** booting, memory management, process scheduling, file management, device management, security, user interface, error handling.
- **Cold booting** — starting from off. **Warm booting** — restarting a running system.

**Data representation:** 8 bits = 1 byte = 1 character. ASCII ('A' = 65, 'a' = 97) for English; **Unicode** for world languages including Yoruba, Igbo and Hausa diacritics and the Naira sign ₦.
- Image size = width × height × colour depth (bits) ÷ 8
- Sound size = sampling rate × bit depth × channels × duration ÷ 8
- **Lossless** compression (ZIP, PNG) preserves everything; **lossy** (JPEG, MP3) discards data permanently.

### 1.2 Second Term of SS 1 — Networks, Internet and Security

**Computer networks:** LAN (one building), MAN (a city), WAN (across countries — the internet is the largest WAN).
- Components: NIC, switch, router, modem, access point, cables, server, client.
- Topologies: bus, star, ring, mesh.

**Internet technologies:** the **internet** is the global network of networks; the **World Wide Web** is one service running on it. Browsers, search engines, URLs, HTTP/HTTPS, IP addresses, domain names, ISPs.

**Email and online communication:** address structure (`name@domain`), To/Cc/Bcc, attachments, etiquette, instant messaging, video conferencing.

**Storage and cloud computing:** local vs cloud storage; advantages of the cloud (access anywhere, automatic backup, collaboration, scalability); disadvantages (needs internet, data costs, privacy concerns).

**Cybersecurity:** threats — malware (virus, worm, Trojan, ransomware, spyware), phishing, hacking, identity theft, social engineering. Protection — antivirus, firewalls, strong and unique passwords, two-factor authentication, software updates, encryption, backups, caution with links and attachments.

**Data privacy and digital ethics:** responsible use, cyberbullying, plagiarism, intellectual property, the **Nigeria Data Protection Act 2023**, the **Cybercrimes Act 2015**, digital footprint, digital citizenship.

### 1.3 Third Term of SS 1 — Applications and Emerging Technologies

**Word processing:** creating, formatting, editing and printing documents.
**Spreadsheets:** cells, ranges, basic formulas (SUM, AVERAGE, MAX, MIN, COUNT), charts.
**Presentation software:** slides, layouts, transitions, slide show.
**Databases:** tables, records, fields, primary keys, queries, forms, reports; DBMS examples.
**Emerging technologies:** Artificial Intelligence, Internet of Things, robotics, Virtual Reality, Augmented Reality.

---

## PERIOD 2 (45 minutes) — Diagnostic Test and Bridge to SS 2

### 1.4 Diagnostic Test (30 minutes, 30 marks)
*This test is not for grading. Tell students so. Its purpose is to show you and them exactly where SS 1 knowledge has decayed.*

**Section A — Objective (15 marks)**
1. Convert 1101101₂ to decimal.
2. Convert 89₁₀ to hexadecimal.
3. Convert 11010110₂ to octal using grouping.
4. State whether RAM is volatile or non-volatile.
5. Name the two components of the CPU.
6. Give one example of a utility program.
7. What does POST stand for?
8. Differentiate cold booting from warm booting in one sentence.
9. How many bits make a byte?
10. What is the ASCII value of 'C'?
11. Name the network type that covers a single building.
12. What does HTTPS provide that HTTP does not?
13. Name two types of malware.
14. What does the acronym DBMS stand for?
15. Give one example of an emerging technology.

**Answers:** 1) 109 2) 59₁₆ 3) 326₈ 4) Volatile 5) Control Unit and ALU 6) Antivirus/disk cleanup/defragmenter (any) 7) Power-On Self-Test 8) Cold = starting from completely off; warm = restarting a running machine 9) 8 10) 67 11) LAN 12) Encryption/security 13) Virus, worm, Trojan, ransomware, spyware (any two) 14) Database Management System 15) AI, IoT, robotics, VR, AR (any)

**Section B — Short answer (15 marks)**
1. Calculate the file size in MB of an uncompressed image 1,024 × 768 pixels at 24-bit colour depth. **(5 marks)** *(Answer: 2.25 MB)*
2. State four functions of an operating system. **(4 marks)**
3. List three cybersecurity threats and one protective measure against each. **(6 marks)**

### 1.5 What SS 2 Demands — Bridging Talk (10 minutes)

Write this on the board and discuss it:

> **SS 1 asked: "What is it?" SS 2 asks: "Can you build it?"**

| SS 1 First Term | SS 2 First Term |
|---|---|
| Knew what a word processor is | Runs a mail merge for 300 parents |
| Knew what a spreadsheet is | Builds a financial model with scenarios |
| Knew what a presentation is | Designs a professional multimedia deck |
| Knew what a website is | **Writes the code and publishes it online** |

**What this means practically for students:**
1. **Keep a practical file.** Every exercise — printed output, or a written record of the steps and formulas used — goes into a labelled file. It is assessed and worth marks.
2. **The examination has a practical component.** Steps and formulas must be written accurately from memory.
3. **The term project is a working website**, built from Week 8 and published in Week 10.
4. **Practice outside school.** Google Docs, Sheets and Slides work on any phone. So does writing HTML in a notes app.

### 1.6 Correcting the Diagnostic (5 minutes)
Mark by exchange, read the answers aloud, and have students record their own score. Ask each student to write down the **two topics they must revise privately** before Week 5.

---

## EVALUATION — WEEK 1

### A. Objective Questions (1 mark each)
1. The largest wide area network in the world is the ______.
 (a) LAN (b) MAN (c) internet (d) intranet
2. 2E₁₆ in decimal is ______.
 (a) 44 (b) 46 (c) 214 (d) 32
3. Which is **not** a function of an operating system?
 (a) Memory management (b) File management (c) Typing a letter (d) Device management
4. Software that demands payment to unlock a user's own files is ______.
 (a) spyware (b) ransomware (c) adware (d) freeware
5. The Nigerian law governing the processing of personal data is the ______.
 (a) Cybercrimes Act (b) Nigeria Data Protection Act (c) Copyright Act (d) NCC Act

**Answers:** 1(c) 2(b) 3(c) 4(b) 5(b)

### B. Theory Questions
1. Convert 205₁₀ to binary, octal and hexadecimal. **(9 marks)**
2. State five differences between system software and application software. **(10 marks)**
3. Differentiate between the internet and the World Wide Web. **(4 marks)**
4. List four cybersecurity threats and state one preventive measure for each. **(8 marks)**
5. State four advantages and two disadvantages of cloud storage. **(6 marks)**

**Worked answer:** 205₁₀ = **11001101₂** = **315₈** = **CD₁₆**

### C. Class Activity
In pairs, students take turns quizzing each other from their SS 1 notebooks for ten minutes — one asks, the other answers without looking. Each pair reports the two questions that caused the most difficulty.

---

## TEACHER'S HELPER NOTES — WEEK 1

- **Do not spend the whole double period lecturing.** The temptation is to re-teach all of SS 1. Resist it. The diagnostic test is the most valuable part of this week because it tells you what to reinforce, and you cannot get that information by talking.
- **Analyse the diagnostic properly.** Tally how many students missed each question. If more than half fail the conversions, insert a five-minute conversion drill at the start of every lesson until the midterm. If more than half fail the file-size calculation, do the same. This costs almost nothing and prevents the same failure recurring in the terminal examination.
- **Set expectations honestly and early.** Tell students in plain terms: *this term you will be marked on what you can do, not only on what you can recall.* Some students who coasted on memorisation in SS 1 will struggle; warn them now, while they still have ten weeks to adjust.
- **Common gap 1:** students remember *names* (pivot table, mail merge) from SS 1 but cannot perform any operation. Do not assume the SS 1 Third Term practical topics were actually taught practically — in many schools they were taught from the board only. Ask directly: *"How many of you have personally typed in Excel?"* Plan Weeks 2–4 around the honest answer.
- **Common gap 2:** number-base conversions decay badly over the long holiday. Budget a full ten minutes on them in Period 1, not three.
- **Common gap 3:** students confuse the internet with the Web, and cloud storage with "the internet". Correct both here, because Week 10 (hosting) depends on a clear picture of servers, domains and clients.
- **Use this week to organise the class practically.** Fix the laboratory rotation groups now, appoint two laboratory prefects, and issue the practical-file requirement in writing. Administration done in Week 1 saves three periods later in the term.
- **Preview the project.** Announce in Week 1 that the term ends with each student publishing a website. Students work better across ten weeks when they know what they are building towards. Some will start learning HTML on their own before Week 8 — let them.
- **Differentiation:** identify your three or four strongest students during the diagnostic and appoint them as **peer tutors** for the practical weeks. In a class of forty with six computers, peer tutors are not a luxury; they are how the term gets taught.

## RESOURCE MATERIALS — WEEK 1
- Students' own SS 1 Digital Technologies notebooks — the primary resource for this week.
- SS 1 First Term lesson notes (companion document).
- Approved SSS Data Processing/Computer Studies textbook, revision chapters.
- **GCFGlobal** — free tutorials covering the whole SS 1 range: `edu.gcfglobal.org`
- **Khan Academy — Computers and the Internet**: `khanacademy.org/computing`
- Diagnostic test papers (duplicate one per student, plus five spares).
- Continuous assessment record book — open the SS 2 record this week.

## ASSIGNMENT
1. Revise, from your SS 1 notes, the two topics you identified as your weakest, and write a one-page summary of each.
2. Find out and write down the name and version of the office software installed on any computer you can access, and list the four main programs in that suite.
3. Bring your practical file (a labelled folder or exercise book) to the next lesson.

---
---

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

# WEEK 6 — ADVANCED PRESENTATION TOOLS

**Sub-topics:** Review of presentation basics · Slide Master and themes · Principles of professional slide design · Multimedia integration · Animations, transitions and timing · Interactivity and hyperlinks · Delivery and export

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. use the Slide Master to apply a consistent design across a whole presentation;
2. state and apply at least five principles of professional slide design;
3. insert and control images, audio, video and screen recordings in a presentation;
4. differentiate between an animation and a transition and apply each appropriately;
5. create a non-linear presentation using hyperlinks and action buttons;
6. use Presenter View, rehearse timings and speaker notes;
7. export a presentation to PDF and to video, and manage file size.

## Entry Behaviour
Students created simple slides in SS 1 Third Term — inserting text, choosing layouts, applying a transition and running a slide show.

## Instructional Materials
Computers with Microsoft PowerPoint, LibreOffice Impress, WPS Presentation or Google Slides; projector and screen; speakers; a short video clip and an audio file on a flash drive; two printed sample slides — one badly designed, one well designed; a presentation-assessment rubric.

---

## PERIOD 1 (45 minutes)

### 6.1 Rapid Review
**Presentation software** creates a sequence of slides used to support the delivery of information to an audience.

**Known basics:** slides · layouts · placeholders · themes · inserting text, images and tables · Normal, Slide Sorter and Reading views · running a slide show (F5, or Shift+F5 from the current slide).

**File extensions:** `.pptx` (presentation) · `.potx` (template) · `.ppsx` (show that opens straight into presentation mode) · `.pdf` · `.mp4` (exported video).

### 6.2 The Slide Master — Consistency Without Repetition

The **Slide Master** is the top-level slide that controls the design of every slide based on it: fonts, colours, background, logo position, bullet styles and placeholder positions. Change the master once and every slide updates.

**To open it:** `View → Slide Master`

**What to set there:**
- School crest or organisation logo, placed once so it appears on every slide.
- Heading and body fonts and their sizes.
- Theme colours.
- Background.
- Footer, slide number and date placeholders.

**To leave:** `Slide Master → Close Master View`

**Layouts** beneath the master control particular slide types — Title Slide, Title and Content, Two Content, Comparison, Blank. Choosing the right layout is faster and tidier than dragging text boxes about.

**Themes:** `Design tab → Themes` applies a coordinated set of fonts, colours and effects. **Variants** change the colour scheme of a theme without changing its layout.

### 6.3 Principles of Professional Slide Design

Teach these as rules, then let students judge slides against them.

| Principle | What it means in practice |
|---|---|
| **Contrast** | Text must stand out sharply from the background. Dark text on a light background, or light text on a dark background — never mid-grey on mid-blue |
| **Repetition** | The same fonts, colours and layout throughout. Consistency signals professionalism |
| **Alignment** | Elements line up on invisible lines. Use guides and gridlines; nothing floats at random |
| **Proximity** | Related items sit close together; unrelated items are separated by space |
| **Simplicity** | One main idea per slide. The audience reads or listens, not both |
| **Whitespace** | Empty space is not wasted space. It makes the content readable |
| **Legibility** | Minimum 24 pt for body text, 32–44 pt for headings. Sans-serif fonts (Calibri, Arial, Verdana) read better on screen |
| **Image quality** | Use high-resolution images. Never stretch an image out of proportion |

**The 6 × 6 guideline:** no more than about six bullet points per slide and about six words per bullet. It is a guideline, not a law, but it prevents the commonest fault.

**Common faults to correct — show these deliberately:**
- Paragraphs of text copied straight from a textbook onto the slide.
- Reading the slides aloud word for word.
- Five different fonts and eight colours in one deck.
- Dark text on a dark photograph.
- Distracting animations on every line.
- Low-resolution images stretched until they blur.
- Slide numbers missing, so the audience cannot refer to anything.

### 6.4 Multimedia Integration

**Images:** `Insert → Pictures` (from a file), `Insert → Icons`, `Insert → Shapes`, `Insert → SmartArt` for diagrams and processes. Use `Picture Format → Compress Pictures` to reduce file size. Always set **alt text** for accessibility.

**Audio:** `Insert → Audio → Audio on My PC`. In `Playback`, set **Start: Automatically** or **On Click**, choose **Play Across Slides**, **Loop until Stopped**, and **Hide During Show** where the icon should not be visible. Use `Trim Audio` to cut the clip.

**Video:** `Insert → Video → This Device` (embedded) or `Online Video` (linked).

| Embedded video | Linked video |
|---|---|
| Stored inside the presentation file | Only a reference is stored |
| File becomes large | File stays small |
| Always plays, even on another computer | **Breaks if the file is moved or there is no internet** |

> **Practical advice for Nigerian classrooms:** always **embed**, never link, and always carry the presentation on a flash drive with any linked files in the same folder. A presentation that depends on internet access will fail at the moment you need it.

**Screen recording:** `Insert → Screen Recording` captures actions on screen — useful for demonstrating software.

**Charts and tables:** `Insert → Chart` opens a small spreadsheet for the data. Charts pasted from Excel may be **linked** (update automatically) or **embedded** (fixed).

---

## PERIOD 2 (45 minutes)

### 6.5 Animations and Transitions — Know the Difference

| Transition | Animation |
|---|---|
| The effect **between two slides** | The effect applied to an **object on a slide** |
| Applied on the `Transitions` tab | Applied on the `Animations` tab |
| One per slide | Several per slide, in sequence |
| Examples: Fade, Push, Wipe, Morph | Examples: Appear, Fly In, Zoom, Motion Path |

**The four animation categories:**
1. **Entrance** — how an object arrives (Appear, Fade, Fly In).
2. **Emphasis** — how it draws attention while present (Pulse, Grow/Shrink, Colour Pulse).
3. **Exit** — how it leaves (Disappear, Fade Out, Fly Out).
4. **Motion Path** — how it moves along a defined route.

**Controlling animation:** `Animations → Animation Pane` shows the sequence and lets you reorder it.

| Start setting | Meaning |
|---|---|
| **On Click** | Waits for the presenter |
| **With Previous** | Runs at the same time as the previous effect |
| **After Previous** | Runs automatically once the previous effect finishes |

**Duration** sets how long an effect takes; **Delay** sets how long it waits first.

**Triggers:** `Animations → Trigger` makes an effect run only when a particular object is clicked — the basis of interactive quizzes.

**Morph transition:** place the same object on two consecutive slides in different positions or sizes, apply **Morph** to the second slide, and the object glides smoothly. It produces a professional result with very little effort.

**Applying to all:** `Transitions → Apply To All` gives the whole deck one consistent transition. Use one transition throughout, not a different one on every slide.

### 6.6 Interactivity and Navigation
- **Hyperlinks:** `Insert → Link` — link to another slide, a file, a web page or an email address.
- **Action buttons:** `Insert → Shapes → Action Buttons` — ready-made Next, Back, Home and Return buttons.
- **Zoom:** `Insert → Zoom → Slide/Section/Summary Zoom` creates a visual menu that jumps to any section.
- **Non-linear presentation:** a menu slide linking to sections, with a Home button on each slide — used for kiosks, self-study material and quizzes.

### 6.7 Delivery, Timing and Export
- **Speaker notes:** typed in the Notes pane beneath the slide; visible to the presenter only.
- **Presenter View:** shows the current slide, the next slide, the notes and a timer on the presenter's screen while the audience sees only the slide. Enable it under `Slide Show → Use Presenter View`.
- **Rehearse Timings:** `Slide Show → Rehearse Timings` records how long is spent on each slide.
- **Self-running show:** `Slide Show → Set Up Slide Show → Browsed at a kiosk`, with `Advance slides: Using timings`.
- **Exporting:**
 - **PDF** — `File → Export → Create PDF/XPS`. The safest format for sharing; layout and fonts cannot shift.
 - **Video** — `File → Export → Create a Video` produces an `.mp4`.
 - **Handouts** — `File → Print → Handouts`, choosing three or six slides per page.
- **Managing file size:** compress pictures, trim audio and video, avoid unnecessary embedded fonts. A 90 MB presentation is difficult to send where data is expensive.
- **Portability:** `File → Info → Check for Issues` reports linked files and accessibility problems before you present.

**Delivery skills to teach explicitly:**
1. Never read the slides aloud — the slide supports you; it is not your script.
2. Face the audience, not the screen.
3. Arrive early and test the projector, the sound and the file.
4. Carry the file in **two** places — flash drive and email or cloud — and a PDF copy as a fallback.
5. Keep to time; rehearse at least once aloud.
6. Handle questions at the end unless invited earlier.

### 6.8 Guided Practical — Class Project Presentation
**Task:** Build a **six-slide** presentation on any approved topic (for example *Cybersecurity Awareness for Students*, *Digital Technology in Nigerian Banking*, or the student's Week 4 business model).

**Requirements:**
1. A Slide Master carrying the school crest and consistent fonts and colours.
2. A title slide, four content slides and a conclusion slide.
3. At least **two images**, one **chart** and one **audio or video** element.
4. Consistent transitions and purposeful animation — no more than three animated objects per slide.
5. Speaker notes on every content slide.
6. Saved as `.pptx` **and** exported to PDF.

**Assessment rubric (10 marks):** design consistency 2 · content quality 2 · multimedia integration 2 · appropriate animation and transitions 2 · speaker notes and export 1 · delivery 1.

*Where there is no computer:* students design the six slides on paper — one A5 sheet per slide — and write beside each the exact commands they would use to insert each element. Deliver the presentation by holding up the sheets. Design principles, structure and delivery skills are all assessed; only the clicking is missing.

---

## EVALUATION — WEEK 6

### A. Objective Questions (1 mark each)
1. The feature that controls the design of every slide at once is the ______.
 (a) layout (b) theme (c) Slide Master (d) template
2. An effect applied **between** two slides is a ______.
 (a) animation (b) transition (c) trigger (d) morph
3. Which animation category controls how an object leaves a slide?
 (a) Entrance (b) Emphasis (c) Exit (d) Motion Path
4. To ensure a video always plays on another computer, it should be ______.
 (a) linked (b) embedded (c) compressed (d) hyperlinked
5. The view that shows the presenter the notes and next slide while the audience sees only the slide is ______.
 (a) Reading View (b) Slide Sorter (c) Presenter View (d) Normal View

**Answers:** 1(c) 2(b) 3(c) 4(b) 5(c)

### B. Theory Questions
1. What is a Slide Master? State three items best set on it. **(5 marks)**
2. State five principles of professional slide design and explain each briefly. **(10 marks)**
3. Differentiate between an animation and a transition. **(4 marks)**
4. Name the four categories of animation and give one example of each. **(8 marks)**
5. State three differences between an embedded and a linked video, and advise which to use for a school presentation, giving a reason. **(7 marks)**
6. State four ways of reducing the file size of a presentation. **(4 marks)**
7. List five points of good delivery when presenting to an audience. **(5 marks)**

### C. Practical Questions
1. Describe the steps to insert an audio file that plays automatically across all slides with its icon hidden. **(6 marks)**
2. Describe how you would create a menu slide with hyperlinks to four sections and a Home button on every slide. **(8 marks)**
3. State the steps to export a presentation as a PDF and as a video. **(4 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 6

- **Start with a bad slide.** Project or hold up a slide crammed with a full paragraph in five fonts on a dark photograph, and ask the class what is wrong with it. They will identify most of the design principles themselves in three minutes. Then show the corrected version of the same slide. This teaches design far better than a list of rules, and students remember the contrast.
- **The Slide Master is the highest-value skill here** and the one students most often skip. Demonstrate the payoff: put the school crest on the master, close master view, and let them watch it appear on all six slides at once. Then ask how long it would take to place it on forty slides by hand.
- **Common error 1 — over-animation.** Given the tools, students animate every word. Set a firm limit in the rubric: **no more than three animated objects per slide**, and animation must serve a purpose. Ask them to justify each effect.
- **Common error 2 — text-dump slides.** Students copy their whole essay onto the slide and then read it. Enforce the rule with a practical instruction: *the slide holds your headings; your mouth holds the sentences.* Speaker notes exist for exactly this reason, which is why they are in the rubric.
- **Common error 3 — the linked-media failure.** A student inserts a video from their Downloads folder, copies only the `.pptx` to a flash drive, and the video is missing on the school computer. Let this happen once in class if you can — it teaches embedding permanently. Then teach the professional habit: keep the presentation and all its media in **one folder**, and carry the whole folder.
- **Common error 4 — fonts shifting.** A deck built with a font the school computer lacks will substitute something else and the layout will break. Teach students to stick to common fonts (Calibri, Arial, Times New Roman, Verdana) or to export to PDF as a fallback copy.
- **Always insist on a PDF backup.** In a Nigerian school hall with an unfamiliar laptop and an uncertain power supply, a PDF opens on anything. Make it a requirement of the rubric, not advice.
- **Software differences:**
 - *LibreOffice Impress:* the Slide Master is at `View → Master Slide`; animation is under `Slide → Custom Animation`. No Morph or Zoom.
 - *Google Slides:* `Slide → Edit theme` for the master. Animations are simpler; there is no Morph. Excellent for collaboration and works on phones.
 - *WPS Presentation:* closely mirrors PowerPoint, including the Slide Master.
- **Low-resource adaptation:** the paper-slide version of the practical is genuinely worthwhile, not a consolation. Design thinking, structure and delivery are the parts students are weakest at, and none of them requires a computer. Have groups present their paper slides to the class and mark the delivery against the rubric.
- **Cross-curricular link:** English (oral presentation, public speaking), Marketing, Civic Education (public awareness campaigns), Fine Art (layout and colour).
- **Differentiation:** stronger students should attempt Morph, Zoom, trigger animations and a self-running kiosk show. Weaker students must produce a clean, consistent six-slide deck with one image and one transition — which is already a professional result.

## RESOURCE MATERIALS — WEEK 6
- Approved SSS Data Processing text, "Presentation Packages" chapter.
- **GCFGlobal — PowerPoint tutorials**: `edu.gcfglobal.org/powerpoint`
- **Microsoft Support — PowerPoint help**: `support.microsoft.com`
- **Canva** — free presentation templates and design ideas, works in a browser and on phones: `canva.com`
- **LibreOffice Impress Guide**: `documentation.libreoffice.org`
- **Pexels** and **Unsplash** — free, high-resolution, freely usable photographs: `pexels.com`, `unsplash.com`
- Prepared "bad slide / good slide" pair, printed on A4 or ready on a flash drive.
- Sample audio and video clips (short — under 30 seconds) on a flash drive.
- Printed presentation-assessment rubric, one per student.

## ASSIGNMENT
1. Complete the six-slide project presentation and submit both the `.pptx` and the PDF (or the paper version) at the beginning of Week 8. **Delivery to the class will be assessed.**
2. Find any presentation online or in your school and list three design faults in it, explaining how each should be corrected.
3. Write out the steps you would take to make a presentation run by itself at a school open day, advancing automatically every ten seconds.

---
---

# WEEK 7 — MIDTERM BREAK

No formal lesson holds this week.

## Midterm Break Project — Web Design Preparation

The Second half of the term builds towards a **published website**. This break is used to gather the raw material so that Weeks 8 to 10 can be spent building rather than deciding.

### Project brief: *"My Website Plan"*

Each student is to prepare, on paper or as a document:

1. **Choose a subject** for a three-page website. Suggestions: your school · a school club or society · a small family business · a Nigerian state or town · a hobby · a public-awareness cause such as cybersecurity, road safety or malaria prevention.

2. **State the purpose and the audience** in two sentences. *Who is this website for, and what should they be able to do after visiting it?*

3. **Draw a site map** — a simple diagram showing the three pages and how they link:
```
            HOME (index.html)
                  │
        ┌─────────┴─────────┐
     ABOUT              CONTACT
   (about.html)      (contact.html)
```

4. **Draw a wireframe** for each page — a rough pencil sketch showing where the header, navigation bar, main content, images and footer will sit. No colours, no detail; boxes and labels only.

5. **Write the actual content:**
 - A heading and two short paragraphs for the Home page.
 - A heading and three paragraphs for the About page.
 - Contact details and a list of the fields a contact form should have.

6. **Gather three images** you have the right to use — your own photographs, or images from a free-to-use source such as Pexels or Unsplash. Note the source of each.

7. **Choose a colour scheme** — three colours only, written down as names or hex codes.

**Submission:** first lesson of Week 8. **Marks:** 5 (counts towards the CA project score).

**Marking guide:** purpose and audience 1 · site map 1 · wireframes 1 · written content 1 · images and colour scheme 1.

## TEACHER'S HELPER NOTES — WEEK 7

- **Issue this brief in Week 6, not on the last day.** Students need the whole break, and some will need help choosing a subject.
- **This week does the planning so Weeks 8–10 can do the building.** In practice the single biggest waste of laboratory time is students sitting at a computer deciding what to write. If the content is already written on paper, a student can type a working page in one period. Protect this.
- **Insist on the wireframe.** Students want to skip straight to code. A five-minute pencil sketch prevents an hour of confusion in Week 9, and it is how professional web design actually begins.
- **Keep subjects modest.** A student who chooses "a full social media platform" will produce nothing. Steer them towards three pages about something they already know well.
- **On images:** use this as a live lesson in copyright. Taking any image from a Google search is not permitted; using your own photograph or a properly licensed free image is. This connects directly to SS 1's digital ethics topic and to the Nigerian Copyright Commission's remit.
- **Encourage but do not require early practice.** Students with a phone can install a simple HTML editor and try a first page over the break. Those who do will move much faster in Week 8 and make useful peer tutors.
- **Prepare your own resources over the break:** test that the school computers have a usable text editor and browser, download offline copies of any tutorial you plan to use, and create the free hosting account you will demonstrate in Week 10 so you are not registering it live in front of the class.
- Remind students of the resumption date and that Week 8 begins **Web Design I — HTML and CSS**, and that their project marks depend on the plan they submit.

---
---

# WEEK 8 — WEB DESIGN I: INTRODUCTION TO HTML AND CSS

**Sub-topics:** Web concepts and terminology · Tools for web design · HTML structure, elements, tags and attributes · Common HTML tags · CSS purpose, syntax and methods · Selectors, properties and the box model

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. define web page, website, web browser, web server and URL, and distinguish static from dynamic pages;
2. state the tools required for basic web design;
3. explain what HTML is and write the basic structure of an HTML document;
4. differentiate between an element, a tag and an attribute;
5. use at least twelve HTML tags correctly, including headings, paragraphs, lists, links, images and tables;
6. explain what CSS is and state the three methods of applying it;
7. write CSS rules using element, class and id selectors;
8. create and view a complete styled web page.

## Entry Behaviour
Students studied internet technologies, browsers, URLs and web concepts in SS 1 Second Term. They submitted a site map, wireframes and page content over the midterm break.

## Instructional Materials
Computers with any text editor (Notepad, Notepad++ or Visual Studio Code) and any browser; projector; printed HTML tag reference sheet; printed sample code listings; students' Week 7 project plans; exercise books for hand-written code.

---

## PERIOD 1 (45 minutes)

### 8.1 Web Concepts and Terminology

| Term | Meaning |
|---|---|
| **Web page** | A single document displayed in a browser |
| **Website** | A collection of related web pages under one domain |
| **Home page** | The first or main page of a website, normally `index.html` |
| **Web browser** | Software that requests, interprets and displays web pages — Chrome, Firefox, Edge, Opera, Safari |
| **Web server** | A computer that stores websites and sends pages to browsers on request |
| **URL** | Uniform Resource Locator — the full address of a resource, e.g. `https://www.myschool.sch.ng/about.html` |
| **HTTP / HTTPS** | The protocol used to transfer web pages. **HTTPS is encrypted and secure**; HTTP is not |
| **Web hosting** | Renting space on a web server so a website is available on the internet |
| **W3C** | World Wide Web Consortium — the body that sets web standards |

**Static vs dynamic pages**

| Static | Dynamic |
|---|---|
| Content is fixed and identical for every visitor | Content is generated for each request |
| Built with HTML and CSS only | Uses server-side code and usually a database |
| Fast, cheap, easy to host | More powerful and interactive |
| Example: a school's About page | Example: a school portal showing your own results |

**Front-end vs back-end**
- **Front-end (client-side)** — what the visitor sees and interacts with: **HTML, CSS, JavaScript**.
- **Back-end (server-side)** — what happens on the server: PHP, Python, Node.js, and a database.

*This term covers the front-end only, and within it HTML and CSS.*

### 8.2 Tools for Web Design
1. **A text editor** — Notepad (already on every Windows machine), Notepad++, Visual Studio Code, or Sublime Text. On Android: Acode, Spck Editor or any plain-text editor.
2. **A web browser** to view and test the result.
3. **Browser developer tools** — press **F12** to inspect elements and see errors.
4. Optionally: an FTP client for uploading (Week 10), and a validator to check the code.

> A full website can be written in Notepad. No expensive software is required, which makes this the most accessible practical topic in the whole scheme.

### 8.3 What Is HTML?

**HTML — HyperText Markup Language** — is the standard language used to create the structure and content of web pages.

- It is a **markup language**, not a programming language. It describes and structures content; it does not make decisions or perform calculations.
- **HyperText** means text containing links to other documents.

**Element, tag and attribute — a distinction students must get right:**

```html
<p class="intro">Welcome to our school.</p>
│                                        │
opening tag                       closing tag
```
- **Tag** — the keyword in angle brackets: `<p>` opens, `</p>` closes.
- **Element** — the opening tag, the content and the closing tag taken together.
- **Attribute** — extra information placed inside the opening tag, written as `name="value"` — here, `class="intro"`.
- **Empty (void) elements** have no closing tag: `<br>`, `<hr>`, `<img>`.

### 8.4 The Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
<head>
    <title>My School Website</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Welcome to Government Secondary School</h1>
    <p>Knowledge, Discipline, Service.</p>
</body>
</html>
```

| Part | Purpose |
|---|---|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html>` | The root element containing everything |
| `<head>` | Information **about** the page — not displayed in the page body |
| `<title>` | Text shown on the browser tab; used by search engines |
| `<meta charset="UTF-8">` | Sets the character encoding — this is what allows ₦, ẹ, ọ and ṣ to display correctly |
| `<body>` | Everything the visitor actually sees |

**To create and view a page:**
1. Open Notepad and type the code.
2. `File → Save As`; set **Save as type** to **All Files**; name it `index.html`.
3. Find the file and double-click it — it opens in the browser.
4. After editing, save the file and press **F5** in the browser to refresh.

> **The single commonest beginner error:** saving as `index.html.txt` because *Save as type* was left on "Text Documents". The file then opens as code instead of a web page. Teach the fix explicitly.

### 8.5 Common HTML Tags

| Tag | Purpose |
|---|---|
| `<h1>` to `<h6>` | Headings, largest to smallest |
| `<p>` | Paragraph |
| `<br>` | Line break |
| `<hr>` | Horizontal rule |
| `<b>` / `<strong>` | Bold / important text |
| `<i>` / `<em>` | Italic / emphasised text |
| `<ul>` and `<li>` | Unordered (bulleted) list |
| `<ol>` and `<li>` | Ordered (numbered) list |
| `<a href="url">` | Hyperlink |
| `<img src="file" alt="description">` | Image |
| `<table>`, `<tr>`, `<th>`, `<td>` | Table, row, heading cell, data cell |
| `<div>` | A block container used for layout |
| `<span>` | An inline container for part of a line |
| `<form>`, `<input>`, `<label>`, `<textarea>`, `<button>` | Form controls |
| `<!-- comment -->` | A note in the code, not displayed |

**Worked examples:**
```html
<a href="about.html">About Us</a>
<a href="https://www.nitda.gov.ng">Visit NITDA</a>
<img src="crest.jpg" alt="School crest" width="150">

<ul>
    <li>Digital Technologies</li>
    <li>Mathematics</li>
    <li>English Studies</li>
</ul>

<table border="1">
    <tr><th>Class</th><th>Students</th></tr>
    <tr><td>SS 2A</td><td>42</td></tr>
    <tr><td>SS 2B</td><td>38</td></tr>
</table>
```

> **On the `alt` attribute:** it describes the image for visually impaired visitors using screen readers, and it displays if the image fails to load — which matters on a slow connection. It is required practice, not optional.

---

## PERIOD 2 (45 minutes)

### 8.6 What Is CSS?

**CSS — Cascading Style Sheets** — is the language used to describe the **appearance** of an HTML document: colours, fonts, sizes, spacing, borders and layout.

**Why separate content from presentation?**
- One stylesheet can control the appearance of a hundred pages.
- Changing the design means editing one file, not a hundred.
- The HTML stays clean and readable.
- The same content can be styled differently for screen, print and mobile.

**CSS syntax:**
```css
selector {
    property: value;
    property: value;
}
```
```css
h1 {
    color: darkblue;
    text-align: center;
}
```
Each declaration ends with a **semicolon**; the whole block sits inside **braces**.

### 8.7 The Three Methods of Applying CSS

**1. Inline** — inside a single element's `style` attribute. Affects that element only.
```html
<p style="color: red; font-size: 18px;">This paragraph is red.</p>
```
*Use sparingly; it mixes content with presentation.*

**2. Internal (embedded)** — in a `<style>` block inside the `<head>`. Affects that one page.
```html
<head>
    <style>
        body { background-color: #f4f4f4; }
        h1   { color: darkgreen; }
    </style>
</head>
```

**3. External** — in a separate `.css` file linked from the `<head>`. **Affects every page that links to it** — the professional method.
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
`style.css` then contains only CSS, with no HTML tags.

**Order of precedence (the "cascade"):** inline overrides internal, which overrides external. Where two rules have equal weight, the later one wins.

### 8.8 Selectors

| Selector | Written as | Selects |
|---|---|---|
| **Element** | `p { }` | Every `<p>` on the page |
| **Class** | `.intro { }` | Every element with `class="intro"` — reusable |
| **ID** | `#header { }` | The one element with `id="header"` — unique |
| **Group** | `h1, h2, p { }` | All the listed elements |
| **Descendant** | `div p { }` | Every `<p>` inside a `<div>` |

> **Rule to teach:** a **class** may be used many times on a page; an **id** must be used **once only**. A dot marks a class; a hash marks an id.

### 8.9 Common CSS Properties

| Property | Purpose | Example |
|---|---|---|
| `color` | Text colour | `color: #333333;` |
| `background-color` | Background colour | `background-color: #f4f4f4;` |
| `font-family` | Typeface | `font-family: Arial, sans-serif;` |
| `font-size` | Text size | `font-size: 16px;` |
| `font-weight` | Boldness | `font-weight: bold;` |
| `text-align` | Alignment | `text-align: center;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `margin` | Space **outside** the element | `margin: 20px;` |
| `padding` | Space **inside** the border | `padding: 15px;` |
| `border` | Border line | `border: 1px solid #cccccc;` |
| `width` / `height` | Size | `width: 80%;` |

**Colours may be written** as a name (`red`), a hex code (`#FF0000`) or RGB values (`rgb(255,0,0)`). *Hex codes are hexadecimal — the number system learnt in SS 1 Week 3, applied directly here.*

**The box model** — every element is a box made of four layers, from the inside out:
```
   ┌─────────── MARGIN ───────────┐
   │  ┌───────── BORDER ────────┐ │
   │  │  ┌────── PADDING ─────┐ │ │
   │  │  │      CONTENT       │ │ │
   │  │  └────────────────────┘ │ │
   │  └─────────────────────────┘ │
   └──────────────────────────────┘
```
**Padding is inside the border; margin is outside it.** This one distinction resolves most beginner layout confusion.

### 8.10 Complete Worked Example — a Styled Page

```html
<!DOCTYPE html>
<html>
<head>
    <title>Government Secondary School, Ikeja</title>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            line-height: 1.6;
        }
        #header {
            background-color: #14532d;
            color: #ffffff;
            text-align: center;
            padding: 30px;
        }
        .container {
            width: 85%;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 25px;
            border: 1px solid #dddddd;
        }
        h2 {
            color: #14532d;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 10px;
        }
        footer {
            text-align: center;
            padding: 15px;
            background-color: #14532d;
            color: #ffffff;
        }
    </style>
</head>
<body>

    <div id="header">
        <h1>Government Secondary School, Ikeja</h1>
        <p>Knowledge &middot; Discipline &middot; Service</p>
    </div>

    <div class="container">
        <h2>Welcome</h2>
        <p>We are a co-educational senior secondary school in Lagos State,
           offering science, arts and commercial subjects.</p>

        <p class="highlight">Admission into SS 1 for the next session
           is now open.</p>

        <h2>Our Subjects</h2>
        <ul>
            <li>Digital Technologies</li>
            <li>Mathematics</li>
            <li>English Studies</li>
            <li>Biology</li>
        </ul>

        <h2>Enrolment</h2>
        <table border="1" cellpadding="8">
            <tr><th>Class</th><th>Students</th></tr>
            <tr><td>SS 1</td><td>120</td></tr>
            <tr><td>SS 2</td><td>108</td></tr>
            <tr><td>SS 3</td><td>96</td></tr>
        </table>
    </div>

    <footer>
        <p>&copy; 2026 Government Secondary School, Ikeja</p>
    </footer>

</body>
</html>
```

**Expected result:** a dark green header band with the school name in white; a white content panel centred on a light grey background; green sub-headings; a highlighted yellow admission notice; a bulleted subject list; a bordered enrolment table; and a matching green footer.

### 8.11 Guided Practical
Students type the example above exactly, save it as `index.html`, and open it in a browser. They then modify it: change the colours to their own scheme from Week 7, replace the school name and content with their own project content, and add one image with an `alt` attribute.

*Where there is no computer:* students write the full code by hand in their exercise books and **draw the expected output** beside it. Hand-written code is exactly what the written practical examination requires, and drawing the predicted result is a genuine test of understanding.

---

## EVALUATION — WEEK 8

### A. Objective Questions (1 mark each)
1. HTML stands for ______.
 (a) HyperText Markup Language (b) High Text Machine Language (c) HyperTool Multi Language (d) Home Text Markup Link
2. The home page of a website is normally named ______.
 (a) home.html (b) main.html (c) index.html (d) start.html
3. Extra information placed inside an opening tag is called a/an ______.
 (a) element (b) attribute (c) selector (d) property
4. In CSS, a class selector is written with a ______.
 (a) hash (#) (b) dot (.) (c) colon (:) (d) slash (/)
5. Space **inside** an element's border is called ______.
 (a) margin (b) padding (c) border (d) spacing

**Answers:** 1(a) 2(c) 3(b) 4(b) 5(b)

### B. Theory Questions
1. Define HTML and explain why it is described as a markup language rather than a programming language. **(4 marks)**
2. Differentiate between a tag, an element and an attribute, using one example. **(6 marks)**
3. Write the basic structure of an HTML5 document and state the purpose of `<head>`, `<title>` and `<body>`. **(8 marks)**
4. What is CSS? State three advantages of separating content from presentation. **(5 marks)**
5. Name and describe the three methods of applying CSS, and state which is best for a multi-page website and why. **(8 marks)**
6. Differentiate between a class selector and an id selector. **(4 marks)**
7. Explain the CSS box model and differentiate between margin and padding. **(5 marks)**
8. Differentiate between a static and a dynamic web page. **(4 marks)**

### C. Practical Questions
1. Write the HTML code for a page whose title is "My Class", displaying a level-1 heading "SS 2A", a paragraph of introduction, and a bulleted list of any four subjects. **(8 marks)**
2. Write the HTML code to (a) link to a page named `contact.html` with the text "Contact Us" (b) display an image named `logo.png` with suitable alt text and a width of 200 pixels. **(4 marks)**
3. Write the CSS rule that gives every paragraph blue text of size 16 pixels, and a rule that gives the element with `id="banner"` a yellow background and 20 pixels of padding. **(6 marks)**
4. Write the HTML for a two-column, three-row table showing three subjects and their teachers. **(6 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 8

- **This is the most rewarding week of the term.** Students who have spent two years being told what technology is finally make something that works. Protect the moment: get every student to a visible result — a page in a browser, or correct hand-written code with a drawn output — before the double period ends.
- **Type live and let them see mistakes.** Deliberately omit a closing `</p>` or a semicolon, show the broken output, then fix it. Students learn debugging from watching it done, and they learn that broken code is normal rather than shameful.
- **Common error 1 — the `.html.txt` trap.** In Notepad, students leave *Save as type* on "Text Documents" and get `index.html.txt`, which opens as code. Teach the fix: set *Save as type* to **All Files**, and in File Explorer turn on `View → File name extensions` so the real name is visible. This single problem accounts for most of the frustration in a first HTML lesson — pre-empt it in the first five minutes of the practical.
- **Common error 2 — unclosed tags.** An unclosed `<p>`, `<div>` or `</table>` produces strange layout. Teach the habit of typing both tags first and then filling the content between them.
- **Common error 3 — confusing class and id.** Drill it: **dot for class, hash for id; a class may repeat, an id may not.**
- **Common error 4 — margin and padding.** Use a physical object: a framed photograph. The picture is the content, the mount board inside the frame is the padding, the frame is the border, and the wall space around it is the margin. Students grasp it immediately.
- **Common error 5 — missing semicolons and braces in CSS.** Show the effect of one missing semicolon: every rule after it fails silently. This teaches why careful syntax matters more than in ordinary writing.
- **Link back to SS 1 explicitly.** Hex colour codes such as `#FF0000` are hexadecimal from SS 1 Week 3. `<meta charset="UTF-8">` is Unicode from SS 1 Week 10, and it is exactly why ₦ and Yoruba diacritics display properly. Students find these connections satisfying and they reinforce both topics.
- **Encourage the browser's F12 developer tools** on any real website. Right-click → Inspect on a Nigerian news or bank site and show that it is built from the same tags they just learnt. This is convincing in a way that no textbook example is.
- **Low-resource adaptation:** hand-written code is not a poor substitute here — it is the examination format. Have students write code in their books, exchange books, and act as the browser for each other, drawing what the code would produce. Errors are found quickly and it is genuinely enjoyable.
- **Phone option:** free Android editors such as Acode and Spck Editor let students write HTML and preview it immediately. For students with no computer at home, this is the difference between practising and not practising. Mention it and help interested students install one.
- **Differentiation:** stronger students should try flexbox, Google Fonts and hover effects. Weaker students must produce a valid page with a heading, a paragraph, a list and one CSS rule — which is a real, working web page and should be praised as such.

## RESOURCE MATERIALS — WEEK 8
- **W3Schools — HTML and CSS tutorials** with a "Try it Yourself" editor. The most widely used free reference for beginners: `w3schools.com/html` and `w3schools.com/css`
- **MDN Web Docs** — the authoritative reference maintained by Mozilla: `developer.mozilla.org`
- **freeCodeCamp** — free structured web-development curriculum: `freecodecamp.org`
- **GCFGlobal — Basic HTML**: `edu.gcfglobal.org`
- **W3C Markup Validation Service** — checks code for errors: `validator.w3.org`
- **CSS-Tricks** — clear explanations of the box model and layout: `css-tricks.com`
- Printed HTML tag reference sheet and CSS property sheet, one per student — essential where there is no internet in the laboratory.
- Printed copy of the full worked example in 8.10 for students to type from.
- Students' own Week 7 site maps, wireframes and written content.

## ASSIGNMENT
1. Type or hand-write the complete code for the **Home page** of your project website, using your own content from the Week 7 plan. It must contain: a title, a level-1 heading, at least two paragraphs, one list, one image with alt text, and internal CSS setting at least four properties.
2. Explain in your own words the difference between margin and padding, using an example.
3. Write the CSS rule that would give every heading on your page your chosen brand colour, and state the hex code you have selected.

---
---

# WEEK 9 — WEB DESIGN II: CREATING SIMPLE WEBSITES

**Sub-topics:** Planning a website · Folder structure and file organisation · Multi-page sites and relative linking · Semantic HTML5 layout · Navigation bars · Forms · Responsive design · Testing, validation and debugging · Site builders as an alternative

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. state the stages of planning and building a website;
2. organise a website into a correct folder structure and use relative file paths;
3. link several pages together to form a complete site;
4. use HTML5 semantic elements to structure a page;
5. build a working navigation bar styled with CSS;
6. create a contact form with appropriate input types;
7. explain responsive design and apply the viewport meta tag and a simple media query;
8. test, validate and debug a website using browser developer tools.

## Entry Behaviour
Students wrote and styled a single page in Week 8 and hold their site map, wireframes and content from the Week 7 project brief.

## Instructional Materials
Computers with a text editor and browser; projector; flash drives for saving project folders; printed code listings; students' Week 7 plans and Week 8 home pages; printed checklist for site testing.

---

## PERIOD 1 (45 minutes)

### 9.1 Stages of Building a Website

| Stage | What happens |
|---|---|
| 1. **Planning** | Decide purpose, audience and content; draw the site map |
| 2. **Design** | Sketch wireframes; choose colours and fonts |
| 3. **Content gathering** | Write the text; collect and prepare images |
| 4. **Development** | Write the HTML and CSS |
| 5. **Testing** | Check every link, every page and every browser; validate the code |
| 6. **Publishing** | Register a domain, obtain hosting, upload the files *(Week 10)* |
| 7. **Maintenance** | Update content, fix faults, back up, monitor |

### 9.2 Folder Structure and File Paths

A website is a **folder**, not a single file. Organise it before writing any code.

```
myschool/
│
├── index.html          ← home page (must be named index.html)
├── about.html
├── contact.html
│
├── css/
│   └── style.css       ← the one stylesheet for all pages
│
└── images/
    ├── crest.png
    ├── building.jpg
    └── students.jpg
```

**Rules for naming files:**
- **All lowercase.** Many web servers are case-sensitive: `About.html` and `about.html` are different files. This is the single commonest cause of links that work on a student's laptop but break after uploading.
- **No spaces.** Use a hyphen: `school-crest.png`, never `school crest.png`.
- **Use the correct extension:** `.html`, `.css`, `.jpg`, `.png`.
- **The home page must be `index.html`** — this is the file a web server sends by default.

**Relative paths:**

| Path | Meaning |
|---|---|
| `about.html` | A file in the same folder |
| `images/crest.png` | A file in the `images` sub-folder |
| `css/style.css` | The stylesheet in the `css` sub-folder |
| `../index.html` | Go **up** one folder, then find `index.html` |

**Linking the external stylesheet from a page inside the main folder:**
```html
<link rel="stylesheet" href="css/style.css">
```

### 9.3 Semantic HTML5 Layout

**Semantic elements** describe the *meaning* of a section, not just its appearance. They make code readable, help screen readers, and improve search-engine understanding.

| Element | Represents |
|---|---|
| `<header>` | The top banner of the page or a section |
| `<nav>` | The navigation links |
| `<main>` | The main content — one per page |
| `<section>` | A thematic grouping of content |
| `<article>` | A self-contained piece such as a news item |
| `<aside>` | Side content — a sidebar or related links |
| `<footer>` | The bottom of the page — copyright, contact |

```html
<body>
    <header>...</header>
    <nav>...</nav>
    <main>
        <section>...</section>
        <section>...</section>
    </main>
    <footer>...</footer>
</body>
```

> `<div>` still works and is still used, but a `<header>` says what it is while a `<div>` says nothing.

### 9.4 The Navigation Bar

Every page needs the **same** navigation so visitors can move around freely.

**HTML:**
```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

**CSS to make it a horizontal bar:**
```css
nav {
    background-color: #14532d;
}
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}
nav li {
    display: inline-block;
}
nav a {
    display: block;
    color: #ffffff;
    padding: 14px 20px;
    text-decoration: none;
}
nav a:hover {
    background-color: #166534;
}
```

**What each rule does:** `list-style-type: none` removes the bullets · `display: inline-block` places the items side by side instead of stacked · `text-decoration: none` removes the underline from the links · `:hover` changes the colour when the pointer rests on a link.

---

## PERIOD 2 (45 minutes)

### 9.5 Forms

A **form** collects information from the visitor.

```html
<form action="#" method="post">

    <label for="name">Full Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email Address:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="phone">Phone Number:</label><br>
    <input type="tel" id="phone" name="phone"><br><br>

    <label for="class">Class:</label><br>
    <select id="class" name="class">
        <option value="ss1">SS 1</option>
        <option value="ss2">SS 2</option>
        <option value="ss3">SS 3</option>
    </select><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" cols="40"></textarea><br><br>

    <button type="submit">Send Message</button>

</form>
```

**Common input types:** `text` · `email` · `tel` · `number` · `date` · `password` · `checkbox` · `radio` · `file` · `submit`.

**Points to teach:**
- The `<label>` and its `for` attribute must match the input's `id`. This lets a screen reader announce the field and lets the user click the label to focus the box.
- `required` makes a field compulsory before the form will submit.
- **A form needs back-end code to actually send anything.** With HTML alone the form displays and validates, but the data goes nowhere. Say this plainly — students otherwise assume the message reaches an inbox. Free third-party services exist that accept form submissions without back-end code, and full processing is covered when server-side programming is studied.

### 9.6 Responsive Design

**Responsive design** means a website adjusts its layout to fit any screen — phone, tablet or desktop.

**Why it matters in Nigeria:** the overwhelming majority of Nigerians reach the internet on a **mobile phone**. A site that only looks right on a desktop is broken for most of its audience. Design for the phone first.

**1. The viewport meta tag — required on every page:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Without it, a phone shrinks the whole desktop page to an unreadable size.

**2. Use relative widths, not fixed ones:**
```css
.container { width: 90%; max-width: 960px; margin: 0 auto; }
```
`width: 960px` is rigid and overflows a phone screen; `width: 90%` adapts.

**3. Make images flexible:**
```css
img { max-width: 100%; height: auto; }
```

**4. Media queries — apply different rules at different screen widths:**
```css
/* Rules for screens 600px wide and below */
@media screen and (max-width: 600px) {
    nav li {
        display: block;
    }
    .container {
        width: 95%;
        padding: 10px;
    }
}
```
Here the navigation items stack vertically on a phone instead of sitting side by side.

**5. Keep text legible:** a minimum of 16px body text, and generous line height.

**Testing responsiveness:** press **F12**, then click the **device toolbar** icon to preview the page at phone and tablet sizes. Or simply narrow the browser window and watch the layout adjust.

### 9.7 Testing, Validation and Debugging

**Testing checklist — run through this before Week 10:**

| Check | How |
|---|---|
| Every page opens | Click each link in turn |
| Every link works | No "file not found" errors |
| All images display | No broken-image icons |
| The stylesheet is applied to **every** page | Check the `<link>` on each |
| Text is readable | Contrast, size, spelling |
| The page works on a narrow screen | F12 device toolbar |
| The code is valid | `validator.w3.org` |
| The home page is named `index.html` | Check the exact filename |
| All filenames are lowercase with no spaces | Check the folder |

**Browser developer tools (F12):**
- **Elements** — inspect and temporarily edit the HTML and CSS to test a change.
- **Console** — displays errors.
- **Network** — shows which files failed to load.

**Debugging the four commonest faults:**

| Symptom | Usual cause |
|---|---|
| Image shows as a broken icon | Wrong path, wrong filename, or wrong letter case |
| Link goes to "file not found" | Misspelt filename, or the file is in a different folder |
| CSS has no effect | The `<link>` path is wrong, or a missing semicolon or brace broke the rules that follow |
| Layout collapses | An unclosed tag — usually `</div>` |

### 9.8 Site Builders — an Honest Comparison

| Hand-coded (HTML/CSS) | Site builder (WordPress, Wix, Google Sites) |
|---|---|
| Full control over every detail | Limited to the templates provided |
| Free — needs only a text editor | Often a monthly subscription for a custom domain |
| Requires learning the code | No coding needed |
| Loads fast and stays light | Can be slower and heavier |
| **Teaches how the web actually works** | Produces a result quickly |

*Both have their place. Learn the code first — it makes you the person who can fix a site builder when it breaks.*

### 9.9 Guided Practical — Build the Three-Page Site

**Task:** Complete the project website planned in Week 7.

**Requirements:**
1. A correct folder structure with `css/` and `images/` sub-folders.
2. Three pages: `index.html`, `about.html`, `contact.html`.
3. **One external stylesheet** at `css/style.css`, linked from all three pages.
4. The **same navigation bar** on every page, with working links.
5. Semantic layout using `<header>`, `<nav>`, `<main>` and `<footer>`.
6. At least two images with `alt` text.
7. A contact form on `contact.html` with at least four fields.
8. The viewport meta tag and at least one media query.
9. Validated at `validator.w3.org` with no errors.

**Assessment rubric (10 marks):** folder structure and naming 1 · three working pages 2 · external CSS applied to all 2 · navigation works on every page 2 · semantic structure and images with alt text 1 · form 1 · responsive (viewport and media query) 1.

**Save the finished folder to a flash drive — it is uploaded and published in Week 10.**

*Where there is no computer:* students write the full code for all three pages by hand, draw the folder structure diagram, and draw the expected appearance of each page at desktop and phone widths. Mark against the same rubric.

---

## EVALUATION — WEEK 9

### A. Objective Questions (1 mark each)
1. The home page of a website must be named ______.
 (a) home.html (b) index.html (c) main.html (d) first.html
2. Which element represents the navigation links of a page?
 (a) `<header>` (b) `<nav>` (c) `<aside>` (d) `<main>`
3. The path `../index.html` means ______.
 (a) same folder (b) a sub-folder (c) one folder up (d) an external site
4. The tag that makes a page adjust to a phone screen is the ______.
 (a) charset meta tag (b) viewport meta tag (c) link tag (d) style tag
5. A CSS rule that applies only below a certain screen width is a ______.
 (a) selector (b) media query (c) class (d) pseudo-element

**Answers:** 1(b) 2(b) 3(c) 4(b) 5(b)

### B. Theory Questions
1. State and explain the seven stages of building a website. **(7 marks)**
2. Draw the folder structure of a simple three-page website with separate folders for CSS and images. **(6 marks)**
3. State four rules for naming website files and explain why file names should be lowercase. **(6 marks)**
4. Name five HTML5 semantic elements and state what each represents. **(10 marks)**
5. What is responsive design? State three techniques used to achieve it and explain why it matters particularly in Nigeria. **(8 marks)**
6. State four checks you would carry out before publishing a website. **(4 marks)**
7. Give two advantages and two disadvantages of using a site builder instead of writing HTML by hand. **(4 marks)**

### C. Practical Questions
1. Write the HTML for a navigation bar linking to Home, About, Services and Contact. **(5 marks)**
2. Write the CSS that displays that navigation horizontally with white links on a dark background and no underline. **(6 marks)**
3. Write the HTML for a contact form containing a name field, an email field, a message box and a submit button, each with a label. **(8 marks)**
4. A student's image does not display on the published site although it worked on her laptop. State three possible causes and how each is corrected. **(6 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 9

- **Insist on the folder structure before any code is written.** Students who begin by typing HTML onto the desktop end up with images that will not load and a site that cannot be uploaded. Spend the first ten minutes having every student create the folder tree — on the computer, or drawn in their books — and check it.
- **The lowercase filename rule is not pedantry.** Most web servers run Linux and are case-sensitive, while Windows is not. A link to `About.html` therefore works perfectly on a student's laptop and fails the moment the site is uploaded in Week 10. Warn them now and they will remember when it happens to someone in the class.
- **Common error 1 — the stylesheet path.** `href="style.css"` when the file is in `css/style.css` produces an unstyled page. Since the HTML still displays, students assume their CSS is wrong and start rewriting perfectly good rules. Teach them to check the path first.
- **Common error 2 — copying the navigation inconsistently.** Students edit the navigation on the home page only, and the other pages keep the old version. Teach the discipline: change navigation on one page, then copy that exact block into the others.
- **Common error 3 — believing the form sends messages.** Be explicit that HTML forms need back-end processing. Students who assume otherwise will insist the form is broken.
- **Common error 4 — fixed pixel widths.** A `width: 1000px` container looks fine on the laboratory monitor and overflows every phone. Demonstrate by narrowing the browser window; the failure is immediate and obvious.
- **Make the mobile-first point forcefully.** Ask the class how many first used the internet on a phone rather than a computer. The near-unanimous answer makes the case better than any statistic. Then narrow the browser on a non-responsive page and let them see what most of their audience would experience.
- **Use F12 generously.** Right-click → Inspect on any live site and change a heading's colour in front of the class. Students find it striking, and it demystifies the whole subject. Clarify that the change is only local and disappears on refresh.
- **Peer review is very effective this week.** Have students swap machines or exercise books and run the testing checklist on each other's sites. Finding someone else's broken link teaches more than being told about your own.
- **Save everything twice.** Insist on a flash drive copy **and** an email or cloud copy of the project folder. School computers get reimaged, and a term project lost in Week 9 cannot be rebuilt in Week 10.
- **Low-resource adaptation:** hand-written multi-page code is demanding but entirely feasible. Assign one page per group of three, then have the class assemble the three pages into one "site" on the wall, with string linking the navigation items to the correct pages. It is a genuine and memorable model of how a site is connected.
- **Differentiation:** stronger students should attempt flexbox or CSS grid layout, a hamburger menu, or Google Fonts. Weaker students must deliver three linked pages with a shared stylesheet and a working navigation bar — a complete, real website.

## RESOURCE MATERIALS — WEEK 9
- **W3Schools — HTML Layout, HTML Forms, CSS Navigation Bar, CSS Media Queries**: `w3schools.com`
- **MDN Web Docs — HTML semantic elements and responsive design**: `developer.mozilla.org`
- **freeCodeCamp — Responsive Web Design certification** (free, project-based): `freecodecamp.org`
- **W3C Markup Validation Service**: `validator.w3.org`
- **CSS-Tricks — A Complete Guide to Flexbox** for students who move ahead: `css-tricks.com`
- **Pexels** / **Unsplash** for freely usable images: `pexels.com`, `unsplash.com`
- Printed navigation-bar and form code listings for typing practice.
- Printed site-testing checklist, one per student.
- Flash drives — at least one per group for saving project folders.

## ASSIGNMENT
1. Complete your three-page website to the rubric above and save the whole folder to a flash drive. **It will be published in Week 10 — bring it to the lesson.**
2. Run your site through `validator.w3.org` (or check it by hand against the checklist) and write down every error found and how you corrected it.
3. Explain why a Nigerian business today should build a mobile-friendly website, giving three reasons.

---
---

# WEEK 10 — WEB PUBLISHING AND HOSTING

**Sub-topics:** Domain names and their structure · Nigerian domains and NiRA · Domain registration · DNS · Types of web hosting · Choosing a host · The publishing process · SSL and HTTPS · Maintenance, SEO and legal obligations

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. explain what a domain name is and describe its structure;
2. identify top-level, country-code and Nigerian second-level domains;
3. describe how a domain name is registered and the roles of ICANN, NiRA and a registrar;
4. explain in outline how DNS resolves a domain name to an IP address;
5. define web hosting and compare shared, VPS, dedicated, cloud and free hosting;
6. state the criteria for choosing a web host;
7. outline the complete process of publishing a website;
8. explain SSL/HTTPS and state the legal and ethical obligations of a website owner in Nigeria;
9. publish a working website using a free hosting service.

## Entry Behaviour
Students studied URLs, IP addresses, browsers and ISPs in SS 1 Second Term, and built a complete three-page website in Week 9.

## Instructional Materials
A computer with internet access where possible; projector; students' completed project folders on flash drives; printed screenshots of a cPanel File Manager and a domain-registration page; printed publishing checklist; a WHOIS lookup printout.

---

## PERIOD 1 (45 minutes)

### 10.1 Domain Names

A **domain name** is the human-readable address of a website, which stands in for the numeric **IP address** the network actually uses. `www.nitda.gov.ng` is far easier to remember than a string of numbers.

**Structure of a URL:**
```
https://www.myschool.sch.ng/about.html
│       │   │        │   │  │
│       │   │        │   │  └── file/path
│       │   │        │   └───── country-code TLD (.ng)
│       │   │        └───────── second-level domain (.sch)
│       │   └────────────────── the registered name
│       └────────────────────── subdomain (www)
└────────────────────────────── protocol (https)
```

**Generic top-level domains (gTLDs):**

| TLD | Intended for |
|---|---|
| `.com` | Commercial organisations (now used by anyone) |
| `.org` | Non-profit organisations |
| `.net` | Network providers |
| `.edu` | Educational institutions (largely US) |
| `.gov` | Government (US) |
| `.info`, `.biz`, `.online` | General purpose |

**Country-code TLDs (ccTLDs):** `.ng` (Nigeria) · `.uk` · `.gh` (Ghana) · `.za` (South Africa) · `.ke` (Kenya).

**Nigerian second-level domains** — administered by **NiRA**, the Nigeria Internet Registration Association:

| Domain | Intended for |
|---|---|
| `.com.ng` | Commercial businesses in Nigeria |
| `.org.ng` | Non-profit organisations |
| `.gov.ng` | Federal and state government bodies |
| `.edu.ng` | Tertiary institutions |
| **`.sch.ng`** | **Primary and secondary schools** |
| `.net.ng` | Network and internet service providers |
| `.name.ng` | Individuals |
| `.i.ng` | Short personal domains |

> **Note for the class:** a Nigerian secondary school should properly register under **`.sch.ng`**. Restricted domains such as `.gov.ng` and `.edu.ng` require documentary proof of eligibility.

**Who does what:**
- **ICANN** — the international body that coordinates the global domain name system.
- **NiRA** — the registry that manages the `.ng` namespace on behalf of Nigeria.
- **Registrar** — the accredited company you actually buy a domain from. Nigerian examples include Whogohost, Qservers, DomainKing.ng and Web4Africa; international examples include Namecheap and GoDaddy.

**Choosing a good domain name:** keep it short and easy to spell · make it memorable and relevant to the organisation · avoid hyphens and numbers where possible · choose the correct extension for the type of organisation · check it is not a registered trademark · register it before announcing the name publicly.

**Related terms:**
- **WHOIS** — a public lookup showing who registered a domain and when it expires.
- **Renewal** — domains are rented annually, not bought outright. **A domain that is not renewed can be lost.** Nigerian organisations have lost their websites this way; make the point.
- **Domain squatting** — registering a name someone else is likely to want, in order to resell it. Legal in many cases, but unethical when it targets an existing trademark.

### 10.2 The Domain Name System (DNS)

**DNS** is the system that translates domain names into IP addresses. It is often described as the internet's phone book.

**What happens when a visitor types an address:**
1. The browser checks its own cache for the IP address.
2. If not found, it asks a **DNS resolver**, usually run by the ISP.
3. The resolver queries the DNS hierarchy — root servers, then the TLD servers, then the domain's own **nameservers**.
4. The IP address is returned to the browser.
5. The browser requests the page from the **web server** at that IP address.
6. The server sends the files back and the browser renders the page.

**Common DNS records:**

| Record | Purpose |
|---|---|
| **A** | Points a domain to an IPv4 address |
| **AAAA** | Points a domain to an IPv6 address |
| **CNAME** | Points one name to another name (e.g. `www` to the root domain) |
| **MX** | Directs email for the domain to a mail server |
| **TXT** | Holds verification and security information |
| **NS** | Names the authoritative nameservers |

> **Propagation:** after changing nameservers or DNS records, the change can take from a few minutes to 48 hours to be seen everywhere. Students should expect this and not assume something has failed.

---

## PERIOD 2 (45 minutes)

### 10.3 Web Hosting

**Web hosting** is the service of storing a website's files on a **web server** that is permanently connected to the internet, so that anyone can request and view them.

> A domain and hosting are two different things. The **domain is the address**; the **hosting is the land and building**. You need both.

**Types of hosting:**

| Type | How it works | Suits | Note |
|---|---|---|---|
| **Shared** | Many websites share one server and its resources | Small business and school sites | Cheapest; performance affected by neighbours |
| **VPS** | One physical server divided into isolated virtual servers | Growing sites | More control and reliability; costs more |
| **Dedicated** | An entire physical server for one client | Large organisations | Most powerful and most expensive |
| **Cloud** | Resources drawn from a network of servers | Sites with variable traffic | Scalable; you pay for what you use |
| **Reseller** | Buying hosting in bulk to resell | Web designers with several clients | A small-business model in itself |
| **Free** | No cost, usually with a sub-domain and limits | **Students and learning projects** | GitHub Pages, Netlify, Vercel, InfinityFree |

**Criteria for choosing a host:**
1. **Uptime guarantee** — look for 99.9% or better.
2. **Storage and bandwidth** allowances.
3. **Speed**, and where the server is physically located. A server in or near Nigeria loads faster for Nigerian visitors.
4. **Support** — is help available, and in what time zone?
5. **Price**, including the renewal price, which is often much higher than the introductory price.
6. **Free SSL certificate** included.
7. **Control panel** — cPanel is the most common and the easiest to learn.
8. **Backups** — automatic and restorable.
9. **Email accounts** on your own domain.
10. **Reputation** — check independent reviews.

### 10.4 The Publishing Process

| Step | Action |
|---|---|
| 1 | **Finish and test the site locally** — every page, link and image working |
| 2 | **Choose and register a domain** through an accredited registrar |
| 3 | **Buy a hosting plan** (or open a free hosting account) |
| 4 | **Point the domain to the host** — set the host's nameservers in the registrar's control panel |
| 5 | **Upload the files** — via cPanel **File Manager** or an **FTP client** such as FileZilla |
| 6 | **Place the files in `public_html`** — the folder the server publishes. `index.html` must sit at its top level |
| 7 | **Install an SSL certificate** so the site loads over HTTPS |
| 8 | **Test the live site** on a computer and on a phone, on more than one browser |
| 9 | **Submit to search engines** and add analytics |
| 10 | **Maintain** — update content, renew the domain and hosting, and back up |

**Uploading with FTP:** **FTP (File Transfer Protocol)** transfers files between a computer and a server. **FileZilla** is a free FTP client. It requires the host, username, password and port supplied by the host.

**`public_html`** is the critical detail: files placed anywhere else on the server will not appear on the web. Say it twice.

### 10.5 SSL and HTTPS

An **SSL/TLS certificate** encrypts the traffic between the visitor's browser and the server. A site with a valid certificate is served over **HTTPS** and shows a padlock in the address bar.

**Why it is now essential:** it protects passwords and form data in transit · browsers display a visible "Not secure" warning on plain HTTP · search engines rank HTTPS sites more favourably · visitors, especially on a site handling personal data, expect the padlock.

**Let's Encrypt** provides free certificates, and most hosts install them automatically at the click of a button.

### 10.6 Maintenance, SEO and Legal Obligations

**Maintenance:** update content regularly · check for broken links · back up files · renew the domain and hosting **before** they expire · monitor uptime and speed · apply security updates.

**Search Engine Optimisation — the basics:** a descriptive `<title>` on every page · a meta description · meaningful headings in proper order · `alt` text on every image · fast loading and small image files · a mobile-friendly layout · a sitemap · genuine, useful content.

**Legal and ethical obligations in Nigeria:**
- **Nigeria Data Protection Act 2023** — if a website collects personal data (names, emails, phone numbers through a contact form), the owner must handle it lawfully, state what it is used for, keep it secure, and publish a **privacy policy**.
- **Copyright** — do not publish images, text, music or video belonging to others without permission. Use your own material or properly licensed free material.
- **Cybercrimes Act 2015** — governs offences committed through computer systems.
- **Accessibility** — provide alt text, sufficient colour contrast and readable font sizes so the site is usable by people with disabilities.
- **Accuracy** — do not publish misleading claims.

### 10.7 Guided Practical — Publish the Class Website

**Task:** Publish the project site built in Week 9 using a **free** hosting service.

**Option A — Netlify Drop (simplest, no account needed to start):**
1. Go to the Netlify Drop page.
2. Drag the entire project folder onto the drop area.
3. The site is published within seconds at a generated address.
4. Open the address on a phone to confirm it works.

**Option B — GitHub Pages (a professional workflow worth learning):**
1. Create a free GitHub account.
2. Create a new public repository.
3. Upload the project files, ensuring `index.html` is at the top level.
4. Go to `Settings → Pages`, select the branch and save.
5. The site appears at `username.github.io/repositoryname` after a short delay.

**Then:**
- Test every page and link on the live site.
- Open it on a phone.
- Record the live address in the practical file.
- Note any fault found only after publishing — broken image paths and case-sensitive filenames almost always surface here, which is exactly why Week 9 warned about them.

*Where there is no internet:* demonstrate the process using printed screenshots of a cPanel File Manager and a domain-registration page, and have students write out the ten publishing steps in order and complete a labelled diagram of the DNS lookup process. Set the live upload as an optional holiday task for students with access at home or at a business centre.

---

## EVALUATION — WEEK 10

### A. Objective Questions (1 mark each)
1. The body that manages the `.ng` domain namespace is ______.
 (a) ICANN (b) NiRA (c) NITDA (d) NCC
2. The correct domain extension for a Nigerian secondary school is ______.
 (a) .edu.ng (b) .gov.ng (c) .sch.ng (d) .org.ng
3. The system that translates domain names into IP addresses is ______.
 (a) FTP (b) DNS (c) SSL (d) HTTP
4. Website files must be uploaded into the folder named ______.
 (a) www (b) htdocs (c) public_html (d) index
5. A padlock in the address bar indicates the site uses ______.
 (a) FTP (b) HTTPS (c) DNS (d) CSS

**Answers:** 1(b) 2(c) 3(b) 4(c) 5(b)

### B. Theory Questions
1. Define a domain name and describe the structure of the URL `https://www.myschool.sch.ng/about.html`. **(6 marks)**
2. State four Nigerian second-level domains and the type of organisation each is intended for. **(8 marks)**
3. Distinguish between a domain name and web hosting. **(4 marks)**
4. Explain how DNS resolves a domain name into an IP address. **(6 marks)**
5. Compare shared, VPS and dedicated hosting under cost, control and suitability. **(9 marks)**
6. State six criteria to consider when choosing a web host. **(6 marks)**
7. Outline, in order, the steps involved in publishing a website. **(10 marks)**
8. What is an SSL certificate? State three reasons why HTTPS is now essential. **(5 marks)**
9. State three legal or ethical obligations of a website owner in Nigeria. **(6 marks)**

### C. Practical Questions
1. A school wishes to put its website online. Describe, step by step, everything it must do from choosing a name to having the site live and secure. **(10 marks)**
2. A student uploads her files but the browser shows a directory listing instead of her web page. State two possible causes and the correction for each. **(4 marks)**
 *(Expected: the home page is not named `index.html`; or the files were placed in a sub-folder instead of at the top of `public_html`.)*
3. State four checks to carry out immediately after publishing a site. **(4 marks)**

---

## TEACHER'S HELPER NOTES — WEEK 10

- **This week converts a school exercise into something real.** When a student opens their own website on their own phone, over mobile data, the abstraction of ten weeks collapses into a concrete achievement. Make sure it happens for as many students as possible — a shared class site published together is far better than nothing.
- **Prepare before the lesson.** Create your own free hosting account beforehand and have a demonstration site ready. Registering an account live in front of forty students, with verification emails and a slow connection, will consume the whole period.
- **Netlify Drop is the fastest route** for a class with limited time — a folder is dragged in and the site is live in seconds, with no account required to start. GitHub Pages takes longer but teaches a workflow students will meet again in any technical career. Use Netlify if you have one period, GitHub if you have two.
- **The domain-versus-hosting distinction is the concept students most often confuse.** Use the analogy repeatedly: *the domain is the address written on an envelope; the hosting is the actual house.* Paying for one does not give you the other. Ask them directly which one they would still need if they had the other, and why.
- **Make the `.sch.ng` point concrete.** Have students check whether their own school has a website and, if so, what its domain is. Many Nigerian schools use `.com` or a free sub-domain. It leads naturally to a discussion of what the correct extension signals about an organisation.
- **The renewal warning matters.** Domains are rented, not owned. Organisations lose their websites and their email addresses by failing to renew. Students who go on to build sites for family businesses need to know this.
- **Common error 1 — the home page is not `index.html`.** The server then shows a file listing or a 404. This is the single most frequent publishing failure and it is trivially fixed once understood.
- **Common error 2 — files uploaded into a sub-folder** inside `public_html` instead of at its top level, so the site appears at `/myschool/` or not at all.
- **Common error 3 — case-sensitive filenames.** Links and images that worked perfectly on Windows break on the Linux server. When this happens to a student in class, use it: it is the Week 9 warning arriving on schedule, and the lesson will stick.
- **Common error 4 — impatience with DNS propagation.** Students change nameservers and expect an instant result. Tell them in advance that it can take hours.
- **Handle the legal section seriously, not as a footnote.** A contact form that collects names, emails and phone numbers brings the site owner under the **Nigeria Data Protection Act 2023**. Students building sites for family businesses need to know that a privacy policy is a legal expectation, not decoration. This also closes the loop with SS 1's data privacy and digital ethics topic.
- **Low-resource adaptation:** printed screenshots of cPanel, the File Manager and a registrar's domain search page allow the whole process to be taught convincingly without connectivity. Have students complete a labelled DNS diagram and write out the ten publishing steps in order — both are examinable in exactly that form.
- **Careers link:** end the term by naming the work this leads to — front-end developer, web designer, hosting reseller, digital marketer, SEO specialist. Several are freelance and can be done from anywhere with a laptop and a connection. For students in a Nigerian classroom, that is a concrete and reachable prospect, and it is the right note on which to finish the term.
- **Differentiation:** stronger students should register a real free sub-domain, add a favicon, submit a sitemap and set up basic analytics. Weaker students should focus on the ten publishing steps and the domain/hosting distinction, both of which carry examination marks.

## RESOURCE MATERIALS — WEEK 10
- **NiRA — Nigeria Internet Registration Association**: `nira.org.ng` — the authoritative source on `.ng` domains and accredited registrars.
- **NITDA**: `nitda.gov.ng` and the **Nigeria Data Protection Commission** for the NDPA 2023.
- **Netlify Drop** — publish a folder in seconds, free: `netlify.com`
- **GitHub Pages** — free hosting with a professional workflow: `pages.github.com`
- **FileZilla** — free FTP client: `filezilla-project.org`
- **Let's Encrypt** — free SSL certificates: `letsencrypt.org`
- **W3Schools — How to Publish Your Website**: `w3schools.com`
- **Google Search Central** — SEO starter guide: `developers.google.com/search`
- Nigerian registrars for a live price comparison exercise: Whogohost, Qservers, DomainKing.ng, Web4Africa.
- Printed screenshots: cPanel dashboard, File Manager showing `public_html`, a domain search result page, a WHOIS record.
- Printed publishing checklist, one per student.

## ASSIGNMENT
1. Publish your project website and write down the live address. If you have no internet access, write out the complete ten-step publishing process in order and draw a labelled diagram of how DNS resolves a domain name.
2. Visit any three Nigerian websites and record, for each: the domain extension used, whether it is served over HTTPS, and whether it displays properly on a phone. Comment on what you find.
3. Compare the price of a `.com.ng` domain across two Nigerian registrars and one international registrar, and state which offers the better value and why.
4. Write a short privacy policy (about 100 words) for a website that collects a visitor's name, email address and message through a contact form.

---
---

# WEEKS 11–13 — REVISION AND EXAMINATIONS

## WEEK 11 — REVISION

### Objectives
To consolidate all topics of the term, close the gaps revealed by the midterm test, complete outstanding practical work, and drill examination technique for both the theory and practical papers.

### Suggested Two-Period Plan

**Period 1 — Applications review (45 minutes)**

| Time | Activity |
|---|---|
| 8 min | Week 2 — mail merge: the three components and the seven steps, recited and written |
| 12 min | Week 3 — cell referencing drill, nested IF, RANK, pivot table areas |
| 12 min | Week 4 — PMT syntax, Goal Seek boxes, break-even calculation worked on the board |
| 13 min | Week 6 — design principles, animation vs transition, embedded vs linked media |

**Period 2 — Web design and examination technique (45 minutes)**

| Time | Activity |
|---|---|
| 12 min | Weeks 8–9 — HTML structure, tag/element/attribute, three CSS methods, class vs id, margin vs padding |
| 10 min | Week 10 — domain vs hosting, `.ng` second-level domains, the ten publishing steps, DNS |
| 18 min | Timed practice: 15 objective questions plus one written-practical question, then marked together |
| 5 min | Examination format, materials required, and the timetable |

### Examination Technique to Teach Explicitly

**For the theory paper:**
1. Read the whole paper first; note how many questions are required from each section.
2. Allocate time by marks.
3. For "state" and "list", give exactly the number requested and number the points.
4. For "explain" and "describe", write full sentences — a bare list loses marks.
5. For "differentiate", use a **two-column table** and compare the same feature in each row.
6. Draw diagrams in pencil with a ruler and label every part.
7. Never leave an objective question blank.

**For the written practical paper — this is where SS 2 marks are won or lost:**
1. **Write formulas exactly as they would be typed**, beginning with `=`.
2. **Include the `$` signs** where a reference must be locked. Missing them costs marks.
3. **Check that brackets balance** — count the IFs, then count the closing brackets.
4. **Use the exact cell references given in the question.** Do not substitute your own.
5. **Write HTML with both opening and closing tags**, correctly nested and indented.
6. **Write CSS with braces and semicolons in place.** A missing semicolon is a lost mark.
7. **When asked for steps, number them and use the real menu names** — `Mailings → Insert Merge Field`, not "click the merge button".
8. **Show working in calculations** and state the unit; method marks are awarded even when the final figure is wrong.

---

## WEEKS 12–13 — FIRST TERM EXAMINATION

### Structure

| Paper | Content | Marks | Time |
|---|---|---|---|
| **Paper 1 — Objective** | 30 multiple-choice questions | 30 | 40 min |
| **Paper 2 — Theory** | Answer 4 of 6 questions | 40 | 1 hr 10 min |
| **Paper 3 — Practical** | Answer 2 of 3 questions (written, or hands-on where a laboratory is available) | 20 | 40 min |
| **Total** | | **90, scaled to 60** | 2 hr 30 min |

*Adapt to your school's standard format. Where the practical cannot be timetabled separately, fold Paper 3 into Paper 2 as a compulsory section.*

### SAMPLE THEORY QUESTIONS — SS 2 DIGITAL TECHNOLOGIES, FIRST TERM
*Answer any FOUR questions. Each carries 10 marks.*

**1.** (a) Define mail merge and name its three components. **(4 marks)**
 (b) Outline six steps in carrying out a mail merge. **(6 marks)**

**2.** (a) Differentiate between relative, absolute and mixed cell references with one example each. **(6 marks)**
 (b) Name the four areas of a pivot table and state the function of each. **(4 marks)**

**3.** (a) Define a financial model and state the inputs–calculations–outputs structure. **(5 marks)**
 (b) A business has fixed costs of ₦240,000 a month. Each unit sells for ₦3,000 and costs ₦1,800 to produce. Calculate the contribution per unit, the break-even quantity, and the profit if 350 units are sold. **(5 marks)**

**4.** (a) State five principles of professional slide design. **(5 marks)**
 (b) Differentiate between an animation and a transition. **(2 marks)**
 (c) State three differences between an embedded and a linked video. **(3 marks)**

**5.** (a) Differentiate between a tag, an element and an attribute. **(3 marks)**
 (b) Name the three methods of applying CSS and state which suits a multi-page site, with a reason. **(4 marks)**
 (c) Explain the CSS box model and distinguish margin from padding. **(3 marks)**

**6.** (a) Distinguish between a domain name and web hosting. **(3 marks)**
 (b) State three Nigerian second-level domains and what each is for. **(3 marks)**
 (c) Outline four steps in publishing a website. **(4 marks)**

### SAMPLE PRACTICAL QUESTIONS
*Answer any TWO questions. Each carries 10 marks.*

**1.** A result sheet holds CA1 in D2, CA2 in E2, Assignment in F2 and Exam in G2, with totals in H2:H41.
 (a) Write the formula for the total in H2. **(1 mark)**
 (b) Write the formula for the position in J2. **(2 marks)**
 (c) Write the formula counting students who scored 50 and above. **(2 marks)**
 (d) Write a nested IF grading H2 as A1 (≥75), B2 (≥70), B3 (≥65), C4 (≥60), C5 (≥55), C6 (≥50), D7 (≥45), E8 (≥40), F9 below 40. **(5 marks)**

**2.** Write the complete HTML code for a web page whose title is "My School", containing a header with a level-1 heading, a navigation bar linking to Home, About and Contact, a main section with one paragraph and a bulleted list of three subjects, one image with alt text, and a footer. Include internal CSS setting the body font, the header background colour and the navigation link colour. **(10 marks)**

**3.** (a) A trader borrows ₦900,000 at 21% per annum, repayable monthly over 3 years. State the monthly rate and number of periods, and write the formula for the monthly repayment. **(4 marks)**
 (b) Describe the steps to use Goal Seek to find the sales volume required for a target profit. **(3 marks)**
 (c) Describe the steps to create a pivot table showing total sales by branch. **(3 marks)**

### MARKING GUIDE — SELECTED ANSWERS

- **Theory Q3(b):** contribution = 3,000 − 1,800 = **₦1,200**; break-even = 240,000 ÷ 1,200 = **200 units**; profit at 350 units = (350 × 1,200) − 240,000 = **₦180,000**
- **Practical Q1:** (a) `=SUM(D2:G2)` (b) `=RANK(H2,$H$2:$H$41,0)` (c) `=COUNTIF(H2:H41,">=50")` (d) `=IF(H2>=75,"A1",IF(H2>=70,"B2",IF(H2>=65,"B3",IF(H2>=60,"C4",IF(H2>=55,"C5",IF(H2>=50,"C6",IF(H2>=45,"D7",IF(H2>=40,"E8","F9"))))))))`
- **Practical Q3(a):** monthly rate = 21% ÷ 12 = **1.75%**; periods = **36**; `=PMT(1.75%,36,-900000)` — accept `=PMT(21%/12,36,-900000)`

### End-of-Term Administration Checklist
- [ ] All CA scores entered — test, midterm, practical file, project
- [ ] Practical files collected, marked and returned
- [ ] Website project marks recorded, including live addresses where published
- [ ] Examination scripts marked and scores recorded
- [ ] CA (40) + Exam (60) totalled and grades assigned on the WAEC scale
- [ ] Positions computed and class average calculated
- [ ] Report-card comments written
- [ ] Topic-by-topic error analysis completed for Second Term planning
- [ ] Second Term scheme previewed: *Computer Programming I & II, Programming Basics, Control Structures, Data Science Basics, Big Data & Analytics, Artificial Intelligence, Machine Learning Basics*
- [ ] Holiday assignment issued
- [ ] Laboratory equipment checked, cleaned and secured for the break

## TEACHER'S HELPER NOTES — WEEKS 11–13

- **Revise by doing, not by re-explaining.** This has been a practical term; a revision week spent lecturing wastes it. At least half of Week 11 should be students writing formulas and code while you circulate.
- **Target the revision using your midterm data.** You already know from Week 5 which section failed. Give that topic double time whatever the plan says.
- **The written practical paper is the unfamiliar element for most SS 2 students.** They have never before been asked to write a formula or a block of HTML by hand under timed conditions. Give at least one full timed practical rehearsal before the examination — students who meet the format for the first time in the hall lose marks to unfamiliarity rather than ignorance.
- **Drill the four highest-yield items:** the nested IF grading formula, the `$` in RANK, the seven mail-merge steps, and the basic HTML page structure. These recur across every paper in this style and can each be secured in five minutes of daily repetition.
- **Mark formulas and code strictly but fairly.** Award marks for the correct function, correct arguments in order, correct range and correct syntax. Accept every valid alternative — `=D2+E2+F2+G2` for `=SUM(D2:G2)`, VLOOKUP grade bands for nested IF, `<strong>` for `<b>`. Reward correct thinking, not one memorised form.
- **Collect and mark the practical files properly.** They carry 10 CA marks and represent the term's real work. Returning them marked, before the examination, tells students exactly where they stand.
- **Celebrate the published websites.** Show the best three to the class, or to the school at assembly. It costs five minutes and it is the strongest possible advertisement for the subject — enrolment in the following year usually reflects it.
- **Do a proper error analysis before writing your term report.** Note which topics failed and why. Weeks 3 and 4 (spreadsheets) and Week 8 (HTML syntax) are the usual weak points, and both are prerequisites for the Second Term's programming and data-science topics. What you fix now determines how the next term runs.
- **Preview the Second Term deliberately.** It moves from applications into **programming, data science and artificial intelligence**. Tell students that the logical thinking they used in nested IF formulas and the syntax discipline they learnt in HTML are exactly what programming requires. Framed this way, the hardest parts of this term become the foundation of the next, and students arrive in January expecting to succeed.

## RESOURCE MATERIALS — WEEKS 11–13
- Past WAEC and NECO **Data Processing** papers, **especially the practical paper**, which is the closest available match in format and marking style.
- School's previous SS 2 First Term papers where available.
- Students' own practical files and project folders.
- Approved textbook end-of-chapter questions.
- Continuous assessment record book and report-card templates.
- Printed marking schemes for every paper.
- **Note:** since Digital Technologies is a new subject, keep every question you write and build a departmental question bank. Share it with colleagues in other schools. Within two or three terms your department will hold a resource that does not currently exist anywhere.

---
---

*End of SS 2 Digital Technologies First Term Lesson Notes.*

**Prepared in line with the New NERDC Senior Secondary Scheme of Work.**

| | Name | Signature | Date |
|---|---|---|---|
| Subject Teacher | | | |
| Head of Department | | | |
| Vice Principal (Academics) | | | |
