import { useState } from "react";

const SIDES = [
  "Front",
  "Back",
  "Left",
  "Right",
  "Ceiling",
  "Floor",
];

export default function UploadPanel({ onComplete }) {
  const [images, setImages] = useState({});

  function handleFile(side, file) {
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImages((prev) => ({
      ...prev,
      [side]: {
        file,
        url,
      },
    }));
  }

  function removeImage(side) {
    setImages((prev) => {
      const copy = { ...prev };
      delete copy[side];
      return copy;
    });
  }

  const ready = SIDES.every((side) => images[side]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        overflow: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Real Estate 360 Viewer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {SIDES.map((side) => (
          <div
            key={side}
            style={{
              background: "#222",
              borderRadius: 12,
              padding: 20,
              border: "2px solid #333",
            }}
          >
            <h3>{side}</h3>

            {images[side] ? (
              <>
                <img
                  src={images[side].url}
                  alt={side}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginTop: 10,
                  }}
                />

                <button
                  onClick={() => removeImage(side)}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: 12,
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(side, e.target.files[0])}
                  style={{
                    marginTop: 15,
                    width: "100%",
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 40,
        }}
      >
        <button
          disabled={!ready}
          onClick={() => onComplete(images)}
          style={{
            padding: "18px 40px",
            fontSize: 20,
            cursor: ready ? "pointer" : "not-allowed",
            borderRadius: 10,
            border: "none",
            background: ready ? "#00b894" : "#555",
            color: "white",
          }}
        >
          Generate 360 Viewer
        </button>
      </div>
    </div>
  );
}
