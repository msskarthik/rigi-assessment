import HeaderComponent from './components/header/HeaderComponent';
import './App.css';
import BodyComponent from './components/body/BodyComponent';

function App() {
  return (
    <div className="App flex flex-col">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
}


export default App;
