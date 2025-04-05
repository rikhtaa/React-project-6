import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { PiCurrencyBtcBold } from "react-icons/pi";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: MdOutlineCurrencyRupee,
     text: "INR Deposit",
     amount: "+ ₹81,123.10",
     timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcBold,
     text: "BTC Sell",
     amount: "- 12.48513391 BTC",
     timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: MdOutlineCurrencyRupee,
     text: "INR Deposit",
     amount: "+ ₹81,123.10",
     timestamp: "2022-06-09 7:06 PM",
    },
  ]
  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">Recent Transactions</Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i)=>(
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider/>}
            <Flex gap="]4" width="full">
           <Grid placeItems="center"  bg="black.5" boxSize={10} borderRadius="full">
              <Icon as={transaction.icon}></Icon>
           </Grid>
           <Flex justify='space-between' flex="1">
            <Stack spacing="0">
              <Text textStyle="h6">
                {transaction.text}
              </Text>
              <Text fontSize="sm" color="black.40">
                {transaction.timestamp}
              </Text>
            </Stack>
              <Text textStyle="h6">
                {transaction.amount}
              </Text>
           </Flex>
          </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">View All</Button>
    </CustomCard>
  )
}

export default Transactions