import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WireframeSphere() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.1
    }
  })

  const rings = useMemo(() => {
    const ringElements = []
    const count = 14
    for (let i = 0; i <= count; i++) {
      const angle = (i / count) * Math.PI
      const y = Math.cos(angle) * 2
      const radius = Math.sin(angle) * 2
      if (radius > 0.01) {
        ringElements.push({ y, radius, key: `ring-${i}` })
      }
    }
    return ringElements
  }, [])

  const innerRings = useMemo(() => {
    const ringElements = []
    const count = 10
    for (let i = 0; i <= count; i++) {
      const angle = (i / count) * Math.PI
      const y = Math.cos(angle) * 1.6
      const radius = Math.sin(angle) * 1.6
      if (radius > 0.01) {
        ringElements.push({ y, radius, key: `inner-${i}` })
      }
    }
    return ringElements
  }, [])

  // Region markers as lat/lng positions
  const markers = useMemo(() => {
    return [
      { lat: 40.7, lng: -74 },   // North America
      { lat: 51.5, lng: -0.1 },  // Europe
      { lat: 25.2, lng: 55.3 },  // Middle East
      { lat: -1.3, lng: 36.8 },  // Africa
      { lat: 1.35, lng: 103.8 }, // Asia-Pacific
      { lat: -33.9, lng: 151.2 },// Australia
    ]
  }, [])

  const latLngToXYZ = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lng + 180) * (Math.PI / 180)
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    )
  }

  return (
    <group>
      {/* Outer sphere rings */}
      <group ref={groupRef}>
        {rings.map((ring) => (
          <mesh key={ring.key} position={[0, ring.y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[ring.radius, 0.008, 8, 64]} />
            <meshBasicMaterial color="#A78BFA" transparent opacity={0.35} />
          </mesh>
        ))}
        {/* Longitude lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={`long-${i}`} rotation={[0, (i / 12) * Math.PI, 0]}>
            <torusGeometry args={[2, 0.006, 8, 64]} />
            <meshBasicMaterial color="#A78BFA" transparent opacity={0.2} />
          </mesh>
        ))}
      </group>

      {/* Inner sphere rings */}
      <group ref={innerRef}>
        {innerRings.map((ring) => (
          <mesh key={ring.key} position={[0, ring.y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[ring.radius, 0.005, 8, 48]} />
            <meshBasicMaterial color="#FFD600" transparent opacity={0.2} />
          </mesh>
        ))}
      </group>

      {/* Region markers */}
      {markers.map((marker, i) => {
        const pos = latLngToXYZ(marker.lat, marker.lng, 2.05)
        return (
          <group key={`marker-${i}`} position={pos}>
            <mesh>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#FFD600" />
            </mesh>
            <pointLight color="#FFD600" intensity={0.5} distance={0.5} />
          </group>
        )
      })}
    </group>
  )
}

interface GlobeProps {
  className?: string
  height?: string
}

export default function Globe({ className = '', height = '500px' }: GlobeProps) {
  return (
    <div className={className} style={{ height, width: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <WireframeSphere />
      </Canvas>
    </div>
  )
}
