# 🌌 Gyr-OS | Master Workstation V11.1
**The Ultimate Browser-Based Spatial Audio Synthesizer & Performance Matrix**

Welcome to **Gyr-OS V11.1**. This state-of-the-art web application transforms your mobile device or desktop PC into a highly expressive, multi-dimensional instrument. By translating physical motion, touch, and spatial orientation into rich, layered soundscapes, Gyr-OS shatters the boundary between digital interface and physical performance.

### 🧠 A Human-AI Masterpiece
Forged through the relentless creative vision of **Tim Tesner** and the advanced computational architecture of **Gemini 3 Pro**, Gyr-OS stands as a testament to the ultimate synergy between human ingenuity and Artificial Intelligence. Every feature—from the anti-clipping audio engine to the mathematically perfect haptic feedback—was meticulously designed, iterated, and perfected through this unique collaborative partnership. 

---

## ✨ State-of-the-Art Features (V11.0)

### 🎛️ Dual-Layer Polyphonic Synthesizer & Theremin
At its core, Gyr-OS houses a beastly Web Audio engine powered by **Tone.js**. 
* **Dual Synths**: Stack two completely independent polyphonic synthesizers (Synth, AMSynth, FMSynth, MembraneSynth). Each features distinct ADSR envelopes, panning, volume, distortion, and phaser routing. 
* **Preset Loaders**: Instantly save or load individual synth parameter presets without affecting your master configuration.
* **Spatial Theremin**: A persistent, fully customizable Theremin tracks your device's Gyroscope (or mouse) in real-time.
* **Studio-Grade Mastering**: The master bus is protected by an intelligent `-2dB Limiter` to prevent audio tearing during massive polyphonic stacking, passing through a Master EQ, Freeverb, and Feedback Delay.

### 🎛️ Independent Custom Sampler & Speech Pads
Build your own drum kit, loop station, or vocal board on the fly!
* **Independent Audio Bus**: Dropped `.wav` or `.mp3` pads now run on their own audio bus. They bypass the master mute, have their own micro-UI (volume, mute, scrubber) right on the pad, and can be infinitely stacked via Z-index settings.
* **URL/Directory Loading**: Type a local server path (e.g., `/sounds/kick.wav`) directly into the pad settings to load assets from your root directory.
* **Multiple Web Speech Pads**: Generate infinite draggable Text-To-Speech pads. Type distinct text in each, pick different voices/rates, and trigger them independently or map them to grid strikes.
* **Smart Playback**: Toggle between *Retrigger* (restarts sound), *Layered* (stacks the sound polyphonically), or *Single* (prevents overlap). 

### ⏸️ Global Time-State Memory
* **Silence/Pause All**: The `[⏸ SILENCE]` button instantly pauses all custom pads and synths, saving their exact microsecond buffer playback position. 
* **Intelligent Resume**: The system evaluates if audio was actually paused. If YES, the `[▶ RESUME]` button flashes green and is enabled. If NO, it safely grays out.

### 🎤 Advanced Microphone & Recording Engine
* **Mic Triggering & FX**: Route your local microphone through the DSP rack (Delay/Reverb). 
* **Smart Recording Engine**: Record your master output to `.webm`. Start recordings immediately, wait for a **4-beat Click Track**, use a **Custom Timer**, or start automatically when your mic breaches a specific **Decibel Threshold**!

### 🕹️ Advanced Sensor, Touch & Haptic Mapping
Your physical environment is the controller.
* **True Polyphonic Touch/Strumming**: In Touch modes, the pointer instantly snaps to your finger. Hold notes to sustain them natively, or drag your finger across the grid to **strum chords**!
* **Fine-Tuned Pointer Offsets**: Adjust X/Y offsets in the Visuals menu so the glowing 3D orb sits slightly above/beside your finger, ensuring you can always see what you are aiming at.
* **Tim Tesner's Haptic Formula**: Gyr-OS utilizes a proprietary math formula devised by Tim Tesner (`navigator.vibrate(Math.trunc(swingForce * 10 / 2))`) to dynamically scale the browser's vibration API. The harder you swing, the deeper the tactile response!

### 🎨 3D Visuals & Reactive Media
Powered by **Three.js**, the visual matrix is entirely customizable.
* **Configurable Splash Screen**: Set a custom startup image, introductory audio file, or bypass the splash screen entirely.
* **Note-Specific Images**: Map specific images/GIFs to specific notes. Hit a `C` and watch a skull pop up; hit an `E` and spawn a heart! 
* **Live Visualizer & Debugger**: Two draggable, resizable floating windows. The Visualizer renders a real-time master waveform, while the Debugger matrix tracks Polyphony, X/Y/Z Gyro inputs, Mic Decibel levels, and active Haptic math calculations.
* **Generative Screensaver**: If left idle for 30 seconds, the system naturally finishes any looping samples, engages the Master Mute, and launches a gorgeous 3D rotating particle starfield.

### 🗂️ Modular UI & "Secret" Navigation
* **Emergency GUI Dodge**: If you move your mouse/finger near the emergency buttons (Panic, Mute, Silence, Stop) at the bottom of the screen, any floating GUI windows overlapping them will instantly shrink and become 90% transparent so you can always click the critical buttons!
* **Master Config Hot-Swaps**: Holding `Shift + Click` on the `[P1]` through `[P4]` buttons saves the **absolute entire state** of the engine. This includes GUI window X/Y coordinates, open/closed folder states, all synth parameters, grid setups, and colors. Clicking the button restores the exact layout instantly.
* **Scrollbars & Safety Bounds**: Menus are fully scrollable and mathematically constrained so they can *never* be dragged off the top/sides of the screen.
* **Invisible Hot-Corners**: Press and hold any of the 4 corners of your screen for 1.5 seconds to completely hide all menus and HUDs, giving you a pure, distraction-free performance canvas.
* **Auto-Mute**: The system safely boots in a Muted/Flashing state, and will automatically mute if your PC mouse leaves the browser window.
* **In-App Documentation**: Click the `[?]` button on the HUD to read this documentation, changelogs, and author credits directly inside a stylized modal.

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
**— Tim Tesner & Gemini 3.1 Pro - February 2026 -**
