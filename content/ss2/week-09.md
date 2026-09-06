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
