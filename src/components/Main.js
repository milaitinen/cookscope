import React from 'react';
import { Card, Button } from 'react-bootstrap';
import pizza from '../assets/pizza.jpg'
import '../css/Main.css'

export const Main = () => (
	<Card style={{ width: '30rem', height: '18rem', flex: '5', alignItems: 'center' }}>
		<Card.Img style={{ opacity: 0.5, width: '30rem' }} variant="top" src={pizza} />
		<Card.ImgOverlay>
			<Card.Title>Basic Pepperoni Pizza</Card.Title>
			<Card.Text>
				by LiveForPizza
			</Card.Text>
			<Button variant="recipe-button">View recipe</Button>
		</Card.ImgOverlay>
	</Card>
)