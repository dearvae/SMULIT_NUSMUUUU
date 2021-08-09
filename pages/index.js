import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyLayout from '../component/global/layout'
import Link from 'next/link'
export default function Home() {
  return (
<>
</>
  )
}
Home.getLayout = (home) => (
  <MyLayout number="1">
    {home}
  </MyLayout>
)