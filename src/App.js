import { useState } from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import SideBar from './Components/SideBar/SideBar';

function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false)

  return (
    <div className="App">
      <Header setIsSideBarExpanded={setIsSideBarExpanded} />
      <NavBar />
      <SideBar isSideBarExpanded={isSideBarExpanded} setIsSideBarExpanded={setIsSideBarExpanded} />
    </div>
  );
}

export default App;
