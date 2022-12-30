import Head from 'next/head'
import { Sidebar } from '../../components/Sidebar'

import styles from './styles.module.scss'

export default function Dashboard() {
    return(
        <>
            <Head>
                <title>Recent - TestSandbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <main className={styles.dashboard}>
                <div className={styles.dashboardContent}>

                </div>
            </main>
        </>
    )
}