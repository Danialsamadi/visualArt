# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Formula
$$
\documentclass[border=10pt]{standalone}
\usepackage{amsmath}
\usepackage{xcolor}

\pagecolor{black} % Set background to black
\color{white}     % Set text color to white

\begin{document}

% Formula representation
\[
\begin{aligned}
    k &= \frac{x}{8} - 25, \quad e = \frac{y}{8} - 25 \\
    o &= \frac{\sqrt{k^2 + e^2}}{3} \\
    d &= 5 \cdot \cos(o) \\
    q &= \frac{x}{2} + \frac{k}{\arctan(9 \cdot \cos(e))} \cdot \sin(d \cdot 4 - t) \\
    c &= \frac{d}{3} - \frac{t}{8} \\
    px &= q \cdot \sin(c) \cdot \text{scale} \\
    py &= \left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c) \cdot \text{scale} \\
    pz &= o \cdot 10 \cdot \text{scale}
\end{aligned}
\]

% Compact vector representation
\[
(px, py, pz) = 
\left( 
q \cdot \sin(c), 
\left( \frac{y}{4} + 5 \cdot o^2 + q \right) \cdot \cos(c), 
o \cdot 10 
\right) \cdot \text{scale}
\]

% Definitions
\[
\begin{aligned}
    q &= \frac{x}{2} + \frac{k}{\arctan(9 \cdot \cos(e))} \cdot \sin(d \cdot 4 - t), \\
    c &= \frac{d}{3} - \frac{t}{8}, \quad 
    d = 5 \cdot \cos(o), \quad 
    o = \frac{\sqrt{k^2 + e^2}}{3}.
\end{aligned}
\]

\end{document}
$$
