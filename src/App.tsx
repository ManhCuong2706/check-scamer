import { Header } from 'components';
import { Footer } from 'components/Footer';
import { Routers } from 'routers/Routers';

import './App.css';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
