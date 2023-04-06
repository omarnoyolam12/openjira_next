import { FC, ReactNode } from 'react';

import Head from "next/head";

import { Box } from "@mui/material";

import { NavBar, Sidebar } from '../ui';

interface Props {
    titulo?: string,
    children: ReactNode
}

const Layout: FC<Props> = ({titulo = 'App OpenJira', children}) => {
    return (
        <Box sx={{flexFlow: 1}}>
            <Head>
                <title>{titulo}</title>
            </Head>

            <NavBar/>
            
            <Sidebar/>

            <Box sx={{padding: '10px 20px'}}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout