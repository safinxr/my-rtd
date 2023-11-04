
const navLink = <>
    <li><NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
        }
    >
        Home
    </NavLink></li>
    <li><NavLink
        to="/pageone"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
        }
    >
        pageone
    </NavLink></li>
    <li><NavLink
        to="/pagetwo"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
        }
    >
        pagetwo
    </NavLink></li>
</>


// CSS ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
.nav - underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100 %;
    height: 3px;
    background - color: aqua;
    transform: scale(0);
    transform - origin: left;
    transition: transform .4s;
}

.nav - underline: hover::after {
    transform: scale(1);
}

.active - underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100 %;
    height: 3px;
    background - color: aqua;
}