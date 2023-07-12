import React from "react";
import Image from 'next/image';
import iconeUser from '/public/assets/user.svg';

export default function Usuario() {
    return (
        <div className="flex items-center md:order-2">
          <Image
            className="w-8 h-8 rounded-full"
            src={iconeUser}
            alt="Icone de usuário"
          />
          <div className=''>
            <p>User Name</p>
            <p>User E-mail</p>
          </div>
        </div>
    )
}