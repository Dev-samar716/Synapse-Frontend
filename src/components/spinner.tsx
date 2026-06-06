

//Spinner.tsx

const Spinner = () => {

// Used vanilla CSS because I find it easier for animations

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="spinner"></div>

      <style>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #ccc;
          border-top: 4px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Spinner;