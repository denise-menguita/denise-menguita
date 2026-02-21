import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '@/data/caseStudies';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Footer } from './Footer';
import { useEffect, useRef, useState } from 'react';

export function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <h2 className="font-display text-4xl text-maroon mb-4">Case Study Not Found</h2>
        <Link
          to="/#ui-ux"
          className="text-pink-dark font-medium hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen text-text font-body selection:bg-pink selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md py-4 border-b border-maroon/5">
        <div className="container mx-auto px-6">
          <Link
            to="/#ui-ux"
            className="flex items-center gap-2 text-maroon hover:text-pink-dark transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-green-light text-green-dark rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              {study.platform}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-maroon/70 max-w-2xl mx-auto">{study.description}</p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto px-6 mb-20">
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Details Grid */}
        <section className="container mx-auto px-6 max-w-5xl mb-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-maroon mb-4">Overview</h2>
                <p className="text-lg leading-relaxed text-maroon/80">
                  {study.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-maroon mb-4">The Problem</h2>
                <div className="bg-red-50 border-l-4 border-red-300 p-6 rounded-r-xl">
                  <p className="text-lg leading-relaxed text-maroon/80">{study.problem}</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-maroon mb-4">The Solution</h2>
                <div className="bg-green-light/50 border-l-4 border-green p-6 rounded-r-xl">
                  <p className="text-lg leading-relaxed text-maroon/80">{study.solution}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-dark">
                <h3 className="font-display text-xl font-bold text-maroon mb-4">Role</h3>
                <p className="text-maroon/80">{study.role}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-dark">
                <h3 className="font-display text-xl font-bold text-maroon mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {study.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-maroon/80">
                      <CheckCircle2 className="w-5 h-5 text-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width App Screens */}
        {study.platform === 'Mobile App' && study.screens && study.screens.length > 0 && (
          <section className="container mx-auto px-0 md:px-6 mb-20">
            <div className="max-w-6xl mx-auto px-6">
              <h3 className="font-display text-3xl font-bold text-maroon mb-6">App Screens</h3>
            </div>
            <AppScreensGallery screens={study.screens} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

type AppScreensGalleryProps = {
  screens: string[];
};

function AppScreensGallery({ screens }: AppScreensGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const handleScroll = () => updateScrollState();
    el.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollByViewport = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const { clientWidth, scrollLeft } = el;
    const delta = direction === 'left' ? -clientWidth : clientWidth;
    el.scrollTo({ left: scrollLeft + delta, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scrollByViewport('left')}
          className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-maroon hover:bg-white/50 transition border border-white/40 shadow-lg"
          aria-label="Previous screens"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scrollByViewport('right')}
          className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-maroon hover:bg-white/50 transition border border-white/40 shadow-lg"
          aria-label="Next screens"
        >
          <ChevronRight size={28} />
        </button>
      )}

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-6 px-6 md:px-8 py-4 min-w-full">
          {screens.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full md:w-[360px] flex justify-center"
            >
              <div className="w-full max-w-[420px] aspect-[9/19.5] rounded-[3.5rem] border-[12px] border-maroon bg-maroon shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-7 bg-maroon rounded-b-3xl z-10" />
                <img
                  src={src}
                  alt={`App screen ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-2 text-center md:hidden">
        <p className="text-xs text-maroon/50 italic">Swipe sideways to see more screens</p>
      </div>
    </div>
  );
}
