import React, { useRef, Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { LayerMaterial, Color, Depth, Noise } from "lamina";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { styles } from "./ThreeJSModel-style";
import useClasses from "../../../../useClasses.js";
import { CircularProgress, Container, Typography, Box } from "@mui/material";
import { RotateRight } from "@mui/icons-material";

//import useMediaQuery from "@mui/material/useMediaQuery";
//import { useTheme } from "@emotion/react";

function Renderer() {
  const { gl } = useThree();
  gl.debug.checkShaderErrors = false;
}
const ThreeJSModel = () => {
  const ref = useRef();
  const classes = useClasses(styles);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [overlayDismissed, setOverlayDismissed] = useState(false);
  const [hoveredOnce, setHoveredOnce] = useState(false);

  // const theme = useTheme();
  //renderer.debug.checkShaderErrors = false;
  const { nodes } = useGLTF("/Arm_Low_Poly.glb");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => {
        if (!hoveredOnce) {
          setOverlayVisible(false);
          setHoveredOnce(true);
        }
      }}
      onMouseLeave={() => {
        if (!hoveredOnce) {
          setOverlayVisible(true);
        }
      }}
      className={classes.canvas}
      style={{ position: 'relative' }}
      transition={{ delay: 0.65, duration: 1.1, ease: [0.455, 0.03, 0.515, 0.955] }}
    >
      <Container>
<Canvas
        className={classes.canvas}
        shadows
        dpr={[0.5, 2]}
        camera={{ position: [180, 53, 60], fov: 40 }}
      >
        <Renderer />
        <Suspense fallback={null}>
          <pointLight intensity={2} position={[0, 0, 5]} />
          <pointLight intensity={2} position={[-30, -30, -5]} />
          <pointLight intensity={2} position={[30, 30, 5]} />
          <ambientLight intensity={4} />
          <group position={[0, -1.5, 0]}>
            <Suspense fallback={<CircularProgress />}>
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

          <OrbitControls autoRotate={true} autoRotateSpeed={1} ref={ref} />
        </Suspense>
      </Canvas>
      {!overlayDismissed && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'gray',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
          }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: overlayVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={(definition) => {
            if (definition.opacity === 0 && !overlayVisible) {
              setOverlayDismissed(true);
            }
          }}
        >
          <RotateRight sx={{ fontSize: '3rem' }} />
          <Typography variant="h4">Drag to Orbit</Typography>
        </Box>
      )}

      </Container>
      
    </motion.div>
  );
};

export default ThreeJSModel;

//useGLTF.preload("/Arm.glb");
