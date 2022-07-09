import React, { useEffect, useState} from 'react';
import { Suspense } from 'react';
import Card3 from '../../public/images/kart.png'
import { Canvas, useFrame } from '@react-three/fiber'
import Model from '../../Model';
import { Rings } from  'react-loader-spinner'


function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
    width,
    height
  };
  }
}

function SplashCard() {
  const [loaded, setLoaded] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState();
    
  const dimArrayMax = [0.08,0.08,0.08]
  const dimArrayMin = [0.045,0.045,0.045]
        
  let dimArrayCur = dimArrayMax;

  function MyRotatingBox() {
    const myMesh = React.useRef();
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
    });
  
    return (
      <mesh ref={myMesh}>
        <Model scale={dimArrayCur} position={[0,-1.2,0]}/>
      </mesh>
    );
  }

  useEffect(()=>{
    console.log("dimchange");
    console.log("kart"+loaded);

    if (getWindowDimensions().width > 600){
      dimArrayCur = dimArrayMax;
    }
    else{ dimArrayCur = dimArrayMin}
  
  
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      if (getWindowDimensions().width > 600){
        dimArrayCur = dimArrayMax;
      }
      else{ dimArrayCur = dimArrayMin}
    }
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  },[windowDimensions, loaded]);

    return (
        <>
        <div className="my-5">
            <div className='h-96'>
            <Canvas className='' shadowMap  onLoad={()=>{setLoaded(true)}}>
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