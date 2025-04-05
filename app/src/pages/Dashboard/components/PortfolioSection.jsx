import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { IoIosInformationCircle } from "react-icons/io";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" 
    align={{
      base: "flex-start",
      xl: "center",
    }}
    flexDir={{
      base:"column",
      xl: "row",
    }}
    spacing={{
      base:"4",
      xl: "0",
    }}
    >
      <HStack spacing={{
        base: "0",
        md: "16",
      }}
       align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base:"column",
        xl: "row",
      }}
      >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">
            Total Portfolio Value
          </Text>
          <Icon as={IoIosInformationCircle} />
        </HStack>
        <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">
            Wallet Balances
          </Text>
          <Icon as={IoIosInformationCircle} />
        </HStack>
        <HStack spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base:"column",
              sm: "row",
            }}
        >
          <HStack>
            <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag colorScheme='gray' fontWeight="medium">BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text><Tag colorScheme='gray'>INR</Tag>
          </HStack>
        </HStack>
      </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<LuArrowDownToLine/>}>Deposit</Button>
        <Button leftIcon={<LuArrowUpToLine/>}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection