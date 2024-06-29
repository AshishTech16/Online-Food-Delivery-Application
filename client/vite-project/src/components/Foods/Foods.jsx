// View All FOOD PAGE.

import React , {useEffect,useState} from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import FoodItem from './FoodItem'
import { getAllFood } from '../../Api-helpers/api-helpers'

const Foods = () => {
    const [Foods,SetFoods] = useState([])
    useEffect(()=>{
        getAllFood().then((data)=>SetFoods(data.foods)).catch((err)=>console.log("No data Found"))
    },[])

  return (
   <Box margin={"auto"} marginTop={4}>
   <Typography variant='h4' padding={2} textAlign='center'
   bgcolor={'#E35A00'} width="40%" color="white" margin="auto"
   >
   VIEW ALL FOODS
   </Typography>
   <Box width="80%" margin='auto' marginTop='5' display={"flex"}
   justifyContent='flex-start' flexWrap={'wrap'}>
   {Foods.map((item,index)=>
   // passsing props in Food card
   <FoodItem 
    id={item._id}
    title={item.title}
    posterUrl={item.posterUrl}
    price={item.price}
    key={index} />
   )}
  </Box>
     </Box>
    )
}
export default Foods