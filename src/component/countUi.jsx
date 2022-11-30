import { useEffect, useState } from "react"

export default function CountUI({ val = 0, setFn = () => { } ,resetFn=()=>{}}) {
  const [currCount, setCurrCount] = useState(0)
  const [reset,setReset]=useState(false)
  useEffect(() => {
    if(reset){
      resetFn()
    }else{
    setFn((preVal) => {
      return preVal + 1
    })
  }
  }, [currCount,reset])
  const handleClick = () => {
    setReset(false)
    setCurrCount((curVal) => {
      return curVal + 1
    })
  }

 const  resetHandler = ()=>{
  setReset(true)
  }
  return (
    <>
      <div className="btn-conatiner count-btn">
        <button onClick={handleClick}>increment</button>
        <button onClick={resetHandler}> reset</button>
      </div>
    </>
  )
}