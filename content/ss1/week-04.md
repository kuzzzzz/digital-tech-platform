# WEEK 4 — COMPUTER HARDWARE

**Sub-topics:** Meaning of hardware · Functional units of a computer · Input devices · Output devices · Storage devices and units · System unit vs peripheral devices

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. define computer hardware and distinguish it from software;
2. draw and label the block diagram of a computer system;
3. identify at least ten input devices and state their uses;
4. identify at least six output devices and classify printers as impact or non-impact;
5. differentiate between primary and secondary storage and arrange storage units in order of size;
6. distinguish between the system unit and peripheral devices.

## Entry Behaviour
Students handled computers in JSS Digital Technologies and use phones daily. They also encountered the Analytical Engine's four parts in Week 2.

## Instructional Materials
A complete desktop computer (system unit, monitor, keyboard, mouse), an opened system unit or scrap motherboard, RAM stick, hard disk drive, flash drive, memory card, CD/DVD, printer, scanner, charts of the computer block diagram.

---

## PERIOD 1 (45 minutes)

### 4.1 Meaning of Hardware
**Computer hardware** refers to the **physical, tangible components** of a computer system — the parts you can see, touch and lift. Software, by contrast, is the set of instructions that tells the hardware what to do.

> *Analogy for the class:* hardware is the body; software is the life in it. A body without life cannot act; instructions without a body cannot be carried out.

### 4.2 Functional Units of a Computer — the Block Diagram

```
   INPUT UNIT  ──►   ┌──────────────────────────┐   ──►  OUTPUT UNIT
                     │   CENTRAL PROCESSING     │
                     │        UNIT (CPU)        │
                     │  ┌────────┐ ┌─────────┐  │
                     │  │Control │ │Arithmetic│ │
                     │  │  Unit  │ │ & Logic  │ │
                     │  │  (CU)  │ │Unit (ALU)│ │
                     │  └────────┘ └─────────┘  │
                     │       Registers          │
                     └───────────┬──────────────┘
                                 │
                        ┌────────▼─────────┐
                        │   MEMORY UNIT    │
                        │  Primary (RAM/   │
                        │  ROM) + Secondary│
                        │     Storage      │
                        └──────────────────┘
```

1. **Input unit** — accepts data and instructions from the user and converts them into machine-readable form.
2. **Central Processing Unit (CPU)** — the "brain":
 - **Control Unit (CU)** — directs and coordinates all operations; fetches, decodes and executes instructions.
 - **Arithmetic and Logic Unit (ALU)** — performs calculations (+, −, ×, ÷) and comparisons (>, <, =).
 - **Registers** — very small, very fast temporary stores inside the CPU (accumulator, program counter, instruction register).
3. **Memory unit** — holds data and instructions before, during and after processing.
4. **Output unit** — converts processed results into human-readable form.
5. **Buses** — pathways that carry data (data bus), addresses (address bus) and control signals (control bus).

### 4.3 Input Devices

| Device | Function / Note |
|---|---|
| **Keyboard** | Main text-entry device; QWERTY layout |
| **Mouse** | Pointing device; click, double-click, drag, scroll |
| **Scanner** | Converts hard-copy documents and photographs into digital images |
| **Microphone** | Captures sound and voice |
| **Webcam / digital camera** | Captures still and moving images |
| **Touchscreen** | Combined input and output surface — phones, ATMs, POS terminals |
| **Joystick / game pad** | Control in gaming and simulation |
| **Light pen / stylus / graphics tablet** | Drawing and design work |
| **Barcode reader** | Reads product barcodes in supermarkets |
| **QR code scanner** | Reads square matrix codes — payments, event tickets |
| **Biometric/fingerprint scanner** | Captures fingerprints — used in **BVN and NIN enrolment** and in **INEC's BVAS** for voter accreditation |
| **OMR (Optical Mark Reader)** | Reads pencil-shaded marks — **used to mark WAEC and JAMB objective answer sheets** |
| **OCR (Optical Character Recognition)** | Converts scanned printed text into editable text |
| **MICR (Magnetic Ink Character Recognition)** | Reads the magnetic-ink numbers printed at the bottom of **bank cheques** |

### 4.4 Output Devices

| Device | Function |
|---|---|
| **Monitor / VDU** | Soft-copy visual output (LED, LCD, OLED) |
| **Printer** | Hard-copy output on paper |
| **Plotter** | Large, precise line drawings — maps, architectural plans |
| **Speaker / headphone** | Sound output |
| **Projector** | Enlarged display for an audience |
| **Braille embosser** | Output for the visually impaired |

**Classification of printers:**
- **Impact printers** — the print head strikes the paper through a ribbon. Noisy, cheap to run, can print carbon copies. Example: **dot-matrix printer** (still used for utility bills and multi-part invoices).
- **Non-impact printers** — no physical contact. Quiet and faster.
 - **Inkjet** — sprays liquid ink; good colour quality; cheap machine, costly cartridges.
 - **Laser** — uses toner powder and heat; fast, sharp, economical for high volume.
 - **Thermal** — heats special paper; used in **POS receipt printers** across Nigeria.
 - **3D printer** — builds solid objects layer by layer.

---

## PERIOD 2 (45 minutes)

### 4.5 Memory and Storage

**Primary memory (main memory)** — directly accessible by the CPU:
- **RAM (Random Access Memory)** — temporary working memory; **volatile** (contents are lost when power goes off); read/write. Types: SRAM, DRAM.
- **ROM (Read Only Memory)** — permanent instructions such as the boot program; **non-volatile**. Types: PROM, EPROM, EEPROM.
- **Cache memory** — very fast small memory between CPU and RAM.

| RAM | ROM |
|---|---|
| Volatile | Non-volatile |
| Read and write | Mainly read |
| Stores data currently in use | Stores permanent start-up instructions |
| Larger capacity | Smaller capacity |
| Contents change constantly | Contents rarely change |

**Secondary storage** — permanent, larger, cheaper, not directly accessible by the CPU:
- **Magnetic:** hard disk drive (HDD), magnetic tape, floppy disk (obsolete).
- **Optical:** CD (≈700 MB), DVD (≈4.7 GB), Blu-ray (≈25 GB).
- **Solid state:** SSD, flash/USB drive, SD and micro-SD memory cards.
- **Cloud storage:** Google Drive, OneDrive, Dropbox — data held on remote servers, accessed over the internet.

**Units of storage:**

| Unit | Equivalent |
|---|---|
| Bit (b) | A single 0 or 1 |
| Nibble | 4 bits |
| **Byte (B)** | **8 bits** — stores one character |
| Kilobyte (KB) | 1,024 bytes |
| Megabyte (MB) | 1,024 KB |
| Gigabyte (GB) | 1,024 MB |
| Terabyte (TB) | 1,024 GB |
| Petabyte (PB) | 1,024 TB |

### 4.6 System Unit vs Peripheral Devices

The **system unit** is the casing that houses the main processing components:
- **Motherboard / system board** — the main circuit board connecting everything.
- **CPU/processor** and its cooling fan and heat sink.
- **RAM modules** in their slots.
- **Power Supply Unit (PSU)** — converts AC mains to the DC voltages the components need.
- **Internal storage** — HDD or SSD.
- **Expansion cards** — graphics card, sound card, network interface card.
- **Ports** on the casing — USB, HDMI, VGA, RJ-45 (Ethernet), audio jack.
- **CMOS battery** — keeps the system clock and BIOS settings alive.

**Peripheral devices** are the units attached to, but outside, the system unit. They are classified as:
- **Input peripherals** — keyboard, mouse, scanner.
- **Output peripherals** — monitor, printer, speaker.
- **Storage peripherals** — external hard disk, flash drive.
- **Communication peripherals** — modem, router.

Peripherals may also be described as **internal** (fitted inside, e.g. an internal DVD drive) or **external** (plugged in from outside).

### 4.7 Practical Identification Exercise
Where a computer is available, open the system unit under supervision and have students name each component in turn. Where none is available, use a labelled chart and pass round any salvaged parts.

---

## EVALUATION — WEEK 4

### A. Objective Questions (1 mark each)
1. The brain of the computer is the ______.
 (a) RAM (b) CPU (c) monitor (d) motherboard
2. Which of these is a volatile memory?
 (a) ROM (b) Hard disk (c) RAM (d) CD-ROM
3. MICR devices are mostly used in ______.
 (a) supermarkets (b) banks (c) hospitals (d) schools
4. One byte is equal to ______ bits.
 (a) 2 (b) 4 (c) 8 (d) 16
5. Which of the following is an impact printer?
 (a) Laser (b) Inkjet (c) Dot-matrix (d) Thermal

**Answers:** 1(b) 2(c) 3(b) 4(c) 5(c)

### B. Theory Questions
1. Define computer hardware and give four examples. **(5 marks)**
2. Draw the block diagram of a computer system and label the five main units. **(10 marks)**
3. State the functions of (i) the Control Unit (ii) the Arithmetic and Logic Unit. **(4 marks)**
4. Differentiate between RAM and ROM in five ways. **(10 marks)**
5. Classify the following as input or output devices: scanner, plotter, OMR, projector, microphone, braille embosser. **(6 marks)**
6. Explain the difference between the system unit and peripheral devices, giving three examples of each. **(8 marks)**
7. Arrange in ascending order of size: gigabyte, byte, terabyte, kilobyte, megabyte, bit. **(3 marks)**

### C. Practical Activity
Each group is given (or shown) a system unit and must produce a labelled sketch identifying at least eight internal components, then present it to the class.

---

## TEACHER'S HELPER NOTES — WEEK 4
- **This lesson lives or dies on physical objects.** Even a dead computer teaches better than the best chart. Visit a computer-repair shop in your area — technicians routinely give away scrap motherboards, dead HDDs and burnt RAM sticks for nothing. Build a small "hardware box" for the department; it will serve you for years.
- **Safety first if you open a system unit:** unplug it from the mains, press the power button once to discharge, and do not let students touch the power supply unit or open it. Emphasise that the PSU can hold a dangerous charge even when unplugged.
- **Persistent misconception 1:** students call the system unit "the CPU". Correct it firmly — the CPU is a chip roughly the size of a matchbox lid *inside* the system unit. Show it if you have one.
- **Persistent misconception 2:** confusing memory (RAM) with storage (hard disk). The classroom analogy that works: **RAM is your desk** — what you are working on right now, cleared when you go home. **The hard disk is your locker** — everything kept for later. A bigger desk lets you work on more at once; a bigger locker lets you keep more.
- **Persistent misconception 3:** thinking a monitor is a "computer". Establish that the computer is the whole system.
- **Nigerian examples land well here.** Ask which device the WAEC examiner uses to mark their objective paper (OMR), which reads the numbers on a cheque (MICR), which the INEC official uses on election day (BVAS, a biometric scanner). Students remember what they have seen.
- **Time trap:** the input-device list is long. Do not dictate all fifteen. Put the table on the board, give the four that appear most in examinations (keyboard, mouse, scanner, OMR/OCR/MICR) full explanation, and let the rest be copied.
- **Differentiation:** stronger students can be asked to explain why an SSD is faster than an HDD (no moving parts). Weaker students should master input/output classification and the RAM/ROM table — these are guaranteed marks.

## RESOURCE MATERIALS — WEEK 4
- Approved SSS Data Processing/Computer Studies text, "Computer Hardware" chapter.
- **GCFGlobal — "Computer Basics: Inside a Computer"**: `edu.gcfglobal.org`
- **BBC Bitesize — Computer Systems / Hardware**.
- **Crucial.com** or **Kingston.com** memory guides for clear RAM explanations.
- Physical aids: scrap motherboard, RAM stick, HDD, flash drive, CD/DVD, printer cartridge, network cable.
- Charts: computer block diagram; classification of storage devices.

## ASSIGNMENT
Visit a business centre, cyber café or computer shop near you. List every hardware device you see, classify each as input, output, storage or processing, and state what it is used for in that business. Present as a table of at least twelve devices.

---
---
