# 🌌 Gyr-OS | Master Workstation V8.0
**The Ultimate Browser-Based Spatial Audio Synthesizer & Performance Matrix**

Welcome to the future of interactive web audio. **Gyr-OS** is a state-of-the-art, browser-based musical workstation that transforms your mobile device or desktop PC into a highly expressive, multi-dimensional instrument. By translating physical motion, touch, and spatial orientation into rich, layered soundscapes, Gyr-OS shatters the boundary between digital interface and physical performance.

### 🧠 A Human-AI Masterpiece
Forged through the relentless creative vision of **Tim Tesner** and the advanced computational architecture of **Gemini 3 Pro**, Gyr-OS stands as a testament to the ultimate synergy between human ingenuity and Artificial Intelligence. Every feature—from the anti-clipping audio engine to the mathematically perfect haptic feedback—was meticulously designed, iterated, and perfected through this unique collaborative partnership. 

---

## ✨ State-of-the-Art Features

### 🎛️ Dual-Layer Polyphonic Synthesizer & Theremin
At its core, Gyr-OS houses a beastly Web Audio engine powered by **Tone.js**. 
* **Dual Synths**: Stack two completely independent polyphonic synthesizers (Synth, AMSynth, FMSynth, MembraneSynth). Each features distinct ADSR envelopes, panning, volume, distortion, and phaser routing.
* **Spatial Theremin**: A persistent, fully customizable Theremin tracks your device's Gyroscope (or mouse) in real-time, mapping 3D space to sweeping frequencies and volumes.
* **Studio-Grade Mastering**: The master bus is protected by an intelligent `-2dB Limiter` to prevent audio tearing during massive polyphonic stacking, passing through a Master EQ, Freeverb, and Feedback Delay.

### 🎛️ Draggable Custom Sampler Pads
Build your own drum kit or loop station on the fly!
* **Drag & Drop**: Simply drag `.wav`, `.mp3`, or `.ogg` files directly onto the screen.
* **Granular Sub-Menus**: Click the "⚙" on any pad to open its dedicated floating menu. Adjust volume, looping, start/end times, text color, and Z-index layering.
* **Smart Playback**: Toggle between *Retrigger* (restarts sound), *Layered* (stacks the sound polyphonically), or *Single* (prevents overlap). 
* **Audio-Reactive UI**: Pads physically pulse, display real-time progress bars, and feature inner backgrounds that bump and flash to the exact decibel level of the loaded audio.

### 🕹️ Advanced Sensor & Haptic Mapping
Your physical environment is the controller.
* **Gyroscope Aiming**: Tilt your phone to navigate the 3D grid. X/Y axes can be inverted or swapped.
* **Accelerometer Impact**: Swing your device like a drumstick. Breaking customizable velocity thresholds triggers grid notes and custom sampler pads.
* **Tim Tesner's Haptic Formula**: Gyr-OS utilizes a proprietary math formula devised by Tim Tesner to dynamically scale the browser's `navigator.vibrate()` API. The harder you swing, the deeper the tactile response, making the glass screen feel like a physical instrument.

### 🎨 3D Visuals & Reactive Media
Powered by **Three.js**, the visual matrix is as customizable as the audio.
* **1:1 Pointer Tracking**: A glowing 3D raycasted sphere perfectly tracks your mouse or device orientation across a dynamic, perspective-shifting grid.
* **Note-Specific Images**: Map specific images/GIFs to specific notes. Hit a `C` and watch a skull pop up; hit an `E` and spawn a heart! Global impact VFX can also be scaled, faded, and timed.
* **Live Visualizer Window**: A draggable, resizable floating window renders a real-time waveform of your master output.
* **Generative Screensaver**: If the system detects 10 seconds of dormancy, it gracefully disables looping audio, mutes the system, and launches a gorgeous 3D rotating particle starfield to protect your screen and battery.

### 🗂️ Modular UI & "Secret" Navigation
* **Mobile-Perfect Draggable GUIs**: Windows can be dragged from anywhere on their background, feature custom scrollbars, and intelligently constrain to your screen bounds.
* **Invisible Hot-Corners**: Press and hold any of the 4 corners of your screen for 1.5 seconds to completely hide all menus and HUDs, giving you a pure, distraction-free performance canvas.
* **Live Hot-Swapping**: Save your masterpiece configuration to `localStorage` and instantly swap between 4 different layout presets using the `[P1]` - `[P4]` buttons. JSON export/import is also fully supported for sharing patches!
* **Live Mic & Recording**: Route your local microphone through the delay/reverb rack, and record your entire jam session directly to a `.webm` file with the click of a button.

---

## 🎹 The 8 Performance Modes

1. **THEREMIN**: Continuous sweeping audio driven entirely by spatial tracking.
2. **IMPACT**: Silence until you physically swing the device or click/tap the grid to strike a note.
3. **HYBRID**: Combines the continuous drone of the Theremin with aggressive Impact strikes.
4. **HOVER**: Synthesizers continuously sustain whatever note the pointer is currently hovering over.
5. **ARP**: An arpeggiator that rapid-fires notes based on pointer location and grid mapping.
6. **TOUCH ONLY**: Disables hardware sensor triggers; the engine responds purely to manual screen tapping.
7. **TOUCH + THEREMIN**: Manual tapping combined with the spatial Theremin.
8. **THEREMIN + SYNTH**: The ultimate combo. Spatial theremin routing layered with physical synthesizer strikes.

---

## 🛠️ Technology Stack & APIs

Gyr-OS pushes the modern web browser to its absolute limits, utilizing:
* **HTML5 Web Audio API**: Low-latency audio processing and routing.
* **Tone.js**: Advanced scheduling, DSP effects, polyphony, and envelope management.
* **Three.js (WebGL)**: Hardware-accelerated 3D graphics, raycasting, and particle generation.
* **Tonal.js**: Complex music theory generation (Major, Minor, Pentatonic, Lydian, Dorian, Blues, etc.).
* **dat.GUI**: Lightweight, modular variable injection and user interfaces.
* **DeviceOrientation & DeviceMotion APIs**: High-polling hardware sensor data capture.
* **Vibration API**: Dynamic, mathematically scaled tactile feedback.
* **MediaRecorder API**: Real-time master bus audio capture and Blob file compilation.
* **File & Drag/Drop API**: Local asset loading without the need for a backend server.

---

## 🚀 How to Use & Perform

1. **Launch securely**: Host the files on an `HTTPS` server (required by iOS/Android for sensor access) or run via a Localhost server on PC.
2. **Initialize**: Click "INITIALIZE ENGINE" to grant the necessary Audio, Microphone, and Sensor permissions.
3. **Explore the Matrix**: 
   * On **PC**, move your mouse to navigate the grid and click to strike.
   * On **Mobile**, tilt your device to aim, and physically "drum" the device in the air to trigger impact notes.
4. **Customize**: Open the drop-down menus to change the musical scale, tweak synthesizer envelopes, upload background images, or drop custom audio files to build your sampler board.
5. **Hide & Play**: Long-press a corner of the screen to hide the UI, and let the music flow!

---
*“Music is the space between the notes. Gyr-OS lets you physically touch that space.”*
**— Tim Tesner & Gemini 3 Pro**
