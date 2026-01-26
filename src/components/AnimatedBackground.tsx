import { useEffect, useRef } from 'react';

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
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const blobsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Parallax effect for blobs
            if (blobsRef.current) {
                const moveX = (e.clientX - window.innerWidth / 2) / 50;
                const moveY = (e.clientY - window.innerHeight / 2) / 50;
                blobsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        const particles: Particle[] = [];
        const particleCount = 60;
        const colors = ['#00d4ff', '#a855f7', '#22d3ee', '#f472b6'];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                // Particle interaction with mouse
                const dxm = mouseRef.current.x - particle.x;
                const dym = mouseRef.current.y - particle.y;
                const distM = Math.sqrt(dxm * dxm + dym * dym);

                if (distM < 200) {
                    const force = (200 - distM) / 2000;
                    particle.vx += dxm * force;
                    particle.vy += dym * force;
                }

                // Apply max speed
                const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (speed > 2) {
                    particle.vx = (particle.vx / speed) * 2;
                    particle.vy = (particle.vy / speed) * 2;
                }

                particle.x += particle.vx;
                particle.y += particle.vy;

                // Friction
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color + '66';
                ctx.fill();

                // Mouse connections
                if (distM < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                    const opacity = (1 - distM / 150) * 0.2;
                    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                    ctx.stroke();
                }

                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        const opacity = (1 - distance / 120) * 0.1;
                        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
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
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="particles-container fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#030303]" />

            <div ref={blobsRef} className="absolute inset-0 transition-transform duration-700 ease-out">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-electric-blue/30 blur-[120px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-neon-violet/30 blur-[130px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-15%] left-[10%] w-[55%] h-[55%] rounded-full bg-cyan-500/20 blur-[110px] animate-blob animation-delay-4000" />
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-500/10 blur-[100px] animate-blob animation-delay-6000" />
            </div>

            <canvas ref={canvasRef} className="absolute inset-0" />

            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </div>
    );
}
