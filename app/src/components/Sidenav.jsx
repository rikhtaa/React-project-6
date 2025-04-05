import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import {Link, useLocation} from "react-router-dom"
const Sidenav = () => {
  const location = useLocation()

  const isActiveLink = (link)=>{
    return location.pathname === link
  }
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ]
  // .HStack{
  //   display:flex;
  //   alignItems:center;
  // }
  return (
    <Stack 
    bg="white"
    justify="space-between" 
    boxShadow={{
      base: "none",
      lg:"lg", 
    }} 
    w={{
      base:"full",
      lg:"16rem"
    }}
    h="100vh"
    
    >
     <Box>
     <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
     @DOSOMECODING
     </Heading>
     <Box mt="6" mx="3">
     {
      navLinks.map((nav)=>(
        <Link to={nav.link}  key={nav.text}>
       <HStack  
        bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
        color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
       borderRadius="10px"
       py="3" px="4"
       _hover={{
        bg:"#F3F3F7",
        color: "#171717"
       }}
       >
        <Icon as={nav.icon}/> 
        <Text fontSize="" fontWeight="medium">{nav.text}</Text>
       </HStack>    
        </Link>
      ))
     } 
     </Box>
     </Box>
   
     <Box mt="6" mx="3" mb="6">
    <Link to="/support">
     <HStack  
       borderRadius="10px"
       py="3" px="4"
       bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
       color={isActiveLink("/support") ? "#171717" : "#797E82"}
       _hover={{
        bg:"#F3F3F7",
        color: "#171717"
       }}
       >
        <Icon as={BiSupport}/> 
        <Text fontSize="" fontWeight="medium">Support</Text>
       </HStack>  
      </Link>
     </Box>
    </Stack>
  )
}

export default Sidenav