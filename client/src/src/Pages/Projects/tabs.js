import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Typography } from '@mui/material';
import ProjectCard from './projects';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("the value is ", newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#F9F9F9', p: 3 }}>
      <Box display="flex" justifyContent="center">
        <Typography component={'span'} sx={styles.textPorfolio}>
          Our Projects
        </Typography>
      </Box>
      <Container display="flex" backgroundColor={'red'} justifyContent="center" sx={{ mt: 4, mb: 4, width: 450 }}>
        <Typography flexGrow={1} textAlign={'center'}>
          Qvet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Container>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Categories" />
        <Tab label="UI Design" />
        <Tab label="Web Design" />
        <Tab label="Logo Design" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProjectCard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ProjectCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectCard/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectCard/>
      </TabPanel>
    </Box>
  );
}

const styles = {
  textPorfolio: {
    cursor: 'pointer',
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    // borderBottom: "3px solid #000",
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      right: 0,
      borderBottom: '5px solid',
      borderRadius: '20px',
      borderColor: '#000',
      transition: 'width 0.5s ease-in-out', // Add transition properties
      width: '50%', // Set initial width to 0
    },
    '&:hover': {
      '&:before': {
        width: '100%', // Increase width to 100% on hover
      },
    }
  }
}