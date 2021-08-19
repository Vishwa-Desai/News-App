import React from "react";
import "./topbar.scss"
import categories from '../../Data/categories';
import SwipeableTemporaryDrawer from './Swipable';

export default function Topbar({ setCategory }) {
    const [ darkMode, setDarkMode ] = React.useState(false)
   
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])

    return (
        <div className="topbarContainer">
            <header>

                <div className="logo"> <img src="/assets/logo1.png" alt="logo" align="left" className="logoImg" /><span className="logoText"> MyTimes </span> </div>
                {/* <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>  */}
                <nav className="topbarRight">
                    <ul className="topbarLinks">
                        {categories.map((text, index) => (
                            <li id="link"> <button key={text} onClick={() => setCategory(text)}>{text}</button></li>
                        ))}
                    </ul>
                </nav>
                <div className="leftIcons">
                    <span className="icon1">
                        <SwipeableTemporaryDrawer setCategory={setCategory} />
                    </span>
                    <div
                        id="toggle"
                        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
                    >
                        <div className="toggle-inner" />
                    </div>

                </div>
            </header>

        </div>

    )
}
