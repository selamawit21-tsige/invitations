"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cake, MapPin, Languages, Camera, Gift, PartyPopper, 
  X, Calendar as CalIcon, Upload, Sparkles, Heart, 
  Send, ChevronRight, Quote, ListChecks, Shirt, Info 
} from 'lucide-react';
import Link from 'next/link';

const content = {
  en: {
    title: "Cheers to 25!",
    saveDate: "Lock the Date",
    monthYear: "July 2026",
    venueTitle: "The Party Hub",
    aboutTitle: "A Message from the Host",
    guideTitle: "Party Guide",
    photoWall: "Photo Highlights",
    uploadBtn: "Upload Photo",
    viewMore: "View All Photos",
    wishesTitle: "Guest Book",
    namePlaceholder: "Your Name",
    msgPlaceholder: "Write your wishes here...",
    sendBtn: "Send Wish",
    registryBtn: "See My Wishlist",
    footer: "Thank you for coming!",
  },
  am: {
    title: "የ25ኛ ዓመት ልደት!",
    saveDate: "ቀኑን ይያዙ",
    monthYear: "ሐምሌ 2018 (ኢ.ካ)",
    venueTitle: "የፓርቲው ቦታ",
    aboutTitle: "ከባለልደቱ መልእክት",
    guideTitle: "የፓርቲው መመሪያ",
    photoWall: "የፎቶ ማህደር",
    uploadBtn: "ፎቶ ይላኩ",
    viewMore: "ሁሉንም ይመልከቱ",
    wishesTitle: "የእንግዶች ምኞት",
    namePlaceholder: "ስምዎ",
    msgPlaceholder: "መልካም ምኞትዎን እዚህ ይጻፉ...",
    sendBtn: "ምኞቴን ላክ",
    registryBtn: "የምኞት ዝርዝር",
    footer: "ስለመጡ እናመሰግናለን!",
  }
};

export default function BirthdayPage() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [activeTab, setActiveTab] = useState<'map' | 'calendar' | null>(null);
  
  // States for interactive features
  const [wishes, setWishes] = useState([{ name: "Abebe", text: "Happy Birthday! 🎂" }]);
  const [photos, setPhotos] = useState([
    "https://picsum.photos/400/500?random=1", 
    "https://picsum.photos/400/500?random=2",
    "https://picsum.photos/400/500?random=3",
    "https://picsum.photos/400/500?random=4",
    "https://picsum.photos/400/500?random=5"
  ]);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = content[lang];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setPhotos([url, ...photos]);
    }
  };

  const handleSendWish = () => {
    if (newName.trim() && newText.trim()) {
      setWishes([{ name: newName, text: newText }, ...wishes]);
      setNewName("");
      setNewText("");
    }
  };

  return (
    <main style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ height: '70vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.3 }}>
           <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
        </div>
        <h1 style={{ position: 'relative', zIndex: 10, fontSize: 'clamp(40px, 10vw, 80px)', fontWeight: '900' }}>{t.title}</h1>
      </section>

      {/* 2. ABOUT THE HOST */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Quote size={40} style={{ color: '#818CF8', marginBottom: '20px', opacity: 0.5 }} />
          <h2 style={{ fontSize: '28px', color: '#818CF8', marginBottom: '15px' }}>{t.aboutTitle}</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', fontStyle: 'italic', opacity: 0.9 }}>
            {lang === 'en' ? "I'm so excited to celebrate this milestone with you all! Let's make it a night to remember." : "ይህንን ታላቅ ቀን ከእናንተ ጋር ለማክበር በመቻሌ በጣም ደስተኛ ነኝ! የማይረሳ ምሽት እንዲሆንልን እመኛለሁ!"}
          </p>
        </div>
      </section>

      {/* 3. MINIMIZED GALLERY (Show 4) */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '24px' }}>{t.photoWall}</h2>
            <Link href="/birthday/gallery" style={{ color: '#F472B6', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              {t.viewMore} <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {photos.slice(0, 4).map((p, i) => (
              <div key={i} style={{ height: '180px', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={p} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Gallery" />
              </div>
            ))}
          </div>
          <button 
            onClick={() => fileInputRef.current?.click()}
            style={{ width: '100%', marginTop: '20px', background: 'rgba(129, 140, 248, 0.1)', border: '1px dashed #818CF8', color: '#818CF8', padding: '15px', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            <Upload size={18} style={{ marginRight: '8px' }} /> {t.uploadBtn}
          </button>
          <input type="file" ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} accept="image/*" />
        </div>
      </section>

      {/* 4. GUEST WISHES SECTION */}
      <section style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>{t.wishesTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
          {wishes.slice(0, 3).map((w, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', borderLeft: '3px solid #818CF8' }}>
              <p style={{ fontStyle: 'italic' }}>&quot;{w.text}&quot;</p>
              <p style={{ fontSize: '12px', color: '#818CF8', marginTop: '5px' }}>— {w.name}</p>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input 
            value={newName} onChange={(e) => setNewName(e.target.value)}
            placeholder={t.namePlaceholder} 
            style={{ padding: '15px', borderRadius: '12px', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} 
          />
          <textarea 
            value={newText} onChange={(e) => setNewText(e.target.value)}
            placeholder={t.msgPlaceholder} 
            style={{ padding: '15px', borderRadius: '12px', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: 'white', height: '100px' }} 
          />
          <button 
            onClick={handleSendWish}
            style={{ background: '#818CF8', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            <Send size={18} style={{ marginRight: '8px' }} /> {t.sendBtn}
          </button>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingBottom: '120px' }}>
        <Heart size={30} style={{ color: '#F472B6', marginBottom: '20px' }} />
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>{t.footer}</h2>
      </footer>

      {/* FLOATING ACTION ICONS */}
      <div style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 100 }}>
        <IconButton icon={<MapPin size={24}/>} onClick={() => setActiveTab('map')} />
        <IconButton icon={<CalIcon size={24}/>} onClick={() => setActiveTab('calendar')} />
        <IconButton icon={<Languages size={24}/>} onClick={() => setLang(lang === 'en' ? 'am' : 'en')} />
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {activeTab && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <button onClick={() => setActiveTab(null)} style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><X size={40}/></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ backgroundColor: '#1e293b', width: '100%', maxWidth: '450px', borderRadius: '35px', padding: '40px', color: 'white' }}>
              {activeTab === 'map' ? (
                <div style={{ height: '350px', textAlign: 'center' }}>
                  <h2 style={{ color: '#818CF8', marginBottom: '15px' }}>{t.venueTitle}</h2>
                  <iframe src="http://googleusercontent.com/maps.google.com/9" width="100%" height="100%" style={{ border: 0, borderRadius: '20px', filter: 'invert(90%)' }} />
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#F472B6', marginBottom: '15px' }}>{t.saveDate}</h2>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>{t.monthYear}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <div key={day} style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: day === 14 ? '#F472B6' : 'rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '14px' }}>
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function IconButton({ icon, onClick }: { icon: React.ReactNode, onClick: () => void }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClick} 
      style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#818CF8', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
    >
      {icon}
    </motion.button>
  );
}