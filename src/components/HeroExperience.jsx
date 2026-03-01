import { Canvas } from "@react-three/fiber";
import { Boy } from "./models/Boy";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#caad94"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#caad94"} />

      <group>
        <Boy scale={8.5} position={[0, -15, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
