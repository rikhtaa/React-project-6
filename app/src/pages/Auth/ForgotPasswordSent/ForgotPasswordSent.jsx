import { Box, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import Card from '../../../components/Card';
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
 
const ForgotPasswordSent = () => {
  const params = useParams();
  const { email } = useParams();

  return (
    <Container>
      <Center  minH="100vh">
         <Card
          p={{
            base: "4 ",
            md: "10",
          }} 
          showCard={true}
         >
           <VStack spacing={6}>
                    <Icon as={FaCheckCircle} boxSize="48px" color="green"/>
             <Text textStyle="h4" color="p.black" fontWeight="medium">
             Successfully Sent
             </Text>
             <Text textStyle="p2" color="black.60" textAlign="center">
             We have sent instructions on how to reset your password to{" "}  
             <Box as="b" color="p.black">
            {email}
             </Box>
             Please follow the instructions from the email.
             </Text>
           </VStack>
         </Card>
      </Center>
    </Container>
  )
}

export default ForgotPasswordSent