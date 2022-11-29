import { useEffect, useState } from "react"

export default function CountUI({val=0,setFn=()=>{}}) {
  const [currCount,setCurrCount] = useState(0)
  useEffect(()=>{
    setFn((preVal)=>{
      return preVal+1
    })
  },[currCount])
  const handleClick=()=>{
    setCurrCount((curVal)=>{
      return curVal+1
    })
  }
  return (
    <>
      <button onClick={handleClick} className="count-btn">
        {val} click
      </button>
    </>
  )
}