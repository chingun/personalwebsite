import Me from "./component/me.component";
import Screener from "./component/screener.component";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './css/MeStyle.css';

function App() {
  return (
      <Router> 
          {/* Private Area */}
          <Route path="/" exact component = {Me} />
          <Route path="/screener" exact component = {Screener} />
      </Router>
  );
}

export default App;
