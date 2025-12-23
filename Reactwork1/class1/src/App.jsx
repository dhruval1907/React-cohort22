import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
      bio: "Passionate frontend developer focused on clean UI, performance, and scalable design systems.",
      likes: 1240,
      posts: 56,
      views: 18200,
    },
    {
      id: 2,
      name: "Priya Patel",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      bio: "Creative designer with a strong eye for detail and a love for minimalistic layouts.",
      likes: 980,
      posts: 42,
      views: 15400,
    },
    {
      id: 3,
      name: "Rohan Verma",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=faces",
      bio: "Full-stack developer who enjoys building reliable products with measurable impact.",
      likes: 1630,
      posts: 73,
      views: 24100,
    },
    {
      id: 4,
      name: "Ananya Singh",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&crop=faces",
      bio: "UI/UX enthusiast focused on user behavior, accessibility, and design consistency.",
      likes: 1120,
      posts: 38,
      views: 16900,
    },
    {
      id: 5,
      name: "Kunal Mehta",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=faces",
      bio: "JavaScript engineer specializing in performance optimization and scalable architectures.",
      likes: 2100,
      posts: 91,
      views: 30250,
    },
    {
      id: 6,
      name: "Neha Kapoor",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
      bio: "Content-driven developer blending storytelling with clean and maintainable code.",
      likes: 760,
      posts: 29,
      views: 9800,
    },
    {
      id: 7,
      name: "Aditya Rao",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
      bio: "Problem solver with a strong foundation in data structures and system design.",
      likes: 1890,
      posts: 64,
      views: 22500,
    },
    {
      id: 8,
      name: "Sneha Iyer",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=faces",
      bio: "Frontend specialist creating visually consistent and user-centric interfaces.",
      likes: 1340,
      posts: 47,
      views: 17800,
    },
    {
      id: 9,
      name: "Vikram Joshi",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=faces",
      bio: "Product-focused engineer who values clarity, maintainability, and long-term stability.",
      likes: 2560,
      posts: 108,
      views: 35600,
    },
    {
      id: 10,
      name: "Pooja Nair",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
      bio: "Detail-oriented developer with a passion for polished UI and thoughtful interactions.",
      likes: 890,
      posts: 33,
      views: 12100,
    },
  ];
  return (
    <div className="p-10 bg-black h-screen w-full flex flex-wrap gap-5 items-center justify-center">
      {users.map(function (user) {
        return (
          <Card
            key={user.id}
            name={user.name}
            image={user.image}
            bio={user.bio}
            likes={user.likes}
            posts={user.posts}
            views={user.views}
          />
        );
      })}
    </div>
  );
};

export default App;
