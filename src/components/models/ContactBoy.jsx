import { useAnimations, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useEffect, useMemo, useRef } from "react";

export function ContactBoy(props) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/humayun/model-waiting.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!names.length) return;

    actions[names[0]]?.reset().fadeIn(0.2).play();

    return () => {
      actions[names[0]]?.fadeOut(0.2);
    };
  }, [actions, names]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload("/models/humayun/model-waiting.glb");
