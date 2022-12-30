import styles from './styles.module.scss'

interface ButtonProps {
    image?: string;
    text: string;
}

export function GenericButton({ image, text }: ButtonProps) {
    return(
        <button className={styles.genericButton}>
            {image && <img src={image} alt='Icon' />}
            {text}
        </button>
    )
}