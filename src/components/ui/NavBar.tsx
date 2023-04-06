import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useUI } from "@/hooks";

const NavBar = () => {

    const { openSideMenu } = useUI();

    return (
        <AppBar
            position="sticky"
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={ openSideMenu }
                >
                    <MenuOutlinedIcon/>
                </IconButton>

                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar