"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei"
import * as THREE from "three"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"

interface ChartViewer3DProps {
  chartUrl: string
  onClose: () => void
}

function Chart({ chartUrl }: { chartUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, chartUrl)
  const [hovered, setHovered] = useState(false)

  // Animation for initial appearance
  useFrame((state) => {
    if (!meshRef.current) return

    // Initial animation - rotate from flat to upright
    if (meshRef.current.rotation.x > 0) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.03)
    }

    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02

    // Glow effect when hovered
    if (hovered) {
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1.05, 0.1)
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1.05, 0.1)
    } else {
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1)
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      rotation={[Math.PI / 2, 0, 0]} // Start flat and animate to upright
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial
        map={texture}
        emissive={new THREE.Color(hovered ? 0x00fff9 : 0x000000)}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.7}
      />
      <Text position={[0, -1.2, 0.01]} fontSize={0.1} color="#00fff9" anchorX="center" anchorY="middle">
        TECHNICAL ANALYSIS
      </Text>
    </mesh>
  )
}

export default function ChartViewer3D({ chartUrl, onClose }: ChartViewer3DProps) {
  const [zoom, setZoom] = useState(5)

  // Handle keyboard events for closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-cyber-blue font-bold">3D Chart Analysis</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setZoom(Math.max(3, zoom - 1))}
            className="bg-gray-800 p-2 rounded-full hover:bg-cyber-blue hover:text-cyber-black transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom(Math.min(8, zoom + 1))}
            className="bg-gray-800 p-2 rounded-full hover:bg-cyber-blue hover:text-cyber-black transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom(5)}
            className="bg-gray-800 p-2 rounded-full hover:bg-cyber-blue hover:text-cyber-black transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="bg-cyber-pink p-2 rounded-full hover:bg-cyber-yellow hover:text-cyber-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-grow">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, zoom]} />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} minDistance={3} maxDistance={8} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Chart chartUrl={chartUrl} />
          <Environment preset="night" />

          {/* Grid effect for cyberpunk feel */}
          <gridHelper args={[20, 20, "#00fff9", "#00fff9"]} position={[0, -1, 0]} rotation={[0, 0, 0]} />
        </Canvas>
      </div>

      <div className="p-4 text-center text-cyber-yellow text-sm">
        Use mouse to rotate | Scroll to zoom | Drag to pan
      </div>
    </div>
  )
}

