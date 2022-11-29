import { useEffect, useState } from "react"
import CountUI from "./countUi"

export default function Counter({setSum=()=>{}}) {
  const [singleCount,setSingleCount] = useState(0)
  useEffect(()=>{
    setSum((prev)=>{
      return prev+1
    })
  },[singleCount])
  const handleClick=()=>{
    setSingleCount((val)=>{
      return val+1
    })
  }
  return (
    <>
      <CountUI val={singleCount} setFn={handleClick}/>
    </>
  )
}