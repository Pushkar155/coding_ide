import './App.css';
import Home from './components/Home/Home';
import Sheetsfinal from './components/pages/Sheetsfinal';
import Topicsfinal from './components/pages/Topicsfinal';
import {MyProvider} from "./contex";
import {Route,Routes} from "react-router-dom";
// import Ide from './components/coding_ide/Ide';
// import Questiondetails from './components/coding_ide/QuestionDetail/Questiondetails';
// import Navbar from './components/navbar/Navbar';
import IdePage from './components/pages/IdePage';
// import Community from './components/Community/Community';


function App() {
  return (
    <MyProvider>
    <div className="App">
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ide" element={<IdePage/> }/>
        <Route exact path="/sheets" element={<Sheetsfinal/>}/>
        <Route exact path="/topic" element={<Topicsfinal/>}/>
      </Routes>
    </div>
    </MyProvider>
  );
}

export default App;
