const Insights = ({ stages }) => (
    <div style={{ margin: "1.2rem 0" }}>
      {stages.map((stage, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
            <span>{stage.label}</span>
            <span>{stage.value}</span>
          </div>
          <div style={{ background: "#e9ecef", height: "8px", borderRadius: "4px" }}>
            <div
              style={{
                width: `${(stage.value / 142) * 100}%`,
                background: "#3b82f6",
                height: "100%",
                transition: "width 0.3s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
  
  export default Insights;
  