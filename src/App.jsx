import { useState } from "react";

function UniversityMark() {
  return (
    <div className="university-mark" aria-label="MUT logo placeholder">
      <span className="mark-ring">MUT</span>
      <span className="mark-center">✦</span>
    </div>
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-lines ${open ? "is-open" : ""}`} aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

function Header({ onToggle, menuOpen }) {
  return (
    <header className="topbar">
      <div className="brand">
        <UniversityMark />
        <span>MUT</span>
      </div>
      <button className="menu-button" onClick={onToggle} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        <MenuIcon open={menuOpen} />
      </button>
    </header>
  );
}

function Avatar() {
  return (
    <div className="avatar" aria-hidden="true">
      <div className="avatar-head" />
      <div className="avatar-body" />
    </div>
  );
}

function MetricCard({ label, amount, trend, direction }) {
  return (
    <section className="metric-card">
      <p className="metric-label">{label}</p>
      <p className="metric-amount">{amount}</p>
      {trend && (
        <p className={`trend ${direction}`}>
          <span aria-hidden="true">{direction === "up" ? "▲" : "▼"}</span> {trend}
        </p>
      )}
    </section>
  );
}

function Dashboard() {
  return (
    <>
      <section className="welcome-card">
        <div className="welcome-main">
          <Avatar />
          <div className="welcome-copy">
            <p className="eyebrow"><span className="cap-icon">♧</span> STUDENT PORTAL</p>
            <h1>Welcome back,<br />JOSEPH</h1>
            <p className="welcome-subtitle">Always stay updated through your student portal</p>
          </div>
        </div>
        <div className="stage-pill"><span>✓</span> Current Stage: Y4S1</div>
      </section>

      <div className="metrics">
        <MetricCard label="FEES BILLED" amount="Ksh. 584,940.00" />
        <MetricCard label="TOTAL PAID" amount="Ksh. 287,532.00" trend="49.16%" direction="up" />
        <MetricCard label="BALANCE" amount="Ksh. 29,610.03" trend="5.06%" direction="down" />
      </div>

      <section className="notice-card">
        <div className="notice-icon">▤</div>
        <div>
          <h2>Portal overview</h2>
          <p>This is a learning-only recreation. The figures shown are sample interface content, not live student records.</p>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="info-row">
      <p className="info-label">{label}</p>
      <p className="info-value">{children}</p>
    </div>
  );
}

function StudentProfile() {
  return (
    <>
      <section className="profile-card">
        <div className="student-heading">
          <h1>JOSEPH MACHARIA WANJAU</h1>
          <p className="registration">ms200/2535/2023</p>
          <div className="semester-pill">SEMESTER 1 2026/2027</div>
        </div>
        <div className="academic-info">
          <h2><span className="graduation-icon">♧</span> Academic Info</h2>
          <p><strong>Program Code:</strong> <span className="green-text">MS200</span></p>
          <p><strong>Programme Name:</strong> BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCES)</p>
          <p><strong>Campus:</strong> MAIN</p>
        </div>
      </section>

      <section className="personal-card">
        <div className="section-heading">
          <div className="section-icon">♙</div>
          <div>
            <h2>Personal Information</h2>
            <p>Your registered contact details</p>
          </div>
        </div>
        <div className="personal-details">
          <InfoRow label="ID/PASSPORT">••••••••</InfoRow>
          <InfoRow label="GENDER">Male</InfoRow>
          <InfoRow label="DATE OF BIRTH">01/12/••</InfoRow>
          <InfoRow label="PHONE NUMBER">07••••••••</InfoRow>
          <InfoRow label="EMAIL ADDRESS">student@example.com</InfoRow>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(nextPage) {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app-shell">
      <Header menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <nav className="nav-menu" aria-label="Main navigation">
          <button className={page === "dashboard" ? "active" : ""} onClick={() => navigate("dashboard")}>Dashboard</button>
          <button className={page === "profile" ? "active" : ""} onClick={() => navigate("profile")}>Student Profile</button>
        </nav>
      )}

      <main className="page-content">
        {page === "dashboard" ? <Dashboard /> : <StudentProfile />}
        <footer className="footer-note">MUT Student Portal · React practice recreation</footer>
      </main>
    </div>
  );
}