import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import Searchbar from "../components/Searchbar";
import ArticleList from "../components/ArticleList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [news, setNews] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setNews(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div>
      <Searchbar q={q} />
      <div>
        <b>{q}</b> 검색결과
      </div>
      <ArticleList news={news} />
    </div>
  );
}
