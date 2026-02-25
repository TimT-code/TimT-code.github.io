# 🌌 Gyr-OS | Master Workstation V13.0
**The Ultimate Browser-Based Spatial Audio Synthesizer & Performance Matrix**

Welcome to **Gyr-OS V13.0**. This state-of-the-art web application transforms your mobile device or desktop PC into a highly expressive, multi-dimensional instrument. By translating physical motion, touch, and spatial orientation into rich, layered soundscapes, Gyr-OS shatters the boundary between digital interface and physical performance.

### 🧠 A Human-AI Masterpiece
Forged through the relentless creative vision of **Tim Tesner** and the advanced computational architecture of **Gemini 3 Pro**, Gyr-OS stands as a testament to the ultimate synergy between human ingenuity and Artificial Intelligence. Every feature—from the anti-clipping audio engine to the mathematically perfect haptic feedback—was meticulously designed, iterated, and perfected through this unique collaborative partnership. 

---

## ✨ State-of-the-Art Innovations (V13.0)

### 🎛️ The Ultimate Custom Audio Pads
Build an infinitely complex drum kit, loop station, or vocal board directly on your screen.
* **Granular Pad Settings**: Click the "⚙" icon on any pad to open a deep settings menu. Toggle the visibility of the internal **Timeline Scrubber**, **Play/Pause/Stop/Reverse** controls, **Volume/Mute** buttons, and File Info metadata right on the button face!
* **Deep Playback Mechanics**: Choose between *Layered* (polyphonic overlap), *Retrigger* (restarts from zero), or *Single* (prevents overlap). Set loops to run infinitely or define a specific loop count.
* **Audio-Reactive UI**: Pads physically pulse and feature dynamic background swells that bump to the exact decibel level of the loaded audio.

### 📂 Advanced Asset & Folder Manager
* **Total Local Control**: Upload single files, multiple files, or **entire directory folders** (`/sounds`) directly from your device into the asset tree.
* **Live Testing & Spawning**: Every file in the Asset Manager features a `[▶ Test]` button to silently preview the audio, and a `[+ Spawn]` button to instantly drop it onto your performance grid as an Ultimate Custom Pad.

### 🎚️ Modular HUD & Cloneable Toolbars
* **Group Tabs (Grp 1-5)**: The Master Control Bar is divided into 5 distinct, customizable tabs. Assign different buttons, background colors, and text aesthetics to each group.
* **Drag-to-Clone Interface**: Need a panic button right in the middle of the screen? Drag *any* utility button off the Master Control Bar to **duplicate** it onto the playfield! 
* **The Trash Zone**: Drag a cloned button to the top of the screen to reveal the massive red 🗑️ **TRASH ZONE** and delete it from your layout.

### 🎹 True Polyphonic Touch & Strumming
* **Snap & Strum**: In Touch modes (Modes 6 & 7), the pointer instantly snaps to your finger. **Hold** notes to sustain them natively, or drag your finger/mouse across the grid to **strum chords** flawlessly in real-time.
* **PC Mouse Fling Emulation**: PC users aren't left out of Impact mode! Hold left-click and violently swipe your mouse to generate digital accelerometer "velocity" and trigger heavy drum strikes.

### ⏸️ Global Time-State Memory
* **Silence/Pause All**: The `[⏸ SILENCE]` button instantly pauses all custom pads and synths, saving their exact microsecond buffer playback position. 
* **Intelligent Resume**: The system evaluates if audio was actually paused. If YES, the `[▶ RESUME]` button flashes green and is enabled. If NO, it safely grays out.

### 🎤 Web Speech & Microphone Routing
* **Infinite Speech Pads**: Generate draggable Text-To-Speech pads. Type distinct text in each, assign different voices, and alter the pitch and rate.
* **Smart Recording Engine**: Record your master output to `.webm`. Start recordings immediately, wait for a **4-beat Click Track**, use a **Custom Timer**, or start automatically when your mic breaches a specific **Decibel Threshold**.

### 🎨 The Perspective Engine & Emergency Dodge
* **Reactive 3D Playfield**: Checking "Perspective" aggressively tilts, swells, and parallaxes the entire grid and background image based on your spatial orientation.
* **Emergency GUI Dodge**: If you move your pointer near the critical emergency buttons (Panic, Mute, Stop) at the bottom of the screen, any overlapping GUI windows will instantly shrink and become 90% transparent, ensuring you always have access to your kill switches.

---

## 🎹 The 9 Performance Modes

1. **THEREMIN**: Continuous sweeping audio driven entirely by spatial tracking.
2. **IMPACT**: Silence until you physically swing the device or click/tap the grid to strike a note.
3. **HYBRID**: Combines the continuous drone of the Theremin with aggressive Impact strikes.
4. **HOVER**: Synthesizers *continuously sustain* whatever note the pointer is currently hovering over.
5. **ARP**: An arpeggiator that *rapid-fires* short notes at a customizable tempo while hovering.
6. **TOUCH ONLY**: Disables hardware sensor triggers; the engine responds purely to manual polyphonic screen tapping/strumming.
7. **TOUCH + THEREMIN**: Manual polyphonic tapping combined with the spatial Theremin.
8. **THEREMIN + SYNTH**: The spatial Theremin drones continuously while your accelerometer swings *also* trigger physical synth strikes.
9. **COMPOSER**: Click and drag across the screen to manually draw custom-sized grid pads that snap to your chosen musical scale.

---

## 🛠️ Technology Stack & APIs

Gyr-OS pushes the modern web browser to its absolute limits, utilizing:
* **HTML5 Web Audio API / Tone.js**: Low-latency audio processing, independent sub-buses, limiting, and sample playback.
* **Three.js (WebGL)**: Hardware-accelerated 3D graphics, precise raycasting, and particle generation.
* **Tonal.js**: Complex music theory generation (Major, Minor, Pentatonic, Lydian, Dorian, Mixolydian, Phrygian, Blues).
* **Web Speech API**: Real-time multi-voice text-to-speech engine.
* **MediaRecorder API**: Real-time master bus audio capture and Blob file compilation.
* **DeviceOrientation & DeviceMotion APIs**: High-polling hardware sensor data capture.
* **Vibration API**: Dynamic, mathematically scaled tactile feedback utilizing Tim Tesner's core algorithms.
* **dat.GUI**: Lightweight, modular variable injection and user interfaces.

---
**— Tim Tesner & Gemini 3.1 Pro - February 2026**
