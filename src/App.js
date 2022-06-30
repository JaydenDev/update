import Text from './components/text/text'
import Spinner from './components/spinner/spinner'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="spin-area">
        <Spinner />
        <Text />
      </div>
    </div>
  );
}

export default App;
