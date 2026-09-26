import React, { useEffect, useRef } from 'react';

export type MotionHeroVariant = 'saas' | 'ecommerce' | 'agency' | 'health' | 'restaurant';

interface MotionHeroBackgroundProps {
  variant: MotionHeroVariant;
  className?: string;
  intensity?: 'subtle' | 'vibrant';
}

export const MotionHeroBackground: React.FC<MotionHeroBackgroundProps> = ({
  variant,
  className = '',
  intensity = 'vibrant',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates (relative to canvas)
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // ─────────────────────────────────────────────────────────────
    // VARIANT-SPECIFIC INITIALIZATIONS
    // ─────────────────────────────────────────────────────────────

    // 1. SaaS: Constellations & Cyber Packets
    interface SaasNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }
    interface SaasPacket {
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }
    const saasNodes: SaasNode[] = [];
    const saasPackets: SaasPacket[] = [];
    const saasColors = ['#818cf8', '#c084fc', '#38bdf8', '#34d399'];
    if (variant === 'saas') {
      const nodeCount = Math.min(45, Math.floor(width / 32));
      for (let i = 0; i < nodeCount; i++) {
        saasNodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65,
          vy: (Math.random() - 0.5) * 0.65,
          radius: Math.random() * 2 + 1.2,
          color: saasColors[Math.floor(Math.random() * saasColors.length)],
          alpha: Math.random() * 0.6 + 0.35,
        });
      }
    }

    // 2. E-commerce: Luxury Stardust & Floating Prisms
    interface SparkParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      hue: number;
      twinkleSpeed: number;
      phase: number;
    }
    const sparks: SparkParticle[] = [];
    if (variant === 'ecommerce') {
      const sparkCount = Math.min(55, Math.floor(width / 26));
      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: -(Math.random() * 0.45 + 0.2), // gentle upward ascent
          radius: Math.random() * 2.2 + 0.8,
          baseAlpha: Math.random() * 0.5 + 0.25,
          alpha: 0.5,
          hue: Math.random() > 0.6 ? 45 : 160, // Gold (45) or Emerald (160)
          twinkleSpeed: Math.random() * 0.04 + 0.015,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    // 3. Agency: Architectural Blueprint Grid & Orbital Rings
    let agencyAngle = 0;
    interface GridDot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }
    const agencyGrid: GridDot[] = [];
    if (variant === 'agency') {
      const cols = 16;
      const rows = 10;
      const stepX = width / cols;
      const stepY = height / rows;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const bx = c * stepX;
          const by = r * stepY;
          agencyGrid.push({ baseX: bx, baseY: by, x: bx, y: by, vx: 0, vy: 0 });
        }
      }
    }

    // 4. Health: Harmonic Biometric Sine Wave Fields & Respiration Orbs
    let healthTime = 0;
    interface HealthOrb {
      x: number;
      y: number;
      radius: number;
      phase: number;
      color: string;
      speed: number;
    }
    const healthOrbs: HealthOrb[] = [];
    if (variant === 'health') {
      const orbColors = ['rgba(6, 182, 212, 0.12)', 'rgba(20, 184, 166, 0.14)', 'rgba(52, 211, 153, 0.1)'];
      for (let i = 0; i < 7; i++) {
        healthOrbs.push({
          x: (i / 6) * width + (Math.random() - 0.5) * 80,
          y: height * 0.45 + (Math.random() - 0.5) * 160,
          radius: Math.random() * 120 + 90,
          phase: Math.random() * Math.PI * 2,
          color: orbColors[i % orbColors.length],
          speed: Math.random() * 0.008 + 0.004,
        });
      }
    }

    // 5. Restaurant: 24k Golden Embers & Champagne Turbulence
    interface Ember {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      sparklePhase: number;
      sparkleSpeed: number;
      swirl: number;
    }
    const embers: Ember[] = [];
    const emberPalettes = ['#fbbf24', '#f59e0b', '#d97706', '#fde68a', '#f43f5e'];
    if (variant === 'restaurant') {
      const emberCount = Math.min(50, Math.floor(width / 28));
      for (let i = 0; i < emberCount; i++) {
        embers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -(Math.random() * 0.7 + 0.35),
          size: Math.random() * 2.8 + 1,
          color: emberPalettes[Math.floor(Math.random() * emberPalettes.length)],
          alpha: Math.random() * 0.65 + 0.3,
          sparklePhase: Math.random() * Math.PI * 2,
          sparkleSpeed: Math.random() * 0.05 + 0.02,
          swirl: Math.random() * 0.03 + 0.01,
        });
      }
    }

    // ─────────────────────────────────────────────────────────────
    // ANIMATION TICK & RENDER
    // ─────────────────────────────────────────────────────────────

    let frame = 0;
    const render = () => {
      frame++;
      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // ── SAAS RENDER ──
      if (variant === 'saas') {
        // Subtle cyber scanning laser horizontal band
        const laserY = ((frame * 1.5) % (height * 1.4)) - height * 0.2;
        const laserGrad = ctx.createLinearGradient(0, laserY - 30, 0, laserY + 30);
        laserGrad.addColorStop(0, 'rgba(99, 102, 241, 0)');
        laserGrad.addColorStop(0.5, 'rgba(129, 140, 248, 0.07)');
        laserGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = laserGrad;
        ctx.fillRect(0, laserY - 30, width, 60);

        // Update and draw nodes
        for (let i = 0; i < saasNodes.length; i++) {
          const n = saasNodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0) n.x = width;
          if (n.x > width) n.x = 0;
          if (n.y < 0) n.y = height;
          if (n.y > height) n.y = 0;

          // Mouse attraction/repulsion
          const dxM = mouseX - n.x;
          const dyM = mouseY - n.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < 140 && distM > 0) {
            n.x -= (dxM / distM) * 0.8;
            n.y -= (dyM / distM) * 0.8;
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = n.color;
          ctx.globalAlpha = n.alpha;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Connection lines
        const maxDist = 115;
        for (let i = 0; i < saasNodes.length; i++) {
          for (let j = i + 1; j < saasNodes.length; j++) {
            const p1 = saasNodes[i];
            const p2 = saasNodes[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = '#6366f1';
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 1;
              ctx.stroke();

              // Spawn dynamic data packet
              if (saasPackets.length < 8 && Math.random() < 0.003) {
                saasPackets.push({
                  from: i,
                  to: j,
                  progress: 0,
                  speed: 0.016 + Math.random() * 0.015,
                  color: '#38bdf8',
                });
              }
            }
          }
        }

        // Draw data packets
        for (let k = saasPackets.length - 1; k >= 0; k--) {
          const pkt = saasPackets[k];
          pkt.progress += pkt.speed;
          if (pkt.progress >= 1) {
            saasPackets.splice(k, 1);
            continue;
          }
          const p1 = saasNodes[pkt.from];
          const p2 = saasNodes[pkt.to];
          if (!p1 || !p2) {
            saasPackets.splice(k, 1);
            continue;
          }
          const curX = p1.x + (p2.x - p1.x) * pkt.progress;
          const curY = p1.y + (p2.y - p1.y) * pkt.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = pkt.color;
          ctx.globalAlpha = 0.95;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // ── ECOMMERCE RENDER ──
      else if (variant === 'ecommerce') {
        // Floating luxury stardust with twinkle & gentle wave
        for (let i = 0; i < sparks.length; i++) {
          const s = sparks[i];
          s.phase += s.twinkleSpeed;
          s.x += s.vx + Math.sin(s.phase) * 0.35;
          s.y += s.vy;

          if (s.y < -10) {
            s.y = height + 10;
            s.x = Math.random() * width;
          }
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;

          // Mouse soft swirl repulsion
          const dxM = mouseX - s.x;
          const dyM = mouseY - s.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < 130 && distM > 0) {
            s.x -= (dxM / distM) * 1.5;
            s.y -= (dyM / distM) * 1.5;
          }

          const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.25;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = s.hue === 45 ? '#fbbf24' : '#10b981';
          ctx.shadowBlur = 8;
          ctx.shadowColor = s.hue === 45 ? 'rgba(251, 191, 36, 0.6)' : 'rgba(16, 185, 129, 0.6)';
          ctx.globalAlpha = Math.max(0.1, Math.min(0.9, currentAlpha));
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // ── AGENCY RENDER ──
      else if (variant === 'agency') {
        agencyAngle += 0.003;

        // Draw rotating architectural orbital rings in center-right
        const centerX = width * 0.72;
        const centerY = height * 0.48;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(agencyAngle);

        // Ring 1 (Dashed outer orbit)
        ctx.beginPath();
        ctx.arc(0, 0, 220, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.14)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 12]);
        ctx.stroke();

        // Ring 2 (Inner reverse orbit)
        ctx.beginPath();
        ctx.arc(0, 0, 140, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();

        // Axis crosshairs
        ctx.beginPath();
        ctx.moveTo(-250, 0);
        ctx.lineTo(250, 0);
        ctx.moveTo(0, -250);
        ctx.lineTo(0, 250);
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 6]);
        ctx.stroke();

        ctx.restore();

        // Interactive elastic dot matrix
        for (let i = 0; i < agencyGrid.length; i++) {
          const pt = agencyGrid[i];
          const dxM = mouseX - pt.x;
          const dyM = mouseY - pt.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);

          if (distM < 120 && distM > 0) {
            const force = (1 - distM / 120) * 16;
            pt.x -= (dxM / distM) * force;
            pt.y -= (dyM / distM) * force;
          }

          // Spring back to base
          pt.x += (pt.baseX - pt.x) * 0.08;
          pt.y += (pt.baseY - pt.y) * 0.08;

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = '#f97316';
          ctx.globalAlpha = 0.16;
          ctx.fill();
        }
      }

      // ── HEALTH RENDER ──
      else if (variant === 'health') {
        healthTime += 0.015;

        // Draw breathing cellular glow spheres
        for (let i = 0; i < healthOrbs.length; i++) {
          const orb = healthOrbs[i];
          const breathScale = 1 + Math.sin(healthTime * 1.5 + orb.phase) * 0.14;
          const curRadius = orb.radius * breathScale;

          const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, curRadius);
          grad.addColorStop(0, orb.color);
          grad.addColorStop(1, 'rgba(6, 182, 212, 0)');

          ctx.beginPath();
          ctx.arc(orb.x, orb.y, curRadius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.globalAlpha = 0.85;
          ctx.fill();
        }

        // Draw 3 layered harmonic biometric sine waves
        const waveConfigs = [
          { color: 'rgba(6, 182, 212, 0.28)', freq: 0.0035, amp: 38, speed: 0.02, yOffset: height * 0.72 },
          { color: 'rgba(20, 184, 166, 0.22)', freq: 0.005, amp: 26, speed: -0.015, yOffset: height * 0.76 },
          { color: 'rgba(52, 211, 153, 0.18)', freq: 0.0028, amp: 46, speed: 0.01, yOffset: height * 0.8 },
        ];

        for (let w = 0; w < waveConfigs.length; w++) {
          const cfg = waveConfigs[w];
          ctx.beginPath();
          ctx.moveTo(0, cfg.yOffset);
          for (let x = 0; x <= width; x += 12) {
            // Mouse interaction creates localized frequency ripple
            const dxM = Math.abs(x - mouseX);
            const mouseRipple = dxM < 160 ? Math.sin((x - mouseX) * 0.05) * (1 - dxM / 160) * 20 : 0;
            const y = cfg.yOffset + Math.sin(x * cfg.freq + healthTime * (w + 1) * 0.8) * cfg.amp + mouseRipple;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = cfg.color;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.7;
          ctx.stroke();
        }
      }

      // ── RESTAURANT RENDER ──
      else if (variant === 'restaurant') {
        // Draw rising golden embers and champagne effervescence
        for (let i = 0; i < embers.length; i++) {
          const e = embers[i];
          e.sparklePhase += e.sparkleSpeed;
          e.x += e.vx + Math.sin(e.sparklePhase) * 0.45;
          e.y += e.vy;

          if (e.y < -15) {
            e.y = height + 15;
            e.x = Math.random() * width;
          }
          if (e.x < -15) e.x = width + 15;
          if (e.x > width + 15) e.x = -15;

          // Mouse thermal updraft & swirl
          const dxM = mouseX - e.x;
          const dyM = mouseY - e.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < 150 && distM > 0) {
            // Swirl tangentially around the cursor
            e.x += (-dyM / distM) * 1.8;
            e.y += (dxM / distM) * 1.8 - 0.5; // slight thermal updraft
          }

          const currentAlpha = e.alpha * (0.6 + Math.sin(e.sparklePhase) * 0.4);
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
          ctx.fillStyle = e.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = e.color;
          ctx.globalAlpha = Math.max(0.05, Math.min(0.9, currentAlpha));
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Subtle guilloché gold starburst mandala in upper right
        const mandalaX = width * 0.85;
        const mandalaY = height * 0.25;
        ctx.save();
        ctx.translate(mandalaX, mandalaY);
        ctx.rotate(frame * 0.001);

        for (let r = 0; r < 6; r++) {
          ctx.beginPath();
          ctx.ellipse(0, 0, 180, 70, (r * Math.PI) / 6, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(217, 119, 6, 0.05)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [variant]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* ── CSS LAYER 1: Deep Radial Ambient Glows with Keyframe Breathing ── */}
      {variant === 'saas' && (
        <>
          <div className="absolute -top-36 left-1/4 w-[650px] h-[650px] rounded-full bg-indigo-600/25 blur-[130px] motion-aurora-orb-1" />
          <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full bg-purple-600/20 blur-[140px] motion-aurora-orb-2" />
          <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px] motion-aurora-orb-3" />
          {/* Perspective grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
          {/* Shooting light beam */}
          <div className="absolute top-0 left-1/4 w-[2px] h-96 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent rotate-[35deg] motion-shooting-beam" />
        </>
      )}

      {variant === 'ecommerce' && (
        <>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-[130px] motion-aurora-orb-1" />
          <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-teal-500/15 dark:bg-teal-500/20 blur-[140px] motion-aurora-orb-2" />
          <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-amber-400/10 dark:bg-amber-400/10 blur-[120px] motion-aurora-orb-3" />
          {/* Expanding concentric luxury ripples */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-emerald-500/10 motion-ripple-slow" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-teal-500/5 motion-ripple-slow delay-700" />
        </>
      )}

      {variant === 'agency' && (
        <>
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-500/15 dark:bg-orange-500/20 blur-[140px] motion-aurora-orb-1" />
          <div className="absolute bottom-0 right-10 w-[550px] h-[550px] rounded-full bg-amber-500/15 dark:bg-amber-500/20 blur-[130px] motion-aurora-orb-2" />
          {/* Architectural fine grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] dark:bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] dark:opacity-[0.08]" />
          {/* Floating technical corner coordinates */}
          <div className="absolute top-8 right-8 font-mono text-[10px] text-orange-600/30 dark:text-orange-400/30 tracking-widest uppercase hidden md:block">
            SYS // 04.99 • LAT 37.77 • LON -122.41
          </div>
        </>
      )}

      {variant === 'health' && (
        <>
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[140px] motion-aurora-orb-1" />
          <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-teal-500/15 dark:bg-teal-500/20 blur-[130px] motion-aurora-orb-2" />
          <div className="absolute top-1/3 left-1/2 w-[450px] h-[450px] rounded-full bg-emerald-400/10 blur-[120px] motion-aurora-orb-3" />
          {/* Rhythmic breathing glow ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-cyan-400/15 motion-breathing-ring" />
        </>
      )}

      {variant === 'restaurant' && (
        <>
          <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-amber-600/20 blur-[160px] motion-aurora-orb-1" />
          <div className="absolute bottom-0 right-10 w-[600px] h-[600px] rounded-full bg-rose-950/40 blur-[150px] motion-aurora-orb-2" />
          <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[120px] motion-aurora-orb-3" />
          {/* Fine gold border vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_40%,rgba(9,8,7,0.8)_100%)]" />
        </>
      )}

      {/* ── CANVAS LAYER 2: 60fps Interactive Motion Physics Engine ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />
    </div>
  );
};
