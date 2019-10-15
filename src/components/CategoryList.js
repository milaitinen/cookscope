import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../css/CategoryList.css'
import categories from '../assets/categories.json'

const alertClicked = () => {
  alert('Category clicked!');
}

export const CategoryList = () => (
	<ListGroup className="sticky-offset" variant="flush" style={{width: '18rem', height: '100%',borderRight: '1px solid #DFDFDF', padding: '20px' }}>
		<h5 style={{ color: '#413938', margin: '.3rem 1.25rem' }} >Categories</h5>
		{Object.values(categories).map(category => (
			<ListGroup.Item key={category} action onClick={alertClicked}>
				{category}
			</ListGroup.Item>
		))}
	</ListGroup>
)