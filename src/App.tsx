import './App.css';
import { Header } from './component/Header';
import { TubeLine } from './component/TubeLine';
import { Title } from './component/Title';
import { BusStop } from './component/BusStop';
function App() {
  return (
    <div className="App">
    <Header />
    <Title text='Tubes'/>
    <TubeLine tube='Piccadilly Line' color='blue'/>
    <TubeLine tube='Victoria Line' color='light-blue'/>
    <TubeLine tube='Northern Line' color='black'/>
    <TubeLine tube='Hammersmith and City Line' color='pink'/>
    <Title text='Bus'/>
    <BusStop name='Liverpool rd' id='490009224Z'/>
    <BusStop name='Holloway rd station' id='490000114U'/>
    </div>
  );
}

export default App;
