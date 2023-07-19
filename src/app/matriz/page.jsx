"use client";
import React from "react";
import { useRouter } from "next/router";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export async function getServerSideProps({ query}) {
  const { nomeDistribuidora } = query;
  return {
    props: { nomeDistribuidora },
  };
}

const Matriz = ({nomeDistribuidora}) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-blue-background">
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <section className="flex-1">
            <p>
              Painel Geral Matriz {nomeDistribuidora}
            </p>
          </section>

        </div>
      </main>
    </>
  )
}

export default Matriz;