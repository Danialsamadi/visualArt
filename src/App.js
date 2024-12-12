import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './App.css';

function App() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

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
      let i = 0;
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
    <div ref={mountRef} style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black',
      overflow: 'hidden'
    }} />
  );
}

export default App;
