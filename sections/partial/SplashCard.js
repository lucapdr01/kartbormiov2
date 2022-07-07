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
        <Model scale={[2,2,2]} rotation={ [1,0,0]}/>
      </mesh>
    );
  }



function SplashCard() {
    
    return (
        <>
        <div className="p-8 p-5 my-5">
            {/* <div className="h-96 relative">
            <Image class="w-4
            8 h-48 h-max rounded-xl mx-auto" src={Card3} alt="" layout="fill" objectFit="fill"  width="900" height="900"/>
            </div> */}
            <div className='h-96 border-2'>
            <Canvas className='border-2'>
                <ambientLight intensity={0.3} />
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