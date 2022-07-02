import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import AudioItemListContainer from './components/AudioItemListContainer/AudioItemListContainer'
import HogarItemListContainer from './components/HogarItemListContainer/HogarItemListContainer'
import ComputoItemListContainer from './components/ComputoItemListContainer/ComputoItemListContainer'
import ElectronicaItemListContainer from './components/ElectronicaItemListContainer/ElectronicaItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <section className="cuerpo">
        <ItemListContainer />
      </section> */}
      <Routes>
        
        
        <Route exact path="/"            element={<ItemListContainer />}></Route>
        <Route exact path="/Audio"       element={<AudioItemListContainer />}></Route>
        <Route exact path="/Hogar"       element={<HogarItemListContainer />}></Route>
        <Route exact path="/Computo"     element={<ComputoItemListContainer />}></Route>
        <Route exact path="/Electronica" element={<ElectronicaItemListContainer />}></Route>
        
        <Route exact path="/productos/:id" element={<ItemDetailContainer />}></Route>       
      </Routes>
    </div>
  );
}

export default App;
