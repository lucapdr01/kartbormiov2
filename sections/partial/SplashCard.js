import React from 'react';
import { Suspense } from 'react';
import Image from "next/image";
import Card3 from '../../public/images/kart.png'
import { Canvas, useFrame } from '@react-three/fiber'
import Model from '../../Model';

function MyRotatingBox() {
    const myMesh = React.useRef();
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
    });
  
    return (
      <mesh ref={myMesh}>
        <Model scale={[0.08,0.08,0.08]} position={[0,-1.2,0]}/>
      </mesh>
    );
  }



function SplashCard() {
    
    return (
        <>
        <div className="my-5">
            <div className='h-96'>
            <Canvas className='' shadowMap>
                <pointLight position={[100, 100, 100]} castShadow/>
                <pointLight position={[-100, -100, -100]} castShadow/>
                <Suspense fallback={null}>
                  <MyRotatingBox/>
                </Suspense>
            </Canvas>
            </div>
        </div>
        </>
    );
  }
  
export default SplashCard;