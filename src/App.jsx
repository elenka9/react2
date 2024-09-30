import { useState, useEffect } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import LanguageSwitcher from "./components/Language Switcher";
import { LanguageProvider } from "./components/LanguageContest";

function App() {
  const [data, setData] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const handleCklick = () => {
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Загрузка данных</h1>
      <button onClick={handleCklick}>Reload posts</button>

      {!!data.length && <PostList data={data} />}

      <div>
        <h1>Переключение языков</h1>
        <LanguageProvider>
          <LanguageSwitcher />
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
