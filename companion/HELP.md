# PDF Presenter Suite Companion Module

Control dual-screen PDF presentations running in **PDF Presenter Suite** with Bitfocus Companion and Elgato Stream Deck devices.

---

## 🚀 Setup Guide

1. Launch **PDF Presenter Suite** on your presentation computer.
2. In PDF Presenter Suite, open the **API Settings** (Gear icon in Launcher or Cockpit).
3. Ensure the Remote Control REST API server is enabled (default port: `3000`).
4. In **Bitfocus Companion**:
   - Add a new connection for **PDF Presenter Suite**.
   - Enter the **Target IP / Host**:
     - Use `127.0.0.1` if Companion is running on the same computer as PDF Presenter Suite.
     - Enter your laptop's local LAN IP (e.g. `192.168.1.50`) if Companion is running on another machine.
   - Set the **API Port** (default: `3000`).
   - Click **Save**. Companion will show an `OK` status once connected.

---

## 🕹️ Available Actions

- **Next Slide**: Advance to the next slide in the presentation.
- **Previous Slide**: Return to the previous slide.
- **First Slide**: Jump instantly to Slide 1.
- **Last Slide**: Jump instantly to the final slide.
- **Go To Slide**: Jump directly to a specific slide number.
- **Toggle Blackout**: Direct audience focus to the speaker with an instant black screen.
- **Toggle Whiteout**: Direct audience focus to the speaker with an instant white screen.
- **Start / Resume Timer**: Start or unpause the presentation timer.
- **Pause Timer**: Pause the active presentation timer.
- **Reset Timer**: Reset presentation timer to zero or starting duration.
- **Show Audience Ticker Banner**: Display lower-third ticker announcement on audience display.
- **Hide Audience Ticker Banner**: Dismiss any active ticker announcement banner.
- **Send Live Stage Alert Message**: Route a live cue message to presenter cockpit, stage confidence monitor, or audience.

---

## 💡 Dynamic Feedbacks

- **Blackout State**: Changes button background to bright red when the blackout curtain is active.
- **Whiteout State**: Changes button background to white when whiteout curtain is active.
- **Current Slide Match**: Highlights a button if the presentation is currently on that slide.

---

## 📊 Live Variables

- `$(sharun-pdfpresenter:current_page)`: Active slide number (e.g. `4`).
- `$(sharun-pdfpresenter:total_pages)`: Total number of slides in deck (e.g. `24`).
- `$(sharun-pdfpresenter:slide_text)`: Formatted slide progress text (e.g. `4 / 24`).
- `$(sharun-pdfpresenter:blackout)`: Blackout curtain state (`true` / `false`).
- `$(sharun-pdfpresenter:whiteout)`: Whiteout curtain state (`true` / `false`).
- `$(sharun-pdfpresenter:status)`: Connection health (`Connected` / `Disconnected`).

---

## 🎨 Drag-and-Drop Presets

The module provides pre-configured button layouts with live variable text that can be dragged directly onto your Stream Deck buttons:
- **Next Slide (Green Action Button)**
- **Previous Slide (Blue Action Button)**
- **Blackout Curtain (Red Feedback Toggle)**
- **Whiteout Curtain (White Feedback Toggle)**
- **Live Slide Counter (`Slide $(sharun-pdfpresenter:slide_text)`)**
- **First Slide / Last Slide**
- **Timer Start / Pause Controls**
