import React from 'react';
import Header from '../../components/Header';
import Tabs from './Tabs';

function ProfileContainer() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div style={{background:'#eee', minHeight: '120vh'}}>
      <Header />
      <div style={{width: '60%', margin: '50px auto'}}>
        <h2 style={{margin:'40px'}} >View and Edit your Profile {user.firstName} </h2>
        <Tabs fieldName={'First name'} user={user} value={user.firstName} />
        <Tabs fieldName={'Last name'} user={user} value={user.lastName} />
        <Tabs fieldName={'Email'} user={user} value={user.email} />
        <Tabs fieldName={'College Name'} user={user} value={user.collegeName} />
        <Tabs fieldName={'Stream'} user={user} value={user.stream} />
      </div>
    </div>
  )
}

export default ProfileContainer
