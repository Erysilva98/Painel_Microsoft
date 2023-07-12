import React from "react";
import Image from 'next/image';

import logoMoura from '/public/assets/logo.svg';

export default function Logotipo() {
    return (
        <div className="flex items-center">
            <Image
            src={logoMoura}
            className="h-25 mr-5"
            alt="Logo Moura"
            />
        </div>
    )
}