import { Box } from '@mui/system'
import React, {Fragment,useEffect,useState} from 'react'
import { getAdminById } from '../../Api-helpers/api-helpers'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {  List, ListItem, ListItemText, Typography } from '@mui/material'

const AdminProfile = () => {
    const [Admin,setAdmin] = useState();

    useEffect(()=>{
        getAdminById().then((res)=>{
            setAdmin(res.admin)
        }).catch((err)=>console.log(err));
    },[])
    console.log(Admin);
    
    return (
        <Box width={'100%'} display='flex'>
     <Fragment>
   {Admin && (<Box flexDirection={'column'} justifyContent="center" alignItems={"center"} width={'30%'} padding={3}>
                <AccountCircleIcon sx={{fontSize:'10rem',textAlign:"center" , ml:3}}/>
              
                <Typography mt= {1} padding={1} width={"auto"} textAlign={"center"} border={'1px solid #ccc'}  color={"primary"} borderRadius={6}>Admin Email: {Admin.email}</Typography>
            </Box> )}

           { Admin && Admin.addedFoods.length > 0 && (   <Box width={'70%'} display="flex" flexDirection={"column"}>
                    <Typography variant='h3' fontFamily={"verdana"} textAlign="center" padding={2}>Added Foods</Typography>
                        <Box margin={'auto'} display="flex" flexDirection={'column'} width="80%">
                            <List>
                                {Admin.addedFoods.map((Food,index)=>
                                
                                    <ListItem sx={{bgcolor:"#808080",color:"white",textAlign:'center', margin:1,}}>

                                    <ListItemText sx={{margin:1,width:'auto',textAlign:"left"}}>Food: {Food.title}</ListItemText>                               
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                </Box>)}
                </Fragment>         
    </Box>
    )
}

export default AdminProfile