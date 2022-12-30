import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.gridLinks}>
                <div className={styles.group}>
                    <span>Product</span>
                    <Link href='/product'>Online testing</Link>
                    <Link href='/desktop'>Desktop app</Link>
                    <Link href='/cli'>CLI</Link>
                    <Link href='/plugin'>IDE plugin</Link>
                    <Link href='/mobile'>Mobile app</Link>
                    {/* <Link href='/farm'>Device farm</Link> */}
                    <Link href='/recorder'>Recorder</Link>
                </div>
                <div className={styles.group}>
                    <span>Explore</span>
                    <Link href='/sandboxes'>Featured sandboxes</Link>
                </div>
                <div className={styles.group}>
                    <span>For</span>
                    <Link href='/personal'>Individuals</Link>
                    <Link href='/team'>Teams</Link>
                    <Link href='/enterprise'>Enterprise</Link>
                </div>
                <div className={styles.group}>
                    <span>About</span>
                    <Link href='/pricing'>Pricing</Link>
                    <Link href='/company'>Company</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/legal/terms'>Terms of use</Link>
                    <Link href='/legal/privacy'>Privacy policy</Link>
                </div>
                <div className={styles.group}>
                    <span>Support</span>
                    <Link href='/docs'>Documentation</Link>
                    <Link href='/support'>Contact support</Link>
                </div>
            </div>
            <div className={styles.social}>
                <Link href='https://github.com/testsandboxide/testsandbox' target='_blank'><FaGithub color='#999999' /></Link>
                <Link href='https://linkedin.com/company/testsandboxide' target='_blank'><FaLinkedin color='#999999' /></Link>
                <Link href='https://instagram.com/testsandboxide' target='_blank'><FaInstagram color='#999999' /></Link>
                <Link href='https://twitter.com/testsandboxide' target='_blank'><FaTwitter color='#999999' /></Link>
            </div>
            <span className={styles.signature}>Copyright &copy; {new Date().getFullYear()} TestSandbox.</span>
        </footer>
    )
}