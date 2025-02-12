// src/App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import './index.css'; // Импортируем стили

export default function ValentineCard() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-4">
      <motion.div
        className="card"  // Применяем стили для карточки
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="card-title">С Днём Святого Валентина! 💖</h1>  // Применяем стили для заголовка
        <p className="card-description">
          Ты самый(ая) замечательный(ая) человек на свете! Пусть этот день будет
          наполнен любовью и радостью. 💕
        </p>
        <Button onClick={() => setShowMessage(!showMessage)} className="button">
          {showMessage ? "Скрыть" : "Открыть"} сюрприз
        </Button>
        {showMessage && (
          <motion.p
            className="message"  // Применяем стили для сообщения
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ты мой(я) самый(ая) любимый(ая) человек! 💘
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
