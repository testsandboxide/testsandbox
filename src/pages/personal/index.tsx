import Head from 'next/head'

import { GenericButton } from '../../components/GenericButton'
import { GridPanel } from '../../components/GridPanel'

import styles from './styles.module.scss'

export default function Personal() {
    return(
        <>
            <Head>
                <title>Personal Plan - TestSandbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.contentContainer}>
                <h1>Experiment and learn without <br />setup hassle.</h1>
                <h2>Go straight to testing with instant sandboxes for rapid <br />tests. Free for personal use.</h2>
                <GenericButton text='Get started' />
            </main>
            <aside>
                <div className={styles.featureContent}>
                    <span>Prototyping</span>
                    <h1>Prototype Quickly</h1>
                    <div className={styles.layout}>
                        <div className={styles.featuredImage}>
                            <img src='/images/prototype.png' alt='Start testing' />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.layoutComponents}>
                                <h2>Test from anywhere.</h2>
                                <span>You just need a web browser.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>No setup.</h2>
                                <span>Go straight to coding with templates.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>VS Code built-in.</h2>
                                <span>The editor is full-featured, yet familiar.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featureContent}>
                    <span>Collaboration</span>
                    <h1>Share with a click</h1>
                    <div className={styles.layout}>
                        <div className={styles.featuredImage}>
                            <img src='/images/share.png' alt='Start testing' />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.layoutComponents}>
                                <h2>Share tests.</h2>
                                <span>With friends, colleagues, or the world.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Evidence your tests.</h2>
                                <span>Create and share your tests evidences.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Embed code examples.</h2>
                                <span>In blog postos on Medium, DEV, or elsewhere.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featureContent}>
                    <h1>Go pro</h1>
                    <div className={styles.gridContainer}>
                        <GridPanel isActive image='/images/private.svg' title='Build in private' description='Make sandboxes private and use private GitHub repos.' />
                        <GridPanel image='/images/share.svg' title='Share with a team or clients' description='Set a sandbox permissions to restrict forking or downloading code.' />
                        <GridPanel image='/images/automation.svg' title='Automate without limits' description='Get more sandboxes limits and more evidence storage.' />
                    </div>
                </div>

                <div className={styles.exploreContainer}>
                    <h1>For power-users & freelancers.</h1>
                    <h2>Keep work private, get more sandboxes and higher evidence limits.</h2>
                    <GenericButton text='Go Pro' />
                </div>
            </aside>
        </>
    )
}