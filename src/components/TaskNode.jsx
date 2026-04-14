import React, { useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";

const TaskNode = ({ item }) => {
  const { deleteItem, toggleItem } = useContext(TodoContextItems);

  const priorityColor = {
    High: "var(--danger)",
    Medium: "var(--warning)",
    Low: "var(--success)"
  }[item.priority];

  return (
    <div className={`task-node ${item.completed ? 'completed' : ''}`}>
      <div className="status-trigger" onClick={() => toggleItem(item.id)}>
        <div className="check-ring" style={{ borderColor: item.completed ? 'var(--success)' : 'var(--panel-border)' }}>
          {item.completed && <div className="check-dot"></div>}
        </div>
      </div>

      <div className="task-body">
        <div className="task-main">
          <span className="task-name">{item.name || item.todoItemName}</span>
          <div className="task-meta">
            <span className="priority-pulse" style={{ background: priorityColor }}></span>
            <span className="priority-text">{item.priority}</span>
            <span className="category-label">{item.category}</span>
          </div>
        </div>
        
        {item.dueDate && (
          <div className="task-date">
            <span className="date-icon">🕒</span>
            {new Date(item.dueDate).toLocaleDateString()}
          </div>
        )}
      </div>

      <button className="delete-node" onClick={() => deleteItem(item.id)}>
        ✕
      </button>

      <style jsx>{`
        .task-node {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--panel-border);
          border-radius: 16px;
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }
        .task-node:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .task-node.completed {
          opacity: 0.6;
        }
        .task-node.completed .task-name {
          text-decoration: line-through;
          color: var(--text-secondary);
        }
        .status-trigger {
          cursor: pointer;
        }
        .check-ring {
          width: 24px;
          height: 24px;
          border: 2px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .check-dot {
          width: 10px;
          height: 10px;
          background: var(--success);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--success);
        }
        .task-body {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .task-name {
          font-weight: 600;
          font-size: 1.05rem;
          display: block;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
        }
        .task-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .priority-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .category-label {
          background: rgba(255, 255, 255, 0.05);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .task-date {
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .delete-node {
          background: transparent;
          color: rgba(255, 255, 255, 0.2);
          font-size: 1.2rem;
          padding: 0.5rem;
          border-radius: 8px;
          opacity: 0;
        }
        .task-node:hover .delete-node {
          opacity: 1;
        }
        .delete-node:hover {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </div>
  );
};

export default TaskNode;
