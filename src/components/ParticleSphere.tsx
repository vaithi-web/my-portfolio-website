import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1500;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const origPos = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + (Math.random() - 0.5) * 0.3;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = z;
    }
    return { positions: pos, originalPositions: origPos };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    const posAttr = geo.attributes.position;
    const arr = posAttr.array as Float32Array;

    mouseRef.current.lerp(
      new THREE.Vector2(pointer.x * viewport.width * 0.5, pointer.y * viewport.height * 0.5),
      0.05
    );

    const time = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];
      const oz = originalPositions[ix + 2];

      const dx = mouseRef.current.x - ox;
      const dy = mouseRef.current.y - oy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(0, 1.5 - dist) * 0.4;

      const tx = ox + dx * force + Math.sin(time * 0.5 + i * 0.01) * 0.05;
      const ty = oy + dy * force + Math.cos(time * 0.3 + i * 0.01) * 0.05;
      const tz = oz + Math.sin(time * 0.4 + i * 0.02) * 0.05;

      arr[ix] += (tx - arr[ix]) * 0.08;
      arr[ix + 1] += (ty - arr[ix + 1]) * 0.08;
      arr[ix + 2] += (tz - arr[ix + 2]) * 0.08;
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#00d4ff"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

const ParticleSphere = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleSphere;
