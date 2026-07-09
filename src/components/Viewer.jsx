import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Viewer({ images }) {
  const materials = [
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Right.url),
      side: THREE.BackSide,
    }),

    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Left.url),
      side: THREE.BackSide,
    }),

    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Ceiling.url),
      side: THREE.BackSide,
    }),

    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Floor.url),
      side: THREE.BackSide,
    }),

    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Front.url),
      side: THREE.BackSide,
    }),

    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(images.Back.url),
      side: THREE.BackSide,
    }),
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 0.1],
          fov: 75,
        }}
      >
        <ambientLight intensity={2} />

        <mesh material={materials}>
          <boxGeometry args={[10, 10, 10]} />
        </mesh>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}