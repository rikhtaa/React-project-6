import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react"

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
    <Stack spacing={6}>
    <Text fontWeight="medium" fontSize="sm">
       You will receive response within 24 hours of time of submit.
     </Text>

     <HStack
      flexDir={{
       base: "column",
       md: "row",
     }}
     >
       <FormControl>
         <FormLabel>Name</FormLabel>
         <Input placeholder="Enter Your Name.." />
       </FormControl>
       <FormControl>
         <FormLabel>SurName</FormLabel>
         <Input placeholder="Enter Your SurName.." />
       </FormControl>
     </HStack>
       <FormControl>
         <FormLabel>Email address</FormLabel>
         <Input placeholder="Enter Your Email.." />
       </FormControl>
       <FormControl>
         <FormLabel>Message</FormLabel>
         <Textarea placeholder="Enter Your Message.." />
       </FormControl>
       <Checkbox defaultChecked>
         <Text fontSize="xs">
         I agree with 
         <Box as="span" color="p.purple">
          {' '}
           Terms & Conditions.</Box>
         </Text>
       </Checkbox>
       <Stack>
         <Button fontSize="sm">Send a Message</Button>
         <Button fontSize="sm" colorScheme="gray">Book a Meeting</Button>
       </Stack>

    </Stack>
   </Card>
  )
}

export default ContactCard