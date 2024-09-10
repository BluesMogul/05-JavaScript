import './App.css'
// import ObjectComponent from "./components/ObjectComponent"
// import StringComponent from './components/StringComponent';
// import NumberComponent from './components/numberComponent';
// import ArrayComponent from './components/ArrayComponent';
// import FunctionComponent from './components/FunctionComponent';
import ChildComponent from './components/ChildComponent'

function App() {


  return (
    <>
      <h1 className="titleStyle">App Parent</h1>
      <ChildComponent />

      {/* <StringComponent />
      <NumberComponent />
      <ArrayComponent />
      <ObjectComponent />
      <FunctionComponent /> */}
    </>
  )
}

export default App
