import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Home, Sparkles, Image as ImageIcon, Download } from 'lucide-react'; 

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '首頁', target: 'hero', icon: <Home size={18} /> },
        { name: '特色', target: 'features', icon: <Sparkles size={18} /> },
        { name: '截圖', target: 'gallery', icon: <ImageIcon size={18} /> },
        { name: '下載', target: 'download', icon: <Download size={18} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none select-none">
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 pointer-events-auto border bg-white/10 border-white/20 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]`}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.target}
                        to={item.target}
                        smooth={true}
                        duration={600}
                        spy={true}
                        offset={-100}
                        activeClass="!bg-white/20 !text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10"
                    >
                        <span className="transition-colors duration-300">
                            {item.icon}
                        </span>
                        <span className="hidden md:block">{item.name}</span>
                    </Link>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;

