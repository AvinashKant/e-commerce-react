import styles from "./AuthHeader.module.css";
export default function AuthHeader() {
    return (
        <div className={styles.container}>
            <div>
                Hi {'User'}
            </div>
            <div>
                <div>
                    Flag
                </div>
                <div>
                    Alert
                </div>
                <div>
                    Menu
                </div>
            </div>
        </div>
    )
}