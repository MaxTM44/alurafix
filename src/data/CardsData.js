
const cardsData = [
    {
        id: 1,
        title: "¿Como Pensar Como Programador?",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
        link: "https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn",
        description: "¿Qué define a un buen programador? ¿Qué habilidades y competencias son esenciales para alguien que aspira a esta carrera? En este video, Christian Velasco nos explica las cualidades fundamentales de un programador.."
    },
    {
        id: 2,
        title: "¿Sabes usar var, let y const, aqui te lo explicamos?",
        category: "FRONT END",
        photo: "https://i.ytimg.com/vi/PztCEdIJITY/maxresdefaulficuldades en saber en t.jpg",
        link: "https://www.youtube.com/embed/PztCEdIJITY?si=hfEWd-LVzlUvP_qT",
        description: "¿A¿Te resulta complicado decidir cuándo usar let, var o const para declarar una variable al programar? En este video, aclaramos estas dudas y te explicamos las diferencias entre el alcance global y local en JavaScript. veces cuando estás programando sientes diqué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript."
    },
    {
        id: 3,
        title: "¿Sabias como funciona JavaScript?",
        category: "FRO¿Qué es JavaScript y cómo se desarrolló este lenguaje que provoca tantos debates entre los desarrolladores? En este episodio de Alura Tips, Genesys y Gabriela nos lo explican con detalle.NT-END",
        photo: "https://i.ytimg.com/vi/GJfOSoaXk4s/mqdefault.jpg",
        link: "https://www.youtube.com/embed/GJfOSoaXk4s?si=Sy4rvrikw1n4x2-o",
        description: "¿Qué es JavaScript y cómo se desarrolló este lenguaje que provoca tantos debates entre los desarrolladores? En este episodio de Alura Tips, Genesys y Gabriela nos lo explican con detalle."
    },
    {    
        id: 4,
        title: "El team Front-end",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/rpvrLaBQwgg?si=V1VLVFRuKgOI_y6-",
        description: "¿Estás iniciando tus estudios de programación? ¿Te interesa la creación de páginas web y el desarrollo de software? ¿O estás considerando un cambio de carrera para adentrarte en el maravilloso mundo de la tecnología?"
    },
    {
        id: 5,
        title: "¿Que es un g¿framework?",
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/t-iqt1b2qqk?si=HaMciLKuslok023B",
        description: "¿Buscas un framework para tus proyectos? ¿Conoces Spring Framework? Spring es el framework más utilizado en Java. Ofrece herramientas que permiten crear proyectos más avanzados, con mejores prácticas y en menos tiempo. Además, cuenta con una gran comunidad que proporciona abundante documentación y soporte."
    },
    {
        id: 6,
        title: "¿Qué es como funcionan SQL y NoSQL?",
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/cLLKVd5CNLc?si=MYp6WnXXQvqGSPYi",
        description: "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL)? ¿Cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este video."
    },
    {
        id: 7,
        title: " código en Java: Conoce los enum",
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/EoPvlE85XAQ?si=jfXKclbzaZEcDm83",
        description: "¿Te parece tedioso escribir muchas constantes en Java, resultando en demasiadas líneas de código? En este episodio de Alura+, la instructora Génesys Rondón nos muestra cómo simplificar esta tarea utilizando un tipo de dato especial llamado enum."
    },
    {
        id: 8,
        title: "¿Soft Skills?",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/vhwspfvI52k?si=jWQPbz3Ph7gX03Zb",
        description: "¿Qué son las soft skills y por qué es crucial desarrollarlas para destacarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos explica cuáles son las habilidades más valoradas por las empresas y cómo las soft skills pueden ayudarte en tu día a día."
    },
    {
        id: 9,
        title: "las 7 Soft Skills más deseadas por las empresas",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/YhR7Zp8NUzE?si=ky6cHgq598bnyowv",
        description: "Seguro que has oído hablar de las soft skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? En este video, te explicamos la importancia de estas habilidades y por qué son tan demandadas en el mercado laboral."
    },
    {
        id: 10,
        title: "Metodologías Ágiles",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/p4kpHAvQH9w/mqdefault.jpg",
        link: "https://www.youtube.com/embed/p4kpHAvQH9w?si=ZGDif0_FdBSpWjuv",
        description: " En nuestra sexta edición del Café Punto Tech, conversamos con Elizabeth León y Andyara Pedrosa, dos expertas en la metodología Agile. Agile permite adaptar el trabajo de un equipo a los requisitos del proyecto, ofreciendo una forma de trabajar rápida, flexible y adaptada a las circunstancias. Nuestras invitadas nos hablarán de las principales ventajas de las metodologías ágiles."
    }
];

export default cardsData;
