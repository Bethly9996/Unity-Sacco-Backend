import React from 'react'
import styled from 'styled-components';
import { Navbar } from '../navbar/Navbar'

export const AcountInfoScreen = () => {
	return (
		<div>
			<Navbar />

			<Container>
				<UserInfoBox>
						{/* <div style={{backgroundColor: 'red'}}></div>
						<div style={{backgroundColor: 'yellow'}}></div>
						<div style={{backgroundColor: 'green'}}></div> */}
				</UserInfoBox>
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 89.3vh;
`;

const UserInfoBox = styled.div`
	width: 70%;
	height: 75%;
	background-color: #2980B9;
	border-radius: 70px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

`;