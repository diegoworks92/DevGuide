// src/component/Table.tsx
import React from "react";

interface TableProps {
  columns: string[];
  rows: React.ReactNode[][];
}

const Table: React.FC<TableProps> = ({ columns, rows }) => (
  <div className="w-full overflow-x-auto mb-8">
    <table className="border-collapse table-auto w-full min-w-0">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th
              key={i}
              className="border px-4 py-2 bg-[#4D8ABB] font-semibold text-left break-words"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td
                key={ci}
                className="border px-4 py-2 text-left align-top break-words"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
