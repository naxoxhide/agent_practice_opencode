import { useState } from 'react'
import { MOCK_OBJEKTS, MEMBERS, type Objekt } from './data/objekts'
import { ObjektCard } from './components/ObjektCard'
import { ObjektModal } from './components/ObjektModal'
import './App.css'

function App() {
  const [filter, setFilter] = useState<string>('ALL');
  const [selectedObjekt, setSelectedObjekt] = useState<Objekt | null>(null);

  const filteredObjekts = filter === 'ALL' 
    ? MOCK_OBJEKTS 
    : MOCK_OBJEKTS.filter(obj => obj.memberId === filter);

  return (
    <div className="app-container">
      <div className="marquee-container">
        <div className="marquee-content">
          WELCOME TO THE COSMO NETWORK --- TRIPLE S OBJEKT GALLERY --- SCANNING DIGITAL ASSETS --- Y2K EDITION --- CONNECTED TO THE DIMENSION ---
        </div>
      </div>

      <header className="app-header">
        <h1 className="title text-glow">tripleS</h1>
        <h2 className="subtitle pixel-text">Objekt_Gallery v1.0</h2>
      </header>

      <main className="main-content">
        <div className="filter-bar glass-panel">
          <button 
            className={`filter-btn pixel-text ${filter === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilter('ALL')}
          >
            [ ALL ]
          </button>
          {MEMBERS.map(m => (
            <button 
              key={m.id}
              className={`filter-btn pixel-text ${filter === m.id ? 'active' : ''}`}
              onClick={() => setFilter(m.id)}
            >
              {m.id}
            </button>
          ))}
        </div>

        <div className="objekt-grid">
          {filteredObjekts.map(objekt => (
            <ObjektCard 
              key={objekt.id} 
              objekt={objekt} 
              onClick={(obj) => setSelectedObjekt(obj)} 
            />
          ))}
        </div>
      </main>

      {selectedObjekt && (
        <ObjektModal 
          objekt={selectedObjekt} 
          onClose={() => setSelectedObjekt(null)} 
        />
      )}
    </div>
  )
}

export default App
