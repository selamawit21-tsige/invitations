"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Send, Globe, LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Define the Event type for the cards
interface EventTheme {
  title: string;
  color: string;
  text: string;
  path: string;
}

const events: EventTheme[] = [
  { title: 'Wedding', color: 'rgba(255, 241, 242, 0.8)', text: '#BE123C', path: '/wedding' },
  { title: 'Birthday', color: 'rgba(255, 251, 235, 0.8)', text: '#B45309', path: '/birthday' },
  { title: 'Baptism', color: 'rgba(239, 246, 255, 0.8)', text: '#1D4ED8', path: '/baptism' },
  { title: 'Business', color: 'rgba(15, 23, 42, 0.9)', text: '#FFFFFF', path: '/business' },
];

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundColor: '#f1f5f9',
      backgroundImage: `radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.08) 0px, transparent 50%)`,
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      padding: '80px 20px'
    }}>
      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
    {/* SECTION 1: HEADER & ABOUT */}
<div style={{ textAlign: 'center', marginBottom: '80px' }}>
  <motion.h1 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    style={{ 
      fontSize: 'clamp(40px, 7vw, 75px)', 
      fontWeight: '900', 
      color: '#1e293b', 
      marginBottom: '20px', 
      letterSpacing: '-0.05em',
      cursor: 'default'
    }}
  >
    {/* "INVITE" - Elegant Rose Gradient */}
    <span style={{
      background: 'linear-gradient(to right, #1e293b, #D8A7B1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      INVITE
    </span>
    {" "}
    {/* "SMART" - Interactive Gold Shimmer */}
    <motion.span 
      whileHover={{ 
        scale: 1.1,
        letterSpacing: '0.05em',
        textShadow: "0px 0px 20px rgba(212, 175, 55, 0.3)"
      }}
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ 
        backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
        scale: { duration: 0.3 },
        letterSpacing: { duration: 0.3 }
      }}
      style={{ 
        display: 'inline-block',
        color: '#4F46E5', 
        fontStyle: 'italic',
        background: 'linear-gradient(90deg, #D4AF37, #F3E4E4, #D4AF37)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: 'all 0.3s ease'
      }}
    >
      SMART
    </motion.span>
  </motion.h1>
  
  <div style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b', lineHeight: '1.8' }}>
    <p style={{ fontSize: '18px', fontWeight: '500', color: '#475569', marginBottom: '15px' }}>
      Tradition meets Technology. Elegance meets Ease.
    </p>
    <p style={{ fontSize: '15px' }}>
      We believe a great event deserves a great entrance. By moving beyond paper, we offer a living experience: live countdowns that build excitement, interactive maps that guide your guests, and digital guestbooks that capture love in real-time. Fast, eco-friendly, and beautifully responsive we make sure your story starts perfectly.
    </p>
  </div>
</div>

        {/* SECTION 2: THE 2x2 GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          maxWidth: '700px',
          margin: '0 auto',
          gap: '25px'
        }}>
          {events.map((event) => (
            <Link href={event.path} key={event.title} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  backgroundColor: event.color,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '35px',
                  padding: '40px',
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  cursor: 'pointer'
                }}
              >
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: event.text }}>
                  {event.title}
                </h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: event.text, letterSpacing: '0.1em', opacity: 0.6 }}>
                    Select Theme
                  </span>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }}>
                    <ArrowRight size={18} color={event.text} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* SECTION 3: FEATURES (Fixed Icon Passing) */}
        <div style={{ marginTop: '100px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          <AboutItem icon={Smartphone} title="Mobile First" desc="Perfectly optimized for every guest's phone." />
          <AboutItem icon={Send} title="Instant Delivery" desc="Send via WhatsApp, Email, or Social Media." />
          <AboutItem icon={Globe} title="Live Interaction" desc="Maps, Music, and RSVP Guestbooks built-in." />
        </div>
      </main>
    </div>
  );
}

// --- FIXED HELPER COMPONENT ---
// We use LucideIcon as the type to avoid 'any' errors
interface AboutItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function AboutItem({ icon: Icon, title, desc }: AboutItemProps) {
  return (
    <div style={{ width: '250px', textAlign: 'center' }}>
      <div style={{ color: '#4F46E5', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
        {/* We render the component here */}
        <Icon size={24} />
      </div>
      <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>{title}</h4>
      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}