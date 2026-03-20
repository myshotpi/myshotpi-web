export default function SubscribePage() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        Subscribe to Pro
      </h1>

      <p style={{ marginBottom: "30px", color: "#555" }}>
        Unlock premium images and advanced features with a Pro subscription.
      </p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Pro Plan</h2>

        <p style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
          $9 / month
        </p>

        <p style={{ marginBottom: "20px", color: "#666" }}>
          Access premium images and exclusive content.
        </p>

        <button
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#f59e0b",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Subscribe with Pi
        </button>
      </div>
    </main>
  );
}