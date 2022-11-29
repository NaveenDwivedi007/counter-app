import { useMemo, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CountUI from './component/countUi'
import Counter from './component/counter'

function App() {
  const [count, setCount] = useState(0)
  const [numEmp,setNumEmp] = useState(10)

  const empArr= useMemo(()=>{
    const arr = []
    for (let i = 0; i < numEmp; i++) {
      arr.push(i)
    }
    return arr
  },[numEmp])

  return (
    <div className="App">
      <CountUI val={count} setFn={()=>{}}/>
      <br />
      {/* <CountUI /> */}
      <div className="child-counter">
      {empArr.map(val=>{
        return <Counter key={val} setSum={setCount}/>
      })}
      </div>
    </div>
  )
}

export default App
