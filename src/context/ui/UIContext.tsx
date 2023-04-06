import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean,

    // *Metodos-------------
    openSideMenu: ()=>void,
    closeSideMenu: ()=>void
}

const UIContext = createContext({} as ContextProps);

export default UIContext;