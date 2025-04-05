import { Stack, Table, TableCaption, TableContainer, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "Transfer"
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      time: "02:48 PM",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer"
      },
      amount: "- ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-04",
      time: "09:21 AM",
      type: {
        name: "Buy",
        tag: "BTC"
      },
      amount: "+ 12.48513391",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "01:32 PM",
      type: {
        name: "Sell",
        tag: "BTC"
      },
      amount: "- 0.36401628 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "09:02 AM",
      type: {
        name: "BTC Deposit",
        tag: "BTC"
      },
      amount: "+ 4.13946104",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-01",
      time: "01:56 PM",
      type: {
        name: "BTC Withdraw",
        tag: "BTC"
      },
      amount: "- 10.00000000",
      status: "Completed",
    },
  ]
  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Completed: "#059669",
    Cancelled: "#DC2626",
  }
  return (
    <TableContainer>
      <Table colorScheme="gray">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody color="p.black">
            {tableData.map((data)=>(
                <Tr key={data.id}>
                  <Td fontSize="sm" fontWeight="medium">{data.id}</Td>
                  <Td>
                    <Stack spacing={0}>
                      <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                      <Text fontSize="xs" color="black.60">{data.time}</Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack spacing={0}>
                      <Text>{data.type.name}</Text>
                      <Text fontSize="xs" color="black.60">{data.type.tag}</Text>
                    </Stack>
                  </Td>
                  <Td fontSize="sm" fontWeight="medium">{data.amount}</Td>
                  <Td fontSize="sm" fontWeight="medium">
                    <Tag bg={statusColor[data.status]}   color="white" borderRadius="full">{data.status}</Tag>
                    </Td>
                </Tr>
              ))}
          </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TransactionTable