import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { products } from "./data/products";

const cats = ["All", ...new Set(products.map((p) => p.cat))];

export default function App() {
  const [current, setCurrent] = useState("All");
  const shown = products.filter((p) => current === "All" || p.cat === current);

  return (
    <main className="wrap">
      <Header />
      <Tabs cats={cats} current={current} setCurrent={setCurrent} />
      <ul>
        {shown.map((p) => (
          <Product key={p.name + p.url} {...p} />
        ))}
      </ul>
      <Footer />
    </main>
  );
}