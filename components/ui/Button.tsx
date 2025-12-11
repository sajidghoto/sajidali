import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
export default function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = React.useRef<HTMLAnchorElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={cn(
        "inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-linear-to-br from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/50"
          : "bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400"
      )}
    >
      {children}
    </motion.a>
  );
}
