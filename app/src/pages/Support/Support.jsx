import { IoMdMail } from 'react-icons/io'
import DashboardLayout from '../../components/DashboardLayout'
import ContactCard from './components/ContactCard'
import SupportCard from './components/SupportCard'
import { TbMessageCircleFilled } from 'react-icons/tb'
import InfoCard from '../Dashboard/components/InfoCard'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return (
    <DashboardLayout title="Support">
     <Stack spacing="4rem" mx="5rem"
     >
     <SupportCard
      leftComponent={<ContactCard/>}
      title="Contact Us"
      text="Have a question or just want to know more? Feel free to reach out to us."
      icon={IoMdMail}
      />
      <SupportCard
      leftComponent={<InfoCard
      inverted={true}
      tagText="Chatbot"
      imgUrl="/images/grid_bg.svg"
      text="Chat with us now"
      />}
      title="Live Chat"
      text="Don’t have time to wait for the answer? Chat with us now."
      icon={TbMessageCircleFilled}
      />
     </Stack>
    </DashboardLayout>
  )
}

export default Support