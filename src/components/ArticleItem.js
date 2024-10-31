import React from "react";

export default function ArticleItem({
  author,
  title,
  urlToImage,
  description,
  url,
}) {
  return (
    <div className="border border-gray flex items-center gap-[50px]">
      <div className="min-w-[200px]">
        <img
          className="w-[200px] h-[250px] object-cover bg-gray-200"
          src={urlToImage}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-3xl">{title}</p>
        <p>{description}</p>
        <span className="mt-2 text-gray-500">{author}</span>
        <button
          className="cursor-pointer w-[100px] h-[50px] rounded-[10px] bg-[#3B8AFF] text-white"
          onClick={() => window.open(url, "_blank")}
        >
          자세히보기
        </button>
      </div>
    </div>
  );
}
