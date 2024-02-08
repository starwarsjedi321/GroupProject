import './App.css';
// Run npm install react-router-dom if you have issues with npm start 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          {/* Base route for every page including the layout component template */}
          <Route path="/"> 
            {/* Nested paths for each page component (E.g. Buyer / Seller pages) */}
            <Route 
            path="register-seller"
            element={<>test</>}
            />
            <Route
            path="register-buyer"
            element={<>test</>}
            />
            <Route
            path="properties"
            element={<>test</>}
            />
          </Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
