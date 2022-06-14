
import style from "../styles/Navbar.module.css"
import Link from "next/link";

const Navbar = () => {
  

  return (
    <div className={style.container}>
      <Link href="/">
        <img
        src="logo.svg" alt=""
        className={style.image}
        />
      </Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/features">Features</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/pricing">Pricing</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/resources">Resources</Link>
        </li>
        
      </ul>
      <button className={style.hamburger} type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
        
      </div>
      
    
  );
};

export default Navbar;