import './App.css'
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
import MainComponent from './components/MainComponent';
import SubComponent from './components/SubComponent';
import AdComponent from './components/AdComponent';


function App() {

  return (
    <>
      <HeaderComponent />
      <div className="row">
          <NavComponent />
        <MainComponent>
            <div className="row">
            <SubComponent firstName="Jane" lastName="Doe" age={45} hairColor="Brown" />
            <SubComponent firstName="John" lastName="Smith" age={88} hairColor="Brown" />
            <SubComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
            <SubComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
            </div>
            <AdComponent />
            </MainComponent>
      </div>
    </>
  )
}

export default App

{/* <SubComponent firstName="Jane" lastName="Doe" age={45}  hairColor="Brown" />
<SubComponent firstName="John" lastName="Smith" age={88} hairColor="Brown" />
<SubComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
<SubComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown" /> */}
