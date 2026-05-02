export const neobrutalismJsx = `const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status" },
];

const data = [
  { name: "Alice", role: "Engineer", status: "Active" },
  { name: "Bob", role: "Designer", status: "Inactive" },
  { name: "Carol", role: "Manager", status: "Active" },
];

const NeobrutalismTable = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key) => {
    if (sortKey === key) { setSortAsc(!sortAsc); } else { setSortKey(key); setSortAsc(true); }
  };

  const sorted = sortKey
    ? [...data].sort((a, b) => sortAsc ? String(a[sortKey]).localeCompare(String(b[sortKey])) : String(b[sortKey]).localeCompare(String(a[sortKey])))
    : data;

  return (
    <div className="w-full overflow-x-auto border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-sans">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-yellow-400 border-b-[3px] border-black">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-[0.9375rem] font-extrabold text-black border-r-[3px] border-black last:border-r-0\${col.sortable ? " cursor-pointer hover:bg-yellow-300 select-none" : ""}\`}
              >
                {col.label} {col.sortable && (sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} className={\`border-b-[2px] border-black last:border-b-0 \${i % 2 === 1 ? "bg-yellow-50" : "bg-white"}\`}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-black font-medium border-r-[2px] border-black last:border-r-0">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

<NeobrutalismTable columns={columns} data={data} />`;

export const shadcnJsx = `const ShadcnTable = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key) => {
    if (sortKey === key) { setSortAsc(!sortAsc); } else { setSortKey(key); setSortAsc(true); }
  };

  const sorted = sortKey
    ? [...data].sort((a, b) => sortAsc ? String(a[sortKey]).localeCompare(String(b[sortKey])) : String(b[sortKey]).localeCompare(String(a[sortKey])))
    : data;

  return (
    <div className="w-full overflow-x-auto border border-zinc-200 rounded-[6px] font-sans">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-200">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide\${col.sortable ? " cursor-pointer hover:text-zinc-900 select-none" : ""}\`}
              >
                {col.label} {col.sortable && (sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {sorted.map((row, i) => (
            <tr key={i} className="hover:bg-zinc-50 transition-colors duration-100">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-zinc-700">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`;

export const flowbiteJsx = `const FlowbiteTable = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key) => {
    if (sortKey === key) { setSortAsc(!sortAsc); } else { setSortKey(key); setSortAsc(true); }
  };

  const sorted = sortKey
    ? [...data].sort((a, b) => sortAsc ? String(a[sortKey]).localeCompare(String(b[sortKey])) : String(b[sortKey]).localeCompare(String(a[sortKey])))
    : data;

  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm font-sans">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide\${col.sortable ? " cursor-pointer hover:bg-gray-100 select-none transition-colors" : ""}\`}
              >
                {col.label} {col.sortable && (sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sorted.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors duration-150">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-gray-700">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`;

export const glassmorphismJsx = `const GlassmorphismTable = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const handleSort = (key) => { if (sortKey === key) setSortAsc(!sortAsc); else { setSortKey(key); setSortAsc(true); } };
  const sorted = sortKey ? [...data].sort((a, b) => sortAsc ? String(a[sortKey] ?? "").localeCompare(String(b[sortKey] ?? "")) : String(b[sortKey] ?? "").localeCompare(String(a[sortKey] ?? ""))) : data;

  return (
    <div className="w-full overflow-x-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] font-sans">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/15">
            {columns.map((col) => (
              <th key={col.key} onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wide \${col.sortable ? "cursor-pointer hover:text-white select-none" : ""}\`}>
                {col.label} {col.sortable && <span className="text-white/40">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
              {columns.map((col) => <td key={col.key} className="px-4 py-3 text-sm text-white/80">{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`;

export const md3Jsx = `const Md3Table = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const handleSort = (key) => { if (sortKey === key) setSortAsc(!sortAsc); else { setSortKey(key); setSortAsc(true); } };
  const sorted = sortKey ? [...data].sort((a, b) => sortAsc ? String(a[sortKey] ?? "").localeCompare(String(b[sortKey] ?? "")) : String(b[sortKey] ?? "").localeCompare(String(a[sortKey] ?? ""))) : data;

  return (
    <div className="w-full overflow-x-auto bg-[#fffbfe] border border-[#e7e0ec] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] font-sans">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f3edf7] border-b border-[#e7e0ec]">
            {columns.map((col) => (
              <th key={col.key} onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-xs font-semibold text-[#49454f] uppercase tracking-wide \${col.sortable ? "cursor-pointer hover:text-[#6750a4] select-none transition-colors" : ""}\`}>
                {col.label} {col.sortable && <span className="text-[#79747e]">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e7e0ec]">
          {sorted.map((row, i) => (
            <tr key={i} className="hover:bg-[#6750a4]/8 transition-colors">
              {columns.map((col) => <td key={col.key} className="px-4 py-3 text-sm text-[#1c1b1f]">{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`;

export const nmJsx = `const NmTable = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const handleSort = (key) => { if (sortKey === key) setSortAsc(!sortAsc); else { setSortKey(key); setSortAsc(true); } };
  const sorted = sortKey ? [...data].sort((a, b) => sortAsc ? String(a[sortKey] ?? "").localeCompare(String(b[sortKey] ?? "")) : String(b[sortKey] ?? "").localeCompare(String(a[sortKey] ?? ""))) : data;

  return (
    <div className="w-full overflow-x-auto bg-[#e0e5ec] rounded-xl font-sans shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)]">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[rgba(163,177,198,0.3)]">
            {columns.map((col) => (
              <th key={col.key} onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={\`px-4 py-3 text-left text-xs font-semibold text-[#6c7a9c] uppercase tracking-wide \${col.sortable ? "cursor-pointer hover:text-[#3d4f6e] select-none transition-colors" : ""}\`}>
                {col.label} {col.sortable && <span className="text-[#6c7a9c]/50">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} className="border-b border-[rgba(163,177,198,0.2)] last:border-b-0 hover:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.3)] transition-all duration-150">
              {columns.map((col) => <td key={col.key} className="px-4 py-3 text-sm text-[#3d4f6e]">{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`;
