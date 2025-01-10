import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { useContext } from "react";
import { ThemeContext } from "./context";

export default function Page() {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <Header/>

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar*/}
          <Sidebar/>

          <MovieList/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
