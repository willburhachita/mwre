import { useState } from 'react';
import { HeroSlide } from '../types';
import { mockHeroSlides } from '../data/mockData';

export const useHeroSlides = () => {
  const [slides, setSlides] = useState<HeroSlide[]>(mockHeroSlides);

  const updateSlide = (id: number, updates: Partial<HeroSlide>) => {
    const updated = slides.map(slide => 
      slide.id === id ? { ...slide, ...updates } : slide
    );
    setSlides(updated);
  };

  const addSlide = (slide: Omit<HeroSlide, 'id'>) => {
    const newSlide = { ...slide, id: Date.now() };
    const updated = [...slides, newSlide];
    setSlides(updated);
  };

  const deleteSlide = (id: number) => {
    const updated = slides.filter(slide => slide.id !== id);
    setSlides(updated);
  };

  return {
    slides,
    updateSlide,
    addSlide,
    deleteSlide,
    activeSlides: slides.filter(s => s.active)
  };
};