"use client";

import { useState } from "react";
import Container from "./components/container/page";
import Sidebar from "./components/sidebar/page";
import Header from "./components/header/page";
import "./globals.css";
import Bottombar from "./components/bottombar/page";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">
          <Sidebar />
          <div>
            <h1 className="text-3xl text-center">Projeto EmailBox</h1>
            <button
              className="block w-fit mx-auto my-8 px-4 py-2 rounded-lg border-transparent hover:border-primary-400 border-2 transition-colors"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
          </div>
          <Bottombar />
        </div>
      </Container>
    </>
  );
}
