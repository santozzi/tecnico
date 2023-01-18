export const styles = ()=>{
  const flex={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }  
  return {
      container:{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         // flexWrap:'wrap',
          width: "100%",
          padding:'2rem'
      },
      logo:{
        padding:'0 1rem',
        color:'white',
      },
      brand:{
          flex,
          color: "#aaaaaa",

          width:'100%',
         
          border:'2px solid #4497FC',
          textTransform: "uppercase",
          fontSize: "1.5rem",
          padding:'1rem',
          margin:'0 1rem'

      }
    }
}