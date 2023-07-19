"use client";
import React from "react";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Matriz = () => {
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
              Painel Geral Matriz 
            </p>
          </section>

        </div>
      </main>
    </>
  )
}

export default Matriz;