# 🌌 Gyr-OS | Master Workstation V12.0
**The Ultimate Browser-Based Spatial Audio Synthesizer & Performance Matrix**

Welcome to **Gyr-OS V12.0**. This state-of-the-art web application transforms your mobile device or desktop PC into a highly expressive, multi-dimensional instrument. By translating physical motion, touch, and spatial orientation into rich, layered soundscapes, Gyr-OS shatters the boundary between digital interface and physical performance.

### 🧠 A Human-AI Masterpiece
Forged through the relentless creative vision of **Tim Tesner** and the advanced computational architecture of **Gemini 3 Pro**, Gyr-OS stands as a testament to the ultimate synergy between human ingenuity and Artificial Intelligence. Every feature—from the anti-clipping audio engine to the mathematically perfect haptic feedback—was meticulously designed, iterated, and perfected through this unique collaborative partnership. 

---

## ✨ State-of-the-Art Features (V12.0)

### 🎛️ Dual-Layer Polyphonic Synthesizer & Theremin
At its core, Gyr-OS houses a beastly Web Audio engine powered by **Tone.js**. 
* **Dual Synths**: Stack two completely independent polyphonic synthesizers (Synth, AMSynth, FMSynth, MembraneSynth). Each features distinct ADSR envelopes, panning, volume, distortion, and phaser routing. 
* **Preset Loaders**: Instantly save or load individual synth parameter presets without affecting your master configuration.
* **Spatial Theremin**: A persistent, fully customizable Theremin tracks your device's Gyroscope (or mouse) in real-time.
* **Studio-Grade Mastering**: The master bus is protected by an intelligent `-2dB Limiter` to prevent audio tearing during massive polyphonic stacking, passing through a Master EQ, Freeverb, and Feedback Delay.

### 🎛️ Ultimate Custom Sampler & Asset Management
Build your own drum kit, loop station, or vocal board on the fly!
* **Asset & Folder Manager**: Upload entire local directories (`/sounds`, `/images`) directly into the app. Click "Spawn Pad" on any file in the resulting tree to instantly map it to the grid.
* **Independent Pad Mixing**: Dropped pads bypass the master mute and have their own micro-UI. In V12.0, each pad has independent 3-band EQs, Panning, Reverb/Delay Sends, and precise volume control.
* **Advanced Playback**: Toggle between *Retrigger*, *Layered* (polyphonic overlap), *Single* (prevents overlap), or *Reverse*. Set loops to run infinitely or a specific amount of times (e.g., Loop 4x).
* **Multiple Web Speech Pads**: Generate infinite draggable Text-To-Speech pads. Type distinct text in each, pick different voices/rates, and trigger them independently.

### ⏸️ Global Time-State Memory
* **Silence/Pause All**: The `[⏸ SILENCE]` button instantly pauses all custom pads and synths, saving their exact microsecond buffer playback position. 
* **Intelligent Resume**: The system evaluates if audio was actually paused. If YES, the `[▶ RESUME]` button flashes green and is enabled. If NO, it safely grays out.

### 🎤 Advanced Microphone & Recording Engine
* **Mic Triggering & FX**: Route your local microphone through the DSP rack (Delay/Reverb). 
* **Smart Recording Engine**: Record your master output to `.webm`. Start recordings immediately, wait for a **4-beat Click Track**, use a **Custom Timer**, or start automatically when your mic breaches a specific **Decibel Threshold**!

### 🕹️ Advanced Sensor, Touch & Perspective Mapping
Your physical environment is the controller.
* **True Polyphonic Touch/Strumming**: In Touch modes, the pointer instantly snaps to your finger. Hold notes to sustain them natively, or drag your finger across the grid to **strum chords**!
* **PC Mouse Fling Emulation**: Left-click and rapidly swipe your mouse to perfectly mimic device accelerometer swings for Impact Modes.
* **The Perspective Engine**: Enabling "Perspective" aggressively tilts, swells, and parallaxes the entire 3D playfield and background image based on your sensor movements.
* **Fine-Tuned Pointer Offsets**: Adjust X/Y offsets, smoothings, and inversions so the glowing 3D orb sits exactly where you need it.
* **Tim Tesner's Haptic Formula**: Gyr-OS utilizes a proprietary math formula (`navigator.vibrate(Math.trunc(swingForce * 10 / 2))`) to dynamically scale the browser's vibration API. The harder you swing, the deeper the tactile response!

### 🎨 Modular UI & "Secret" Navigation
* **Detachable Master Control Bar**: The bottom HUD is now fully modular with Tabs [1-5]. You can literally **drag buttons off the bar** (like Mute or Panic) and drop them anywhere on the playfield for quick performance access!
* **Dedicated Preset Window**: A new expandable window allows up to 20 Master State preset slots with "Warn Before Load" safeguards.
* **Emergency GUI Dodge**: If you move your mouse/finger near the emergency buttons at the bottom of the screen, floating GUI windows overlapping them instantly shrink and become 90% transparent.
* **Live Visualizer & Debugger**: Floating windows rendering real-time master waveforms, Polyphony, X/Y/Z Gyro inputs, and Mic Decibel levels.

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
* **Vibration API**: Dynamic, mathematically scaled tactile feedback.
* **dat.GUI**: Lightweight, modular variable injection and user interfaces.

---
**— Tim Tesner & Gemini 3 Pro - February 2026**
