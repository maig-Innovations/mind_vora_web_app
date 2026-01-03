import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-width relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
