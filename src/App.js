import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="formContainer">
      {isLoggedIn ? (
        <List />
      ) : (
        <form onSubmit={handleLogin}>
          <h1>ログイン</h1>
          <hr />
          <div class="uiForm">
            <div class="formField">
              <lavel>ユーザ名</lavel>
              <input type="text" placeholder='ユーザ名' name="username" />
            </div>
            <div class="formField">
              <lavel>メールアドレス</lavel>
              <input type="text" placeholder='メールアドレス' name="mailAddress" />
            </div>
            <div class="formField">
              <lavel>パスワード</lavel>
              <input type="text" placeholder='パスワード' name="password" />
            </div>
            <button type='submit' name='submitButton'>ログイン</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
