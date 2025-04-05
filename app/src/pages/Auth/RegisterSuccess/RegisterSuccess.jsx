import { Box, Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from '@chakra-ui/react'
import Card from '../../../components/Card'
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useQuery } from '@tanstack/react-query';
import { verifyEmailAddressSignUp } from '../../../api/query/userQuery';

const RegisterSuccess = () => {
  const toast = useToast()
  const {token} = useParams()
  const navigate = useNavigate()
  const { isSuccess, isLoading} = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignUp({token}),
    enabled: !!token,
    onError:(error)=>{
      toast({
        title:"SignUp Error",
        description: error.message,
        status: "error",
      })
      navigate("/signup")
    },

  })

  if(isLoading) return <Center h="100vh"><Spinner/></Center>
  return (
    <Container>
    <Center  minH="100vh">
      {
        isSuccess &&
    <Card  p={{
            base: "4 ",
            md: "10",
          }} 
          showCard={true}>
      <VStack spacing={6}>
        <Icon as={FaCheckCircle} boxSize="48px" color="green"/>
        <Text textStyle="h4" color="p.black" fontWeight="medium">
        Successfully Registration
        </Text>
        <Text textStyle="p2" color="black.60" textAlign="center">
        Hurray! You have successfully created your account. Enter the app to explore all it’s features.
        </Text>
        <Box w="full">
        <Link to="/signin">
        <Button w="full" isLoading={isLoading}>
        Enter the App
        </Button>
        </Link>
        </Box>
      </VStack>
    </Card>
      }
    </Center>
    </Container>
  )
}

export default RegisterSuccess