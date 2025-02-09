import './App.css';
import List from './List';

function App() {
  return (
    <div className="formContainer">
      <h1>ログイン画面</h1>
      <form>
        <h1>ログインフォーム</h1>
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
          <button name='submitButton'>ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
