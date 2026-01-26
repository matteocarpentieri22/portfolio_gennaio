import { useEffect, useRef } from 'react';

interface Orb {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    pulse: number;
    pulseSpeed: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
}

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        console.log('Animated Background V6 (Restored) Mounted');
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);


        const isMobile = window.innerWidth < 768;

        // --- ORBS (Background Glows) ---
        const orbs: Orb[] = [];
        const orbCount = isMobile ? 3 : 6; // Reduced for mobile
        const colors = [
            'rgba(0, 212, 255, 0.4)', // Electric Blue
            'rgba(168, 85, 247, 0.4)', // Neon Violet
            'rgba(0, 255, 255, 0.3)'   // Cyan
        ];

        for (let i = 0; i < orbCount; i++) {
            orbs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                radius: isMobile
                    ? Math.random() * 100 + 80   // Smaller for mobile
                    : Math.random() * 200 + 150,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.01 + 0.005
            });
        }

        // --- PARTICLES (Cyber Grid) ---
        const particles: Particle[] = [];
        const particleCount = isMobile ? 35 : 80; // Significantly reduced for mobile

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.8)' : 'rgba(168, 85, 247, 0.8)'
            });
        }

        let animationFrameId: number;
        let time = 0;

        // Animation loop
        const animate = () => {
            time += 0.01;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Draw Orbs
            orbs.forEach(orb => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.vx *= -1;
                if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.vy *= -1;

                const currentRadius = orb.radius + Math.sin(time + orb.pulse) * 30;
                orb.pulse += orb.pulseSpeed;

                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.globalCompositeOperation = 'screen';
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            });

            // 2. Draw Particles
            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        const opacity = (1 - dist / 150) * 0.3;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="particles-container" style={{ zIndex: 0 }}>
            <canvas ref={canvasRef} className="absolute inset-0 block" />
            <div className="absolute inset-0 bg-transparent pointer-events-none" />
        </div>
    );
}
