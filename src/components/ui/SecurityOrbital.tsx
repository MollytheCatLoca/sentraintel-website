'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Constantes de animación
const ORBITAL = {
  ROTATION_DURATION: 40,
  PULSE_DURATION: 3, // Pulso más rápido
  OUTER_BORDER_COLOR: "border-accent/30",
  INNER_BG_COLOR: "bg-dark-300/80",
  ORBITAL_DOTS: [
    { position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", color: "bg-accent" },
    { position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2", color: "bg-primary" },
    { position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", color: "bg-secondary" },
    { position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2", color: "bg-accent" }
  ],
  CENTER_SIZE: "w-1/2 h-1/2",
  DOT_SIZE: "w-3 h-3",
  PARTICLE_COUNT: 20,
};

const SecurityOrbital: React.FC = () => {
  return (
    <div className="relative w-4/5 h-4/5 rounded-full border border-accent/30 flex items-center justify-center overflow-hidden">
      {/* Fondo semi-transparente */}
      <div className="absolute inset-0 bg-dark-300/80 rounded-full" />
      {/* Borde pulsante */}
      <div className="absolute w-full h-full rounded-full border border-primary/20 animate-pulse-slow" />

      {/* Órbitas giratorias */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {/* Órbita exterior */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: ORBITAL.ROTATION_DURATION, repeat: Infinity, ease: "linear" }}
        >
          {ORBITAL.ORBITAL_DOTS.map((dot, index) => (
            <motion.div
              key={index}
              className={`absolute ${dot.position} ${ORBITAL.DOT_SIZE} ${dot.color} rounded-full shadow-glow`}
              animate={{ opacity: [1, 0.5, 1] }} // Parpadeo cuántico
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: Math.random() * 5 }}
            />
          ))}
        </motion.div>

        {/* Órbita media */}
        <motion.div
          className="absolute w-[70%] h-[70%]"
          animate={{ rotate: -360 }}
          transition={{ duration: ORBITAL.ROTATION_DURATION / 2, repeat: Infinity, ease: "linear" }}
        >
          {ORBITAL.ORBITAL_DOTS.map((dot, index) => (
            <motion.div
              key={index + 4}
              className={`absolute ${dot.position} w-2 h-2 ${dot.color} rounded-full shadow-glow`}
              animate={{ opacity: [1, 0.5, 1] }} // Parpadeo cuántico
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: Math.random() * 5 }}
            />
          ))}
        </motion.div>

        {/* Órbita interior */}
        <motion.div
          className="absolute w-[40%] h-[40%]"
          animate={{ rotate: 360 }}
          transition={{ duration: ORBITAL.ROTATION_DURATION / 4, repeat: Infinity, ease: "linear" }}
        >
          {ORBITAL.ORBITAL_DOTS.map((dot, index) => (
            <motion.div
              key={index + 8}
              className={`absolute ${dot.position} w-1 h-1 ${dot.color} rounded-full shadow-glow`}
              animate={{ opacity: [1, 0.5, 1] }} // Parpadeo cuántico
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: Math.random() * 5 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Partículas en movimiento */}
      {Array.from({ length: ORBITAL.PARTICLE_COUNT }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-accent/50 rounded-full"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
          }}
          animate={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Logo central con pulso más acentuado */}
      <motion.div
        className={`relative z-10 ${ORBITAL.CENTER_SIZE} rounded-full bg-dark-300 border border-gray-700 flex items-center justify-center shadow-xl`}
        animate={{ scale: [1, 1.1, 1] }} // Pulso más pronunciado
        transition={{ duration: ORBITAL.PULSE_DURATION, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full" />
        <span className="text-xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
          SentraIntel
        </span>
      </motion.div>
    </div>
  );
};

export default SecurityOrbital;