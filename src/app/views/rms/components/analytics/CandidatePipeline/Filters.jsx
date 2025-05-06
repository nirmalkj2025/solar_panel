const Filters = ({ dateRanges, selected, onChange }) => (
    <select
      value={selected.label}
      onChange={(e) => {
        const found = dateRanges.find((r) => r.label === e.target.value);
        if (found) onChange(found);
      }}
      style={{
        padding: "6px 12px",
        marginBottom: 12,
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: "0.85rem",
      }}
    >
      {dateRanges.map((r) => (
        <option key={r.label}>{r.label}</option>
      ))}
    </select>
  );
  
  export default Filters;
  