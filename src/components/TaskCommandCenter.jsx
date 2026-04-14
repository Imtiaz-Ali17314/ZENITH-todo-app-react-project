import React, { useState, useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";

const TaskCommandCenter = () => {
  const { addNewItem } = useContext(TodoContextItems);
  const date = new Date();
  const today = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addNewItem(taskName, dueDate, priority, category);
    setTaskName("");
    setDueDate(today);
  };

  return (
    <div className="task-command-center animate-in" style={{ animationDelay: '0.2s' }}>
      <form onSubmit={handleSubmit} className="command-form">
        <p className="command-title">INITIALIZE MISSION</p>
        <div className="input-group main-input">
          <input
            type="text"
            placeholder="Describe your next objective..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="glow-input"
            required
          />
        </div>
        
        <div className="form-controls">
          <div className="control-item">
            <label>TARGET DATE</label>
            <input 
              type="date" 
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="date-input"
            />
          </div>
          
          <div className="control-item">
            <label>PRIORITY LEVEL</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="select-input">
              <option value="High">HIGH CLASSIFIED</option>
              <option value="Medium">STANDARD OP</option>
              <option value="Low">LOW PRIORITY</option>
            </select>
          </div>

          <div className="control-item">
            <label>MISSION TYPE</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="select-input">
              <option value="Work">DEEP WORK</option>
              <option value="Personal">SHALLOW WORK</option>
              <option value="Zen">PERSONAL</option>
            </select>
          </div>

          <button type="submit" className="btn-primary">DEPLOY MISSION</button>
        </div>
      </form>

      <style jsx>{`
        .task-command-center {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--panel-border);
          border-radius: 24px;
          padding: 2rem;
          box-shadow: inset 0 0 20px rgba(0, 229, 255, 0.05);
        }
        .command-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-primary);
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }
        .command-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .glow-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--panel-border);
          padding: 1.4rem;
          border-radius: 16px;
          color: #fff;
          font-size: 1.1rem;
          transition: var(--transition-smooth);
        }
        .glow-input::placeholder { color: #555; }
        .glow-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.15);
        }
        .form-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.2rem;
          align-items: flex-end;
        }
        .control-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .control-item label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 1px;
        }
        .date-input, .select-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--panel-border);
          padding: 0.9rem;
          border-radius: 12px;
          color: white;
          font-family: inherit;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .date-input:hover, .select-input:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .select-input option {
          background: #0b0e14;
          color: white;
        }
        @media (max-width: 600px) {
          .btn-primary { width: 100%; margin-top: 0.5rem; }
        }
      `}</style>
    </div>
  );
};

export default TaskCommandCenter;
