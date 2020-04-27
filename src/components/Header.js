import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<Navbar bg="dark" expand="lg">
		<Container>
			<Navbar.Collapse>
				<Nav className="mr-auto">
					<Navbar.Brand>
						<Link to="/dashboard" className="display-4">Boilerplate</Link>
					</Navbar.Brand>
				</Nav>
				
				<Nav>
					<Button variant="link" size="lg" onClick={startLogout}>Logout</Button>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);