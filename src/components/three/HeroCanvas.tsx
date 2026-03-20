'use client'

function CSSFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes orb-float {
          0%, 100% { transform: translateY(15px) scale(1); }
          50% { transform: translateY(-15px) scale(1.04); }
        }
        @keyframes orb-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes particle-drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0.4; }
          50%  { transform: translateY(-40px) translateX(20px); opacity: 0.8; }
          100% { transform: translateY(0) translateX(0); opacity: 0.4; }
        }
        .orb-ring {
          position: absolute;
          border-radius: 50%;
          border: 3px solid rgba(99, 102, 241, 0.7);
          animation: orb-rotate linear infinite;
        }
        .avatar-wrap {
          position: absolute;
          border-radius: 50%;
          animation: orb-float ease-in-out infinite;
          overflow: hidden;
          border: 3px solid rgba(99, 102, 241, 0.4);
          background: #000;
        }
      `}</style>

      <div className="avatar-wrap" style={{ width: 250, height: 250, animationDuration: '3.5s' }}>
        <img
          src="/mandre-circle.png"
          alt="Marcos André Mendonça"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {[480, 340, 410].map((size, i) => (
        <div key={size} className="orb-ring" style={{ width: size, height: size, animationDuration: `${8 + i * 4}s`, animationDirection: i % 2 === 0 ? 'normal' : 'reverse' }} />
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{ position: 'absolute', width: 3 + (i % 3), height: 3 + (i % 3), borderRadius: '50%', background: i % 2 === 0 ? '#6366f1' : '#7c3aed', opacity: 0.5, left: `${15 + (i * 7) % 70}%`, top: `${10 + (i * 11) % 80}%`, animation: `particle-drift ${2.5 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
      ))}
    </div>
  )
}

export default function HeroCanvas() {
  return <CSSFallback />
}