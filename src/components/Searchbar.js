import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar({ q }) {
  const nav = useNavigate();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onClickSearch = () => {
    const trimmedSearch = search.trim();
    if (!trimmedSearch) {
      alert("검색어를 입력하세요.");
      return;
    }
    if (trimmedSearch.length < 2) {
      alert("검색어를 2글자 이상 입력해주세요.");
      return;
    }
    nav(`/search?q=${search}`);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  return (
    <div className="flex gap-[10px] justify-center mb-[20px]">
      <input
        className="w-[400px] h-[40px] rounded-[40px] px-[10px] bg-[#F8F8F8] border-[#CACACA] "
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
        type="text"
      />
      <button
        className="w-[50px] h-[43px] rounded-[5px] bg-[#3B8AFF]"
        onClick={onClickSearch}
      >
        검색
      </button>
    </div>
  );
}
