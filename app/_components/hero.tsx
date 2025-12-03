export function Hero(){
    return(
        <section className="rounded-md bg-gray-100 min-h-screen flex  flex-col  items-center justify-start overflow-hidden m-5 p-10">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to the Hero Section!</h1>

            <article className="bg-gray-200 flex  flex-col  items-center rounded-md m-3 p-10 max-w-4xl">
                <div>
                    <h1>Seus clientes merecem os melhores sistemas.</h1>
                    <p>Oferecemos os melhores sites e melhores automações!</p>
                    <p>Tudo para o seu melhor atendimento</p>
                    <div>
                        <a href="#">Entre em Contato</a>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">TUDO</b>
                            Personalizado e eficiente, nosso serviço de desenvolvimento de sistemas é projetado para atender às necessidades exclusivas do seu negócio. Desde sites atraentes até automações inteligentes, estamos aqui para ajudar você a alcançar o sucesso.
                        </p>
                    </div>


                </div>
            </article>
        </section>
    )
}
