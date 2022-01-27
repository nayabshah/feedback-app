import {BrowserRouter as Router,  Route, Routes, } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './Context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<>
              <FeedbackForm/>
              <FeedbackStats/>
              <FeedbackList/>
              <AboutIconLink/>
            </>}
            ></Route>

            <Route path='/about' element={<AboutPage/>}/>
            {/* <Route path='/post/*' element={<Post/>}/>  */}
  
          </Routes>
          {/* <Card>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </Card> */}
          
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
