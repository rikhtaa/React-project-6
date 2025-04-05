import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
    bgImage={imgUrl}
    bgSize="cover"
    bgRepeat="no-repeat"
      bgColor={
        inverted ? "p.purple" : "white"
      }
    >
      <Tag
      bg={
        inverted ? "white" : "p.purple"
      }
      color={
        inverted ? "p.purple" : "white"
      }
      borderRadius="full"
      >
      {tagText}
      </Tag>
    <Text 
        textStyle="h5"
        color={
          inverted ? "white" : "black.80"
        }
        mt="4" fontWeight="medium">
      {text}
    </Text>
    </CustomCard>
  )
}

export default InfoCard