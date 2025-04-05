import { Box, Button, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import Card from '../../../components/Card'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ResetPasswordSuccess = () => {
  return (
     <Container>
        <Center  minH="100vh">
        <Card  p={{
                base: "4 ",
                md: "10",
              }} 
              showCard={true}>
          <VStack spacing={6}>
            <Icon as={FaCheckCircle} boxSize="48px" color="green"/>
            <Text textStyle="h4" color="p.black" fontWeight="medium">
            Password Reset Done
            </Text>
            <Text textStyle="p2" color="black.60" textAlign="center">
            Now you can access your account.
            </Text>
            <Box w="full">
            <Link to="/signin">
            <Button w="full">
            Signin
            </Button>
            </Link>
            </Box>
          </VStack>
        </Card>
        </Center>
        </Container>
  )
}

export default ResetPasswordSuccess