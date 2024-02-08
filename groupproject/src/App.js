// Run npm install react-router-dom if you have issues with npm start 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layoutComponent';
import './styles/layout.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          {/* Base route for every page including the layout component template */}
          <Route path="/" element={<Layout/>}> 
            {/* Nested paths for each page component (E.g. Buyer / Seller pages) */}
            <Route 
            path="register-seller"
            element={<>seller test</>}
            />
            <Route
            path="register-buyer"
            element={<>buyer test</>}
            />
            <Route
            path="properties"
            element={<>properties test</>}
            />
            <Route
            path="about-us"
            element={<>about us</>}
            />
            <Route
            path="sign-in"
            element={<>sign in</>}
            />
          </Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
