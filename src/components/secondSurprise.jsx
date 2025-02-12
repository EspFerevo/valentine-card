import React, { useState } from "react";
import { Button } from "./button"; 
import { motion } from "framer-motion";

const SecondSurprise = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setShowSecondMessage(!showSecondMessage)}
        className="button mt-4"
      >
        {showSecondMessage ? "Hide" : "Show"} Second Surprise
      </Button>

      {showSecondMessage && (
        <motion.p
          className="message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We have a reservation at the Primavera restaurant at 7:00 PM. I love you! 💖
        </motion.p>
      )}
    </div>
  );
};

export default SecondSurprise;
