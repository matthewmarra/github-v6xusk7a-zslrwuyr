import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-32 h-32 mx-auto mb-6"
    >
      <img 
        src="https://i.imgur.com/0wXHGH9.gif" 
        alt="myAibou Logo" 
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </motion.div>
  );
}