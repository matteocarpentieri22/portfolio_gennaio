import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type Language = 'it' | 'en' | 'fr' | 'es';

interface LanguageOption {
    code: Language;
    name: string;
    colors: string[];
}

const languages: LanguageOption[] = [
    { code: 'it', name: 'Italiano', colors: ['#009246', '#FFFFFF', '#CE2B37'] },
    { code: 'en', name: 'English', colors: ['#012169', '#FFFFFF', '#C8102E'] },
    { code: 'fr', name: 'Français', colors: ['#0055A4', '#FFFFFF', '#EF4135'] },
    { code: 'es', name: 'Español', colors: ['#C60B1E', '#FFC400', '#C60B1E'] },
];

// Simple flag component using CSS
const Flag = ({ colors, type }: { colors: string[]; type: Language }) => {
    if (type === 'en') {
        // Union Jack simplified
        return (
            <div className="w-6 h-4 rounded-sm overflow-hidden flex items-center justify-center bg-[#012169] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[40%] bg-white" />
                    <div className="absolute w-full h-[20%] bg-[#C8102E]" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-[20%] h-full bg-white" />
                    <div className="absolute w-[10%] h-full bg-[#C8102E]" />
                </div>
            </div>
        );
    }

    // Vertical stripes for IT, FR
    if (type === 'it' || type === 'fr') {
        return (
            <div className="w-6 h-4 rounded-sm overflow-hidden flex">
                {colors.map((color, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                ))}
            </div>
        );
    }

    // Horizontal stripes for ES
    return (
        <div className="w-6 h-4 rounded-sm overflow-hidden flex flex-col">
            <div className="flex-1" style={{ backgroundColor: colors[0] }} />
            <div className="flex-[2]" style={{ backgroundColor: colors[1] }} />
            <div className="flex-1" style={{ backgroundColor: colors[2] }} />
        </div>
    );
};

interface LanguageSelectorProps {
    currentLanguage: Language;
    onLanguageChange: (language: Language) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-electric-blue/10 border border-electric-blue/30 hover:bg-electric-blue/20 transition-all duration-300"
            >
                <Flag colors={currentLang.colors} type={currentLang.code} />
                <span className="hidden sm:inline text-sm font-medium text-slate-200">
                    {currentLang.code.toUpperCase()}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-electric-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-cyber-dark/95 backdrop-blur-xl border border-electric-blue/30 rounded-lg shadow-2xl shadow-electric-blue/20 overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <motion.button
                                key={lang.code}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => {
                                    onLanguageChange(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 ${currentLanguage === lang.code
                                        ? 'bg-electric-blue/20 text-electric-blue border-l-2 border-electric-blue'
                                        : 'text-slate-300 hover:bg-electric-blue/10 hover:text-white'
                                    }`}
                            >
                                <Flag colors={lang.colors} type={lang.code} />
                                <span className="font-medium">{lang.name}</span>
                                {currentLanguage === lang.code && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="ml-auto text-electric-blue"
                                    >
                                        ✓
                                    </motion.span>
                                )}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
