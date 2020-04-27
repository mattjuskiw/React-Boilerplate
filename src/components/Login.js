import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
	<div className="box-layout">
		<Jumbotron className="text-center">
			<Container>
				<h1>Boilerplate</h1>
				<p className="lead text-muted">Tag line for app.</p>
				<hr className="my-4" />
				
				<Button variant="primary" size="lg" onClick={startLogin}>Login with Google</Button>
			</Container>
		</Jumbotron>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);