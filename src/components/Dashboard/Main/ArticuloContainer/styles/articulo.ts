export const Articulo =()=>{
    const flex = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
      const buttonEffect={
  
      };
      return {
        containerBase:{
            
            flex,
            alignItems:'flex-start',
            width:'18rem',
            border:'1px solid #cccccc',
            flexDirection:'column',
            padding:'0.5rem',
            margin:'0.5rem'
          
         },
         titulo:{
            flex,
            justifyContent:'space-between',
            width:'100%',
            gap:'0.5rem',
            borderBottom:'1px solid #cccccc',
            paddingBottom:'0.5rem',
         },
         dataContainer:{
           flex,
           alignItems:'flex-start',
           flexDirection:'column'
         },
         iconoData:{
            flex,
            justifyContent:'space-between',
            with:'100%',
            gap:'0.5rem',
            padding:'0.3rem'
         },
         buttons:{
          flex,
          gap:'0.5rem'
         },
         buttonEdit:{
          backgroundColor:'var(--warning)',
          border:'1px solid #cccccc',
          boxShadow: '0.2rem 0.2rem 0.2rem #00000020',
          "&:hover":{
              backgroundColor:'#cccccc',
              color:'yellow' 
          },
          "&:active":{
              transform: 'translateY(0.1rem)',
              boxShadow: 'none', 
          }
         },
         buttonDelete:{
          backgroundColor:'var(--error)',
          border:'1px solid #cccccc',
          boxShadow: '0.2rem 0.2rem 0.2rem #00000020',
          "&:hover":{
              backgroundColor:'#cccccc',
              color:'red' 
          },
          "&:active":{
              transform: 'translateY(0.1rem)',
              boxShadow: 'none', 
          }
          
  
         }   
          
        
      
    }
}