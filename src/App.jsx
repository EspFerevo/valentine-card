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
          <h1 className="card-title">Happy Valentine's Day! 💖</h1>
          <p className="card-description">
            You are the most wonderful person in the world! May this day be filled with love and joy. 💕
          </p>
          <Button onClick={() => setShowMessage(!showMessage)} className="button">
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
                You are my most beloved person! 💘
              </motion.p>

              <SecondSurprise />  {/* компонент SecondSurprise */}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
