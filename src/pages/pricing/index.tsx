import Head from 'next/head'
import Link from 'next/link'

import { PricingPanel } from '../../components/PricingPanel'

import styles from './styles.module.scss'

export default function Pricing() {
    return(
        <>
            <Head>
                <title>Pricing - TestSandbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.contentContainer}>
                <h3>Pricing</h3>
                <h1>Free to learn and experiment. <br />Pay as you grow.</h1>
            </main>
            <aside>
                <div className={styles.pricingContent}>
                    <h3>Team and Business Plans</h3>
                    <div className={styles.pricingGrid}>
                        <PricingPanel
                            description='For learning and experimenting'
                            type='Free'
                            price={`R$0`}
                            plan='forever'
                            storage='2GB evidence storage'
                            buttonText='Start testing now'
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>2 public sandboxes</span>
                                <span>3 public GitHub repos</span>
                                <span>5 automation agents</span>
                                <br />
                                <br />
                            </div>
                        </PricingPanel>
                        <PricingPanel
                            description='For small teams focused on collaboration'
                            type='Team Pro'
                            price={`Soon`}
                            plan='per user per month'
                            storage='10GB evidence storage'
                            buttonText='Soon'
                            isTeamPro
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>50 public sandboxes</span>
                                <span>20 private sandboxes</span>
                                <span>private GitHub repos</span>
                                <span>15 automation agents</span>
                                <span>advanced permissions</span>
                                <br />
                            </div>
                        </PricingPanel>
                        <PricingPanel
                            description='For companies that want to go beyond'
                            type='Organization'
                            price={`Soon`}
                            plan='tailor-made plan with more flexibility.'
                            storage='unlimited evidence storage'
                            buttonText='Soon'
                            isOrganization
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>unlimited public sandboxes</span>
                                <span>unlimited private sandboxes</span>
                                <span>private GitHub repos</span>
                                <span>unlimited automation agents</span>
                                <span>advanced permissions</span>
                                <br />
                            </div>
                        </PricingPanel>
                    </div>
                </div>

                <div className={styles.pricingContent}>
                    <h3>Personal plans</h3>
                    <div className={`${styles.pricingGrid} ${styles.twoContent}`}>
                        <PricingPanel
                            description='For learning and experimenting'
                            type='Free'
                            price={`R$0`}
                            plan='forever'
                            storage='2GB evidence storage'
                            buttonText='Start testing now'
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>2 public sandboxes</span>
                                <span>3 public GitHub repos</span>
                                <span>5 automation agents</span>
                            </div>
                        </PricingPanel>
                        <PricingPanel
                            description='For learning and experimenting'
                            type='Personal Pro'
                            price={`Soon`}
                            plan='per month'
                            storage='4GB evidence storage'
                            buttonText='Soon'
                            isPersonalPro
                        >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>50 public sandboxes</span>
                                <span>20 private sandboxes</span>
                                <span>private GitHub repos</span>
                                <span>15 automation agents</span>
                            </div>
                        </PricingPanel>
                    </div>
                </div>

                <div className={styles.featureContent}>
                    <span>Compare plans</span>
                    <h1>Choose the right <br />plan for you.</h1>
                </div>
                <section className={styles.plansContainer}>
                    <h3>Team and Business Plans</h3>
                    <table className={styles.planTable}>
                        <tr>
                            <th colSpan={1}><span></span></th>
                            <th className={styles.planTeamFree}><span>Free</span></th>
                            <th className={styles.planTeamPro}>
                                <span>Team Pro</span>
                                <Link href={'!#'}>Soon</Link>
                            </th>
                            <th className={styles.planTeamOrganization}>
                                <span>Organization</span>
                                <Link href={'!#'}>Soon</Link>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <h3>Users</h3>
                                <span>Choose by your team length.</span>
                            </td>
                            <td className={styles.planTeamFree}>
                                <span>20</span>
                            </td>
                            <td className={styles.planTeamPro}>
                                <span>50</span>
                            </td>
                            <td className={styles.planTeamOrganization}>
                                <span>volume discounts</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Sandboxes</h3>
                                <span>Maximum number of sandboxes a team can create.</span>
                            </td>
                            <td className={styles.planTeamFree}>
                                <span>2 (only public)</span>
                            </td>
                            <td className={styles.planTeamPro}>
                                <span>50 (only public)</span>
                            </td>
                            <td className={styles.planTeamOrganization}>
                                <span>Unlimited public and private</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Repositories</h3>
                                <span>Maximum number of repos a team can create.</span>
                            </td>
                            <td className={styles.planTeamFree}>
                                <span>2 (only public)</span>
                            </td>
                            <td className={styles.planTeamPro}>
                                <span>50 (only public)</span>
                            </td>
                            <td className={styles.planTeamOrganization}>
                                <span>Unlimited public and private</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Storage</h3>
                                <span>Maximum storage for test evidences.</span>
                            </td>
                            <td className={styles.planTeamFree}>
                                <span>4GB</span>
                            </td>
                            <td className={styles.planTeamPro}>
                                <span>10GB</span>
                            </td>
                            <td className={styles.planTeamOrganization}>
                                <span>Unlimited</span>
                            </td>
                        </tr>
                    </table>
                    <h3>Personal Plans</h3>
                    <table className={styles.planTable}>
                        <tr>
                            <th colSpan={1}><span></span></th>
                            <th className={styles.planPersonalFree}><span>Free</span></th>
                            <th className={styles.planPersonalPro}>
                                <span>Personal Pro</span>
                                <Link href={'!#'}>Soon</Link>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <h3>Users</h3>
                                <span>All Personal plans are limited to 1 user.</span>
                            </td>
                            <td className={styles.planPersonalFree}>
                                <span>1</span>
                            </td>
                            <td className={styles.planPersonalPro}>
                                <span>1</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Sandboxes</h3>
                                <span>Create as many sandboxes as you like and manage their permissions.</span>
                            </td>
                            <td className={styles.planPersonalFree}>
                                <span>2 (only public)</span>
                            </td>
                            <td className={styles.planPersonalPro}>
                                <span>50 (only public)</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Repositories</h3>
                                <span>Create as many sandboxes as you like and manage their permissions.</span>
                            </td>
                            <td className={styles.planPersonalFree}>
                                <span>3 (only public)</span>
                            </td>
                            <td className={styles.planPersonalPro}>
                                <span>20 (only public)</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Storage</h3>
                                <span>Maximum storage for test evidences.</span>
                            </td>
                            <td className={styles.planPersonalFree}>
                                <span>2GB</span>
                            </td>
                            <td className={styles.planPersonalPro}>
                                <span>4GB</span>
                            </td>
                        </tr>
                    </table>
                    <h3>plus all our standard platform features</h3>
                    <div className={styles.featureColumns}>
                        <div className={styles.column}>
                            <ul>
                                <li>
                                    <h2>TestSandbox CI</h2>
                                    <span>A GitHub integration that auto-build from pull requests</span>
                                </li>
                                <li>
                                    <h2>Integrations</h2>
                                    <span>Integrate with Jenkins, JIRA and other tools or custom applications</span>
                                </li>
                                <li>
                                    <h2>Hot report</h2>
                                    <span>Examine test execution results, screenshots and logs in the UI</span>
                                </li>
                                <li>
                                    <h2>Share tests</h2>
                                    <span>With friends, colleagues, or the world</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <ul>
                                <li>
                                    <h2>Console</h2>
                                    <span>View logging and console output to see loading progress and debug issues</span>
                                </li>
                                <li>
                                    <h2>Templates</h2>
                                    <span>Templates are stored as YAML file in the templates directory of the test repository</span>
                                </li>
                                <li>
                                    <h2>Extensible</h2>
                                    <span>Integrate with any technology by creating your own custom test actions (keywords)</span>
                                </li>
                                <li>
                                    <h2>No setup</h2>
                                    <span>Go straight to coding with templates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </>
    )
}