import Link from "next/link";
import Head from "next/head";
import Container from '../../components/container'
import Image from 'next/image'


export default function FirstPost() {
    return (
        <>
            <Container>
                <Head>
                    <title>My First Post</title>
                </Head>

                <h1>
                    FirstPost
                </h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </Container>

            <Image src="/Images/Logo.PNG" 
            alt= "yomero" 
            width={144} 
            height={144} />


        </>
    )
}