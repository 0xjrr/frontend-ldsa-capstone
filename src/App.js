import './App.css';
import Form from './components/Form';

function App() {
  return (
    <>
      <ul>
        <li>
          <h1>Capstone model app</h1>
        </li>
        <li className='elem-github-logo'>
          <a href="https://github.com/0xjrr/">
            <img className='github-logo' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="logo" />
          </a>
        </li>
      </ul>

      <div className="App">
        <Form />
      </div>
      <footer>
        <p>
          Ricardo Ribeiro
        </p>
      </footer>
    </>
  );
}

export default App;
