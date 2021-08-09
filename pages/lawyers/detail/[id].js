
import MyLayout from '../../../component/global/layout'

export default function Detail() {
  return (
   <>

   </>
  )
}

Detail.getLayout = (detail) => (
    <MyLayout number="4">
      {detail}
    </MyLayout>
  )