import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <HomeScreen />
        <ContactScreen />
      </div>
    </>
  );
}

export default App;
