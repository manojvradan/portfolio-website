const MONO = "var(--font-jetbrains-mono), monospace";

export default function PhotoSlot({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 8,
        background:
          "repeating-linear-gradient(45deg,#efefec,#efefec 11px,#e7e7e3 11px,#e7e7e3 22px)",
        color: "#9a9a96",
        font: `500 10.5px ${MONO}`,
        letterSpacing: ".05em",
      }}
    >
      {label}
    </div>
  );
}
