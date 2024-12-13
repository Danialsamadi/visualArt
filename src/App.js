import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';

function App() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountNode.appendChild(renderer.domElement);

    // Helper functions
    const cos = Math.cos;
    const sin = Math.sin;
    const PI = Math.PI;
    const atan = Math.atan;
    const mag = (k, e) => Math.sqrt(k * k + e * e);

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const color = new THREE.Color();

    // Calculate initial positions
    let t = 0;
    const scale = 0.05;

    const a = (x, y) => {
      let k = x/8-25;
      let e = y/8-25;
      let o = mag(k, e)/3;
      let d = 5 * cos(o);
      const q = x/2 + k/atan(9*cos(e))*sin(d*4-t);
      const c = d/3-t/8;
      return [
        q*sin(c)*scale,
        (y/4+5*o*o+q)/2*cos(c)*scale,
        (o * 10)*scale
      ];
    };

    // Generate more points for better visibility
    for(let y = 0; y < 400; y += 1) {
      for(let x = 0; x < 400; x += 1) {
        const [px, py, pz] = a(x, y);
        positions.push(px, py, pz);

        // Add color based on position and z-depth
        color.setHSL(Math.abs(pz*2), 0.7, 0.5);
        colors.push(color.r, color.g, color.b);
      }
    }

    // Create buffer attributes
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Create points material
    const material = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    // Create points system
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Position camera
    camera.position.z = 2;
    camera.position.y = 0.5;
    camera.lookAt(0, 0, 0);

    // Animation
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      t += PI/120;

      // Update positions
      const positions = points.geometry.attributes.position.array;
      let i = 7;
      for(let y = 0; y < 400; y += 1) {
        for(let x = 0; x < 400; x += 1) {
          const [px, py, pz] = a(x, y);
          positions[i] = px;
          positions[i + 1] = py;
          positions[i + 2] = pz;
          i += 3;
        }
      }
      points.geometry.attributes.position.needsUpdate = true;

      // Rotate the point cloud
      points.rotation.y += 0.001;
      points.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (mountNode && rendererRef.current) {
        mountNode.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
      <div style={{ position: 'relative' }}>
        <div ref={mountRef} style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          overflow: 'hidden'
        }} />

        {showDescription && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%', // Use a percentage width for better responsiveness
              maxWidth: '400px',
              padding: '1rem', // Smaller padding for mobile
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              zIndex: 1000,
              transition: 'opacity 0.3s ease',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            }}>
              <button
                  onClick={() => setShowDescription(false)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Close description"
              >
                ×
              </button>

              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.2rem', // Smaller font for mobile
                fontWeight: '500',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Mathematical Visualization
              </h2>
              <p style={{
                margin: '0',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                This is a 3D visualization of a mathematical formula transformed into a dynamic point cloud.
                Each point's position is calculated using trigonometric functions and vector mathematics,
                creating an organic, flowing pattern. The colors shift based on the depth (z-axis) of each point,
                while the entire structure gently rotates in 3D space.
              </p>

              <div style={{
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                Get the Idea from this&nbsp;
                <a
                    href="https://x.com/yuruyurau/status/1844771001315283451"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'rgba(32,182,170,0.9)',
                      textDecoration: 'underline',
                      fontSize: '1rem',
                    }}
                >
                  Tweet
                </a>
                <a
                    href="https://github.com/Danialsamadi/visualArt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      color: 'rgba(32,182,170,0.9)',
                      textDecoration: 'underline',
                      fontSize: '1rem',
                      marginTop: '0.5rem'
                    }}
                >
                  Source Code
                </a>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;