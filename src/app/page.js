import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-slate-400">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                    <Image src="/assets/logo.svg" alt="Logo da Moura" width={500} height={500} />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-4xl text-white">Moura</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt ipsa sapiente vitae quis, facilis repellendus provident reiciendis eum, similique blanditiis quasi modi dignissimos adipisci fugit delectus eligendi tempore nostrum!</p>
                </div>
            </div>
        </div>
    </main>
  )
}