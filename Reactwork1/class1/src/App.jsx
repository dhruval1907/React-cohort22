import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "https://source.unsplash.com/400x400/?man,portrait,indian",
    bio: "Passionate frontend developer focused on clean UI, performance, and scalable design systems.",
    likes: 1240,
    posts: 56,
    views: 18200
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://source.unsplash.com/400x400/?woman,portrait,indian",
    bio: "Creative designer with a strong eye for detail and a love for minimalistic layouts.",
    likes: 980,
    posts: 42,
    views: 15400
  },
  {
    id: 3,
    name: "Rohan Verma",
    image: "https://source.unsplash.com/400x400/?male,developer,portrait",
    bio: "Full-stack developer who enjoys building reliable products with measurable impact.",
    likes: 1630,
    posts: 73,
    views: 24100
  },
  {
    id: 4,
    name: "Ananya Singh",
    image: "https://source.unsplash.com/400x400/?female,designer,portrait",
    bio: "UI/UX enthusiast focused on user behavior, accessibility, and design consistency.",
    likes: 1120,
    posts: 38,
    views: 16900
  },
  {
    id: 5,
    name: "Kunal Mehta",
    image: "https://source.unsplash.com/400x400/?man,tech,portrait",
    bio: "JavaScript engineer specializing in performance optimization and scalable architectures.",
    likes: 2100,
    posts: 91,
    views: 30250
  },
  {
    id: 6,
    name: "Neha Kapoor",
    image: "https://source.unsplash.com/400x400/?woman,professional,portrait",
    bio: "Content-driven developer blending storytelling with clean and maintainable code.",
    likes: 760,
    posts: 29,
    views: 9800
  },
  {
    id: 7,
    name: "Aditya Rao",
    image: "https://source.unsplash.com/400x400/?man,engineer,portrait",
    bio: "Problem solver with a strong foundation in data structures and system design.",
    likes: 1890,
    posts: 64,
    views: 22500
  },
  {
    id: 8,
    name: "Sneha Iyer",
    image: "https://source.unsplash.com/400x400/?woman,frontend,portrait",
    bio: "Frontend specialist creating visually consistent and user-centric interfaces.",
    likes: 1340,
    posts: 47,
    views: 17800
  },
  {
    id: 9,
    name: "Vikram Joshi",
    image: "https://source.unsplash.com/400x400/?man,business,portrait",
    bio: "Product-focused engineer who values clarity, maintainability, and long-term stability.",
    likes: 2560,
    posts: 108,
    views: 35600
  },
  {
    id: 10,
    name: "Pooja Nair",
    image: "https://source.unsplash.com/400x400/?woman,startup,portrait",
    bio: "Detail-oriented developer with a passion for polished UI and thoughtful interactions.",
    likes: 890,
    posts: 33,
    views: 12100
  }
];


  return (
    <div className='p-10 bg-black h-screen w-full flex flex-wrap gap-5 items-center justify-center'>
      {users.map(function(elem){
        return <Card/>
      })}
      
    </div>
  )
}

export default App
