import React, {ChangeEvent, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (e:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: React.Dispatch<SetStateAction<string>>, setName: React.Dispatch<SetStateAction<string>>, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
   if (name.trim() === "") {
       setError("Ошибка! Введите имя!")
   } else {
    addUserCallback(name)
    setName('')
       }
}

export const pureOnBlur = (name: any, setError: React.Dispatch<string>) => { // если имя пустое - показать ошибку
    return name.trim()==="" ? setError("Ошибка! Введите имя!") : name
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if (e.key !== "Enter") {
        return;
    }
    addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = (users.length > 0 ? users[users.length-1].name : '')

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
