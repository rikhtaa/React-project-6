import { Box, Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import Card from '../../../components/Card';
import { useParams } from 'react-router-dom';
import { sendverificationMail } from '../../../api/query/userQuery';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

const RegisterEmailVerify = () => {
  const toast = useToast()
  const {email} = useParams()
  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>
  }

  const { mutate, isLoading } = useMutation({
    mutationKey: ['send-verification-mail'],
    mutationFn: () => sendverificationMail({ email }),
    onSettled: (data) => {
      console.log(data)
    },
    onError: (error) => {
      toast({
        title: "verificationMail Error",
        description: error.message,
        status: "error",
      })
    },
    enabled: !!email,
  })

  useEffect(() => {
    mutate({ email })
  }, [email])


  return (
    <Container>
      <Center minH="100vh">
        <Card p={{
          base: "4 ",
          md: "10",
        }}
          showCard={true}>
          <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Email Verification
            </Text>
            <Text textStyle="p2" color="black.60" textAlign="center">
              We have sent you an email verification to{" "}
              <Box as="b" color="p.black">
                {email}
              </Box>
               {" "} If you didn’t receive it, click the button below.
            </Text>
            <Button w="full" variant="outline"
              onClick={() => { mutate({ email }) }}
              isLoading={isLoading}
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  )
}

export default RegisterEmailVerify