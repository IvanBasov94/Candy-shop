import { FC } from "react";

import IntroContacts from "./components/IntroContacts";
import Feedback from "./components/Feedback";

import styles from './ContactsPage.module.scss';

const ContactsPage: FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<IntroContacts />
				<Feedback />
			</div>
		</main>
	);
};

export default ContactsPage;