import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Context } from '../../context/UserContext';

import useAuth from '../../service/useAuth';

import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	Stack,
	Alert,
	ListItemIcon,
	Divider,
} from '@mui/material/';

import Logout from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AdbIcon from '@mui/icons-material/Adb';

import { BiSolidBuildings } from 'react-icons/bi';

export default function Navbar() {
	const { authenticated } = useContext(Context);

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const [alert, setAlert] = useState(false);
	const navigate = useNavigate();

	const { logout } = useAuth();

	const handleLogout = () => {
		setAlert(true);
		setTimeout(() => {
			logout();
			setAlert(false);
		}, 2000);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleDashboard = () => {
		navigate('/usuario/dashboard');
	};

	const handlePerfil = () => {
		navigate('/perfil/:id?');
	};

	const handleLogin = () => {
		navigate('/login');
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="static"
			style={{ height: '50px', justifyContent: 'center' }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link to={`/`}>
						<IconButton
							aria-label="delete"
							style={{ color: 'white', fontSize: '30pt' }}
						>
							<BiSolidBuildings />
						</IconButton>
					</Link>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						></Menu>
					</Box>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to={'/'}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>
								Home
							</Button>
						</Link>

						<Link to={'/informacao'}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>
								Quem somos
							</Button>
						</Link>

						<Link to={'/atendimento'}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>
								Canais de atendimento
							</Button>
						</Link>
					</Box>

					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<Tooltip title="Account settings">
							<IconButton
								onClick={handleClick}
								size="small"
								sx={{ ml: 2 }}
								aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
							>
								<Avatar sx={{ width: 32, height: 32 }}>?</Avatar>
							</IconButton>
						</Tooltip>
					</Box>
					<Menu
						anchorEl={anchorEl}
						id="account-menu"
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: 'visible',
								filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
								mt: 1.5,
								'& .MuiAvatar-root': {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								'&:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									bgcolor: 'background.paper',
									transform: 'translateY(-50%) rotate(45deg)',
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					>
						{authenticated ? (
							<>
								<MenuItem onClick={handlePerfil}>
									<Avatar /> Perfil
								</MenuItem>
								<MenuItem onClick={handleDashboard}>
									<Avatar /> Dashboard
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleLogout}>
									<ListItemIcon>
										<Logout fontSize="small" />
									</ListItemIcon>
									Logout{' '}
								</MenuItem>
							</>
						) : (
							<MenuItem onClick={handleLogin}>
								<ListItemIcon>
									<PermIdentityOutlinedIcon fontSize="small" />
								</ListItemIcon>
								Login
							</MenuItem>
						)}
					</Menu>
				</Toolbar>
			</Container>
			{alert && (
				<Stack
					sx={{
						width: '300px',
						position: 'absolute',
						right: '0px',
						margin: '8% 2% 0 0',
					}}
					spacing={2}
				>
					<Alert variant="filled" severity="info">
						Logout com sucesso!
					</Alert>
				</Stack>
			)}
		</AppBar>
	);
}
