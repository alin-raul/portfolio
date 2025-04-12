// import * as THREE from "three";
// import React from "react";
// import { useGLTF, Float } from "@react-three/drei";
// import { GLTF } from "three-stdlib";

// type GLTFResult = GLTF & {
//   nodes: {
//     ["React-Logo_Material002_0"]: THREE.Mesh;
//   };
//   materials: {
//     ["Material.002"]: THREE.MeshStandardMaterial;
//   };
// };

// const ReactLogo = (props: React.ComponentPropsWithoutRef<"group">) => {
//   const { nodes, materials } = useGLTF(
//     "/models/React logo/scene.gltf"
//   ) as GLTFResult;
//   return (
//     <Float floatIntensity={1}>
//       <group scale={0.03} {...props} dispose={null}>
//         <mesh
//           geometry={nodes["React-Logo_Material002_0"].geometry}
//           material={materials["Material.002"]}
//           position={[0, 7.935, 18.102]}
//           rotation={[0, 0, -Math.PI / 2]}
//           scale={[20, 20, 20]}
//         />
//       </group>
//     </Float>
//   );
// };

// export default ReactLogo;
