import type { Language } from '../contexts/LanguageContext';

interface Translations {
    nav: {
        home: string;
        skills: string;
        experience: string;
        projects: string;
        education: string;
        contact: string;
    };
    hero: {
        roles: string[];
        description: string;
        linkedin: string;
    };
    skills: {
        title: string;
        subtitle: string;
        categories: {
            programming: string;
            ai: string;
            robotics: string;
            database: string;
            web: string;
        };
    };
    experience: {
        title: string;
        subtitle: string;
        present: string;
    };
    projects: {
        title: string;
        subtitle: string;
    };
    education: {
        title: string;
        subtitle: string;
        degree: string;
        thesis: string;
        grade: string;
    };
    contact: {
        title: string;
        subtitle: string;
        name: string;
        email: string;
        message: string;
        send: string;
        sending: string;
        success: string;
        error: string;
    };
    footer: {
        rights: string;
        quickLinks: string;
        getInTouch: string;
        linkedinProfile: string;
    };
}

export const translations: Record<Language, Translations> = {
    it: {
        nav: {
            home: 'Home',
            skills: 'Competenze',
            experience: 'Esperienza',
            projects: 'Progetti',
            education: 'Formazione',
            contact: 'Contatti',
        },
        hero: {
            roles: ['Ingegnere AI', 'Ingegnere Informatico', 'Problem Solver'],
            description: 'Sono un giovane Ingegnere Informatico specializzato in Intelligenza Artificiale e Robotica. Mi piace risolvere temi complessi e affrontare sfide impegnative, sempre alla ricerca di soluzioni innovative. Le mie passioni sono il calcio e la moda.',
            linkedin: 'Connettiti su LinkedIn',
        },
        skills: {
            title: 'Competenze Tecniche',
            subtitle: 'Tecnologie e strumenti che utilizzo',
            categories: {
                programming: 'Linguaggi di Programmazione',
                ai: 'AI & Machine Learning',
                robotics: 'Robotica',
                database: 'Database & Big Data',
                web: 'Sviluppo Web',
            },
        },
        experience: {
            title: 'Esperienza Professionale',
            subtitle: 'Il mio percorso lavorativo',
            present: 'Presente',
        },
        projects: {
            title: 'Progetti',
            subtitle: 'Alcuni dei miei lavori recenti',
        },
        education: {
            title: 'Formazione',
            subtitle: 'Il mio percorso accademico',
            degree: 'Laurea',
            thesis: 'Tesi',
            grade: 'Voto',
        },
        contact: {
            title: 'Contattami',
            subtitle: 'Mettiamoci in contatto',
            name: 'Nome',
            email: 'Email',
            message: 'Messaggio',
            send: 'Invia Messaggio',
            sending: 'Invio in corso...',
            success: 'Messaggio inviato con successo!',
            error: 'Errore nell\'invio del messaggio. Riprova.',
        },
        footer: {
            rights: 'Tutti i diritti riservati',
            quickLinks: 'Link Rapidi',
            getInTouch: 'Contattami',
            linkedinProfile: 'Profilo LinkedIn',
        },
    },
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact',
        },
        hero: {
            roles: ['AI Engineer', 'Computer Engineer', 'Problem Solver'],
            description: 'I am a young Computer Engineer specializing in Artificial Intelligence and Robotics. I enjoy solving complex themes and tackling complex challenges, always looking for innovative solutions. My passions are football and fashion.',
            linkedin: 'Connect on LinkedIn',
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'Technologies and tools I use',
            categories: {
                programming: 'Programming Languages',
                ai: 'AI & Machine Learning',
                robotics: 'Robotics',
                database: 'Database & Big Data',
                web: 'Web Development',
            },
        },
        experience: {
            title: 'Professional Experience',
            subtitle: 'My career journey',
            present: 'Present',
        },
        projects: {
            title: 'Projects',
            subtitle: 'Some of my recent work',
        },
        education: {
            title: 'Education',
            subtitle: 'My academic journey',
            degree: 'Degree',
            thesis: 'Thesis',
            grade: 'Grade',
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Let\'s get in touch',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Error sending message. Please try again.',
        },
        footer: {
            rights: 'All rights reserved',
            quickLinks: 'Quick Links',
            getInTouch: 'Get In Touch',
            linkedinProfile: 'LinkedIn Profile',
        },
    },
    fr: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            experience: 'Expérience',
            projects: 'Projets',
            education: 'Formation',
            contact: 'Contact',
        },
        hero: {
            roles: ['Ingénieur IA', 'Ingénieur Informatique', 'Résolveur de Problèmes'],
            description: 'Je suis un jeune Ingénieur Informatique spécialisé en Intelligence Artificielle et Robotique. J\'aime résoudre des thèmes complexes et relever des défis complexes, toujours à la recherche de solutions innovantes. Mes passions sont le football et la mode.',
            linkedin: 'Se connecter sur LinkedIn',
        },
        skills: {
            title: 'Compétences Techniques',
            subtitle: 'Technologies et outils que j\'utilise',
            categories: {
                programming: 'Langages de Programmation',
                ai: 'IA & Apprentissage Automatique',
                robotics: 'Robotique',
                database: 'Base de Données & Big Data',
                web: 'Développement Web',
            },
        },
        experience: {
            title: 'Expérience Professionnelle',
            subtitle: 'Mon parcours professionnel',
            present: 'Présent',
        },
        projects: {
            title: 'Projets',
            subtitle: 'Quelques-uns de mes travaux récents',
        },
        education: {
            title: 'Formation',
            subtitle: 'Mon parcours académique',
            degree: 'Diplôme',
            thesis: 'Thèse',
            grade: 'Note',
        },
        contact: {
            title: 'Contactez-moi',
            subtitle: 'Restons en contact',
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            send: 'Envoyer le Message',
            sending: 'Envoi en cours...',
            success: 'Message envoyé avec succès!',
            error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
        },
        footer: {
            rights: 'Tous droits réservés',
            quickLinks: 'Liens Rapides',
            getInTouch: 'Me Contacter',
            linkedinProfile: 'Profil LinkedIn',
        },
    },
    es: {
        nav: {
            home: 'Inicio',
            skills: 'Habilidades',
            experience: 'Experiencia',
            projects: 'Proyectos',
            education: 'Formación',
            contact: 'Contacto',
        },
        hero: {
            roles: ['Ingeniero de IA', 'Ingeniero Informático', 'Solucionador de Problemas'],
            description: 'Soy un joven Ingeniero Informático especializado en Inteligencia Artificial y Robótica. Me gusta resolver temas complejos y enfrentar desafíos complejos, siempre buscando soluciones innovadoras. Mis pasiones son el fútbol y la moda.',
            linkedin: 'Conectar en LinkedIn',
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Tecnologías y herramientas que uso',
            categories: {
                programming: 'Lenguajes de Programación',
                ai: 'IA & Aprendizaje Automático',
                robotics: 'Robótica',
                database: 'Base de Datos & Big Data',
                web: 'Desarrollo Web',
            },
        },
        experience: {
            title: 'Experiencia Profesional',
            subtitle: 'Mi trayectoria profesional',
            present: 'Presente',
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Algunos de mis trabajos recientes',
        },
        education: {
            title: 'Formación',
            subtitle: 'Mi trayectoria académica',
            degree: 'Título',
            thesis: 'Tesis',
            grade: 'Calificación',
        },
        contact: {
            title: 'Contáctame',
            subtitle: 'Pongámonos en contacto',
            name: 'Nombre',
            email: 'Email',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
            success: '¡Mensaje enviado con éxito!',
            error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
        },
        footer: {
            rights: 'Todos los derechos reservados',
            quickLinks: 'Enlaces Rápidos',
            getInTouch: 'Ponte en Contacto',
            linkedinProfile: 'Perfil de LinkedIn',
        },
    },
};

export function useTranslations(language: Language): Translations {
    return translations[language];
}
