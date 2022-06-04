
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles((theme)=>({
    box:{
        position:'fixed',
        backgroundColor:'black',
        zIndex:'999',
        width:'100%',
        height:'100%',
       display:'grid',
        alignItems:'center',         
        transition:'0.3s ease-in-out',
        opacity:'100%',
        top:'0'
        
    },
    unbox:{
        position:'fixed',
        backgroundColor:'black',
        zIndex:'999',
        width:'100%',
        height:'100%',
       display:'grid',
        alignItems:'center',       
        transition:'0.3s ease-in-out',
        opacity:'0',
        top:'-100%',
        
    },
    close:{
        color:'#fff',
        fontSize:'2rem',

        '&:hover':{
            color:'green'
        }
    },
    iconbutton:{
        position:'absolute',
        top:'0.6rem',
        right:'1.5rem',
       
        
    },
    list:{
        color:'#fff',
        
      

        
    },

    listitem:{
        display:'flex',
        justifyContent:'center',
        cursor:'pointer',

        '&:hover':{
            color:'green'
        }
    },
    button:{
     
        fontSize:'1rem',
          transition:'all 0.3s ease-in-out',
          border:'1px solid #fff',
         
        '&:hover':{
            backgroundColor:'#222',
            color:'#fff',
            transition:'all 0.3s ease-in-out',
            border:'1px solid #fff'
        }
        
    }
}))

export default useStyles