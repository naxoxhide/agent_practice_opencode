import React from 'react';
import type { Objekt } from '../data/objekts';
import './ObjektCard.css';

interface Props {
  objekt: Objekt;
  onClick: (objekt: Objekt) => void;
}

export const ObjektCard: React.FC<Props> = ({ objekt, onClick }) => {
  return (
    <div className="objekt-card-wrapper" onClick={() => onClick(objekt)}>
      <div className="objekt-card win98-panel">
        <div className="objekt-card-image" style={{
          background: objekt.image ? `url(${objekt.image}) center/cover no-repeat` : objekt.imageColor
        }}>
          <div className="objekt-card-overlay">
            <div className="objekt-card-header pixel-text">
              <span>{objekt.memberId}</span>
              <span>{objekt.no}</span>
            </div>
            <div className="objekt-card-footer">
              <h3 className="pixel-text">{objekt.member}</h3>
              <p className="pixel-text">{objekt.season} {objekt.objektClass}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
