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
