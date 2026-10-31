'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { galleryCategories, galleryItems } from '@/config/gallery';
import { GalleryHero } from '@/components/gallery/gallery-hero';
import { GalleryCategoryFilter } from '@/components/gallery/gallery-category-filter';
import { EditorialGallery } from '@/components/gallery/editorial-gallery';
import { GalleryEditorialInterlude } from '@/components/gallery/gallery-editorial-interlude';
import { GalleryEnquiry } from '@/components/gallery/gallery-enquiry';

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category');

  // Verify initialCategoryParam is a valid category ID, else fallback to 'all'
  const validCategory = useMemo(() => {
    if (!initialCategoryParam) return 'all';
    const found = galleryCategories.find(
      (c) => c.slug === initialCategoryParam || c.id === initialCategoryParam
    );
    return found ? found.id : 'all';
  }, [initialCategoryParam]);

  const [activeCategory, setActiveCategory] = useState<string>(validCategory);

  // Sync state if query param changes externally
  useEffect(() => {
    setActiveCategory(validCategory);
  }, [validCategory]);

  // Handle category change and sync URL query parameter without full reload
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (categoryId === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', categoryId);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Derive counts dynamically from dataset
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: galleryItems.length,
    };

    galleryCategories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = galleryItems.filter((item) => item.categoryId === cat.id).length;
      }
    });

    return counts;
  }, []);

  return (
    <>
      {/* SECTION 01: EDITORIAL GALLERY HERO */}
      <GalleryHero />

      {/* PRIMARY GALLERY REGION */}
      <div className="w-full bg-ivory pt-10 sm:pt-14 pb-4">
        {/* SECTION 02: CATEGORY EXPLORER */}
        <GalleryCategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          categoryCounts={categoryCounts}
        />

        {/* SECTION 03 & 04: EDITORIAL GALLERY & FULLSCREEN LIGHTBOX */}
        <EditorialGallery activeCategory={activeCategory} />
      </div>

      {/* SECTION 05: BEHIND THE DETAILS INTERLUDE */}
      <GalleryEditorialInterlude />

      {/* SECTION 06: FINAL ENQUIRY CTA */}
      <GalleryEnquiry />
    </>
  );
}

export function GalleryClientView() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[50vh] flex items-center justify-center bg-ivory text-charcoal">
          <div className="font-mono text-xs uppercase tracking-widest text-gold-deep animate-pulse">
            Loading Gallery...
          </div>
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
