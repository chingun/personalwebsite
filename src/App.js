import logo from './logo.svg';
import './css/MeStyle.css';
import Me from "./component/me.component";
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
      <Router> 
          <head>
            <title> Chingun Khasar </title>
          </head>
          {/* Private Area */}
          <Route path="/" component = {Me} />
      </Router>
  );
}

export default App;
