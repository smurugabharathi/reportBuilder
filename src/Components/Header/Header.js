import LogoDevIcon from '@mui/icons-material/LogoDev';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EventIcon from '@mui/icons-material/Event';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import CropFreeIcon from '@mui/icons-material/CropFree';
import LogoutIcon from '@mui/icons-material/Logout';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import classes from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={classes.container}>
                <ul className={classes.sidebar}>
                    <li><span><LogoDevIcon sx={{ fontSize: 40 }} color="success" /></span></li>
                    <li><span><ListAltIcon className={classes.headerIcons} /></span></li>
                    <li><span><EventIcon className={classes.headerIcons} /></span></li>
                    <li><span><ViewInArIcon className={classes.headerIcons} /></span></li>
                    <li><span><WorkspacesIcon className={classes.headerIcons} /></span></li>
                    <li><span><ShoppingCartIcon className={classes.headerIcons} /></span></li>
                    <hr className={classes.headerHR}/>
                    <li><span><VoiceChatIcon className={classes.headerIcons} /></span></li>
                    <li><span><CropFreeIcon className={classes.headerIcons} /></span></li>
                    <li className={classes.headerAvatar}><span ><Avatar /></span></li>
                    <li><span><LogoutIcon className={classes.headerIcons} /></span></li>
                </ul>
            </div>
        </>
    );

}

export default Header;