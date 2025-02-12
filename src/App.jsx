import React, { useState } from "react";
import SecondSurprise from "./components/secondSurprise";
import { Button } from "./components/button";
import { motion } from "framer-motion";
import "./index.css";

export default function ValentineCard() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <motion.div
          className="card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="card-title">Happy Valentine's Day, my love! 💖</h1>
          <p className="card-description">
            You are the most amazing thing that has ever happened to me. Every
            day with you feels like a celebration, and your smile is the reason
            for my happiness. On this special day, I want to give you even more
            love, joy, and magic. You deserve nothing but the best. 💕
          </p>
          <Button
            onClick={() => setShowMessage(!showMessage)}
            className="button"
          >
            {showMessage ? "Hide" : "Show"} Surprise
          </Button>
          {showMessage && (
            <>
              <motion.p
                className="message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                You are my most beloved, unique, and incredible person! 💘 Every
                moment with you is a gift, and I am so thankful for having you
                in my life. I love you with all my heart.
              </motion.p>
              <SecondSurprise /> {/* компонент SecondSurprise */}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
