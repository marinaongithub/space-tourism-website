import { NavLink } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className="main flex ff-barlow">
      <section className="description flex">
        <h1>SO, YOU WANT TO TRAVEL TO 
          <br/><br/><span className="ff-bellefair">SPACE</span></h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </section>
        <NavLink exact id="destination" to="/destination" end className="exploreLink">
          <button className="explore ff-bellefair">
            EXPLORE
            </button>  
        </NavLink>
    </div>
  )
}

export default Home