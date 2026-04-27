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
