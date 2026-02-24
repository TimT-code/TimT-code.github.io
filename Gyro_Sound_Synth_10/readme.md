# 🌌 Gyr-OS | Master Workstation V10.0
**The Ultimate Browser-Based Spatial Audio Synthesizer & Performance Matrix**

Welcome to **Gyr-OS V10.0**. This state-of-the-art web application transforms your mobile device or desktop PC into a highly expressive, multi-dimensional instrument. By translating physical motion, touch, and spatial orientation into rich, layered soundscapes, Gyr-OS shatters the boundary between digital interface and physical performance.

### 🧠 A Human-AI Masterpiece
Forged through the relentless creative vision of **Tim Tesner** and the advanced computational architecture of **Gemini 3 Pro**, Gyr-OS stands as a testament to the ultimate synergy between human ingenuity and Artificial Intelligence. 

---

## ✨ State-of-the-Art Features (V10.0)

### 🎛️ Dual-Layer Synths & Independent Custom Pads
* **Dual Synths**: Stack two completely independent polyphonic synthesizers alongside a spatial Theremin.
* **Custom Sampler Pads**: Drop any `.wav` or `.mp3` directly into the app. Pads now run on their **own independent audio bus**. They bypass the master mute, have their own micro-UI (volume, mute, scrubber), and can be infinitely stacked via Z-index settings. 
* **Global Time-State Memory**: The new `[SILENCE]` button instantly pauses all pads and synths, saving their exact microsecond buffer playback position. Hit `[RESUME]` to perfectly pick up exactly where the beat stopped.

### 🎤 Advanced Web Speech & Microphone Routing
* **Speech Synthesis**: Built-in Text-To-Speech API allows you to map spoken words directly over your music.
* **Mic Triggering**: Route your local microphone through the DSP rack. 
* **Smart Recording Engine**: Record your master output to `.webm`. Start recordings immediately, wait for a 4-beat click track, use a custom timer, or start automatically when your mic breaches a specific decibel Threshold!

### 🕹️ Advanced Sensor & Haptic Mapping
* **1:1 True Tracking**: A glowing 3D raycasted sphere perfectly tracks your mouse or device orientation. Use the visual settings to apply **Pointer Offsets** (X/Y) so your finger doesn't block the glowing orb while performing!
* **Tim Tesner's Haptic Formula**: Gyr-OS uses a proprietary formula (`navigator.vibrate(Math.trunc(swingForce * 10 / 2))`) to dynamically scale the browser's vibration API. The harder you swing the device, the deeper the tactile response.

### 🎨 Modular UI & "Secret" Navigation
* **Live Diagnostics**: Open the Debugger HUD to track Polyphony, real-time X/Y/Z Gyro inputs, Mic Decibel levels, and active Haptic math triggers.
* **Mobile-Perfect GUIs**: Windows can be dragged, minimized, and constrain intelligently to screen bounds. 
* **Invisible Hot-Corners**: Press and hold any of the 4 corners of your screen for 1.5 seconds to completely hide all menus and HUDs.
* **Config Hot-Swaps**: Use `[P1]` through `[P4]` to instantly save (Shift+Click) and load (Click) your entire layout configuration.

---

## 🛠️ Technology Stack & APIs
Gyr-OS pushes the modern web browser to its absolute limits, utilizing:
* **HTML5 Web Audio API / Tone.js**: Low-latency audio processing, limiters, and independent signal buses.
* **Three.js (WebGL)**: Hardware-accelerated 3D graphics and pointer mapping.
* **Tonal.js**: Complex music theory generation (Lydian, Dorian, Blues, etc.).
* **Web Speech API & MediaRecorder**: Real-time voice generation and Blob audio compiling.
* **DeviceOrientation & Vibration APIs**: High-polling hardware sensor capture and tactile feedback.

---
**— Tim Tesner & Gemini 3 Pro - February 2026**
