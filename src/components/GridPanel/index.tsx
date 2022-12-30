import styles from './styles.module.scss'

interface GridPanelProps {
    image: string;
    title: string;
    description: string;
    isActive?: boolean;
}

export function GridPanel({ image, title, description, isActive }: GridPanelProps) {
    return(
        <div className={styles.gridPanelContainer}>
            <div className={`${styles.gridBox} ${isActive && styles.active}`}>
                <img src={ image } alt='Image' />
            </div>
            <div className={styles.layoutComponent}>
                <h2>{ title }</h2>
                <span>{ description }</span>
            </div>
        </div>
    )
}