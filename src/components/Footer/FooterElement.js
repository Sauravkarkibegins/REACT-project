

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    box:{
        background:'black',
        color:'white',
        height:'20vh'
    },
    typo:{
        letterSpacing:'.5rem ',
        [theme.breakpoints.down('sm')]:{
            letterSpacing:'.1rem',
            fontSize:'1rem'
        }

    }
}))

export default useStyles