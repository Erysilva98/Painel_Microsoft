import React from "react";
import Image from 'next/image';

import logoMoura from '/public/assets/logo.svg';

export default function Logotipo() {
    return (
        <div className="flex">
            <Image
            src={logoMoura}
            className="w-64"
            alt="Logo Moura"
            />
        </div>
    )
}