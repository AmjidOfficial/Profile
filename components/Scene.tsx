"use client";
import {Canvas,useFrame} from "@react-three/fiber";
import {Float,Points,PointMaterial} from "@react-three/drei";
import {useMemo,useRef} from "react";
import * as THREE from "three";
function Field(){
 const ref=useRef<THREE.Points>(null);
 const positions=useMemo(()=>{const a=new Float32Array(900);for(let i=0;i<a.length;i+=3){a[i]=(Math.random()-.5)*14;a[i+1]=(Math.random()-.5)*8;a[i+2]=(Math.random()-.5)*7}return a},[]);
 useFrame((_,d)=>{if(ref.current){ref.current.rotation.y+=d*.035;ref.current.rotation.x+=d*.008}});
 return <Points ref={ref} positions={positions} stride={3} frustumCulled><PointMaterial transparent size={.018} sizeAttenuation depthWrite={false}/></Points>;
}
export function Scene(){
 return <div className="scene" aria-hidden><Canvas dpr={[1,1.5]} camera={{position:[0,0,7],fov:50}} gl={{antialias:false,powerPreference:"high-performance"}}><ambientLight intensity={.5}/><Float speed={1.1} rotationIntensity={.2} floatIntensity={.25}><mesh><icosahedronGeometry args={[1.7,2]}/><meshBasicMaterial wireframe transparent opacity={.11}/></mesh></Float><Field/></Canvas></div>;
}