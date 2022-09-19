import './App.css';
import Header from './component/Header';
import Line from './component/Line';

function App() {
  return (
    <div className="App">
    <Header />
    <Line tube='Piccadilly Line' color='blue'/>
    <Line tube='Victoria Line' color='light-blue'/>
    <Line tube='Northern Line' color='black'/>
    <Line tube='Hammersmith and City Line' color='pink'/>
    </div>
  );
}

export default App;
