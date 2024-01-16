import {Route,Routes} from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import NAV from './Nav';
import NewPost from './NewPost';
import About from './About'
import PostPage from './PostPage';
import ChangerPost from './ChangerPost';
import { DataProvider } from './context/DataContext';
function App() {

  return (
    
    <div className="App">

<DataProvider>
    
    <Header title='My Blog'/>
    <NAV/>


    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/post/:id' element={<PostPage/>} />
      <Route path='/edit/:id' element={<ChangerPost/>} />

      <Route path='/post' element={<NewPost/>} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Missing />} />
    </Routes>


    <Footer />
</DataProvider>
   
    </div>
  );
}

export default App;
