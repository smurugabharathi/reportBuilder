import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ReplayIcon from '@mui/icons-material/Replay';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';

import classes from './NavBar.module.css';

const NavBar = () => {
    return <div className={classes.navBarContainer}>
        <div className={classes.firstContainer}>
            <div className={classes.iconDiv}><ArrowBackIosIcon className={classes.iconClass} /></div>
            <div className={classes.breadCrumb}>
                <span> <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                    <Link underline="hover" className={classes.linkNav} href="#">
                        Projects
                    </Link>
                    <Link
                    className={classes.linkNav}
                        underline="hover"
                        href="#"
                    >
                        Dashboards
                    </Link>
                    <Typography className={classes.typoText}>2022 Inventory Dashboard</Typography>
                </Breadcrumbs>
                </span>
                <h1 className={classes.headline}>2022 Inventory Dashboard</h1>
            </div>
        </div>
        <div className={classes.secondContainer}>
            <div className={classes.iconDiv}><ReplayIcon className={classes.refreshClass} /></div>
            <div className={`${classes.iconDiv} ${classes.refreshDiv}`}><RefreshIcon className={classes.refreshClass} /></div>
            <Divider className={classes.verticalHR} orientation="vertical" flexItem />
            <div><Button className={classes.btnDiscard} variant="contained">Discard Changes</Button></div>
            <div> <Button className={classes.btnSave} variant="contained">Save</Button></div>
            <div className={classes.iconDiv}><MoreHorizIcon className={classes.moreIcon} /></div>
        </div>
    </div>
}

export default NavBar