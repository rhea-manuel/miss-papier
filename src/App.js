import logo from './logo.svg';
import './Normalize.css';
import './App.css';
import HomepageHeader from './HomepageHeader';
import HomepageJumbotron from './HomepageJumbotron';

function App() {
  return (
    <div class="container">
      <HomepageHeader></HomepageHeader>
      <HomepageJumbotron></HomepageJumbotron>
    </div>
  );
}

export default App;
