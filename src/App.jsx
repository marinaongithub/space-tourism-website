import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Destinations from './components/destination/Destinations.jsx';
import MainLayout from './layouts/MainLayout';
import Crew from './components/crew/Crew.jsx';
import Technology from './components/technology/Technology.jsx';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> }>
      <Route index element={ <Home/>}/>
      <Route path="/destination" element={ <Destinations/>}/>
      <Route path="/crew" element={ <Crew/> }/>
      <Route path="/technology" element={ <div><Technology/></div>}/>
    </Route>
    )
  )

  return <RouterProvider className="flex" router={ router }/>

};

export default App;