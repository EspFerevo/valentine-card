import React, { useState } from "react";
import { Button } from "./components/ui/button";
import Particles from "react-tsparticles"; // Импортируем компонент Particles
import { loadFull } from "react-tsparticles"; // Импортируем loadFull
import { motion } from "framer-motion";
import "./index.css";

export default function ValentineCard() {
  const [showMessage, setShowMessage] = useState(false);

  const particlesInit = async (main) => {
    // Замените на правильный синтаксис для работы с библиотекой
    await loadFull(main); 
  };

  return (
    <div className="relative">
      {/* Звездное небо */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
        }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            С Днём Святого Валентина! 💖
          </h1>
          <p className="text-gray-700 mb-6">
            Ты самый(ая) замечательный(ая) человек на свете! Пусть этот день будет
            наполнен любовью и радостью. 💕
          </p>
          <Button onClick={() => setShowMessage(!showMessage)} className="bg-red-500 hover:bg-red-600">
            {showMessage ? "Скрыть" : "Открыть"} сюрприз
          </Button>
          {showMessage && (
            <motion.p
              className="mt-4 text-lg text-red-500 font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ты мой(я) самый(ая) любимый(ая) человек! 💘
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
