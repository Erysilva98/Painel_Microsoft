import React from "react";
import Logotipo from '@/components/logotipo.jsx';
import Data from '@/components/data.jsx';

export default function Header() {
    return (
        <nav className="flex h-20 w-11/12 justify-between">
            <div className="flex ml-10 items-center px-4">
                {/* Componente Logotipo.jsx */}
                <Logotipo />
            </div>
            <div className="flex">
                <Data />
            </div>
        </nav>
    );
}