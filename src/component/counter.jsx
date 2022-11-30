import { useEffect, useState } from "react"
import CountUI from "./countUi"

export default function Counter({setSum=()=>{},isReset=false}) {
  const [singleCount,setSingleCount] = useState(0)
  const [reset,setReset] = useState(false)
  useEffect(()=>{
    if (reset) {
      
    }else{
      setSum((prev)=>{
        return prev+1
      })
    }
  },[singleCount])
  useEffect(()=>{
    setSingleCount(0)
  },[isReset])
  const handleClick=()=>{
    setReset(false)
    setSingleCount((val)=>{
      return val+1
    })
  }
  const resetHandler= () =>{
    setSingleCount(0)
    setSum(prev=>{
      if ((prev-singleCount)<0) {
        return 0
      }
      return prev-singleCount
    })
    setReset(true)
  }
  return (
    <>
    <div className="count-wrapper">
    <p>{singleCount}</p>
    <CountUI val={singleCount} setFn={handleClick} resetFn={resetHandler}/>

    </div>
    </>
  )
}