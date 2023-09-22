import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../features/admin';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function AdminBars() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  }
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const admin = useSelector(state => state.admin.value)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
             Dashboard
          </Typography>
          <input className='search' type='search' placeholder='search'></input>
        </Toolbar>
      </AppBar>
      
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <h1 className='msg'>Welcome</h1>
          <h2 className='msg'>{admin.email}</h2>
          <h2>{admin.password}</h2>
        </Typography>
        {/* Dashboard Boxes */}
        <div className="dashboard-boxes">
          {/* Product Count Box */}
          <div className="dashboard-box">
            <h3>Product Count</h3>
            <p>500</p>
          </div>
          {/* Number of Customers Box */}
          <div className="dashboard-box">
            <h3>Number of Customers</h3>
            <p>1000</p>
          </div>
          {/* Transaction Details Box */}
          <div className="dashboard-box">
            <h3>Transaction Details</h3>
            <p>View Transactions</p>
          </div>
        </div>
        <button onClick={handleLogout} className="box">Logout</button>
      </Main>
    </Box>
  );
  
}