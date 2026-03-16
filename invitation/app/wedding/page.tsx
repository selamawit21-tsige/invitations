"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, MapPin, Languages, Camera, Gift, 
  ListOrdered, Shirt, X, Calendar as CalIcon, Send 
} from 'lucide-react';

const content = {
  en: {
    names: "Alex & Jordan",
    saveDate: "Save the Date",
    monthYear: "June 2026",
    venueTitle: "The Venue",
    address: "123 Orchid Way, Addis Ababa, Ethiopia",
    dress: "Dress Code: White & Gold",
    program: "The Program",
    registry: "Gift Registry",
    registryBtn: "Select a Gift",
    wishesTitle: "Guest Book",
    wishesSubtitle: "Leave a message for the couple",
    namePlaceholder: "Your Name",
    msgPlaceholder: "Write your wishes here...",
    sendBtn: "Send Wishes",
    thankYou: "Thank You",
  },
  am: {
    names: "አሌክስ እና ጆርዳን",
    saveDate: "ቀኑን ይያዙ",
    monthYear: "ሰኔ 14, 2018 (ኢ.ካ)",
    venueTitle: "የሰርግ ቦታ",
    address: "አዲስ አበባ፣ ኢትዮጵያ",
    dress: "የአለባበስ ሁኔታ: ነጭ እና ወርቃማ",
    program: "የመርሃ-ግብር ዝርዝር",
    registry: "የስጦታ ምርጫ",
    registryBtn: "ስጦታ ይምረጡ",
    wishesTitle: "የእንግዶች ምኞት",
    wishesSubtitle: "ለጥንዶቹ የአክብሮት መግለጫዎን እዚህ ያስፍሩ",
    namePlaceholder: "ስምዎ",
    msgPlaceholder: "መልካም ምኞትዎን እዚህ ይጻፉ...",
    sendBtn: "ምኞቴን ላክ",
    thankYou: "እናመሰግናለን",
  }
};

export default function WeddingPage() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [activeTab, setActiveTab] = useState<'map' | 'calendar' | null>(null);
  const [guestWishes, setGuestWishes] = useState([
    { name: "Family Member", text: "Wishing you a lifetime of love and happiness!" }
  ]);
  
  const t = content[lang];

  return (
    <main style={{ backgroundColor: '#FAF9F6', color: '#2D2926', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            alt="Wedding Background" 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ letterSpacing: '8px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '20px' }}>
            {t.saveDate}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: 'clamp(50px, 12vw, 110px)', fontStyle: 'italic', margin: 0 }}>
            {t.names}
          </motion.h1>
        </div>

        <div style={{ position: 'absolute', bottom: '60px', display: 'flex', gap: '25px', zIndex: 20 }}>
          <IconButton icon={<MapPin size={24}/>} onClick={() => setActiveTab('map')} />
          <IconButton icon={<CalIcon size={24}/>} onClick={() => setActiveTab('calendar')} />
          <IconButton icon={<Languages size={24}/>} onClick={() => setLang(lang === 'en' ? 'am' : 'en')} />
        </div>
      </section>

      {/* 2. WEDDING PHOTO GALLERY (Film-Strip) */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Camera size={24} style={{ color: '#8B735B', marginBottom: '10px' }} />
            <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '12px' }}>{lang === 'en' ? 'The Wedding Day' : 'የሰርጉ ቀን ትዝታዎች'}</p>
        </div>
        <motion.div 
          animate={{ x: [0, -1200] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
          style={{ display: 'flex', gap: '20px', paddingLeft: '20px' }}
        >
          {[
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
            "https://images.unsplash.com/photo-1544078751-58fee2d8a03b",
            "https://images.unsplash.com/photo-1522673607200-1648832cee98",
            "https://images.unsplash.com/photo-1465495910483-0d674575603c",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
          ].map((url, i) => (
            <div key={i} style={{ minWidth: '280px', height: '360px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img src={`${url}?q=80&w=500`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Wedding moment" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. PROGRAM & DRESS CODE */}
      <section style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: '#8B735B', marginBottom: '60px', fontStyle: 'italic' }}>{t.program}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px' }}>
          <div style={{ width: '280px' }}>
            <Shirt size={32} style={{ color: '#8B735B', marginBottom: '20px' }} />
            <p style={{ fontSize: '20px', fontWeight: '500', color: '#1e293b' }}>{t.dress}</p>
          </div>
          <div style={{ width: '280px' }}>
            <Gift size={32} style={{ color: '#8B735B', marginBottom: '20px' }} />
            <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px', color: '#1e293b' }}>{t.registry}</p>
            <button 
                onClick={() => window.open('https://amazon.com', '_blank')} 
                style={{ background: '#8B735B', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              {t.registryBtn}
            </button>
          </div>
        </div>
      </section>

      {/* 4. GUEST BOOK (WISHES SECTION) */}
      <section style={{ padding: '100px 20px', backgroundColor: '#fdfcfb' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Heart size={32} style={{ color: '#8B735B', marginBottom: '20px' }} />
            <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>{t.wishesTitle}</h2>
            <p style={{ opacity: 0.6 }}>{t.wishesSubtitle}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
            {guestWishes.map((wish, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}
              >
                <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '10px' }}>&quot;{wish.text}&quot;</p>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#8B735B' }}>— {wish.name}</p>
              </motion.div>
            ))}
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              placeholder={t.namePlaceholder}
              style={{ padding: '18px', borderRadius: '15px', border: '1px solid #E5E1DA', outline: 'none' }} 
            />
            <textarea 
              placeholder={t.msgPlaceholder}
              style={{ padding: '18px', borderRadius: '15px', border: '1px solid #E5E1DA', outline: 'none', height: '120px' }} 
            />
            <button style={{ backgroundColor: '#8B735B', color: 'white', border: 'none', padding: '18px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.sendBtn}
            </button>
          </form>
        </div>
      </section>

      {/* MODALS */}
      <AnimatePresence>
        {activeTab && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <button onClick={() => setActiveTab(null)} style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><X size={40}/></button>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} style={{ backgroundColor: 'white', width: '100%', maxWidth: '550px', borderRadius: '40px', overflow: 'hidden', padding: '50px' }}>
              {activeTab === 'map' ? (
                <div style={{ height: '400px', textAlign: 'center' }}>
                  <h2 style={{ marginBottom: '10px', color: '#8B735B' }}>{t.venueTitle}</h2>
                  <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '20px' }}>{t.address}</p>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.1150729738!2d38.7063056!3d8.9631744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000" 
                    width="100%" height="100%" style={{ border: 0, borderRadius: '25px' }} loading="lazy" 
                  />
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ marginBottom: '10px', color: '#8B735B' }}>{t.saveDate}</h2>
                  <p style={{ fontSize: '22px', marginBottom: '30px', fontWeight: 'bold' }}>{t.monthYear}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '15px' }}>
                    {["S","M","T","W","T","F","S"].map(d => <div key={d} style={{ fontSize: '12px', opacity: 0.3, fontWeight: 'bold' }}>{d}</div>)}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                      <div key={day} style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        {day === 14 ? (
                            <Heart size={40} fill="#8B735B" color="#8B735B" style={{ opacity: 0.15, position: 'absolute' }} />
                        ) : null}
                        <span style={{ fontWeight: day === 14 ? '900' : 'normal', color: day === 14 ? '#8B735B' : 'inherit', fontSize: day === 14 ? '20px' : '16px', zIndex: 1 }}>
                            {day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ padding: '80px 20px', textAlign: 'center' }}>
          <Heart size={30} style={{ color: '#8B735B', marginBottom: '20px' }} />
          <h2 style={{ fontStyle: 'italic', fontSize: '32px' }}>{t.thankYou}</h2>
      </footer>
    </main>
  );
}

function IconButton({ icon, onClick }: { icon: React.ReactNode, onClick: () => void }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }} 
      whileTap={{ scale: 0.9 }} 
      onClick={onClick} 
      style={{ 
        width: '65px', height: '65px', borderRadius: '50%', 
        border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.15)', 
        backdropFilter: 'blur(12px)', color: 'white', cursor: 'pointer', 
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
    >
      {icon}
    </motion.button>
  );
}