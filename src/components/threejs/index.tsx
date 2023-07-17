import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { BoxGeometry } from "three";

export const ThreejsSection = (props: any) => {
  return (
    <Styles>
      <Suspense fallback={null}>
        <Canvas shadows>
          <Box />
          <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

          <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
          <color args={[0, 0, 0]} attach={"background"} />

          <spotLight
            color={[1, 0.25, 0.7]}
            intensity={1.5}
            angle={0.6}
            penumbra={0.5}
            position={[5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
          />
          <spotLight
            color={[0.14, 0.5, 1]}
            intensity={2}
            angle={0.6}
            penumbra={0.5}
            position={[-5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
          />
          {/* <CarShow /> */}
        </Canvas>
      </Suspense>
    </Styles>
  );
};

const Styles = styled.div`
  width: 100%;
  height: 100%;
`;

const Box = (props: any) => {
  const mesh: any = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
    mesh.current.rotation.z += delta;
    if (hovered) {
      mesh.current.scale.x += delta;
      mesh.current.scale.y += delta;
      mesh.current.scale.z += delta;
    } else {
      if (mesh.current.scale.x > 1) mesh.current.scale.x -= delta;
      if (mesh.current.scale.y > 1) mesh.current.scale.y -= delta;
      if (mesh.current.scale.z > 1) mesh.current.scale.z -= delta;
    }
  });
  const geom = useMemo(() => new BoxGeometry(2, 2, 2, 2, 2, 2), []);
  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? 1.5 : 1}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      geometry={geom}
      wireframe={true}
    >
      {/* <boxGeometry /> */}
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
};

/* 
<boxGeometry /> 6 mặt
<coneGeometry /> nón
<ringGeometry /> nhẫn 2D
<tubeGeometry /> ống cong
<latheGeometry /> hình kim cương
<planeGeometry /> hình vuông 2D
<shapeGeometry /> tam giác 2D
<torusGeometry /> donut 3D
<sphereGeometry /> cầu 3D
<capsuleGeometry /> viên thuốc
<extrudeGeometry /> 6 mặt trơn
<cylinderGeometry /> trụ
<torusKnotGeometry /> xuyến 3D
<dodecahedronGeometry /> 12 mặt
<tetrahedronGeometry /> 4 mặt
<icosahedronGeometry /> 20 mặt
<octahedronGeometry /> 8 mặt 
*/
