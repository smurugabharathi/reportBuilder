import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import classes from './SideBar.module.css';

const SideBar = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const sidebarClass = props.isSideBarExpanded ? classes.openSidebar : classes.sidebar;
    const mainClass = props.isSideBarExpanded ? classes.openMain : classes.main;

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (<div>
        <div className={sidebarClass}>
            <Typography className={classes.sideBarTitle}>
                Project Name
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
                <OutlinedInput
                    sx={{ fontSize: 13 }}
                    placeholder='Search'
                    id="outlined-adornment-password"
                    type={'text'}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="start"
                            >
                                <SearchIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Divider />
            <ArrowBackIosIcon className={classes.closebtn} onClick={() => props.setIsSideBarExpanded(false)} />
            <div className={classes.sidebarAccordion}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.accordionTitle}>
                            Flows
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 12,
                                            fontWeight: 500
                                        }}
                                        primary="Inventory Flow" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: 12,
                                        fontWeight: 500
                                    }} primary="Channel Flow" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: 12,
                                        fontWeight: 500
                                    }} primary="Regional Distribution" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: 12,
                                        fontWeight: 500
                                    }} primary="New Product Integration" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.accordionTitle}>Dashboards</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.accordionTitle}>
                            DataSets
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.accordionTitle}>Connectors</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
    )
}

export default SideBar;