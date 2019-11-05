import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Tab, Tabs } from 'react-bootstrap'
import '../css/UserProfile.css'
 

const UserProfile = () => {
  const { username } = useParams()
	const [user, setUser] = useState({ username: '', name: '', profilePicture: ''})
	const [activeTab, setActiveTab] = useState('1')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/users/${username}`)
			setUser(result.data)
			console.log(result.data)
    }
    fetchData()
	}, [username])
	
	console.log(user)

	const handleClick = (tab) => {
			setActiveTab(tab)
	}
 
  return (
    <React.Fragment>
      <div style={{height:'1em', background:'transparent'}}></div>
      <Card className='profile-card' >
        <Card.Body>
					<img className='profile-card-img rounded-circle' src={`.${user.profilePicture}`}></img>
					<Card.Title className='profile-title'>{user.name}</Card.Title>
					<Tabs className='profile-tabs' activeTab={1} onClick={handleClick}>
						<Tab className='profile-tab' eventKey={1} title="Own Recipes">
							tab content1
						</Tab>
						<Tab className='profile-tab' eventKey={2} title="Saved Recipes">
							tab content2222
						</Tab>
					</Tabs>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default UserProfile
