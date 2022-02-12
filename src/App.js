import {Routes, Route } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom' 
import './App.css';
import Dashboard from './Components/Dashboard';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Home from "./Components/Home";
import HashtagList from "./Components/HashtagList";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);


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

export default withAuthenticator(App);
