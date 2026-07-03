import React, { useRef, useState } from 'react';
import type { Objekt } from '../data/objekts';
import './ObjektModal.css';

interface Props {
  objekt: Objekt;
  onClose: () => void;
}

export const ObjektModal: React.FC<Props> = ({ objekt, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Rotate based on position (max rotation around 20deg)
    const rotateX = (mouseY / (rect.height / 2)) * -20;
    const rotateY = (mouseX / (rect.width / 2)) * 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset to flat
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="y2k-window" onClick={(e) => e.stopPropagation()}>
        <div className="y2k-titlebar">
          <span className="pixel-text">Objekt_Viewer.exe</span>
          <button className="y2k-close-btn" onClick={onClose}>X</button>
        </div>
        
        <div className="modal-content">
          <div className="modal-left perspective-container">
            <div 
              ref={cardRef}
              className="modal-3d-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                background: objekt.image ? `url(${objekt.image}) center/cover no-repeat` : objekt.imageColor
              }}
            >
              <div className="card-glare" style={{
                transform: `translate(${rotation.y * 2}px, ${-rotation.x * 2}px)`,
                opacity: (Math.abs(rotation.x) + Math.abs(rotation.y)) / 40
              }}></div>
            </div>
          </div>
          
          <div className="modal-right">
            <h2 className="member-name">{objekt.member}</h2>
            
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label pixel-text">ID</span>
                <span className="info-value">{objekt.memberId}</span>
              </div>
              <div className="info-item">
                <span className="info-label pixel-text">Season</span>
                <span className="info-value">{objekt.season}</span>
              </div>
              <div className="info-item">
                <span className="info-label pixel-text">Class</span>
                <span className="info-value">{objekt.objektClass}</span>
              </div>
              <div className="info-item">
                <span className="info-label pixel-text">No.</span>
                <span className="info-value">{objekt.no}</span>
              </div>
            </div>
            
            <button className="y2k-button mt-auto" onClick={onClose}>
              [ CLOSE_VIEW ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
