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
