"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, Send, Phone, MapPin, 
  Sparkles, Heart, Scissors, Crown, ExternalLink, CalendarDays, Clock
} from 'lucide-react';

// --- COUNTDOWN LOGIC ---
const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const content = {
  en: {
    brand: "SELAM GIRLS",
    title: "Beauty Corner",
    subtitle: "THE GRAND OPENING",
    targetDate: "2026-05-24T14:00:00",
    dateDisplay: "Sunday, May 24, 2026",
    timeDisplay: "2:00 PM",
    desc: "A new sanctuary for elegance and professional artistry is opening its doors. Join us for an afternoon of beauty and exclusive reveals.",
    rsvp: "Reserve Your Spot",
    procedureTitle: "EVENT FLOW",
    location: "Mafi Mall, 2nd Floor, Bole",
    socialTitle: "Connect With Our Artists",
    steps: [
      { time: "2:00 PM", task: "Initialization", detail: "Arrival, Welcome Cocktails & Ambient Sounds." },
      { time: "3:30 PM", task: "Live_Showcase", detail: "Signature Makeup & Hair Styling Demo." },
      { time: "4:30 PM", task: "Ribbon_Cut", detail: "Official Opening Ceremony & Gifts." },
      { time: "5:30 PM", task: "Networking", detail: "Studio Tours, Consultations & Cocktails." }
    ]
  },
  am: {
    brand: "ሰላም የሴቶች",
    title: "የውበት ማዕከል",
    subtitle: "ታላቅ ምርቃት",
    targetDate: "2026-05-24T14:00:00",
    dateDisplay: "ግንቦት 16 ቀን 2018",
    timeDisplay: "ከቀኑ 8:00 ሰዓት",
    desc: "ለራስሽ ክብርና ውበት የሚሆን አዲስ ማዕከል በሮችን ሊከፍት ነው። በውበት፣ በመስተንግዶ እና በልዩ ስጦታዎች የታጀበ ምሽት ከእኛ ጋር ይሁኑ።",
    rsvp: "ቦታ ይያዙ",
    procedureTitle: "የምረቃው መርሐ-ግብር",
    location: "ማፊ ሞል፣ 2ኛ ፎቅ፣ ቦሌ",
    socialTitle: "በማኅበራዊ ገጾቻችን ይከተሉን",
    steps: [
      { time: "8:00 ሰዓት", task: "የእንግዳ መቀበያ", detail: "የመጀመሪያ ኮክቴል እና ትውውቅ።" },
      { time: "9:30 ሰዓት", task: "የውበት_ማሳያ", detail: "ልዩ የመዋቢያ እና የፀጉር ስራ ማሳያ።" },
      { time: "10:30 ሰዓት", task: "የሪቫን_መቁረጥ", detail: "ይፋዊ ምረቃ እና ልዩ ስጦታዎች።" },
      { time: "11:30 ሰዓት", task: "የመዝጊያ_ፕሮግራም", detail: "የስቱዲዮ ጉብኝት፣ ምክክር እና ኮክቴል።" }
    ]
  }
};

export default function BeautyOpening() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const t = content[lang];
  const timeLeft = useCountdown(t.targetDate);

  return (
    <main style={{ backgroundColor: '#FFF8F8', color: '#3F2C2C', minHeight: '100vh', fontFamily: 'serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BACKGROUND IMAGE EFFECT */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.06, pointerEvents: 'none', backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* 1. HERO SECTION */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span style={{ letterSpacing: '8px', color: '#D8A7B1', fontWeight: 'bold', fontSize: '13px' }}>{t.subtitle}</span>
          <h1 style={{ fontSize: 'clamp(50px, 12vw, 100px)', color: '#634A4A', margin: '20px 0', lineHeight: 0.9 }}>{t.title}</h1>
          
          {/* THE LIVE COUNTDOWN */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '40px 0' }}>
             <TimeBox value={timeLeft.days} label={lang === 'en' ? "Days" : "ቀናት"} />
             <TimeBox value={timeLeft.hours} label={lang === 'en' ? "Hrs" : "ሰዓት"} />
             <TimeBox value={timeLeft.minutes} label={lang === 'en' ? "Min" : "ደቂቃ"} />
             <TimeBox value={timeLeft.seconds} label={lang === 'en' ? "Sec" : "ሰከንድ"} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px', color: '#634A4A', fontSize: '17px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CalendarDays size={18} color="#D8A7B1" /> {t.dateDisplay}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={18} color="#D8A7B1" /> {t.timeDisplay}</div>
          </div>

          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '19px', color: '#8E7373', fontFamily: 'sans-serif', lineHeight: 1.6 }}>{t.desc}</p>
          
          <motion.button whileHover={{ scale: 1.05, backgroundColor: '#634A4A', color: '#fff' }}
            style={{ marginTop: '40px', padding: '18px 45px', background: '#D8A7B1', color: 'white', border: 'none', borderRadius: '40px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px', fontSize: '14px' }}>
            {t.rsvp}
          </motion.button>
        </motion.div>
      </section>

      {/* 2. BEAUTY CARDS */}
      <section style={{ maxWidth: '1400px', margin: '0 auto 100px', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', zIndex: 1, position: 'relative' }}>
        <BeautyCard icon={<Sparkles color="#D8A7B1"/>} title="SKIN_GLOW" desc="Signature facial treatments for instant rejuvenation." />
        <BeautyCard icon={<Scissors color="#D8A7B1"/>} title="HAIR_ART" desc="Precision cuts and expert styling by master colorists." />
        <BeautyCard icon={<Crown color="#D8A7B1"/>} title="BRIDAL" desc="Tailored beauty packages for your most memorable moments." />
        <BeautyCard icon={<Heart color="#D8A7B1"/>} title="GIFTS" desc="The first 50 guests receive a complimentary beauty bag." />
      </section>

     {/* 3. LOCATION INFO */}
<section style={{ maxWidth: '800px', margin: '0 auto 100px', padding: '0 20px', textAlign: 'center', zIndex: 1 }}>
  <div style={{ padding: '50px', background: 'white', borderRadius: '25px', boxShadow: '0 15px 40px rgba(216, 167, 177, 0.12)' }}>
    <MapPin color="#D8A7B1" size={35} style={{ marginBottom: '25px' }} />
    <h3 style={{ fontSize: '30px', color: '#634A4A', marginBottom: '18px', fontWeight: '400' }}>{t.location}</h3>
    <p style={{ opacity: 0.7, marginBottom: '35px', lineHeight: 1.6, fontFamily: 'sans-serif' }}>
      We are located on the second floor, directly adjacent to the main elevator bank. 
      Validated parking available.
    </p>
    
    {/* Updated Button with your specific link */}
    <motion.a 
      href="https://share.google/7skUFIlTIwaPkEbrb"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      style={{ 
        background: 'none', 
        border: '1px solid #D8A7B1', 
        color: '#D8A7B1', 
        padding: '14px 30px', 
        borderRadius: '35px', 
        cursor: 'pointer', 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '10px', 
        fontSize: '13px', 
        fontWeight: 'bold',
        textDecoration: 'none'
      }}
    >
      OPEN GOOGLE MAPS <ExternalLink size={15} />
    </motion.a>
  </div>
</section>

      {/* 4. ANIMATED EVENT FLOW */}
      <section style={{ maxWidth: '900px', margin: '0 auto 150px', padding: '0 20px', zIndex: 1 }}>
        <h2 style={{ textAlign: 'center', color: '#D8A7B1', letterSpacing: '6px', marginBottom: '60px', fontSize: '14px', fontWeight: 'bold' }}>{t.procedureTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {t.steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ padding: '30px', background: 'white', borderBottom: i === t.steps.length - 1 ? 'none' : '1px solid #F3E4E4', display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
              <span style={{ color: '#D8A7B1', fontWeight: 'bold', fontSize: '18px', fontFamily: 'monospace' }}>[{step.time}]</span>
              <div>
                <p style={{ fontSize: '20px', color: '#3F2C2C', fontWeight: '600' }}>{step.task}</p>
                <p style={{ opacity: 0.6, fontSize: '14px', fontFamily: 'sans-serif' }}>{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ backgroundColor: '#FDF2F2', padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #F3E4E4' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '50px' }}>
          <SocialIcon icon={<Instagram size={22} />} label="Instagram" link="https://instagram.com" />
          <SocialIcon icon={<Send size={22} />} label="Telegram" link="https://t.me/YokiDesign21"/>
          <SocialIcon icon={<Phone size={22} />} label="Call Us" link="tel:+2519000000" />
        </div>
        <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} style={{ background: 'none', border: 'none', color: '#D8A7B1', cursor: 'pointer', textDecoration: 'underline', marginBottom: '20px' }}>
          {lang === 'en' ? "AMHARIC" : "ENGLISH"}
        </button>
        <p style={{ opacity: 0.4, fontSize: '11px' }}>© 2026 SELAM GIRLS BEAUTY CORNER//{t.dateDisplay}</p>
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS ---
function TimeBox({ value, label }: { value: number, label: string }) {
  return (
    <div style={{ background: 'white', padding: '15px', borderRadius: '15px', minWidth: '80px', boxShadow: '0 5px 15px rgba(216, 167, 177, 0.1)' }}>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#634A4A' }}>{value.toString().padStart(2, '0')}</div>
      <div style={{ fontSize: '10px', color: '#D8A7B1', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
    </div>
  );
}

function BeautyCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(216, 167, 177, 0.2)' }} style={{ background: 'white', padding: '50px 30px', borderRadius: '25px', textAlign: 'center', transition: 'all 0.3s' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <h3 style={{ fontSize: '12px', letterSpacing: '2px', color: '#D8A7B1', marginBottom: '15px', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#8E7373', lineHeight: 1.6, fontFamily: 'sans-serif' }}>{desc}</p>
    </motion.div>
  );
}

function SocialIcon({ icon, label, link }: { icon: React.ReactNode, label: string, link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#634A4A', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <motion.div whileHover={{ scale: 1.1, backgroundColor: '#F3E4E4' }} style={{ background: 'white', padding: '18px', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>{icon}</motion.div>
      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{label}</span>
    </a>
  );
}