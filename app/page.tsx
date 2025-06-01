'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Todo from './components/Todo';

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([
      {
        id: crypto.randomUUID(),
        title: newTodo.trim(),
        completed: false,
      },
      ...todos,
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-glass max-w-2xl mx-auto accent-glow"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8 text-center"
        >
          Tasks
        </motion.h1>

        <form onSubmit={addTodo} className="mb-12">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="todo-input"
            />
            <button type="submit" className="btn-primary">
              Add
            </button>
          </div>
        </form>

        <AnimatePresence mode="popLayout">
          <div className="space-y-2">
            {todos.map(todo => (
              <Todo
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        </AnimatePresence>

        {todos.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 mt-8 text-lg"
          >
            No tasks yet. Add one above!
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 mt-8 pt-8 border-t border-white/10 text-sm"
        >
          Created with ❤️ by Jash
        </motion.p>
      </motion.div>
    </div>
  );
} 