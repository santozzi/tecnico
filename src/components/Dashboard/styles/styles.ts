export const styles = () => {
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return {
    containerBase:{
        flex,
        alignItems:'flex-start',
        width:'100%',
        backgroundColor:'#888888',
       
       

        
    },
    container: {
      flex,
      width: "1000px",
      backgroundColor:'white',
     
      flexDirection: "column",
    },
    containerFrame: {
      flex,
      justifyContent: "flex-start",
      width: "100%",
      minHeight:'100vh',
      flexDirection: "column",
     
    },
  };
};
