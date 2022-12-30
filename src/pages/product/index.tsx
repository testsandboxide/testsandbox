import Head from 'next/head'

import { GenericButton } from '../../components/GenericButton'
import { GridPanel } from '../../components/GridPanel'

import styles from './styles.module.scss'

export default function Product() {
    return(
        <>
            <Head>
                <title>IDE - TestSandbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.contentContainer}>
                <h1>Test from anywhere.</h1>
                <h2>Test online with no setup in a powerful <br /> IDE that feels like it&#39;s local.</h2>
                <GenericButton text='Get started' />
            </main>
            <aside>
                <div className={styles.featureContent}>
                    <h1>Fast coverage <br /> in the browser.</h1>
                    <div className={styles.layout}>
                        <div className={styles.featuredImage}>
                            <img src='/images/start-testing.png' alt='Start testing' />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.layoutComponents}>
                                <h2>Cloud IDE</h2>
                                <span>Test from anywhere, on any device with a web browser.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Hot report</h2>
                                <span>Examine test execution results, screenshots and logs in the UI.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Extensible</h2>
                                <span>Integrate with any technology by creating your own custom test actions (keywords).</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featureContent}>
                    <h1>Use with your<br /> favorite tools.</h1>
                    <div className={styles.gridContainer}>
                        <GridPanel image='/images/github.svg' title='Integrated with GitHub' description='Import a repo, and change are synced automatically. Or export your sandbox, create commits, and open PRs.' />
                        <GridPanel image='/images/jira.svg' title='Integrate to Jira or Jenkins' description='Use a simple HTTP API to integrate with Jenkins, JIRA and other tools or custom applications.' />
                        <GridPanel isActive image='/images/testsandbox.svg' title='Start from a template' description='Test session templates are stored as YAML files in the templates subdirectory of the test repository.' />
                    </div>
                </div>

                <div className={styles.featureContent}>
                    <h1>Test like a pro.</h1>
                    <div className={styles.layout}>
                        <div className={styles.featuredImage}>
                            <img src='/images/test-like-a-pro.png' alt='Start testing' />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.layoutComponents}>
                                <h2>Progressive testing</h2>
                                <span>Run, manage and see all progressive test in the UI.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Test pyramid</h2>
                                <span>Create functional, component and performance tests.</span>
                            </div>
                            <div className={styles.layoutComponents}>
                                <h2>Run regressive</h2>
                                <span>Run all tests as a regressive test in the sandbox.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.exploreContainer}>
                    <h1>Start testing in seconds.</h1>
                    <h2>Test from anywhere with no project setup.</h2>
                    <GenericButton text='Get started' />
                </div>
            </aside>
        </>
    )
}