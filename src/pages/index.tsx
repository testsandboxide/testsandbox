import Head from 'next/head'

import { GenericButton } from '../components/GenericButton'
import { GridBox } from '../components/GridBox'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>TestSandbox: Online Test Automation IDE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.contentContainer}>
        <span>TestSandbox</span>
        <h1>Where teams test <br /> faster, together.</h1>
        <h2>Create, share and get feedback with collaborative <br /> sandboxes for rapid test coverage.</h2>
        <GenericButton image='/images/test-icon.svg' text='Start testing for free' />
      </main>
      <aside>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <button className={styles.active}>No setup</button>
            <button>Superfast</button>
            <button>Multiplayer</button>
            <button>Updates live</button>
            <button>Shared</button>
          </div>
          <div className={styles.sectionBody}>
            A sandbox needs no setup - use a template to quickstart new <br /> 
            tests, or start from a GitHub repo and begin testing in <br />
            seconds.
          </div>
        </div>

        <div className={styles.featureContent}>
          <h1>The TestSandbox <br /> features.</h1>
          <h2>
            Create functional, component or performance tests with <br /> 
            a focus on enabling the mainstream test automation practices.
          </h2>
          <div className={styles.gridContainer}>
            <GridBox image='/images/selenium.svg' title='Web testing with Selenium' description='All browsers supported. Run tests on your local machine or using a cloud provider.' />
            <GridBox image='/images/appium.svg' title='Mobile testing with Appium' description='Android and iOS. Run tests on a local device or using a cloud provider.' />
            <GridBox image='/images/api.svg' title='Rest API testing' description='Built on top of the Apache HttpClient library.' />
            <GridBox image='/images/keywords.svg' title='Keyword-drive testing' description='Keywords are high-level building blocks which hide the complexity of the underlying technology and let you build concise, readable and maintainable tests. No coding skills required.' />
            <GridBox image='/images/parallel.svg' title='Parallel execution' description='Run multiple test sessions in parallel, limited only by the available hardware resources. When you&#39;ve maxed out your local machine(s), spin up more test actors in the cloud(s).' />
            <GridBox image='/images/testing.svg' title='Distributed testing' description='Write tests that execute seamlessly across multiple machines, networks and technologies.' />
            <GridBox image='/images/control.svg' title='Source control' description='Designed from the ground up to play well with Git and other source control systems. Perfect for large or geographically dispersed teams.' />
            <GridBox image='/images/environments.svg' title='Environments' description='Build your tests once and run them against multiple environments or using different sets of test data.' />
            <GridBox image='/images/platform.svg' title='Cross-platform' description='Runs on macOS, Windows and Linux' />
            <GridBox image='/images/end-to-end.svg' title='End-to-end testing' description='Integrate web, mobile and API test steps in a single test with a simple syntax, for true end-to-end testing.' />
            <GridBox image='/images/web.svg' title='Web API' description='Use a simple HTTP API to integrate with Jenkins, JIRA and other tools or custom applications.' />
            <GridBox image='/images/reporting.svg' title='Reporting' description='Examine test execution results, screenshots and logs in the UI, or export them as JSON or JUnit XML to consume in Jenkins and other CI tools.' />
          </div>
        </div>

        <div className={styles.exploreContainer}>
          <h1>Free for personal use.</h1>
          <h2>Create many tests for your applications, get test results and <br /> share.</h2>
          <GenericButton text='Get started, it&#39;s free!' />
        </div>
      </aside>
    </>
  )
}
