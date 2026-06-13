import "./Lusine.css";
import "./TiemBanh.css";
import logo from "../components/layout/LOGO.png";
import lu01 from "./Lusine-01.jpg";
import lu02 from "./Lusine-02.jpg";
import lu03 from "./Lusine-03.jpg";
import lu04 from "./Lusine-04.jpg";
import lu05 from "./Lusine-05.jpg";
import lu06 from "./Lusine-06.jpg";
import lu07 from "./Lusine-07.jpg";
import lu08 from "./Lusine-08.jpg";
import lu09 from "./Lusine-09.jpg";
import lu10 from "./Lusine-10.jpg";
import lu11 from "./Lusine-11.jpg";
import lu12 from "./Lusine-12.jpg";

// ── Placeholder component — replace src with your actual import ───────────
const IMG = ({ src, style }: { src?: string; style?: React.CSSProperties }) =>
  src ? (
    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }} />
  ) : (
    <div style={{ width: "100%", height: "100%", background: "#222", display: "block", ...style }} />
  );

// ── MarqueeRow ────────────────────────────────────────────────────────────
function MarqueeRow({
  items,
  speed = 30,
  itemWidth = "220px",
  itemAspect = "1 / 1",
  reverse = false,
  objectFit = "cover",
  gap = "4px",
}: {
  items: (string | null)[];
  speed?: number;
  itemWidth?: string;
  itemAspect?: string;
  reverse?: boolean;
  objectFit?: "cover" | "contain";
  gap?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track">
      <div
        className="marquee-inner"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal", gap }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="marquee-item" style={{ width: itemWidth, aspectRatio: itemAspect, background: "#fff" }}>
            <IMG src={src ?? undefined} style={{ objectFit }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ReelVideo ─────────────────────────────────────────────────────────────
function ReelVideo({ src }: { src?: string }) {
  return (
    <div className="lusine__reel-item">
      {src
        ? <video src={src} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : <div style={{ width: "100%", height: "100%", background: "#222" }} />
      }
    </div>
  );
}

// ── Lusine ────────────────────────────────────────────────────────────────
export default function Lusine() {

  const thumbs: (string | null)[]      = [lu01, lu02, lu03, lu04, lu05, lu06, lu07];
  const gridPhotos: (string | null)[]  = [lu08, lu09, lu10];
  const sidePhotos: (string | null)[]  = [lu11, lu12];
  const fullPhoto: string | null       = null;
  const totePhotos: (string | null)[]  = [null, null, null];

  const reelsMenu   = ["/videos/lu1-h264.mp4", "/videos/lu2-h264.mp4", "/videos/lu3-h264.mp4"];
  const reelsDrinks = ["/videos/lu4-h264.mp4", "/videos/lu5-h264.mp4", "/videos/lu6-h264.mp4"];
  const reelsCake   = ["/videos/lu10-h264.mp4", "/videos/lu11-h264.mp4", "/videos/lu9-h264.mp4"];
  const reelsOther  = [undefined, undefined, undefined];

  return (
    <div className="lusine">

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="lusine__intro">
        <img src={logo} alt="" aria-hidden="true" className="lusine__watermark" />
        <h1 className="lusine__title">L'Usine</h1>
        <div className="lusine__meta">
          <p><strong>Year:</strong> 2026</p>
          <p><strong>Software:</strong> Adobe Illustrator, Photoshop, After Effect, Lightroom</p>
        </div>
        <p className="lusine__desc">
          Working at L'Usine, a lifestyle brand that blends a concept store, café, and creative
          hub, I had the opportunity to contribute to their creative and marketing efforts.
          My main responsibilities included: Creating and designing social media posts to align with
          L'Usine's brand identity and seasonal campaigns. Planning and executing food photoshoots
          to highlight new menu items and promotional content. Designing POSM (Point of Sale
          Materials) such as posters and event flyers with thoughtful layout and typography.
          Recording and Editing videos, including highlight reels for events and content for social
          channels. Producing motion graphics for thumbnails to increase visual engagement and
          strengthen brand recognition.
        </p>
        <p className="lusine__caption" style={{ paddingLeft: 0, marginTop: 16 }}>
          A thumbnail ads for <strong>NEW MENU 2025</strong> ...
        </p>

        {/* ── white cover to hide watermark below the border line ── */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          right: 0,
          height: "80px",
          background: "white",
          zIndex: 1,
          pointerEvents: "none",
        }} />
      </section>

      {/* ── THUMBNAIL MARQUEE ─────────────────────────────────── */}
      <div style={{ marginTop: "-80px", position: "relative", zIndex: 2 }}>
        <MarqueeRow items={thumbs} speed={35} itemAspect="3 / 4" objectFit="contain" gap="16px" />
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────── */}
      <hr className="lusine__marquee-divider" />

      {/* ── SOCIAL POST GRID ──────────────────────────────────── */}
      <div className="lusine__grid">
        {gridPhotos.map((src, i) => (
          <div key={i}>
            <IMG src={src ?? undefined} style={{ objectFit: "cover", height: "auto", width: "100%" }} />
          </div>
        ))}
      </div>

      {/* ── SIDE BY SIDE + CAPTION ────────────────────────────── */}
      <div className="lusine__sidebyside-row">
        <div className="lusine__caption lusine__sidebyside-caption">
          <p>A relaxed photoshoot with wine and steak</p>
          <p style={{ paddingLeft: "400px" }}>at L'Usine</p>
        </div>
        <div className="lusine__sidebyside">
          {sidePhotos.map((src, i) => (
            <div key={i}><IMG src={src ?? undefined} style={{ objectFit: "cover", height: "auto", width: "100%" }} /></div>
          ))}
        </div>
      </div>

      {/* ── CREATIVE REELS FOR NEW MENU ───────────────────────── */}
      <p className="lusine__section-label"><strong>Creative Reels</strong> for New Menu</p>
      <div className="lusine__reels">
        {reelsMenu.map((src, i) => <ReelVideo key={i} src={src} />)}
      </div>
      <div className="lusine__caption lusine__caption--right"><p><strong>A Teasing Reels</strong> begin</p></div>

      {/* ── NEW DRINKS REELS ──────────────────────────────────── */}
      <p className="lusine__section-label"><strong>New Drinks</strong> Reels</p>
      <div style={{ marginLeft: "auto", maxWidth: "75%", display: "flex", gap: "4px" }}>
        {reelsDrinks.map((src, i) => <ReelVideo key={i} src={src} />)}
      </div>
      <div className="lusine__caption"></div>

      {/* ── NEW CAKE REELS ────────────────────────────────────── */}
      <hr className="lusine__marquee-divider" />
      <div style={{ marginRight: "auto", maxWidth: "75%", display: "flex", gap: "4px" }}>
        {reelsCake.map((src, i) => <ReelVideo key={i} src={src} />)}
      </div>
      <div className="lusine__caption"></div>

      {/* ── FULL WIDTH IMAGE ──────────────────────────────────── */}
      <div className="lusine__sidebyside" style={{ marginTop: 8 }}>
        <div style={{ aspectRatio: "9/16", overflow: "hidden", background: "#222" }}>
          <ReelVideo src={undefined} />
        </div>
        <div style={{ aspectRatio: "9/16", overflow: "hidden", background: "#222" }}>
          <ReelVideo src={undefined} />
        </div>
      </div>
      <div className="lusine__caption"><p>Tote Bag Yellow Version</p></div>

      {/* ── TOTE BAG ROW ──────────────────────────────────────── */}
      <div className="lusine__tote">
        {totePhotos.map((src, i) => (
          <div key={i} style={{ aspectRatio: "3/4" }}><IMG src={src ?? undefined} /></div>
        ))}
      </div>

      {/* ── OTHER REELS ───────────────────────────────────────── */}
      <p className="lusine__section-label"><strong>Other</strong> Reels</p>
      <div className="lusine__reels">
        {reelsOther.map((src, i) => <ReelVideo key={i} src={src} />)}
      </div>
      <div className="lusine__caption" style={{ marginBottom: 48 }}></div>

    </div>
  );
}