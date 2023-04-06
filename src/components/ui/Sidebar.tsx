import { Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

import { useUI } from "@/hooks";

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

const Sidebar = () => {

    const { sideMenuOpen, closeSideMenu } = useUI();

    return (
        <Drawer
            anchor="left"
            open={sideMenuOpen}
            onClose={ closeSideMenu }

        >
            <Box
                sx={{width: 250}}    
            >
                <Box
                    sx={{padding: '5px 10px'}}
                >
                    <Typography variant="h4" >
                        Ménu
                    </Typography>
                </Box>

                <List>
                    {menuItems.map((item, index)=>(
                        <ListItemButton 
                            key={index}
                            
                        >
                            <ListItemIcon>
                                {index % 2 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>

                            <ListItemText primary={item}/>
                        </ListItemButton>
                    ))}
                </List>

                <Divider/>
            </Box>
        </Drawer>
    )
}

export default Sidebar