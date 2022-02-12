import {Routes, Route } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom' 
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from "./Components/Home";
import HashtagList from "./Components/HashtagList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/hashtags" element={<HashtagList />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
