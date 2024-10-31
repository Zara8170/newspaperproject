import React from "react";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ news = [] }) {
  return (
    <div className=" flex flex-col gap-[20px]">
      {news.map((newsItem) => (
        <ArticleItem key={newsItem.url} {...newsItem} />
      ))}
    </div>
  );
}
