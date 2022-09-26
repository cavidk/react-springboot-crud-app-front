
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
     
      <div> 
          <HeaderComponent/> 
        <div className="container">
          <ListEmployeeComponent />
        </div>
      </div>
  );
}

export default App;
