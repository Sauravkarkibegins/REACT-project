import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
   box:{     
      overflow:'hidden',     
      marginTop:'20vh',
      marginBottom:'20vh',
     
    
   },
   h2:{
    color:'green',
    letterSpacing:'.4rem',
    textAlign:'center'
},
firstgrid:{
    marginBottom:'10vh'
},
   maincontainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
   },
   h5:{
      color:'green',
      letterSpacing:'.6rem',
     
     
   },
   btn:{
      fontSize:'15px',
      letterSpacing:'.5rem',
      border:'1px solid transparent',

      '&:hover':{
         color:'green',
         border:'1px solid green',
         background:'#fff'
      }
   },
   img:{
      maxWidth:'100%',
     maxHeight:'100%',

     
   } ,
   
   acco:{
       background:'black',
       color:'white'
   }
   
   
  

}))


export default useStyles