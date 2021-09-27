import IconInfo from './components/IconInfo/IconInfo';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  const categories = [
    {
      id: 'i1',
      title: 'PM',
      description: 'paint/mediums',
    },
    {
      id: 'i2',
      title: 'CS',
      description: 'canvas/surfaces'
    },
    {
      id: 'i3',
      title: 'BT',
      description: 'brushes/painting tools'
    },
    {
      id: 'i4',
      title: 'DI',
      description: 'drawing/illustration'
    },
    {
      id: 'i5',
      title: 'PB',
      description: 'paper/boards'
    },
    {
      id: 'i6',
      title: 'F',
      description: 'framing'
    },
    {
      id: 'i7',
      title: 'CT',
      description: 'ceramics textiles'
    },
    {
      id: 'i8',
      title: 'M',
      description: 'miscellaneous'
    },
    {
      id: 'i9',
      title: 'E',
      description: 'electronics'
    }
  ]

  return (
    <div className="App">
      <Header />
      <Route path="/home">
        <IconInfo info={categories} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
