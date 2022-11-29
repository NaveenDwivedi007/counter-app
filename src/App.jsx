import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CountUI from './component/countUi'
import Counter from './component/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CountUI val={count} setFn={()=>{}}/>
      {/* <CountUI /> */}
      <Counter setSum={setCount}/>
      <Counter setSum={setCount}/>
    </div>
  )
}

export default App
