import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { globalVars } from "../styles/theme.css";

function Model({ url }) {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

export default function D() {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        borderRadius: "100%",
        border: `15px solid ${globalVars.colors["grayish-02"]}`,
        margin: "0 auto",
      }}
    >
      <Canvas
        style={{
          borderRadius: "100%",
        }}
        className=""
        camera={{
          position: [0, 0, 0],
        }}
      >
        <Suspense fallback={"Loading..."}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh rotation={[-0.15, -0.1, 0]} position={[20, -290, -360]}>
            <Model url="/assets/models/toon_cat_free/scene.gltf" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
