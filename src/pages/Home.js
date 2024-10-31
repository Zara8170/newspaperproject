import React, { useEffect, useState } from "react";
import { fetchNews } from "../api";
import Searchbar from "../components/Searchbar";
import ArticleList from "../components/ArticleList";

export default function Home() {
  const [news, setNews] = useState([]);

  const setInitData = async () => {
    const data = await fetchNews();
    setNews(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <>
      <Searchbar />
      <ArticleList news={news} />
    </>
  );
}
