"use client";

import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { Code2, Globe, Laptop, Smartphone, Rocket, Zap, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    Icon: Smartphone,
    name: "Flutter Stok Takip",
    description: "İşletmeler için modern mobil stok yönetim çözümü.",
    href: "https://github.com",
    cta: "İncele",
    className: "md:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-50" />,
  },
  {
    Icon: Globe,
    name: "E-Commerce Web",
    description: "High-performance React Next.js application with darker aesthetics.",
    href: "https://github.com",
    cta: "View Code",
    className: "md:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent opacity-50" />,
  },
  {
    Icon: Zap,
    name: "Crypto Dashboard",
    description: "Real-time data visualization using D3.js and WebSocket.",
    href: "https://github.com",
    cta: "View Demo",
    className: "md:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-50" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden relative selection:bg-white/20">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-neutral-900/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-900/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-32"
        >
          <div className="text-xl font-bold tracking-tighter text-white">MEHMET ALİ.</div>
          <nav className="flex gap-6 md:gap-8 text-sm font-medium text-neutral-400">
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-white transition-colors duration-300">Contact</button>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <section id="hero" className="mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.95]">
              Mehmet Ali.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed tracking-tight"
          >
            Frontend Developer specialized in high-performance mobile & web solutions.
          </motion.p>
        </section>

        {/* Bento Grid Section */}
        <section id="projects">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12 flex items-end justify-between"
          >
            <h2 className="text-3xl font-medium text-white tracking-tight">Selected Works</h2>
            <span className="text-stone-500 text-sm hidden md:block">2024 - Present</span>
          </motion.div>

          {/* Staggered Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <BentoGrid>
              {projects.map((project, idx) => (
                <motion.div key={project.name} variants={itemVariants} className={project.className}>
                  <BentoCard {...project} className="" />
                </motion.div>
              ))}
            </BentoGrid>
          </motion.div>
        </section>

        {/* Footer */}
        <footer id="footer" className="mt-40 border-t border-neutral-900 pt-12 pb-12 flex justify-between items-center text-neutral-500 text-sm">
          <div>
            © 2025 Elit Portfolio. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Github className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
          </div>
        </footer>
      </div>
    </main>
  );
}
