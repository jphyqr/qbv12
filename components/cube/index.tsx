
'use client'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useScroll , useTransform} from 'framer-motion'
import Floor from '../floor'
import { OrbitControls } from '@react-three/drei'
import THREE, { TextureLoader } from 'three'
import { motion,  } from 'framer-motion-3d'
export default function Index() {

    const container = useRef(null)
    const {scrollY, scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
    const smoothProgress = useSpring(progress, {damping: 20})
    return (
        <div ref={container} className=' h-[500vh] w-[80vw] bg-slate-600'>

            <div className='sticky top-0 left-0 w-full bg-red-400 max-h-[50vh]'>

     
        <Canvas
        shadows
        camera={{
            position:[0,0,5],
            fov:75
        
        }}

        >


          
            <OrbitControls  enablePan={false} enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow={true}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
    
<Cube progress={progress}/>


        </Canvas>
        </div>
        </div>
    )
}


function Cube({progress}: {progress:number}) {
const mesh = useRef<THREE.Mesh>(null) 

const scrollData = useScroll()


// const options = {
//     damping: 20
// }
// const manageMouseMove = (e:MouseEvent)=>{
//     mouse.x.set(e.clientX/window.innerWidth -.5)
//     mouse.y.set(e.clientY/window.innerHeight -.5)
// }

// const mouse = {
//     x: useSpring(useMotionValue(0), options),
//     y: useSpring(useMotionValue(0), options)

// }

// useEffect(()=>{
//   window.addEventListener('mousemove', manageMouseMove)
//     return ()=>{
//         window.removeEventListener('mousemove', manageMouseMove)
//     }


// }, [])
    // useFrame((state, delta)=>{
    //     if(mesh.current&&mesh.current.rotation){
    //         mesh.current.rotation.x += delta*.25 
    //         mesh.current.rotation.y += delta*.25
    //         mesh.current.rotation.z += delta*.25
    //     }

    //     })


        const texture = useLoader(TextureLoader, '/smoker.JPG')

    return (
        <motion.mesh  ref={mesh} rotation-x={progress} rotation-y={progress}  >
  <boxGeometry args={[2,2,2]}   />
  <meshPhysicalMaterial  map={texture} />
        </motion.mesh>
    )
}