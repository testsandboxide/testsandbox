import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface PricingPanelProps {
    description: string;
    type: string;
    price: string;
    plan: string;
    children: ReactNode;
    storage: string;
    buttonText: string;
    isTeamPro?: boolean;
    isOrganization?: boolean;
    isPersonalPro?: boolean;
    callAction?: () => {}
}

export function PricingPanel({ description, type, price, plan, children, storage, buttonText, isTeamPro, isOrganization, isPersonalPro, callAction }: PricingPanelProps) {
    return(
        <div className={`${styles.pricingContainer} ${isTeamPro && styles.isTeamPro} ${isOrganization && styles.isOrganization} ${isPersonalPro && styles.isPersonalPro}`}>
            <span>{ description }</span>
            <h2>{ type }</h2>
            <div>
                <h1>{ price }</h1>
                <p>{ plan }</p>
            </div>
            <div className={styles.content}>
                { children }
            </div>
            <div className={styles.storageText}>{ storage }</div>
            <button onClick={ callAction }>{ buttonText }</button>
        </div>
    )
}