import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Destinations from './components/destination/Destinations';
import MainLayout from './layouts/MainLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> }>
      <Route index element={ <Home/>}/>
      <Route path="/destination" element={ <Destinations/>}/>
      {/* <Route path="/crew" element={ <div><Crew/></div>}/>
      <Route path="/technology" element={ <div><Crew/></div>}/> */}
    </Route>
    )
  )

  return <RouterProvider className="flex" router={ router }/>
  
    // <div className="App flex">
    //   <Header/>
    //   {/* <Home/> */}
    //   <Destinations/>
    // </div>
};

export default App;