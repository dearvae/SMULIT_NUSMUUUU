
import MyLayout from '../component/global/layout'

export default function Services() {
  return (
   <>

   </>
  )
}

Services.getLayout = (services) => (
    <MyLayout number="4">
      {services}
    </MyLayout>
  )