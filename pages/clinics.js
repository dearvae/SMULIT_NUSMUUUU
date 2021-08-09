
import MyLayout from '../component/global/layout'

export default function Clinics() {
  return (
   <>

   </>
  )
}

Clinics.getLayout = (clinic) => (
    <MyLayout number="2">
      {clinic}
    </MyLayout>
  )