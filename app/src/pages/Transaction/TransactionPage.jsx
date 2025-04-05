import { HStack, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { Button, Card, Flex, Tab, TabList, TabPanel, TabPanels, Tag } from '@chakra-ui/react'
import { Tabs } from "@chakra-ui/react"
import DashboardLayout from '../../components/DashboardLayout'
import { GoDownload } from "react-icons/go";
import TransactionTable from './components/TransactionTable';

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ]
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<GoDownload/>}>
          Export CSV
        </Button>   
      </Flex>
      <Card borderRadius="1rem ">
    <Tabs>
      <TabList pt="4" display="flex" w="full" justifyContent="space-between">
        <HStack>
        {tabs.map((tab)=>(
            <Tab key={tab.name} display="flex" gap='2' pb="4">
              {tab.name}
              <Tag colorScheme='gray' borderRadius="full ">{tab.count}</Tag>
            </Tab>
          ))}
        </HStack>



  <InputGroup maxW="200px" pr="6">
  <InputLeftElement>
   <Icon as={CiSearch}/>
  </InputLeftElement>
    <Input placeholder="Search by ID or destination" />
  </InputGroup>


      </TabList>
     <TabPanels>
      <TabPanel>
        <TransactionTable/>
      </TabPanel>
      <TabPanel>
        <TransactionTable/>
      </TabPanel>
      <TabPanel>
        <TransactionTable/>
      </TabPanel>
      <TabPanel>
        <TransactionTable/>
      </TabPanel>
     </TabPanels>
    </Tabs>
</Card>
    </DashboardLayout>
  )
}

export default TransactionPage