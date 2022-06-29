import Pages from "./Pages/Pages";
import Categories from "./Components/Categories";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Categories />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
