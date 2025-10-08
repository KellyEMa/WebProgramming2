import './App.css';
import data from "./data/data";
import ColorBox from './Components/ColorBox';
import ColorBoxContainer from'./Components/ColorBoxContainer';

function App() {
  return (
    <>
    
      <ColorBoxContainer colors={data}/>
    
    </>
  )
}

export default App