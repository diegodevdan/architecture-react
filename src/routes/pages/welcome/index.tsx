import {Button, Typography} from "@mui/material";
import {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import axios from 'axios'
import {UserProps} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

export const WelcomePage = () => {

    const [userName, setUserName] = useState<string>('');
    const [users, setUsers] = useState<UserProps[]>([]);
    const navigate = useNavigate();

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setUserName(value)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userToFind = users.find(user => user.name == userName);

        if(!userToFind){
            alert(`el usuario ${userName} es incorrecto`)
            return
        }

        navigate('/generals')
        //TODO localStorage save user
    }

    const getUsers = useCallback(async () => {
        const urlAPI = 'https://jsonplaceholder.typicode.com/users';

        try {
            const resp = await axios.get(urlAPI);
            const {data} = resp;
            setUsers(data)
        } catch (e) {
            throw new Error('bad petiton');
        }
    },[])

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>
            <Typography variant={'h5'}>Bienvenido</Typography>
            <br/>

            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Usuario <b>*</b></label>
                <input
                    type="text"
                    required
                    name="user"
                    value={userName}
                    onChange={handleChange}
                /> <br/> <br/>
                <Button
                    type={'submit'}
                    variant={"contained"}
                >
                    Entrar
                </Button>
            </form>
        </div>
    );
};