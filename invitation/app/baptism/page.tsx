"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, MapPin, Languages, X, Calendar as CalIcon, 
  Send, Church, Baby, Clock, Scaling, Hospital, Quote, Sparkles, CalendarDays 
} from 'lucide-react';

const content = {
  en: {
    title: "Elias's Blessing",
    subtitle: "A journey of faith begins",
    birthTitle: "Birth Details",
    hospital: "St. Gabriel General Hospital",
    weight: "3.5 kg",
    time: "10:45 AM",
    dateOfBirth: "July 12, 2026", // Added Date of Birth
    invitationTitle: "A Message from Parents",
    invitationText: "We have been blessed with the gift of a beautiful child, and we would be honored to have you witness his first step into faith. Your love and prayers mean the world to our growing family.",
    venueTitle: "Holy Trinity Church",
    venueDesc: "Join us at the historic Holy Trinity Cathedral for the ceremony.",
    address: "Addis Ababa, Ethiopia",
    programTitle: "The Ceremony",
    programList: ["Morning Liturgy: 9 AM", "Baptism: 10:30 AM", "Luncheon: 1 PM"],
    wishesTitle: "Blessings & Wishes",
    sendBtn: "Send Blessing",
    thankYou: "Thank you for being part of his journey!",
  },
  am: {
    title: "የኤልያስ የክርስትና በዓል",
    subtitle: "የጸጋ ጉዞ ጅምር",
    birthTitle: "የልደት ዝርዝር",
    hospital: "ቅዱስ ገብርኤል ሆስፒታል",
    weight: "3.5 ኪሎ",
    time: "4:45 ሰዓት (ቀን)",
    dateOfBirth: "ሐምሌ 05/2018 (ኢ.ካ)", // Added Date of Birth
    invitationTitle: "ከወላጆች የተላከ መልእክት",
    invitationText: "በልጃችን ስጦታ ተባርከናል፤ እናም ልጃችን ኤልያስን ወደ ክርስትና ስናስገባ የእርስዎ መገኘት ለእኛ ትልቅ ክብር ነው። በዚህ ልዩ ቀን ከእኛ ጋር በመሆን ደስታችንን እንዲካፈሉ በአክብሮት እንጋብዝዎታለን።",
    venueTitle: "ቅድስት ሥላሴ ቤተክርስቲያን",
    venueDesc: "በታሪካዊው ቅድስት ሥላሴ ካቴድራል ለሥነ-ሥርዓቱ ይጠብቁን።",
    address: "አዲስ አበባ፣ ኢትዮጵያ",
    programTitle: "የሥነ-ሥርዓት ቅደም ተከተል",
    programList: ["የማለዳ ጸሎት: 3:00 ሰዓት", "የክርስትና ሥነ-ሥርዓት: 4:30 ሰዓት", "ምሳ: 6:00 ሰዓት"],
    wishesTitle: "የምርቃት ቃላት",
    sendBtn: "ምርቃት ላክ",
    thankYou: "ስለ መጡ እናመሰግናለን!",
  }
};

export default function BaptismPage() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [activeTab, setActiveTab] = useState<'map' | 'calendar' | null>(null);
  const [wishes, setWishes] = useState([{ name: "Guest", text: "God bless little Elias! 🙏" }]);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  
  const wishesRef = useRef<HTMLDivElement>(null);
  const t = content[lang];

  const handleSendWish = () => {
    if (newName && newText) {
      setWishes([{ name: newName, text: newText }, ...wishes]);
      setNewName(""); setNewText("");
    }
  };

  return (
    <main style={{ backgroundColor: '#F0F9FF', color: '#1E3A8A', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ height: '55vh', background: 'linear-gradient(180deg, #CFE9FF 0%, #F0F9FF 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ width: '130px', height: '130px', borderRadius: '50%', border: '5px solid white', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img src="https://images.unsplash.com/photo-1508009219918-7d528f269841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJhcHRpc218ZW58MHx8MHx8fDA%3D" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Baby Elias" />
        </motion.div>
        <h1 style={{ fontSize: 'clamp(35px, 8vw, 55px)', fontWeight: '800', margin: 0 }}>{t.title}</h1>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginTop: '10px', opacity: 0.7 }}>{t.subtitle}</p>
      </section>

      {/* 2. BABY DETAILS (Includes Date of Birth) */}
      <section style={{ marginTop: '-60px', padding: '0 20px' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto', background: 'white', borderRadius: '35px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          <div style={{ flex: '1', minWidth: '280px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
            <Stat icon={<Baby size={22}/>} label="Name" value="Elias Samuel" />
            <Stat icon={<CalendarDays size={22}/>} label="Date of Birth" value={t.dateOfBirth} />
            <Stat icon={<Hospital size={22}/>} label="Hospital" value={t.hospital} />
            <Stat icon={<Scaling size={22}/>} label="Weight" value={t.weight} />
            <Stat icon={<Clock size={22}/>} label="Time" value={t.time} />
            <Stat icon={<Church size={22}/>} label="Ceremony" value={t.venueTitle} />
          </div>

          <div style={{ flex: '0.8', minWidth: '280px', position: 'relative' }}>
             <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#3B82F6', color: 'white', padding: '10px', borderRadius: '50%', zIndex: 2 }}>
               <Sparkles size={18} />
             </div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiKu4xZ4VxUuKvqFkaen0o8E4dWGoDzySbT-LSB6jlA&s" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '30px' }} alt="Newborn" />
          </div>
        </div>
      </section>

      {/* 3. CHURCH VENUE */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '35px', color: '#1E3A8A', fontWeight: '800' }}>{t.venueTitle}</h2>
        <div style={{ maxWidth: '850px', margin: '0 auto', borderRadius: '40px', overflow: 'hidden', position: 'relative', height: '380px', boxShadow: '0 15px 45px rgba(0,0,0,0.12)' }}>
          <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoXscPgETjMdOjDguuSagHrPJoR1mV2hHKWt1N9v5KudfXtNa2vMA25O9I3M9kffxI-3fEwnBZVTFWabg5P8HV_Qa7LCzNDTEjI8aY7Owr-z4Xpv_Gk0sn6tHUpaz-LV7DwEHY=s1360-w1360-h1020-rw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Ceremony Church" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30, 58, 138, 0.85), transparent)', display: 'flex', alignItems: 'flex-end', padding: '45px' }}>
            <div style={{ color: 'white', textAlign: 'left' }}>
              <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{t.venueDesc}</p>
              <p style={{ opacity: 0.9, fontSize: '16px' }}><MapPin size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> {t.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVITATION MESSAGE */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', background: 'white', padding: '60px 40px', borderRadius: '40px', border: '1px solid #E0F2FE' }}>
          <Quote size={40} style={{ color: '#3B82F6', marginBottom: '25px', opacity: 0.2 }} />
          <h3 style={{ color: '#1E3A8A', marginBottom: '20px' }}>{t.invitationTitle}</h3>
          <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#475569' }}>{t.invitationText}</p>
        </div>
      </section>

      {/* 5. PROGRAM TIMELINE */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '45px', fontWeight: '800' }}>{t.programTitle}</h2>
        {t.programList.map((item, i) => (
          <motion.div whileHover={{ x: 10 }} key={i} style={{ background: 'white', padding: '24px', borderRadius: '25px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #E0F2FE', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '12px', height: '12px', background: '#3B82F6', borderRadius: '50%' }} />
            <span style={{ fontWeight: '600', fontSize: '18px' }}>{item}</span>
          </motion.div>
        ))}
      </section>

      {/* 6. GUEST BLESSINGS (RSVP/Wishes) */}
      <section ref={wishesRef} style={{ padding: '80px 20px', maxWidth: '650px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: '800' }}>{t.wishesTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Your Name" style={inputS} />
          <textarea value={newText} onChange={e => setNewText(e.target.value)} placeholder="Type a blessing for Elias..." style={{ ...inputS, height: '120px' }} />
          <button onClick={handleSendWish} style={{ background: '#3B82F6', color: 'white', border: 'none', padding: '20px', borderRadius: '20px', fontWeight: 'bold', fontSize: '17px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
             <Send size={20} /> {t.sendBtn}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '100px 20px' }}>
        <Heart size={35} fill="#3B82F6" color="#3B82F6" style={{ marginBottom: '25px', opacity: 0.8 }} />
        <h2 style={{ fontSize: '28px', fontWeight: '800' }}>{t.thankYou}</h2>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 100 }}>
        <NavBtn icon={<MapPin size={26}/>} onClick={() => setActiveTab('map')} />
        <NavBtn icon={<CalIcon size={26}/>} onClick={() => setActiveTab('calendar')} />
        <NavBtn icon={<Languages size={26}/>} onClick={() => setLang(lang === 'en' ? 'am' : 'en')} />
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {activeTab && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(30, 58, 138, 0.75)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ background: 'white', width: '100%', maxWidth: '450px', padding: '50px', borderRadius: '45px', position: 'relative' }}>
              <button onClick={() => setActiveTab(null)} style={{ position: 'absolute', top: '25px', right: '25px', border: 'none', background: '#F1F5F9', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}><X size={24}/></button>
              {activeTab === 'map' ? (
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '10px' }}>{t.venueTitle}</h3>
                  <p style={{ opacity: 0.6, fontSize: '14px', marginBottom: '20px' }}>{t.address}</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.537946440597!2d38.7615024!3d9.0329007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859345a03463%3A0xc3f92084931f32a2!2sHoly%20Trinity%20Cathedral!5e0!3m2!1sen!2set!4v1710500000000!5m2!1sen!2set" width="100%" height="280" style={{ border: 0, borderRadius: '25px' }} />
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '10px' }}>Ceremony Date</h3>
                  <p style={{ fontSize: '32px', fontWeight: '900', color: '#3B82F6' }}>Aug 20, 2026</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '30px' }}>
                    {Array.from({ length: 31 }, (_, i) => (
                      <div key={i} style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: i + 1 === 20 ? '#3B82F6' : '#F8FAFC', color: i + 1 === 20 ? 'white' : 'inherit', borderRadius: '12px', fontSize: '14px', fontWeight: i + 1 === 20 ? 'bold' : 'normal' }}>{i + 1}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// SHARED COMPONENTS
function Stat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ color: '#3B82F6', marginBottom: '8px' }}>{icon}</div>
      <p style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold', color: '#94A3B8', letterSpacing: '0.5px' }}>{label}</p>
      <p style={{ fontSize: '17px', fontWeight: '700', color: '#1E3A8A' }}>{value}</p>
    </div>
  );
}

function NavBtn({ icon, onClick }: { icon: React.ReactNode, onClick: () => void }) {
  return (
    <motion.button 
      whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scale: 0.95 }}
      onClick={onClick} 
      style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'white', border: 'none', color: '#3B82F6', boxShadow: '0 15px 35px rgba(0,0,0,0.12)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {icon}
    </motion.button>
  );
}

const inputS = { width: '100%', padding: '20px', borderRadius: '20px', border: '2px solid #E0F2FE', outline: 'none', fontSize: '16px', color: '#1E3A8A', background: '#F8FAFC' };