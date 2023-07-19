import React from "react";
import Image from 'next/image';
import iconeUser from '/public/assets/user.svg';

export default function Usuario() {
    return (
        <div className="flex items-center md:order-2 space-x-2 mr-5">
          <Image
            className="w-10 h-10 mr-2 rounded-full"
            src={iconeUser}
            alt="Icone de usuário"
          />
          <div className='text-sm'>
            <p className="font-bold">Nome Sobrenome</p>
            <p>User@gmail.com</p>
          </div>
        </div>
    )
}