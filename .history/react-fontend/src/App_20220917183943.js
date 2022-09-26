
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
     
      <div> 
        <HeaderComponent />
      </div>
    <div className="container">
       <ListEmployeeComponent />
    </div>
  );
}

export default App;
