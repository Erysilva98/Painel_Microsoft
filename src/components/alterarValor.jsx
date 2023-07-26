import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
import Image from 'next/image';
import Moeda from "@assets/moeda.svg";


export default function AlterarValor() {
    return (
        <>
           <div className="bg-blue-background" >
                <Card className=" mx-auto mt-10 max-w-4xl mb-40">
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center bg-amber-400">
                            <Image className='w-10 h-10' src={Moeda} alt="Simbolo do Real" />
                            <Text className="text-2xl">Valores das Licenças</Text>
                        </div>
                    </div>
                    <div>
                        <form className="flex flex-col justify-center">
                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <label >Exchange</label>
                            <input className="border-b-2 bg-slate-500 " type="text"/>

                            <button>
                                <Text className="mt-6 box-border bg-blue-400 ">Confimar Alteração</Text>
                            </button>
                        </form>
                    </div>
                </Card>
            </div>
        </>
    );
}