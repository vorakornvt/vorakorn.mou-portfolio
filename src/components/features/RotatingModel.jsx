import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RotatingModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    scene.ambientLight = "#00000";

    const camera = new THREE.PerspectiveCamera(
      35,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0); // Black color with 0 opacity

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/PTextture.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(105, 105, 105);
        model.position.set(0, 0, 0);

        let animatedMaterial = null;

        //  material
        model.traverse((child) => {
          // Inside model.traverse
          if (child.isMesh) {
            const mat = new THREE.MeshStandardMaterial({
              color: "#000000",
              transparent: true,
              opacity: 0.7,
              emissive: new THREE.Color("#ffffff"),
              roughness: 0,
              metalness: 0,
            });
            child.material = mat;
            animatedMaterial = mat;
          }
        });
        scene.add(model);

        const emissiveColors = [
          new THREE.Color("#dbbdff"),
          new THREE.Color("#f3c0ff"),
          new THREE.Color("#a0c3ff"),
          new THREE.Color("#e3a7ff"),
          new THREE.Color("#c3c0ff"),
        ];

        let colorIndex = 0;
        let transitionTime = 3000;
        let lastTime = 0;

        const animate = (time) => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;

          if (animatedMaterial) {
            const current = emissiveColors[colorIndex];
            const next =
              emissiveColors[(colorIndex + 1) % emissiveColors.length];

            const progress =
              ((time - lastTime) % transitionTime) / transitionTime;
            const emissiveColor = current.clone().lerp(next, progress);
            animatedMaterial.emissive.set(emissiveColor);

            if (progress >= 0.99) {
              colorIndex = (colorIndex + 1) % emissiveColors.length;
              lastTime = time;
            }
          }

          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Cleanup on unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default RotatingModel;
