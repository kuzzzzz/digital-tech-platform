# WEEK 8 — OPERATING SYSTEMS

**Sub-topics:** Meaning of an operating system · Functions · Types and classification · Examples · Booting process · Basic file management and command-line operations

## Behavioural Objectives
By the end of the lesson, students should be able to:
1. define an operating system and state its position between the user and the hardware;
2. list and explain at least eight functions of an operating system;
3. classify operating systems by user interface, number of users and mode of processing;
4. name at least eight examples of operating systems, including mobile ones;
5. explain the booting process and differentiate cold from warm booting;
6. carry out basic file-management tasks and execute at least six command-line commands.

## Entry Behaviour
Students met the operating system as one branch of system software in Week 6. Every student has used Android, iOS or Windows.

## Instructional Materials
A working computer running Windows or Linux, projector where available, command-prompt screenshots, chart of OS classification, an Android phone.

---

## PERIOD 1 (45 minutes)

### 8.1 Meaning of an Operating System
An **operating system (OS)** is the system software that **manages all the hardware and software resources** of a computer and provides an **interface** between the user and the machine. It is the first program loaded when a computer starts and the last to stop.

Without an OS the hardware is inert: no screen output, no keyboard input, no way to run any other program.

```
        USER
          ↕
   APPLICATION SOFTWARE
          ↕
    OPERATING SYSTEM
          ↕
       HARDWARE
```

### 8.2 Functions of an Operating System
1. **Booting/start-up** — loading itself into memory and preparing the computer for use.
2. **Memory management** — allocating RAM to programs, tracking what is in use, freeing memory when a program closes, and using virtual memory when RAM is exhausted.
3. **Processor/process management (scheduling)** — deciding which program gets the CPU and for how long, so that several programs appear to run at once.
4. **File management** — creating, naming, saving, opening, copying, moving, renaming and deleting files and folders; maintaining the directory structure.
5. **Device/input–output management** — controlling communication with keyboards, printers, drives and other devices through **device drivers**.
6. **Security and access control** — user accounts, passwords, permissions, protection against unauthorised access.
7. **Providing a user interface** — the means by which the user issues commands (GUI or CLI).
8. **Error detection and handling** — noticing faults (printer out of paper, disk full, illegal operation) and reporting them.
9. **Resource allocation** — sharing CPU time, memory and devices fairly among competing programs.
10. **Job scheduling and spooling** — queuing tasks, particularly print jobs held on disk until the printer is free.
11. **System performance monitoring** — tracking response time and resource usage.

### 8.3 Classification of Operating Systems

**(a) By user interface**

| Command Line Interface (CLI) | Graphical User Interface (GUI) |
|---|---|
| User types text commands | User clicks icons, menus, buttons |
| Commands must be memorised | Intuitive, easy for beginners |
| Uses little memory; fast | Requires more memory and processing power |
| Precise and powerful for experts | Simpler for everyday tasks |
| Examples: MS-DOS, Linux terminal, Windows Command Prompt | Examples: Windows, macOS, Ubuntu Desktop, Android |

*The GUI is often described by the acronym **WIMP** — Windows, Icons, Menus, Pointer.*

**(b) By number of users and tasks**
- **Single-user, single-tasking** — one user, one program at a time. Example: MS-DOS.
- **Single-user, multitasking** — one user running several programs simultaneously. Example: Windows 11, macOS.
- **Multi-user (multi-access)** — several users share one system at the same time through terminals. Example: UNIX, Linux server editions.

**(c) By mode of processing**
- **Batch processing OS** — jobs are collected and processed together without user interaction. Used for payroll and utility billing.
- **Time-sharing OS** — CPU time is shared in slices among many users so each seems to have the machine to themselves.
- **Real-time OS (RTOS)** — responds within a strictly guaranteed time. Used in air-traffic control, medical monitors, industrial robots, missile guidance.
- **Distributed OS** — manages a group of separate computers so they appear as one system.
- **Network OS** — manages resources, users and security across a network. Example: Windows Server.
- **Embedded OS** — built into a specific device with limited functions. Found in ATMs, POS terminals, smart TVs, routers, washing machines.
- **Mobile OS** — designed for touchscreen handheld devices. Examples: Android, iOS.

### 8.4 Examples of Operating Systems

| OS | Notes |
|---|---|
| **MS-DOS** | Early single-user, command-line OS from Microsoft |
| **Microsoft Windows** | Windows 7/8/10/11; dominant desktop OS in Nigerian offices and schools |
| **macOS** | Apple desktop and laptop computers |
| **UNIX** | Powerful multi-user OS; ancestor of Linux and macOS |
| **Linux** | Free and open-source; distributions include Ubuntu, Fedora, Debian, Kali; runs most web servers |
| **Android** | Google's mobile OS, built on Linux; the most widely used OS in Nigeria |
| **iOS** | Apple's mobile OS for iPhone and iPad |
| **Chrome OS** | Lightweight, browser-centred OS for Chromebooks |

---

## PERIOD 2 (45 minutes)

### 8.5 The Booting Process
**Booting** is the process of starting a computer and loading the operating system into main memory.

**Steps:**
1. Power is switched on; the PSU supplies voltage.
2. The **BIOS/UEFI** firmware stored in ROM takes control.
3. **POST (Power-On Self-Test)** checks that essential hardware (RAM, keyboard, drives, graphics) is present and working. Faults are reported by beep codes or on-screen messages.
4. BIOS locates the **boot device** and reads the **boot loader**.
5. The boot loader loads the **kernel** — the core of the operating system — into RAM.
6. The OS initialises drivers, services and user accounts.
7. The login screen or desktop appears; the computer is ready.

| Cold booting (hard boot) | Warm booting (soft boot) |
|---|---|
| Starting a computer that was completely off | Restarting a computer already on |
| Press the power button | Use Restart, or Ctrl + Alt + Del |
| Full POST is carried out | POST is usually skipped or shortened |
| Takes longer | Faster |
| Used at the start of the day or after a shutdown | Used after installing software or when a program hangs |

### 8.6 File Management Concepts
- **File** — a named collection of related data stored on a device.
- **Filename and extension** — `Result.docx` (name = Result, extension = .docx identifies the type).
- **Folder/directory** — a container that organises files.
- **Path** — the full address of a file, e.g. `C:\Users\Student\Documents\Result.docx`
- **Drive letters** — C: (hard disk), D: (optical drive), E:/F: (removable drives).

**Common extensions:** `.docx` Word · `.xlsx` Excel · `.pptx` PowerPoint · `.pdf` portable document · `.txt` plain text · `.jpg`/`.png` images · `.mp3` audio · `.mp4` video · `.exe` executable program · `.zip` compressed archive · `.html` web page.

**Basic file operations:** create, save, save as, open, rename, copy, cut, paste, move, delete, restore from Recycle Bin, search, sort, compress, set properties.

### 8.7 Basic Command-Line Operations
Open the Command Prompt with **Windows key + R**, type `cmd`, press Enter.

| Command | Function |
|---|---|
| `DIR` | Lists the files and folders in the current directory |
| `CD foldername` | Changes to the named directory |
| `CD..` | Moves up one directory level |
| `MD foldername` (or `MKDIR`) | Creates a new directory |
| `RD foldername` (or `RMDIR`) | Removes an empty directory |
| `COPY source destination` | Copies a file |
| `DEL filename` | Deletes a file |
| `REN oldname newname` | Renames a file |
| `CLS` | Clears the screen |
| `DATE` / `TIME` | Displays or sets the system date and time |
| `VER` | Displays the operating system version |
| `EXIT` | Closes the Command Prompt |

**Guided practical:** create a folder named after the class, change into it, create a text file, list the directory, rename the file, then delete it.

---

## EVALUATION — WEEK 8

### A. Objective Questions (1 mark each)
1. The first program loaded when a computer starts is the ______.
 (a) word processor (b) operating system (c) antivirus (d) browser
2. POST stands for ______.
 (a) Power On Self Test (b) Program Operating System Test (c) Post Operation Start Test (d) Power Output System Test
3. Restarting a computer that is already on is called ______.
 (a) cold booting (b) warm booting (c) formatting (d) spooling
4. Which command lists files in a directory?
 (a) CLS (b) DIR (c) MD (d) DEL
5. An operating system used in ATMs and POS terminals is best described as ______.
 (a) batch (b) embedded (c) distributed (d) time-sharing

**Answers:** 1(b) 2(a) 3(b) 4(b) 5(b)

### B. Theory Questions
1. Define an operating system and draw a diagram showing its position between the user and the hardware. **(5 marks)**
2. Explain any six functions of an operating system. **(12 marks)**
3. State five differences between a CLI and a GUI. **(10 marks)**
4. Describe the booting process in five steps. **(5 marks)**
5. Differentiate between cold booting and warm booting. **(4 marks)**
6. State the function of each: `DIR`, `MD`, `CD..`, `CLS`, `REN`. **(5 marks)**

### C. Practical Activity
Students use File Explorer to create the folder structure `SS1DT\Week8\Practical`, save a document inside it, then repeat the same task using only command-line commands, and note which method they found faster and why.

---

## TEACHER'S HELPER NOTES — WEEK 8
- **Command-line questions appear regularly in Nigerian examination papers**, so do not skip section 8.7 even without a laboratory. Write a mock command prompt on the board and have students "type" commands aloud while you write the output.
- **If you have even one working computer, do the CLI demonstration.** Watching a folder appear in File Explorer after typing `MD` converts an abstract list of commands into something students remember. Let three or four students type a command each.
- **Misconception 1:** students think the OS is "the thing with the Windows logo on the screen". Stress that Android on their phone is equally an operating system, and that a phone without one is a plastic slab.
- **Misconception 2:** confusing the operating system with the *system unit*, or with *Microsoft Office*. Say plainly: Windows is the OS; Word is an application that runs on it.
- **Misconception 3:** many students believe closing a program's window frees its memory instantly and that "restarting fixes everything by magic". Use it as a teaching point — restarting clears RAM, which is why it resolves so many problems. This reinforces Week 4's RAM/volatility lesson.
- **Safety note for the practical:** the `DEL` and `RD` commands are irreversible from the Command Prompt — deleted items do not go to the Recycle Bin. Demonstrate on a throwaway folder only, and say this explicitly. A student who deletes a school file will remember the lesson for the wrong reason.
- **Multi-user OS is hard to visualise** in a Nigerian classroom where most students have only seen one person per computer. Use the cyber-café server or a school network as the example, or the idea of many students logging into a school portal at once.
- **Time management:** functions (8.2) and classification (8.3) are the examination core. If time is short, compress the booting process to five bullet points and set file management as reading.

## RESOURCE MATERIALS — WEEK 8
- Approved SSS Data Processing/Computer Studies text, "Operating Systems" chapter.
- **GCFGlobal — "Windows Basics" and "Computer Basics: Getting Started"**: `edu.gcfglobal.org`
- **Microsoft Learn — Windows commands reference** (for the teacher's own preparation).
- **Ubuntu** live USB — lets you demonstrate a second operating system on the same machine without installing it: `ubuntu.com`
- Charts: classification of operating systems; the booting sequence.

## ASSIGNMENT
1. Find out the operating system and version running on any computer or phone you can access, and write down how you found it.
2. Explain, with reasons, which type of operating system would be most suitable for (i) an aircraft autopilot (ii) a university computer laboratory serving fifty students (iii) a monthly payroll run for a company.

---
---
