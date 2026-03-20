import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
        Pricing
      </h1>

      <p style={{ marginBottom: "30px", color: "#666" }}>
        Choose the plan that fits your needs.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px"
      }}>

        {/* Starter */}
        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>Starter</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Free</p>
          <p style={{ marginBottom: "15px", color: "#666" }}>
            Basic access to explore images.
          </p>

          <Link href="/explore">
            <button style={{
              padding: "10px 16px",
              background: "#111",
              color: "#fff",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}>
              Get Started
            </button>
          </Link>
        </div>

        {/* Pro */}
        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>Pro</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$9 / month</p>
          <p style={{ marginBottom: "15px", color: "#666" }}>
            Unlock premium images and features.
          </p>

          <Link href="/subscribe">
            <button style={{
              padding: "10px 16px",
              background: "#f59e0b",
              color: "#fff",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}>
              Subscribe
            </button>
          </Link>
        </div>

        {/* Enterprise */}
        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>Enterprise</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Custom</p>
          <p style={{ marginBottom: "15px", color: "#666" }}>
            Large scale usage for companies.
          </p>

          <Link href="/contact">
            <button style={{
              padding: "10px 16px",
              background: "#2563eb",
              color: "#fff",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}>
              Contact Us
            </button>
          </Link>
        </div>

      </div>

    </main>
  );
}