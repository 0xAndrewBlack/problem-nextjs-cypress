import Image from 'next/image';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				Made with
				<div className={styles.logo}>
					<Image src="/netliheart.svg" alt="Netlify Logo" height={25} width={25} />
				</div>
				for you
			</footer>
		</>
	);
}
