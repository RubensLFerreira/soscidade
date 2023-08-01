import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
} from '@mui/material/';

import AdbIcon from '@mui/icons-material/Adb';
import { BiSolidBuildings } from 'react-icons/bi';

export default function Navbar() {
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

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ height: '65px' }}>
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
								Inicio
							</Button>
						</Link>

						<Link to={'/'}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>
								Canais de atendimento
							</Button>
						</Link>

						<Link to={'/'}>
							<Button sx={{ my: 2, color: 'white', display: 'block' }}>
								Acesso à informação
							</Button>
						</Link>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Link to={`/admin`}>
									<Typography textAlign="center">Dashboard </Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Perfil </Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Link to={`/login`}>
									<Typography textAlign="center">Login </Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center" onClick={handleLogout}>
									Logout{' '}
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
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
					<Alert variant="filled" severity="success">
						Logout com sucesso!
					</Alert>
				</Stack>
			)}
		</AppBar>
	);
}
