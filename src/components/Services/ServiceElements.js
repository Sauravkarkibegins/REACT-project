import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
    box:{
        marginTop:'10vh',
        marginBottom:'20vh',
        overflow:'hidden'
    },
    h2:{
        color:'green',
        letterSpacing:'.4rem',
        textAlign:'center'
    },
    firstgrid:{
        marginBottom:'10vh'
    },
    lastgrid:{
        marginTop:'10vh'
    },
    btn:{
        color:'green',
        border:'1px solid green',
        background:'white',
        transition:'all 0.3s ease-in-out',
        fontSize:'1rem',

        '&:hover':{
            color:'white',
            border:'1px solid white',
            background:'green',
            transition:'all 0.3s ease-in-out'
        }
    }


}))

export default useStyles