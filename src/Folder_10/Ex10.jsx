import { useState } from 'react';
import { LuAlignJustify, LuCircleUser } from "react-icons/lu";
import styles from './Ex10.module.css';

function Ex10() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div className={styles.container}>
         <div className={styles.menu_horizontal}>
            <LuAlignJustify
               className={styles.menu_icon}
               onClick={() => setMenuOpen(!menuOpen)}
            />
            <div className={styles.menu_logo}>
               <img src="src/assets/logoipsum-393.png" alt="" />
            </div>
            <ul
               className={`${styles.menu_items} ${menuOpen ? styles.open : ''}`}
            >
               <li>Produtos</li>
               <li>Serviços</li>
               <li>Contatos</li>
            </ul>
            <LuCircleUser className={styles.user_icon} />
         </div>
      </div>
   );
}

export default Ex10; 