import logo from './logo.svg';
import './App.css';
import Navbar from './Componant/Navbar';
import Form from './Componant/Form';
// import LogiForm from './Componant/LogiForm';
import Header from './Header';
import React,  {useState} from 'react';


function App() {
  // const [mode,setMode] = useState('light')
  const [mode,setMode] = useState('light')
  const toggleMode =()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    else{
      setMode('dark')
             document.body.style.backgroundColor='#042743'

    }

  }
  return (
<>
<Navbar mode={mode} toggleMode ={toggleMode}/>
<div className="container my-5" ></div>
{/* <LogiForm /> */}
<div className="container my-5" >
<Form mode={mode} />
</div>
</>
  );
}

export default App;
