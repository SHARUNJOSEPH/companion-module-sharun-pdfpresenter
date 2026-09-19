# Bitfocus Companion Module: PDF Presenter Suite

Official Bitfocus Companion connection module to control **PDF Presenter Suite** from Elgato Stream Deck and hardware broadcast controllers.

---

## Features

- 🟢 **Slide Navigation**: Next Slide, Previous Slide, First Slide, Last Slide, and direct jump to any slide number (`goto`).
- ⬛ **Stage Curtains**: Instant toggle for Blackout (`blackout`) and Whiteout (`whiteout`) screens with dynamic color feedbacks.
- ⏱️ **Presentation Timers**: Start, resume, pause, and reset the presenter countdown stopwatch.
- 📢 **Audience Banners & Stage Alerts**: Trigger lower-third ticker banners and dispatch live messages to Presenter Cockpit or Stage Confidence Monitor.
- 📊 **Dynamic Variables**: Real-time slide counter (`$(sharun-pdfpresenter:slide_text)`), active slide number, total slides, and connection state.
- 🎨 **Pre-Styled Presets**: Drag-and-drop ready buttons with high-contrast color coding and active feedbacks.

---

## Requirements

- **Bitfocus Companion**: v3.0.0 or later.
- **PDF Presenter Suite**: v1.1.0 or later running on the local network.

---

## Configuration

1. In Bitfocus Companion, add an instance of **PDF Presenter Suite**.
2. Enter the **Target Host / IP Address**:
   - `127.0.0.1` (if Companion and PDF Presenter Suite are on the same machine).
   - Your presentation laptop's local IP address (e.g. `192.168.1.100`) if running over Wi-Fi/Ethernet.
3. Set **API Port** (default: `3000`).
4. Companion will display an **OK** status as soon as communication is established.

---

## Creator & License

Developed by **Joseph Sharun**.  
Licensed under the [MIT License](LICENSE).
