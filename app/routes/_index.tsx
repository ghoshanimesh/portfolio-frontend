import { Outlet } from "@remix-run/react";
import Header from "./_index/Header";
import type { MetaFunction } from "@remix-run/node";
import Hero from "./_index/Hero";
import Blog from "./_index/Blog";
import Footer from "./_index/Footer";

export const meta: MetaFunction = () => [{ title: "Animesh Ghosh" }];

const Root = () => {
    return (
     <div>
      <Header></Header>
      <Hero></Hero>
      <Blog></Blog>
      <Footer></Footer>
     </div>
    );
   };

export default Root;