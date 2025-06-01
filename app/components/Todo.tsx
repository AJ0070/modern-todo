import { motion } from "framer-motion";
import { FiTrash2, FiCheck } from "react-icons/fi";

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Todo({ id, title, completed, onToggle, onDelete }: TodoProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        layout: { duration: 0.3 },
        opacity: { duration: 0.2 },
      }}
      className="todo-item group"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(id)}
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center
            transition-all duration-300 hover:scale-110
            ${completed 
              ? "border-indigo-500/50 bg-indigo-500/20" 
              : "border-gray-600"
            }`}
        >
          <FiCheck 
            className={`transition-all duration-300
              ${completed 
                ? "text-indigo-400 scale-100" 
                : "scale-0 opacity-0"
              }`}
          />
        </button>
        <span className={`text-lg transition-all duration-300
          ${completed 
            ? "line-through text-gray-500" 
            : "text-gray-200"
          }`}>
          {title}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-gray-500 hover:text-red-400 transition-colors duration-300
          opacity-0 group-hover:opacity-100 hover:scale-110 transform"
      >
        <FiTrash2 size={20} />
      </button>
    </motion.div>
  );
} 