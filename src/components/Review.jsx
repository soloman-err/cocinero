import React, { useState, useEffect } from "react";
import { FaAngellist } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Review = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Contraté a un chef a través de esta página y la comida fue excepcional. Gracias, -Maria Lopez.",
    },
    {
      id: 2,
      text: "Excelente servicio al cliente y opciones de chefs de calidad. Definitivamente lo recomendaría. Saludos, -Miguel González.",
    },
    {
      id: 3,
      text: "Estoy muy impresionado con la variedad de opciones de chefs en esta página. Contraté a uno para mi boda y todo salió perfecto. -Ana Torres",
    },
    {
      id: 4,
      text: "La comida era deliciosa y el servicio fue impecable. Muchas gracias a Juan Rodríguez, nuestro chef contratado.",
    },
    {
      id: 5,
      text: "Esta página me ayudó a encontrar al chef perfecto para mi cena de cumpleaños. Todo el mundo quedó impresionado. - -Gabriela Hernández",
    },
    {
      id: 6,
      text: "Mi familia y yo contratamos a un chef para nuestras vacaciones en la playa y no podríamos estar más contentos con la comida. Gracias, -Luisa Pérez.",
    },
    {
      id: 7,
      text: "Me encanta esta página porque hace que sea fácil encontrar un chef para cualquier ocasión. ¡Definitivamente la usaré de nuevo! -Diego Gutiérrez",
    },
    {
      id: 8,
      text: "Contraté a un chef para mi cena de empresa y todos quedaron muy impresionados con la comida y el servicio. Gracias, -Antonio González.",
    },
    {
      id: 9,
      text: "Me encantó la calidad de los chefs y la facilidad de reserva. Ya he recomendado esta página a mis amigos. -Sofía Ramírez",
    },
    {
      id: 10,
      text: "Contraté a un chef para mi cena de aniversario y fue una de las mejores decisiones que he tomado. Gracias, -Carlos Hernández.",
    },
  ];

  return (
    <div className="reviewsec w-[80%] my-20 px-10 text-center mx-auto space-y-5 py-20 bg-amber-950 relative">
      <FaAngellist className="absolute top-10 text-5xl" />
      <h2 className="font-bold text-5xl font-serif text-center">
        Clients to Cocinero
      </h2>
      <Slide
        easing="ease"
        duration={3000}
        indicators={true}
        arrows={false}
        onChange={(slideIndex) => setSlideIndex(slideIndex)}
        autoplay={true}
        pauseOnHover={true}
        activeIndex={slideIndex}
      >
        {reviews.map((review, index) => (
          <div key={index} className="">
            <p className="text-white text-2xl font-serif">{review.text}</p>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Review;
