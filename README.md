# Project Description

This project showcases a **3D visualization of a dynamic point cloud**, built around a mathematical formula that brings abstract mathematical concepts to life. Each point in the visualization represents a calculated position in 3D space, determined by a combination of **trigonometric functions** and **vector mathematics**.

## Key Features
- **Mathematical Precision**: The formula's calculations create a structured yet organic flow, capturing the essence of mathematical beauty.
- **Dynamic Movement**: Points oscillate and rotate smoothly in 3D space, giving the visualization a lively and engaging effect.
- **Depth-Based Coloring**: The colors of the points change dynamically based on their depth along the z-axis, adding visual depth and richness to the display.
- **Interactive and Responsive**: Drag to rotate and scroll to zoom the point cloud (OrbitControls), with a layout that adapts to any screen size.

This project is not only a visual treat but also a demonstration of the intersection of **mathematics**, **graphics programming**, and **creative coding**. Whether you're a developer exploring advanced rendering techniques or a math enthusiast intrigued by formulas brought to life, this project offers something inspiring for everyone.
### [Project Link](https://danialsamadi.github.io/visualArt/)



## Links
- Get the idea from this [Tweet](https://x.com/yuruyurau/status/1844771001315283451).
- Explore the [Source Code](https://github.com/Danialsamadi/visualArt/tree/main/src).

---

# Mathematical Formula for Visualization

1. **Normalize \(x\) and \(y\):**


   $`k = \frac{x}{8} - 25, \quad e = \frac{y}{8} - 25`$

2. **Calculate the magnitude \(o\) and angle-based terms:**


   $`o = \frac{\sqrt{k^2 + e^2}}{3}, \quad d = 5 \cdot \cos(o)`$

3. **Intermediate variables \(q\) and \(c\):**


   $`q = \frac{x}{2} + \frac{k}{\arctan(9 \cdot \cos(e))} \cdot \sin(d \cdot 4 - t), \quad c = \frac{d}{3} - \frac{t}{8}`$


## Final 3D Coordinates

1. **px (X-coordinate):**


   $`px = q \cdot \sin(c) \cdot \text{scale}`$

2. **py (Y-coordinate):**


   $`py = \frac{1}{2}\left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c) \cdot \text{scale}`$

3. **pz (Z-coordinate):** a swirl term (reusing \(q\), phase-shifted into depth) plus a breathing radial wave, so the cloud fills real volume instead of sitting on a surface:


   $`pz = \left( 0.9 \cdot q \cdot \cos\!\left(2c + \frac{o}{4}\right) + 15 \cdot d \cdot \sin\!\left(o - \frac{t}{3}\right) \right) \cdot \text{scale}`$

---

## Compact Representation

The 3D coordinates can be represented as:

$$
\begin{align*}
(px, py, pz) =
\left(
q \cdot \sin(c),
\frac{1}{2}\left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c),
0.9 \cdot q \cdot \cos\!\left(2c + \frac{o}{4}\right) + 15 \cdot d \cdot \sin\!\left(o - \frac{t}{3}\right)
\right) \cdot \text{scale}
\end{align*}
$$

Where:

$$
\begin{align*}
q = \frac{x}{2} + \frac{k}{\arctan(9 \cdot \cos(e))} \cdot \sin(d \cdot 4 - t), \quad
c = \frac{d}{3} - \frac{t}{8}, \quad
d = 5 \cdot \cos(o), \quad
o = \frac{\sqrt{k^2 + e^2}}{3}.
\end{align*}
$$

---
## Run the Project

Built with **React 19**, **three.js**, and **Vite**.

### Development Mode
Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the printed **localhost** URL to view it in the browser.

### Build for Production

Generate an optimized production build:

```bash
npm run build
```
The `dist` folder contains the ready-to-deploy app. Deploy to GitHub Pages with:

```bash
npm run deploy
```

