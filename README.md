# Project Description

This project showcases a **3D visualization of a dynamic point cloud**, built around a mathematical formula that brings abstract mathematical concepts to life. Each point in the visualization represents a calculated position in 3D space, determined by a combination of **trigonometric functions** and **vector mathematics**.

## Key Features
- **Mathematical Precision**: The formula's calculations create a structured yet organic flow, capturing the essence of mathematical beauty.
- **Dynamic Movement**: Points oscillate and rotate smoothly in 3D space, giving the visualization a lively and engaging effect.
- **Depth-Based Coloring**: The colors of the points change dynamically based on their depth along the z-axis, adding visual depth and richness to the display.
- **Interactive and Responsive**: Designed to adapt to various screen sizes, providing a seamless experience across devices.

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


   $`py = \left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c) \cdot \text{scale}`$

3. **pz (Z-coordinate):**


   $`pz = o \cdot 10 \cdot \text{scale}`$

---

## Compact Representation

The 3D coordinates can be represented as:

$$
\begin{align*}
(px, py, pz) =
\left(
q \cdot \sin(c),
\left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c),
o \cdot 10
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

### Development Mode
Start the development server:

```bash
npm start
```

Open **localhost** to view it in the browser.

### Build for Production

Generate an optimized production build:

```bash
npm run build
```
The build folder contains the ready-to-deploy app.

