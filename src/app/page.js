"use client";

import Container from "./components/container/page";
import Sidebar from "./components/sidebar/page";
import Header from "./components/header/page";
import "./globals.css";
import Bottombar from "./components/bottombar/page";
import { useState } from "react";
import EmailList from "./components/emailList/page";
import EmailContent from "./components/emailContent/page";
export default function Home() {
  const [openEmail, setOpenEmail] = useState(null);
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">
          <Sidebar />

          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && (
            <EmailContent email={openEmail} setOpenEmail={setOpenEmail} />
          )}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}
