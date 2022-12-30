import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsBell } from 'react-icons/bs'
import { SlOptions } from 'react-icons/sl'

import { CreateButton } from '../CreateButton'
import { GenericButton } from '../GenericButton'

import styles from './styles.module.scss'

export function Header() {

    const { asPath } = useRouter()

    const header = asPath !== '/dashboard' ? (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/'><img src='/images/logo.svg' alt='TestSandbox' /></Link>
                <nav>
                    <Link href='/product'>Product</Link>
                    <Link href='/documentation'>Documentation</Link>
                    <Link href='/pricing'>Pricing</Link>
                    <Link href='/support'>Support</Link>
                </nav>
                <div>
                    <Link href='/signin'>Sign in</Link>
                    <CreateButton />
                </div>
            </div>
        </header>
    ) : (
        <header className={styles.userContainer}>
            <div>
                <Link href={'/dashboard'}><img src='/images/logo-small.svg' alt='TestSandbox' /></Link>
                <div className={styles.box}>
                    <GenericButton text='Create' />
                    <button className={styles.optionsButton}><BsBell color='#CACACA' /></button>
                    <button className={styles.optionsButton}><SlOptions color='#CACACA' /></button>
                </div>
            </div>
        </header>
    )

    return header
}