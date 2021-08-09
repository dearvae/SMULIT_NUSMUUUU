
import MyLayout from '../component/global/layout'

export default function Test() {
  return (
   <>

   </>
  )
}

Test.getLayout = (test) => (
    <MyLayout number="3">
      {test}
    </MyLayout>
  )