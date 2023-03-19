import Link from 'next/link';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import styles from './signinbutton.module.scss';

const PropertyButton = () => {
  return (
    <>
      <Link href="/property">
        <a>
          <span className={styles.svglogin}>
            <AiOutlineUnorderedList size={20} />
          </span>

          <button className={styles.btn}>List Your Property</button>
        </a>
      </Link>
    </>
  );
};

export default PropertyButton;
