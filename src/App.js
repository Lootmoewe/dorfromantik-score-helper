import React, { useState } from "react";
import './App.css';

// Wald
import Wald from './assets/Wald.png';
import Wald_4 from './assets/Wald_active_4.png';
import Wald_5 from './assets/Wald_active_5.png';
import Wald_6 from './assets/Wald_active_6.png';
import Wald_7 from './assets/Wald_active_7.png';

// Feld
import Feld from './assets/Feld.png';
import Feld_4 from './assets/Feld_active_4.png';
import Feld_5 from './assets/Feld_active_5.png';
import Feld_6 from './assets/Feld_active_6.png';
import Feld_7 from './assets/Feld_active_7.png';

// Dorf
import Dorf from './assets/Dorf.png';
import Dorf_4 from './assets/Dorf_active_4.png';
import Dorf_5 from './assets/Dorf_active_5.png';
import Dorf_6 from './assets/Dorf_active_6.png';
import Dorf_7 from './assets/Dorf_active_7.png';

// Schiene
import Schiene from './assets/Schiene.png';
import Schiene_4 from './assets/Schiene_active_4.png';
import Schiene_5 from './assets/Schiene_active_5.png';
import Schiene_6 from './assets/Schiene_active_6.png';

// Fluss
import Fluss from './assets/Fluss.png';
import Fluss_4 from './assets/Fluss_active_4.png';
import Fluss_5 from './assets/Fluss_active_5.png';
import Fluss_6 from './assets/Fluss_active_6.png';

// Wald done
import Wald_done_4 from './assets/Wald_done_4.png';
import Wald_done_5 from './assets/Wald_done_5.png';
import Wald_done_6 from './assets/Wald_done_6.png';
import Wald_done_7 from './assets/Wald_done_7.png';

// Feld done
import Feld_done_4 from './assets/Feld_done_4.png';
import Feld_done_5 from './assets/Feld_done_5.png';
import Feld_done_6 from './assets/Feld_done_6.png';
import Feld_done_7 from './assets/Feld_done_7.png';

// Dorf done
import Dorf_done_4 from './assets/Dorf_done_4.png';
import Dorf_done_5 from './assets/Dorf_done_5.png';
import Dorf_done_6 from './assets/Dorf_done_6.png';
import Dorf_done_7 from './assets/Dorf_done_7.png';

// Schiene done
import Schiene_done_4 from './assets/Schiene_done_4.png';
import Schiene_done_5 from './assets/Schiene_done_5.png';
import Schiene_done_6 from './assets/Schiene_done_6.png';

// Fluss done
import Fluss_done_4 from './assets/Fluss_done_4.png';
import Fluss_done_5 from './assets/Fluss_done_5.png';
import Fluss_done_6 from './assets/Fluss_done_6.png';


const imageMap = {
  Wald: {
    4: Wald_4,
    5: Wald_5,
    6: Wald_6,
    7: Wald_7,
    done: {
      4: Wald_done_4,
      5: Wald_done_5,
      6: Wald_done_6,
      7: Wald_done_7,
    }
  },
  Feld: {
    4: Feld_4,
    5: Feld_5,
    6: Feld_6,
    7: Feld_7,
    done: {
      4: Feld_done_4,
      5: Feld_done_5,
      6: Feld_done_6,
      7: Feld_done_7,
    }
  },
  Dorf: {
    4: Dorf_4,
    5: Dorf_5,
    6: Dorf_6,
    7: Dorf_7,
    done: {
      4: Dorf_done_4,
      5: Dorf_done_5,
      6: Dorf_done_6,
      7: Dorf_done_7,
    }
  },
  Schiene: {
    4: Schiene_4,
    5: Schiene_5,
    6: Schiene_6,
    done: {
      4: Schiene_done_4,
      5: Schiene_done_5,
      6: Schiene_done_6,
    }
  },
  Fluss: {
    4: Fluss_4,
    5: Fluss_5,
    6: Fluss_6,
    done: {
      4: Fluss_done_4,
      5: Fluss_done_5,
      6: Fluss_done_6,
    }
  }
};

// Category setup
const categories = [
  { key: "wald", label: "Wald", color: "#97b461", light: "#c6dcaa" },
  { key: "feld", label: "Feld", color: "#fcc02f", light: "#ffe68d" },
  { key: "dorf", label: "Dorf", color: "#bf5f56", light: "#e4a39d" },
  { key: "schiene", label: "Schiene", color: "#7e5842", light: "#b79d8b" },
  { key: "fluss", label: "Fluss", color: "#85cdd2", light: "#c1e5e7" }
];

// Tasks for each category
const tasksData = {
  wald:   [4,4,5,5,6,6,7],
  feld:   [4,4,5,5,6,6,7],
  dorf:   [4,4,5,5,6,6,7],
  schiene:[4,4,5,5,6,6],
  fluss:  [4,4,5,5,6,6]
};

// Images for Task Buttons
const getTaskImagePath = (category, value, state) => {
  if (state === 0 || state === 1) {
    return `/pics/${category}_active_${value}.png`;
  } else {
    return `/pics/${category}.png`;
  }
};

// Extra point input fields (page 2)
const extraFields = [
  { key: "wald_fahnen", label: "Fahnen (Wald)", cat: "wald" },
  { key: "feld_fahnen", label: "Fahnen (Feld)", cat: "feld" },
  { key: "dorf_fahnen", label: "Fahnen (Dorf)", cat: "dorf" },
  { key: "schiene_laengste", label: "Längste Schiene", cat: "schiene" },
  { key: "fluss_laengste", label: "Längster Fluss", cat: "fluss" }
];

// Freigespielt (manual input fields & checkboxes, page 2)
const freigespieltFields = [
  { key: "rote_herzen", label: "Rote Herzen", max: 24, type: "number" },
  { key: "zirkus", label: "Zirkus", type: "checkbox", points: 10 },
  { key: "bahnwaerter", label: "Bahnwärter", type: "even" },
  { key: "schaeferin", label: "Schäferin", type: "even" },
  { key: "huegel", label: "Hügel", type: "even" },
  { key: "baustelle", label: "Baustelle", type: "baustelle" },
  { key: "ballon", label: "Ballon-Startplatz", type: "even" },
  { key: "goldenes_herz", label: "Goldenes Herz", max: 12, type: "number" },
  { key: "bahnhof", label: "Bahnhof", type: "number" },
  { key: "hafen", label: "Hafen", type: "number" }
];

// Baustelle allowed values
const baustelleOptions = [0, 7, 14, 21];

function TaskButton({ value, state, onClick, catLabel }) {
  const category = catLabel.charAt(0).toUpperCase() + catLabel.slice(1);
  let imgSrc = "";

  if (state === 0 || state === 1) {
    imgSrc = imageMap[category]?.[value];
  } else if (state === 2 || state === 3) {
    imgSrc = imageMap[category]?.done?.[value];
  }

  const style = {
    width: 64,
    height: 64,
    margin: 4,
    position: "relative",
    cursor: "pointer",
    opacity: state === 0 ? 0.4 : 1,
  };

  return (
    <div style={style} onClick={onClick}>
      <img
        src={imgSrc}
        alt={`${category}-${value}`}
        style={{ width: "100%", height: "100%", borderRadius: 8 }}
      />
      {state === 3 && (
        <span style={{
          position: "absolute",
          right: 2,
          bottom: 2,
          fontSize: 20,
          color: "#fff",
          background: "#444",
          borderRadius: 4,
          padding: "0 3px"
        }}>×2</span>
      )}
    </div>
  );
}

function evenInput(value, max) {
  let v = value.replace(/[^0-9]/g,"");
  let n = Number(v);
  if (v === "") return "";
  if (max !== undefined) n = Math.min(n, max);
  if (n < 0) n = 0;
  if (n % 2 !== 0) n = n - 1;
  return n.toString();
}

function App() {

  const [page, setPage] = useState(1);

  const [taskStates, setTaskStates] = useState(() => {
    const state = {};
    for (let cat in tasksData) state[cat] = tasksData[cat].map(() => 0);
    return state;
  });
  const [extras, setExtras] = useState(() => {
    const st = {};
    extraFields.forEach(f => st[f.key] = "");
    return st;
  });
  const [frei, setFrei] = useState(() => {
    const st = {};
    freigespieltFields.forEach(f => st[f.key] = f.type === "checkbox" ? false : "");
    return st;
  });
  const [results, setResults] = useState(null);

  const getTaskValue = (cat, idx) => tasksData[cat][idx];

  const handleTaskClick = (cat, idx) => {
    setTaskStates(prev => {
      const currentState = prev[cat][idx];
      const nextState = (currentState + 1) % 4;
  
      // Count all tasks in state 1
      let active1Count = 0;
      for (let c in prev) {
        active1Count += prev[c].filter(s => s === 1).length;
      }
  
      // If trying to go into state 1 and already 3 exist — block it
      if (nextState === 1 && active1Count >= 3) {
        return prev; // No change
      }
  
      // Otherwise apply state change
      return {
        ...prev,
        [cat]: prev[cat].map((s, i) => i === idx ? nextState : s)
      };
    });
  };

  const handleExtraChange = (e, key, max) => {
    let val = e.target.value.replace(/[^0-9]/g,"");
    if (max) val = Math.max(0, Math.min(Number(max), Number(val))).toString();
    setExtras(prev => ({ ...prev, [key]: val }));
  };

  const handleFreiChange = (e, key, field) => {
    if (field.type === "checkbox") {
      setFrei(prev => ({ ...prev, [key]: e.target.checked }));
    } else if (field.type === "even") {
      setFrei(prev => ({ ...prev, [key]: evenInput(e.target.value, field.max) }));
    } else if (field.type === "baustelle") {
      setFrei(prev => ({ ...prev, [key]: e.target.value }));
    } else {
      let val = e.target.value.replace(/[^0-9]/g,"");
      if (field.max) val = Math.max(0, Math.min(Number(field.max), Number(val))).toString();
      setFrei(prev => ({ ...prev, [key]: val }));
    }
  };

  const handleSubmitTasks = () => setPage(2);
  const handleBackExtras = () => setPage(1);

  const handleSubmitExtras = () => {
    const auftraege = {};
    categories.forEach(cat => {
      let normal = 0, double = 0;
      taskStates[cat.key].forEach((state, idx) => {
        if (state === 2) normal += getTaskValue(cat.key, idx);
        if (state === 3) { 
          normal += getTaskValue(cat.key, idx); 
          double += getTaskValue(cat.key, idx); 
        }
      });
      auftraege[cat.key] = { normal, double };
    });
    const fahnen = {};
    categories.forEach(cat => {
      fahnen[cat.key] = 0;
      let fh = extraFields.find(f => f.cat === cat.key && (f.key.endsWith("fahnen") || f.key.endsWith("laengste")));
      if (fh) fahnen[cat.key] += Number(extras[fh.key] || 0);
    });
    let freiSum = 0;
    freigespieltFields.forEach(f => {
      if (f.type === "checkbox") freiSum += frei[f.key] ? f.points : 0;
      else if (f.type === "baustelle") freiSum += Number(frei[f.key] || 0);
      else freiSum += Number(frei[f.key] || 0);
    });
    const auftraegeSum = categories.reduce((s,cat) => s+auftraege[cat.key].normal,0);
    const extrasSum = categories.reduce((s,cat) => s+auftraege[cat.key].double,0);
    const fahnenSum = categories.reduce((s,cat) => s+fahnen[cat.key],0);
    const extraAndFreiSum = extrasSum + freiSum;
    const total = auftraegeSum + fahnenSum + extraAndFreiSum;

    setResults({
      auftraege, auftraegeSum,
      fahnen, fahnenSum,
      extrasSum,
      freiSum,
      extraAndFreiSum,
      total
    });
    setPage(3);
  };

  const handleReset = () => {
    setTaskStates(() => {
      const state = {};
      for (let cat in tasksData) state[cat] = tasksData[cat].map(() => 0);
      return state;
    });
    setExtras(() => {
      const st = {};
      extraFields.forEach(f => st[f.key] = "");
      return st;
    });
    setFrei(() => {
      const st = {};
      freigespieltFields.forEach(f => st[f.key] = f.type === "checkbox" ? false : "");
      return st;
    });
    setResults(null);
    setPage(1);
  };

  // Build grid: rows = 4,4,5,5,6,6,7 (max 7), columns = categories
  const maxRows = Math.max(...Object.values(tasksData).map(a=>a.length));
  const cellWidth = 60;
  const taskRows = [];
  for (let row = 0; row < maxRows; ++row) {
    taskRows.push(
      <tr key={row}>
        {categories.map(cat => (
          <td
            key={cat.key}
            style={{
              textAlign: "center",
              width: cellWidth,
              padding: 0
            }}
          >
            {tasksData[cat.key][row] !== undefined ? (
              <TaskButton
              value={tasksData[cat.key][row]}
              state={taskStates[cat.key][row]}
              onClick={() => handleTaskClick(cat.key, row)}
              catLabel={cat.label}
            />
            ) : null}
          </td>
        ))}
      </tr>
    );
  }

  // Page 1: Task grid
  if (page === 1)
    return (
      <div style={{ padding: 24, maxWidth: 500, margin: "auto"}}>
        <h1 style={{ textAlign: 'center'}}>Dorfromantik – Scoreboard</h1>
        <table
          style={{
            borderCollapse: "collapse",
            marginBottom: 24,
            marginLeft: "autstyle={{ textAlign: 'center' }}o",
            marginRight: "auto",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr>
              {categories.map(cat => (
                <th
                  key={cat.key}
                  style={{
                    borderBottom: "2px solid #aaa",
                    color: cat.color,
                    fontSize: 18,
                    fontWeight: 700,
                    textalign: "center",
                    paddingBottom: 6,
                    width: cellWidth,
                    textAlign: "center"
                  }}
                >
                  {cat.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{taskRows}</tbody>
        </table>
        <button onClick={handleSubmitTasks} style={{
   marginRight:16}}>
          Weiter
        </button>
        <button onClick={handleReset} style={{
  marginRight:16}}>
          Zurücksetzen
        </button>
      </div>
    );


  // Page 2: Extras
  if (page === 2) return (
    <div style={{padding:24, maxWidth:740, margin:"auto"}}>
      <h1>Dorfromantik – Aufgaben Zähler</h1>
      <h2>Fahnen, Längste & weitere Extras</h2>
      <form onSubmit={e => {e.preventDefault(); handleSubmitExtras();}} autoComplete="off">
      <div style={{display:"flex", flexWrap:"wrap", gap:24, marginBottom:20}}>
        {categories.map(cat => (
          <div key={cat.key} style={{minWidth:125}}>
            <div style={{fontWeight:"bold", color:cat.color, marginBottom:4}}>{cat.label}</div>
            {extraFields.filter(f => f.cat===cat.key).map(f =>
              <div key={f.key} style={{marginBottom:6}}>
                <label>{f.label}: <input type="number" min={0} step={1}
                  value={extras[f.key]} onChange={e=>handleExtraChange(e,f.key)} style={{width:50}} /></label>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3>Freigespielt & weitere Extras</h3>
      <div style={{display:"flex", flexWrap:"wrap", gap:24, marginBottom:14}}>
        {freigespieltFields.map(f =>
          <div key={f.key} style={{minWidth:140, marginBottom:8}}>
            <label>
              {f.label}
              {f.type === "checkbox" ? (
                <input type="checkbox" checked={!!frei[f.key]}
                    onChange={e=>handleFreiChange(e,f.key,f)} style={{marginLeft:8}} />
              ) : f.type === "even" ? (
                <input
                  type="number"
                  min={0}
                  step={2}
                  value={frei[f.key]}
                  onChange={e=>handleFreiChange(e,f.key,f)}
                  style={{width:42,marginLeft:8}}
                />
              ) : f.type === "baustelle" ? (
                <select value={frei[f.key]} onChange={e=>handleFreiChange(e,f.key,f)} style={{marginLeft:8}}>
                  {baustelleOptions.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>
                  )}
                </select>
              ) : (
                <input
                  type="number"
                  min={0}
                  max={f.max}
                  step={1}
                  value={frei[f.key]}
                  onChange={e=>handleFreiChange(e,f.key,f)}
                  style={{width:42,marginLeft:8}}
                />
              )}
              {f.max && f.type==="number" ? <span style={{fontSize:12, marginLeft:4, color:"#888"}}>max {f.max}</span> : null}
              {f.type==="checkbox" && f.points ? <span style={{fontSize:12, marginLeft:6, color:"#888"}}>({f.points} Punkte)</span> : null}
              {f.type==="even" ? <span style={{fontSize:12, marginLeft:4, color:"#888"}}>nur gerade Werte</span> : null}
              {f.type==="baustelle" ? <span style={{fontSize:12, marginLeft:4, color:"#888"}}>(0, 7, 14, 21)</span> : null}
            </label>
          </div>
        )}
      </div>
      <button type="button" onClick={handleBackExtras} style={{marginRight:16}}>Zurück</button>
      <button type="submit" >Weiter</button>
      <button type="button" onClick={handleReset} style={{marginLeft:16}}>Zurücksetzen</button>
      </form>
    </div>
  );

  // Page 3: Results
  if (page === 3 && results) return (
    <div style={{padding:24, maxWidth:740, margin:"auto"}}>
      <h1>Dorfromantik – Aufgaben Zähler</h1>
      <h2>Ergebnisse</h2>
      <table style={{width:"100%", borderCollapse:"collapse", marginBottom:16}}>
        <thead>
          <tr>
            <th style={{textAlign:"left", borderBottom:"1px solid #bbb"}}>Kategorie</th>
            <th style={{textAlign:"right", borderBottom:"1px solid #bbb"}}>Aufträge</th>
            <th style={{textAlign:"right", borderBottom:"1px solid #bbb"}}>Fahnen/Längste</th>
            <th style={{textAlign:"right", borderBottom:"1px solid #bbb"}}>Extra (doppelt)</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat =>
            <tr key={cat.key}>
              <td style={{color:cat.color, fontWeight:500}}>{cat.label}</td>
              <td style={{textAlign:"right"}}>{results.auftraege[cat.key].normal}</td>
              <td style={{textAlign:"right"}}>{results.fahnen[cat.key]}</td>
              <td style={{textAlign:"right"}}>{results.auftraege[cat.key].double}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{display:"flex", flexWrap:"wrap", gap:30, marginBottom:10}}>
        <div>Aufträge: <b>{results.auftraegeSum}</b></div>
        <div>Fahnen & Längste: <b>{results.fahnenSum}</b></div>
        <div>Extra (doppelt) & Freigespielt: <b>{results.extraAndFreiSum}</b></div>
      </div>
      <div style={{display:"flex", flexWrap:"wrap", gap:30, marginBottom:10}}>
        <div style={{color:"#888"}}>davon extra (doppelt): <b>{results.extrasSum}</b></div>
        <div style={{color:"#888"}}>davon Freigespielt: <b>{results.freiSum}</b></div>
      </div>
      <div style={{fontSize:20, fontWeight:700, marginTop:4}}>
        Gesamt: <span style={{color:"#227"}}>{results.total}</span>
      </div>
      <button onClick={handleReset}>Neues Spiel</button>
    </div>
  );
}



export default App;