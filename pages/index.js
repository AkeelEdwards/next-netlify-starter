import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getStaticProps () {
  const req = await fetch ('/some-api');
  const car = await req.json();


}

export default function Car() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
