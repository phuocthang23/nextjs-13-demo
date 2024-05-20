export default function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        height: "10vh",
        backgroundColor: "#f5f5f5",
        padding: "10px",
      }}
    >
      <ul
        style={{
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
