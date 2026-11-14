import { useState } from 'react';
import { LuAlignJustify, LuCircleUser } from "react-icons/lu";
import styles from './Ex9.module.css';

function Ex9() {
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
            <LuCircleUser />
         </div>
         {menuOpen && (
            <ul className={styles.menu_items}>
               <li>Produtos</li>
               <li>Serviços</li>
               <li>Contatos</li>
            </ul>
         )}
      </div>
   );
}

export default Ex9;