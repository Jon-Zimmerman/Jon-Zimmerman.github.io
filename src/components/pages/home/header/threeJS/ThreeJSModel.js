import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { LayerMaterial, Color, Depth, Noise } from "lamina";

import { useGLTF } from "@react-three/drei";

import { styles } from "./ThreeJSModel-style";
import useClasses from "../../../../useClasses.js";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";


const ThreeJSModel = () => {
  const ref = useRef();
  const classes = useClasses(styles);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  var modelFilepath = "";
  if (mobile) {
    modelFilepath = "/Arm_Low_Poly.glb";
  } else {
    modelFilepath = "/Arm_Low_Poly.glb";
  }
  const { nodes } = useGLTF(modelFilepath);
  return (
    <Canvas
      className={classes.canvas}
      shadows
      dpr={[0.5, 2]}
      camera={{ position: [180, 53, 60], fov: 40 }}
    >
      <Suspense fallback={null}>
        <pointLight intensity={2} position={[0, 0, 5]} />
        <pointLight intensity={2} position={[-30, -30, -5]} />
        <pointLight intensity={2} position={[30, 30, 5]} />
        <ambientLight intensity={4} />
        <group position={[0, -1.5, 0]}>
          <Suspense fallback={<h4>Loading...</h4>}>
            <mesh
              //castShadow
              //receiveShadow
              position={[10, -65, -33]}
              rotation={[0, -1.95, 0]}
              geometry={nodes.Asset3DLoadersceneRoot.geometry}
              material={nodes.Asset3DLoadersceneRoot.material}
            >
              <meshStandardMaterial
                color={"#333"}
                roughness={0.25}
                metalness={0.925}
              />
            </mesh>
          </Suspense>
          <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
        </group>
        <Suspense fallback={null}>
          <Environment background={false} resolution={64}>
            <mesh scale={100}>
              <sphereGeometry args={[1, 64, 64]} />
              <Suspense fallback={null}>
                <LayerMaterial side={THREE.BackSide}>
                  <Color color="black" alpha={1} mode="normal" />
                  <Depth
                    colorA="#00ff00"
                    colorB="#00ffdd"
                    alpha={0.5}
                    mode="normal"
                    near={0}
                    far={300}
                    rotation={[0, 1, 0]}
                    origin={[100, 100, 100]}
                  />
                  <Noise
                    mapping="local"
                    type="cell"
                    scale={0.5}
                    mode="softlight"
                  />
                </LayerMaterial>
              </Suspense>
            </mesh>
          </Environment>
        </Suspense>
        {/*   */}

        <OrbitControls autoRotate={true} autoRotateSpeed={1} ref={ref} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeJSModel;

useGLTF.preload("/Arm.glb");
