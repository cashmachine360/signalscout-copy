import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Footer: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      // Activar footer cuando el usuario haya scrolleado 93% de la página (casi al final)
      if (scrollPercentage >= 93) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar al cargar la página
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showFooter) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky bottom-0 left-0 w-full h-80 bg-[#EBEFEF] flex justify-center items-center z-[100]"
    >
      <div className="relative overflow-hidden w-full h-full flex justify-center items-center px-12 text-black pointer-events-auto">
        <h2 className="sm:text-[192px] text-[80px]">
          ❤
        </h2>
      </div>
    </motion.div>
  )
}

export default Footer
