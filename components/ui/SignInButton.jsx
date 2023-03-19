import Link from 'next/link';
import styles from './signinbutton.module.scss';
import { BsKey } from 'react-icons/bs';

const SignInButton = () => {
  return (
    <>
      <Link href="/signin">
        <a>
          <span className={styles.svglogin}>
            <BsKey size={20} />
          </span>
          <button className={styles.btn}>Sign In</button>
        </a>
      </Link>
    </>
  );
};

export default SignInButton;
