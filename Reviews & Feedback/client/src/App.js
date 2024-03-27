import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { FooterContainer } from './containers/footer'

import Products from './components/body/products/Products'
import DetailProduct from './components/body/detailProduct/DetailProduct'
import CreateFeedback from "./components/create-feedback.component";
import FeedbackList from "./components/feedback-list.component";
import EditFeedback from "./components/edit-feedback.component";


function App() {
  return (
    <Router> 

    <div className="App">
    <Navbar/>
        <Route path="/" component={Products} exact />
        <Route path="/product/:id" component={DetailProduct} exact />
        <Route path="/create" component={CreateFeedback} />
        <Route path="/feedback" exact component={FeedbackList} />
        <Route path="/edit/:id" component={EditFeedback} />
        <br/>
        <br/>
        <FooterContainer/>
    </div>
    </Router>
  );
}

export default App;
