import React from "react";

interface TableProps {
  columns: string[];
  rows: React.ReactNode[][];
  heading?: string;
}

const Table: React.FC<TableProps> = ({ columns, rows, heading }) => (
  <div className="w-full overflow-x-auto mt-12 mb-16 ">
    <h2 className="scroll-mt-20 text-primary text-xl font-semibold mb-4 ">
      {heading}
    </h2>
    <table className="border-collapse table-auto w-full min-w-0">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th
              key={i}
              className="border px-4 py-2 bg-dark text-white font-bold text-left break-words"
            >
              <p className="text-white">{col}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className={ri % 2 === 0 ? "bg-gray" : "bg-slate"}>
            {row.map((cell, ci) => (
              <td
                key={ci}
                className="border px-4 py-2 text-sm text-left align-top break-words"
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
