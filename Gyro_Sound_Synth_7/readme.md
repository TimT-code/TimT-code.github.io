# Gyr-OS Workstation Engine V7.0
**Authors**: Tim Tesner & Gemini 3 Pro

## Introduction
Gyr-OS is a highly advanced, web-based spatial audio synthesizer and performance workstation. It maps physical hardware sensor data (accelerometer, gyroscope) and traditional inputs (mouse/touch) directly into an interactive 3D musical space. With dynamic dual-synthesizer engines, draggable samplers, mapped VFX rendering, and hot-swappable configurations, Gyr-OS transforms your mobile device or desktop into an expressive musical instrument.

## Sensors & Hardware Data Utilized
1. **Device Orientation (Gyroscope)**: Maps `gamma` (X-axis) and `beta` (Y-axis) to pitch bends, volume fades, and 1:1 on-screen cursor tracking.
2. **Device Motion (Accelerometer)**: Analyzes `accelerationIncludingGravity` to calculate physical vector force. Acts as an impact drum-trigger when physical swinging force breaches customizable thresholds.
3. **Vibration API (Haptics)**: Triggers physical hardware pulses matching impact events and note triggers for tactile feedback. *(Custom formula developed by Tim Tesner)*.
4. **Touch & Pointer Events**: Supports multitoch arrays for desktop mouse-fallbacks, UI manipulation, and manual screen triggers.

## Key Features & Customization
* **Modular Workstation Environment**: 
  * GUI menus are entirely draggable and constrain themselves intelligently to screen boundaries.
  * You can hide the HUD and GUIs entirely via invisible "Secret Corner" long-presses (1.5 seconds on any of the four corners) for a clean performance view.
* **Dual Layer Synths & Theremin**:
  * Operate two distinct PolySynths (Synth, AMSynth, FMSynth, MembraneSynth) alongside a persistent Theremin.
  * Each audio module features independent Attack/Decay/Sustain/Release envelopes, panning, distortion, and phasers.
* **Custom Sampler Pads Layer**:
  * Drop any `.mp3`, `.wav`, or `.ogg` file onto the browser to generate an on-screen pad.
  * Pad interaction is shielded via an untouchable layout (HUD Toggle: "PADS: LOCKED/EDIT").
  * Pads can be colored, renamed, resized, and uniquely mapped to trigger specifically upon hardware physical impacts.
* **Advanced VFX & Media Mapping**:
  * Dynamically load background pictures directly via `.jpg`/`.png`/`.gif`.
  * Map an impact image (e.g., an explosion or puff of smoke) to trigger globally on hits, OR map custom images to specific musical notes (e.g., trigger an image *only* when playing `C4`).
* **Intelligent Auto-Sleep**:
  * If left idle for 10 seconds, the system naturally finishes any looping samples without sudden cut-offs, then initiates a complete audio mute, and launches a generative Three.js particle starfield.

## APIs & Libraries Used
* **Three.js** (v0.160.0): Hardware-accelerated WebGL rendering for 1:1 grid perspectives, 3D cursor generation, and particle screensavers.
* **Tone.js** (v14+ via ESM): Highly precise Web Audio API wrapper governing scheduling, limiting, DSP effects, polyphony, and sample playback.
* **Tonal.js**: Music theory engine calculating dynamic multi-octave grids (Major, Minor, Pentatonic, Lydian, Dorian, Mixolydian, Phrygian, Blues).
* **dat.GUI**: Minimalist UI component generation for real-time config adjustments.
* **HTML5 File & Media APIs**: Processing Blob arrays, Object URLs, and `MediaRecorder` logic for capturing performance sessions.

## Quick Start Instructions
1. Host these files on a secure `HTTPS` domain (required by modern browsers to allow device sensor usage).
2. Tap "INITIALIZE ENGINE" to grant required Audio and Orientation permissions.
3. Tilt the device to aim the cursor; swing the device physically (like a drumstick) to strike notes in Impact Mode.
4. Open the `VISUALS & MEDIA` floating menu to change the grid structure, colors, or assign an image mapped to your strikes.
5. Save your master config or individual synthesizer setups using the 💾 Save buttons, and hot-swap them back in seamlessly!
