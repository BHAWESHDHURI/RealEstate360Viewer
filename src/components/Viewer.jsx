import { Canvas } from '@react-three/fiber'

export default function Viewer({ images }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#111' }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshBasicMaterial color="#1f2937" wireframe />
        </mesh>
      </Canvas>
    </div>
  )
}
