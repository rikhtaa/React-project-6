import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Spinner, Stack, Text, useToast } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import { object, string, ref } from 'yup';
import Card from "../../../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { verifyForgotToken } from "../../../api/query/userQuery";

const resetPasswordValidationSchema = object({
  newPassword: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("newPassword"), null], "Passwords must match").required("Repeat password is required"),
})
const ResetPassword = () => {

  const toast = useToast()
    const {token} = useParams()
    const navigate = useNavigate()
    const {mutate, isLoading} = useMutation({
      mutationKey: ["verify-forgot-token"],
      mutationFn: verifyForgotToken,
      enabled: !!token,
      onError:(error)=>{
        toast({
          title:"SignUp Error",
          description: error.message,
          status: "error",
        })
        navigate("/signup")
      },
      onSettled: ()=>{
        navigate("/reset-success")
      }
  
    })
  
    if(isLoading) return <Center h="100vh"><Spinner/></Center>
  return (
    <Container>
    <Center  minH="100vh">
      <Card>
          <Text mt="4" fontWeight="medium" textStyle="h1">Reset Password</Text>
          <Text textStyle="p2" color="black.60" mt="4">Enter your new password.</Text>
          <Formik initialValues={{
            newPassword: "",
            repeatPassword: "",
          }}
            onSubmit={(values) => {
              mutate({token, password: values.newPassword})
            }}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>

                <Field name="newPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor="newPassword">New Password</FormLabel>
                        <Input
                          {...field}
                          name="newPassword" type="newPassword" placeholder="Enter Your New Password" />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>

                      </FormControl>
                    )}
                  </Field>

                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatPassword">New Repeat Password</FormLabel>
                        <Input
                          {...field}
                          name="repeatPassword" type="password" placeholder="Enter Your RepeatPassword" />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>

                      </FormControl>
                    )}
                  </Field>

                  <Button  w="full" type="submit">Reset Password</Button>
                 
                </Stack>
              </Form>
            )}

          </Formik>
        </Card>
    </Center>  
    </Container>
  )
}

export default ResetPassword