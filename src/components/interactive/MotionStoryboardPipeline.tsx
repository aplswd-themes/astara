import React, { useEffect } from 'react';

export const MotionStoryboardPipeline: React.FC = () => {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // ────────────────────────────────────────────────────────────────────────
    // 1. PAGE LOAD STAGE: Logo Reveal
    // ────────────────────────────────────────────────────────────────────────
    const logoEl = document.querySelector('header a, nav a, .navbar-brand');
    if (logoEl && !logoEl.classList.contains('motion-logo-reveal')) {
      logoEl.classList.add('motion-logo-reveal');
    }

    // ────────────────────────────────────────────────────────────────────────
    // 2. PAGE LOAD STAGE: Headline Split-Text Animation
    // ────────────────────────────────────────────────────────────────────────
    const heroH1 = document.querySelector('section:first-of-type h1, main h1');
    if (heroH1 && !heroH1.getAttribute('data-split-done')) {
      heroH1.setAttribute('data-split-done', 'true');

      // Process text nodes while preserving child elements (like gradient spans)
      const processNode = (node: Node, wordCounter: { count: number }) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
          const words = node.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();

          words.forEach((word) => {
            if (/^\s+$/.test(word)) {
              frag.appendChild(document.createTextNode(word));
            } else if (word) {
              const wrapper = document.createElement('span');
              wrapper.className = 'motion-split-wrapper';

              const span = document.createElement('span');
              span.className = 'motion-split-word';
              span.style.animationDelay = `${wordCounter.count * 55 + 140}ms`;
              span.textContent = word;

              wrapper.appendChild(span);
              frag.appendChild(wrapper);
              wordCounter.count += 1;
            }
          });

          node.parentNode?.replaceChild(frag, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach((child) => processNode(child, wordCounter));
        }
      };

      const counter = { count: 0 };
      Array.from(heroH1.childNodes).forEach((child) => processNode(child, counter));
    }

    // ────────────────────────────────────────────────────────────────────────
    // 3. PAGE LOAD STAGE: CTA Stagger
    // ────────────────────────────────────────────────────────────────────────
    const ctaContainers = document.querySelectorAll(
      'section:first-of-type .flex.flex-wrap, section:first-of-type [class*="gap-4"]'
    );
    ctaContainers.forEach((container, cIdx) => {
      const btns = container.querySelectorAll('a, button');
      btns.forEach((btn, bIdx) => {
        if (!btn.classList.contains('motion-cta-stagger-1')) {
          const delayClass =
            bIdx === 0 ? 'motion-cta-stagger-1' : bIdx === 1 ? 'motion-cta-stagger-2' : 'motion-cta-stagger-3';
          btn.classList.add(delayClass);
        }
      });
    });

    // ────────────────────────────────────────────────────────────────────────
    // 4. PAGE LOAD STAGE: Hero Visual Scale + Blur → Sharp
    // ────────────────────────────────────────────────────────────────────────
    const heroVisual = document.querySelector(
      'section:first-of-type .lg\\:col-span-5, section:first-of-type .lg\\:col-span-6:last-child, section:first-of-type [class*="relative rounded-3xl"]'
    );
    if (heroVisual && !heroVisual.classList.contains('motion-hero-visual-reveal')) {
      heroVisual.classList.add('motion-hero-visual-reveal');
    }

    // ────────────────────────────────────────────────────────────────────────
    // 5. SCROLL STAGE: Hero Parallax & Transform
    // ────────────────────────────────────────────────────────────────────────
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < 900 && heroVisual) {
            const visualEl = heroVisual as HTMLElement;
            const translateY = scrollY * 0.12;
            const scale = Math.max(0.95, 1 - scrollY * 0.00015);
            visualEl.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          }

          // Ambient aurora glow parallax
          const auroras = document.querySelectorAll('.aurora-bg');
          auroras.forEach((aurora, idx) => {
            const speed = (idx + 1) * 0.08;
            (aurora as HTMLElement).style.transform = `translate3d(0, ${scrollY * -speed}px, 0)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ────────────────────────────────────────────────────────────────────────
    // 6. SCROLL STAGE: Cards Reveal One-by-One (IntersectionObserver)
    // ────────────────────────────────────────────────────────────────────────
    const cardGrids = document.querySelectorAll(
      '.grid.grid-cols-1, .grid.grid-cols-2, .grid.grid-cols-3, .grid.grid-cols-4, [data-card-grid]'
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(
            ':scope > div, :scope > article, :scope > [class*="rounded"]'
          );
          cards.forEach((card, idx) => {
            card.classList.add('motion-card-item');
            setTimeout(() => {
              card.classList.add('is-revealed');
            }, idx * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardGrids.forEach((grid) => cardObserver.observe(grid));

    // ────────────────────────────────────────────────────────────────────────
    // 7. SCROLL STAGE: Testimonials Animate
    // ────────────────────────────────────────────────────────────────────────
    const testimonialSections = document.querySelectorAll(
      '#testimonials, [id*="testimonial"], section:has(blockquote)'
    );

    const testimonialObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const quotes = entry.target.querySelectorAll('[class*="rounded-3xl"], [class*="rounded-2xl"]');
          quotes.forEach((q, idx) => {
            (q as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            (q as HTMLElement).style.opacity = '0';
            (q as HTMLElement).style.transform = 'translateY(28px)';
            setTimeout(() => {
              (q as HTMLElement).style.opacity = '1';
              (q as HTMLElement).style.transform = 'translateY(0)';
            }, idx * 140);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    testimonialSections.forEach((sec) => testimonialObserver.observe(sec));

    // ────────────────────────────────────────────────────────────────────────
    // 8. SCROLL STAGE: Final CTA Reveal
    // ────────────────────────────────────────────────────────────────────────
    const ctaBanners = document.querySelectorAll('section.bg-\\[var\\(--color-primary\\)\\], section:has(a[href*="contact"])');
    const lastCTA = ctaBanners[ctaBanners.length - 1];

    if (lastCTA) {
      const ctaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            el.classList.add('animate-pulse-glow');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      ctaObserver.observe(lastCTA);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cardObserver.disconnect();
      testimonialObserver.disconnect();
    };
  }, []);

  return null;
};
