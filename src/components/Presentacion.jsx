function Presentacion() {
  return (
    <section className="flex justify-center py-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center max-w-5xl gap-8 px-4">
        <div className="flex-shrink-0">
          <img
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-800"
            src="https://avatars.githubusercontent.com/u/138906084?v=4"
            alt="Ferreyra Azul"
          />
        </div>
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold">¡Hola! 😃</h1>
          <p className="text-lg">
            "Soy Azul, estoy en busca de oportunidades en el mundo de la tecnología. Mi deseo de aprender y superarme constantemente me impulsa a adquirir nuevos conocimientos y habilidades. Estoy lista para enfrentar nuevos desafíos y crecer profesionalmente. ¡Agradezco cualquier oportunidad que me permita desarrollarme y contribuir al mundo tecnológico!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presentacion;
