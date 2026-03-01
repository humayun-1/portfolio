import { useAnimations, useGLTF, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Boy(props) {
  // Positive turns right, negative turns left. Keep 0 for true center baseline.
  const CENTER_YAW_OFFSET = 0.5;
  const group = useRef();
  const { progress } = useProgress();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false);

  const { scene, animations } = useGLTF("/models/humayun/model-cap.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!names.length) return;
    actions[names[0]]?.reset().fadeIn(0.2).play();

    return () => {
      actions[names[0]]?.fadeOut(0.2);
    };
  }, [actions, names]);

  useEffect(() => {
    if (!group.current) return;
    group.current.rotation.y = CENTER_YAW_OFFSET;
  }, []);

  useGSAP(() => {
    if (progress === 100) {
      gsap.from(group.current.rotation, {
        y: CENTER_YAW_OFFSET + Math.PI,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => {
          setIsIntroAnimationDone(true);
        },
      });
    }
  }, [progress]);

  useFrame((state) => {
    if (!isIntroAnimationDone || !group.current) return;

    const targetYaw = state.pointer.x * 0.4;

    group.current.rotation.y +=
      (CENTER_YAW_OFFSET + targetYaw - group.current.rotation.y) * 0.08;
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload("/models/humayun/model-cap.glb");
