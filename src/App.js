import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Editor" />
      
      <div className="container my-3">
        <Textform heading="Enter The Text" />
      </div>
      
     
    </>
  );
}

export default App;
