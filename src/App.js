import Home from './comp/home';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>    
      <Home/>
    </DataProvider>
  );
}

export default App;
