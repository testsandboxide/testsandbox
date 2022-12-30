import styles from './styles.module.scss'

interface GridBoxProps {
    image: string;
    title: string;
    description: string;
}

export function GridBox({ image, title, description }: GridBoxProps) {
    return(
        <div className={styles.gridBoxContainer}>
            <img src={ image } alt='Image' />
            <h2>{ title }</h2>
            <span>{ description }</span>
        </div>
    )
}