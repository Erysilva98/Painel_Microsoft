import React from "react";
import Image from 'next/image';

import logoMoura from '/public/assets/logo.svg';

export default function Logotipo() {
    return (
        <div className="flex">
            <Image
            src={logoMoura}
            className="w-auto h-auto"
            alt="Logo Moura"
            // priority dar prioridade para carregar a imagem
            priority
            />
        </div>
    )
}