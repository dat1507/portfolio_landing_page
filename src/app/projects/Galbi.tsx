import "./Lusine.css";
import "./TiemBanh.css";
import "./Galbi.css";
import logo from "../components/layout/LOGO.png";

// ── Placeholder component ─────────────────────────────────────────────────
const IMG = ({ src, style }: { src?: string; style?: React.CSSProperties }) =>
  src ? (
    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }} />
  ) : (
    <div style={{ width: "100%", height: "100%", background: "#222", display: "block", ...style }} />
  );

// ── Galbi ─────────────────────────────────────────────────────────────────
export default function Galbi() {

  const menuVideo: string | undefined = "https://res.cloudinary.com/drith9etg/video/upload/v1781602211/MENU-SET-h264_fwwpez.mp4";
  const sidePhotos: (string | null)[] = [
    "https://res.cloudinary.com/drith9etg/image/upload/v1781602284/Free_Book_Mockup_8_jjtafe.png",
    "https://res.cloudinary.com/drith9etg/image/upload/v1781602266/Free_Book_Mockup_3_myzufe.png",
  ];
  const voucherPhoto: string | null = "https://res.cloudinary.com/drith9etg/image/upload/v1781602308/Voucher_tcgzjo.png";
  const billboard01:  string | null = "https://res.cloudinary.com/drith9etg/image/upload/v1781611223/galbi2_v9g2tx.jpg";
  const billboard02:  string | null = "https://res.cloudinary.com/drith9etg/image/upload/v1781611223/galbi3_yytb7v.jpg";
  // 👇 Replace nulls with imports when ready
  const posmPhotos: (string | null)[] = ["https://res.cloudinary.com/drith9etg/image/upload/v1781611223/galbi1_rkcjbx.jpg", "https://res.cloudinary.com/drith9etg/image/upload/v1781611222/galbi4_juvds2.jpg"];

  return (
    <div className="lusine galbi">

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="lusine__intro">
        <img src={logo} alt="" aria-hidden="true" className="lusine__watermark" />
        <h1 className="lusine__title">Yusung Galbi</h1>
        <div className="lusine__meta">
          <p><strong>Year:</strong> 2025</p>
          <p><strong>Software:</strong> Adobe Illustrator, Photoshop, After Effect, Lightroom</p>
        </div>
        <p className="lusine__desc">
          A Korean cuisine brand known for its modern dining experience and signature grilled
          dishes, I had the opportunity to contribute to their creative and marketing efforts.
          My main responsibilities included: creating and designing social media posts to align with
          Yusung Galbi's brand identity and promotional campaigns. Planning and executing food
          photoshoots, focusing on menu highlights, seasonal dishes, and promotional sets.
          Designing POSM (Point of Sale Materials) such as standees, posters, table tents, and
          voucher layouts with strong attention to layout and visual hierarchy.
        </p>
        <p className="lusine__section-label lusine__section-label--flush">
          <strong>NEW MENU</strong> 2025
        </p>
      </section>

      {/* ── FULL WIDTH MENU VIDEO ─────────────────────────────── */}
      <div className="galbi__full">
        {menuVideo
          ? <video src={menuVideo} autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
          : <div style={{ width: "100%", minHeight: "300px", background: "#222" }} />
        }
      </div>

      {/* ── SIDE BY SIDE ──────────────────────────────────────── */}
      <div className="galbi__sidebyside">
        {sidePhotos.map((src, i) => (
          <div key={i} className="galbi__sidebyside-item">
            <IMG src={src ?? undefined} />
          </div>
        ))}
      </div>

      {/* ── CASH VOUCHER ──────────────────────────────────────── */}
      <p className="lusine__section-label lusine__section-label--right">
        <strong>Cash</strong> Voucher
      </p>
      <div className="galbi__voucher">
        <IMG src={voucherPhoto ?? undefined} />
      </div>

      {/* ── BILLBOARD MOCKUP ──────────────────────────────────── */}
      <p className="lusine__section-label lusine__section-label--flush">
        <strong>Billboard</strong> Mockup
      </p>
      <div className="galbi__billboard">
        <IMG src={billboard01 ?? undefined} />
      </div>
      <div className="galbi__billboard galbi__billboard--small">
        <IMG src={billboard02 ?? undefined} />
      </div>

      {/* ── POSM FLYER MOCKUP ─────────────────────────────────── */}
      <p className="lusine__section-label lusine__section-label--right">
        <strong>POSM</strong> Flyer Mockup
      </p>
      <div className="galbi__sidebyside">
        {posmPhotos.map((src, i) => (
          <div key={i} className="galbi__sidebyside-item">
            <IMG src={src ?? undefined} />
          </div>
        ))}
      </div>

    </div>
  );
}