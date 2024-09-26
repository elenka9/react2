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

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCklick = () => {
    fetchPosts();
  };

  return (
    <>
      <h1>Загрузка данных</h1>
      <button onClick={handleCklick}>Reload posts</button>
      {/*  я не поняла как работает эта строчка, увидела ее в комментах к дз */}
      {/* {!!data.length && <PostList data={data}/>}  */}
      <br></br>

      <div>
        {data.map((item) => {
          return (
            <PostList key={item.id}
              title={item.title}
              body={item.body}
            />
          );
        })}
      </div>

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
