const fs = require('fs');
const css = `
/* --- RESPONSIVE MOBILE TABLE --- */
@media (max-width: 768px) {
  .table-responsive {
    overflow-x: hidden !important; 
  }
  .db-table thead {
    display: none;
  }
  .db-table, .db-table tbody, .db-table tr, .db-table td {
    display: block;
    width: 100%;
  }
  .db-table tr {
    margin-bottom: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #fff;
    padding: 8px 16px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
  }
  .db-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    padding: 12px 0;
    text-align: right;
  }
  .db-table td:last-child {
    border-bottom: none;
  }
  .db-table td::before {
    content: attr(data-label);
    font-size: 11.5px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    text-align: left;
    margin-right: 16px;
    flex-shrink: 0;
  }
  .db-table td[data-label="No"] {
    display: none; 
  }
  .dbt-nama-col {
    flex-direction: row-reverse;
    gap: 10px;
    justify-content: flex-start;
  }
  .dbt-nama {
    text-align: right !important;
  }
}
`;
fs.appendFileSync('style.css', css);
console.log('Appended mobile css');
