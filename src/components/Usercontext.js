import React from 'react'

const UserContext = React.createContext('Tota') // Here Tota is Default value of Context parameter
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext