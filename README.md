# illustrator-cleaner-outside-artboards
Free Adobe Illustrator script that removes visible stray objects outside all artboards with one click.
# Cleaner Outside Artboards for Adobe Illustrator

[![Adobe Illustrator](https://img.shields.io/badge/Adobe%20Illustrator-CC%202020--2026-ff9a00.svg)](https://www.adobe.com/products/illustrator.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Windows-blue.svg)](#installation)
[![JSX-Team](https://img.shields.io/badge/JSX--Team-Official%20Site-7EB326.svg)](https://jsxteam.com)

**Cleaner Outside Artboards** is a lightweight, one-click ExtendScript (`.jsx`) for Adobe Illustrator that deletes all unlocked, visible artwork lying entirely outside of every artboard on your canvas.

Ideal for vector illustrators, stock contributors, and prepress specialists who need to clean up workspace clutter before client delivery or stock submission.

---

## ⚡ What it Does

- **Cleans Pasteboard Clutter:** Removes stray shapes, color tests, orphaned paths, and draft sketches sitting off-canvas.
- **Multi-Artboard Aware:** If an object touches or overlaps *any* artboard in the document, it remains untouched.
- **Safe by Design:**
  - Locked layers and hidden objects are **never** deleted.
  - Supports standard **Undo (`Cmd + Z` / `Ctrl + Z`)** in a single step.
  - No background background processes or persistent background services.

---

## 📺 Video Demo

Watch the 30-second workflow demo on YouTube:  
👉 **[Watch Cleaner Outside Artboards in Action](https://youtu.be/fG_GnizH3PU)**

---

## 📥 Download & Installation

### Option 1: Quick Run (No Install Required)
1. Download [`Cleaner-Outside-Artboards.jsx`](Cleaner-Outside-Artboards.jsx).
2. Open your project in Adobe Illustrator.
3. Go to **File → Scripts → Other Script...** (`Cmd + F12` on macOS or `Ctrl + F12` on Windows).
4. Select `Cleaner-Outside-Artboards.jsx` to run.

### Option 2: Add to Illustrator Scripts Menu
To make the script permanently accessible from the **File → Scripts** menu:

- **macOS:**  
  `/Applications/Adobe Illustrator [Version]/Presets/[Language]/Scripts/`
- **Windows:**  
  `C:\Program Files\Adobe\Adobe Illustrator [Version]\Presets\[Language]\Scripts\`

*Restart Adobe Illustrator after copying the file.*

---

## 💻 Compatibility

- Adobe Illustrator CC 2020 – 2026+
- Tested on macOS (Apple Silicon & Intel) and Windows 10/11.

---

## 🛠️ Explore More Tools

Looking for more vector workflow automation? Check out our full suite of tested Illustrator scripts:

- **Color Mapper** — Batch color replacement & raster-to-vector palette extraction.
- **Batch Exporter** — Automated file export by artboard with custom folder structures.
- **Path Closer** — One-click closure of open contour paths across complex documents.
- **Artboard Placer & Fitter** — Rapid layout and bounding box adjustments.

🌐 Visit [jsxteam.com](https://jsxteam.com) to browse all scripts and bundles.

---

## 📄 License

This project is open-source and released under the [MIT License](LICENSE).
