# Modern Todo App

A beautiful, responsive todo list application built with Next.js, featuring a modern dark glass-morphism design and smooth animations.

![Modern Todo App](https://i.imgur.com/your-screenshot.png)

## Features

- Modern dark theme with glass-morphism effects
- Smooth animations and transitions
- Fully responsive design
- Built with performance in mind
- Local state management
- Clean and intuitive UI

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Database**: [Prisma](https://www.prisma.io/) with SQLite
- **Language**: TypeScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AJ0070/modern-todo.git
   ```

2. Install dependencies:
   ```bash
   cd modern-todo
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
modern-todo/
├── app/
│   ├── components/
│   │   └── Todo.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── package.json
└── README.md
```

## Features in Detail

- **Task Management**
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Smooth animations for all actions

- **Modern UI**
  - Glass-morphism effects
  - Dark theme
  - Responsive design
  - Hover effects
  - Loading animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by Jash

## Acknowledgments

- Thanks to the Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the beautiful animations 