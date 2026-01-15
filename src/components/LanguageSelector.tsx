import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import flagIt from '../assets/flag-it.png';
import flagEn from '../assets/flag-en.png';
import flagFr from '../assets/flag-fr.png';
import flagEs from '../assets/flag-es.png';

export type Language = 'it' | 'en' | 'fr' | 'es';

interface LanguageOption {
    code: Language;
    name: string;
    flag: string;
}

const languages: LanguageOption[] = [
    { code: 'it', name: 'Italiano', flag: flagIt },
    { code: 'en', name: 'English', flag: flagEn },
    { code: 'fr', name: 'Français', flag: flagFr },
    { code: 'es', name: 'Español', flag: flagEs },
];

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
                <img
                    src={currentLang.flag}
                    alt={currentLang.name}
                    className="w-6 h-6 rounded object-cover"
                />
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
                                <img
                                    src={lang.flag}
                                    alt={lang.name}
                                    className="w-6 h-6 rounded object-cover"
                                />
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
