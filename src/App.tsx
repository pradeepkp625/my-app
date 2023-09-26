import { BrowserRouter } from 'react-router-dom';
import './common/global.scss';
import RouterNavigation from './Router/routerNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './redux/store.redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <RouterNavigation />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
