import './App.css'
import Car from './components/Car'
import Employee from './components/Employee'
import Company from './components/Company'
import Bus from './components/Bus'
import Btn from './components/Btn'



function App() {
  //js code
  const empName = "Mx Miller"

  return (
    //structure
    <div className='text-center'>
      <h1>Demo project</h1>
      <h3>React</h3>
      <Car/>
      <Bus/>
      <Employee dataFromparent={empName} str="hi" flag={false} />
      <Company />
      <Btn/>
      
      
    </div>
  )
}

export default App
