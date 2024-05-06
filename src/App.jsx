import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Destinations from './components/destination/Destinations';

function App() {
  return (
    <div className="App flex">
      <Header/>
      {/* <Home/> */}
      <Destinations/>
    </div>
  );
}

export default App;