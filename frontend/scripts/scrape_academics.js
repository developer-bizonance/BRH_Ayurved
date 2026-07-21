const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.brharneayurved.in';

const departments = [
  { file: 'rachna_sharir.php', slug: 'rachna-sharir' },
  { file: 'samhita_sidhhanta.php', slug: 'samhita-sidhhanta' },
  { file: 'dravyaguna_vidnyana.php', slug: 'dravyaguna-vidnyana' },
  { file: 'rasashastra_bhaishajya_kalpana.php', slug: 'rasashastra-bhaishajya-kalpana' },
  { file: 'rog_nidan.php', slug: 'rog-nidan' },
  { file: 'swasthavritta_yoga.php', slug: 'swasthavritta-yoga' },
  { file: 'agad_tantra_avum_vidhi_vaidyaka.php', slug: 'agad-tantra-avum-vidhi-vaidyaka' },
  { file: 'prasuti_stri_roga.php', slug: 'prasuti-stri-roga' },
  { file: 'kaumarbhritya.php', slug: 'kaumarbhritya' },
  { file: 'kayachikitsa.php', slug: 'kayachikitsa' },
  { file: 'shalakya_tantra.php', slug: 'shalakya-tantra' },
  { file: 'shalya_tantra.php', slug: 'shalya-tantra' },
  { file: 'panchakarma.php', slug: 'panchakarma' }
];

const TEMPLATE = (title, docsJson, imagesJson) => `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/PageBanner';

export const metadata = { title: "${title} Department" };

const documents = ${docsJson};

const galleryImages = ${imagesJson};

export default function DepartmentPage() {
  return (
    <div>
      <PageBanner 
        title="${title}" 
        breadcrumbs={[
          { label: "Academics" },
          { label: "${title}" }
        ]} 
      />

      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-white">
        
        {/* Department Info Section */}
        {documents.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#1a6b3c] text-white rounded-xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#1a3c2e] font-[var(--font-playfair)]">
                Department Documents
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {documents.map((doc, idx) => (
                <Link 
                  href={doc.url} 
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(26,107,60,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="h-32 bg-gradient-to-br from-[#1a6b3c] to-[#047857] relative flex items-center justify-center overflow-hidden shrink-0">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                    <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10 bg-white/20 backdrop-blur-sm p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M9 15v-4"></path>
                        <path d="M12 15v-4"></path>
                        <path d="M12 11h2"></path>
                        <path d="M15 11h2v4"></path>
                        <path d="M15 13h2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-6 text-center flex flex-col flex-grow">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 self-center">
                      PDF Document
                    </div>
                    <h3 className="font-bold text-gray-800 text-base group-hover:text-[#1a6b3c] transition-colors leading-relaxed mb-2 flex-grow">
                      {doc.name}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-[#e8821a] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <span>View File</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#e8821a] text-white rounded-xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#1a3c2e] font-[var(--font-playfair)]">
                Photo Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((src, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={\`${title} Gallery Image \${idx + 1}\`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;

async function scrape() {
  for (const dept of departments) {
    const url = `${BASE_URL}/${dept.file}`;
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed to fetch ${url}`);
        continue;
      }
      const html = await res.text();
      const $ = cheerio.load(html);

      // Extract title
      let title = $('.title-head').first().text().trim() || dept.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (title.endsWith(' Photo Gallery')) {
        title = title.replace(' Photo Gallery', '');
      }

      // Extract PDFs
      const docs = [];
      $('.card').each((_, el) => {
        const parentLink = $(el).closest('a');
        if (parentLink.length > 0) {
          let href = parentLink.attr('href');
          if (href && href.endsWith('.pdf')) {
            if (!href.startsWith('http')) {
              href = `${BASE_URL}/${href}`;
            }
            const name = $(el).find('h6').text().trim();
            docs.push({ name, url: href });
          }
        }
      });

      // Extract Gallery Images
      const images = [];
      $('a[data-lightbox="image-gallery"]').each((_, el) => {
        let href = $(el).attr('href');
        if (href) {
          if (!href.startsWith('http')) {
            href = `${BASE_URL}/${href}`;
          }
          images.push(href);
        }
      });

      console.log(`[${title}] Found ${docs.length} docs, ${images.length} images.`);

      const outDir = path.join(__dirname, '..', 'src', 'app', 'academics', dept.slug);
      fs.mkdirSync(outDir, { recursive: true });

      const fileContent = TEMPLATE(title, JSON.stringify(docs, null, 2), JSON.stringify(images, null, 2));
      fs.writeFileSync(path.join(outDir, 'page.tsx'), fileContent);
      console.log(`Saved ${dept.slug}/page.tsx`);
    } catch (e) {
      console.error(`Error processing ${dept.file}: `, e);
    }
  }
}

scrape();
