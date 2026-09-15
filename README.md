# 🔦 Interactive Illumination Effect

An interactive, cursor-driven flashlight illumination effect built with pure HTML, CSS, and vanilla JavaScript. As the user navigates the viewport, a dynamic spotlight mask tracks the cursor in real time to reveal hidden typography beneath a dark overlay.

---

## Features

- **Real-Time Cursor Tracking**: Dynamically updates CSS custom properties (`--x`, `--y`) in sync with mouse coordinates.
- **Radial Gradient Spotlight**: Uses a CSS radial gradient mask to simulate a soft-edged flashlight beam.
- **Hidden Cursor Immersion**: Disables standard browser cursor rendering (`cursor: none`) to make the illumination spotlight act as the primary pointer.
- **Hardware-Accelerated Rendering**: Achieves 60 FPS performance without canvas manipulation or heavy JavaScript animation frameworks.
- **Zero Dependencies**: Built entirely with native web standards.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Viewport markup and heading content |
| CSS3 | Flexbox centering, CSS variables (`var(--x)`, `var(--y)`), radial gradient overlay, and cursor styling |
| JavaScript (ES6) | Real-time `mousemove` coordinate tracking and CSS variable injection |

---

## Project Structure

```
Illumination-project/
├── index.html      
├── style.css       
├── script.js       
└── README.md     
```

---

## How It Works

1. **Coordinate Capture (`script.js`)**: A `mousemove` listener attached to `document.documentElement` captures `e.clientX` and `e.clientY` on every cursor shift.
2. **CSS Variable Binding**: Coordinates are injected directly into root CSS custom properties (`--x` and `--y`).
3. **Spotlight Masking (`style.css`)**: The fixed `.illumination` span generates a dynamic radial gradient:
   ```css
   background: radial-gradient(
       circle at var(--x) var(--y),
       transparent -10%,
       rgba(0,0,0,0.95) 25%
   );
   ```
   The region immediately surrounding the cursor remains transparent while the rest of the viewport is shrouded in 95% black opacity.

---

## Getting Started

No build steps or package installations are required.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/Illumination-project.git
```

### 2. Launch the project

Open `index.html` directly in any modern web browser or serve it using VS Code Live Server.

---

## Customization

- **Change Display Text**: Edit the text inside the `<h1>` tag in `index.html`.
- **Adjust Beam Radius**: Modify the percentage stops in `style.css` (e.g., increase `25%` to `40%` for a wider beam, or decrease for a tighter beam):
  ```css
  background: radial-gradient(
      circle at var(--x) var(--y),
      transparent 0%,
      rgba(0,0,0,0.95) 40%
  );
  ```
- **Change Ambient Darkness**: Adjust `rgba(0,0,0,0.95)` to higher or lower opacity to adjust the darkness of the surrounding room.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
