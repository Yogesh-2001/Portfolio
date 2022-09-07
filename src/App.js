import './App.css';
import AllBlogs from './components/AllBlogs';
import Feedback from './components/Feedback';
import SlideShow from './components/SlideShow.js';

function App() {
  return (
    <div className="App">
    <SlideShow />
    <AllBlogs />
    <Feedback />
    </div>
  );
}

export default App;
