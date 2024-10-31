import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>NotFound 404</h1>
      <Link to="/">홈으로</Link>
    </div>
  );
}
