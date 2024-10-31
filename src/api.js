import axios from "axios";

const API_KEY = "30e0c240ab484d12b2a314eb59b998a3";

export async function fetchNews() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?apiKey=${API_KEY}&language=ko&sortBy=publishedAt&q=%ED%95%9C%EA%B5%AD`
    );
    return response.data.articles;
  } catch (e) {
    return [];
  }
}

export async function fetchSearchResults(q) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}&language=ko&sortBy=publishedAt&q=%ED%95%9C%EA%B5%AD`
    );
    return response.data.articles;
  } catch (e) {
    return [];
  }
}
