export const styles = () => {
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return {
    container:{
        flex,
        flexDirection: "column",
        fontFamily: "Roboto Serif, Sans",
  },
  logo:{
    width: "15rem",
            padding: "1rem",
  },
    containerForm:{
        flex,
        flexDirection: "column",
        gap: "0.5rem",

        width: "100%",
    },
    titulo: {
        color: "#aaaaaa",
        padding: "1rem",
        textTransform: "uppercase",
        fontSize: "1.5rem",
    },
    button: {
      "&:hover": {
        borderColor: "rgba(255,240,10,0.8)",
        backgroundColor: "var(--textPrimary)",
        color: "var(--primary)",
      },
      width: "90%",
      backgroundColor: "var(--primary)",
      color: "var(--textPrimary)",
      margin: "2rem 0",
    },
    forgot: {
      color: "var(--primary)",
      fontWeight: "600",
      marginBottom: "1rem",
    },
  };
};
