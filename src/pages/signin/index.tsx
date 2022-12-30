import { signIn } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaGoogle } from 'react-icons/fa'

import styles from './styles.module.scss'

export default function SignIn() {
    return(
        <>
            <Head>
                <title>TestSandbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.contentContainer}>
                <img src='/images/logo-small.svg' alt='TestSandbox' />
                <div>
                    <h1>Sign in to <br />TestSandbox</h1>
                    <h2>Login or register to start building your tests today.</h2>
                    <div className={styles.authButtons}>
                        <button><FaEnvelope color='#29292e' /> Sign in with your corporative mail.</button>
                        <div className={styles.chooseProvider}>
                            <button onClick={() => signIn('github')}><FaGithub color='#999999' /> Sign in with GitHub.</button>
                            <button><FaGoogle color='#999999' /> Sign in with Google.</button>
                        </div>
                    </div>
                </div>
                <span>
                    By continuing, you agree to TestSandbox <br />
                    <Link href={'!#'}>Terms of service</Link>, <Link href={'!#'}>privacy policy</Link>.
                </span>
            </main>
        </>
    )
}