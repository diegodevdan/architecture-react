import {Button, Typography} from "@mui/material";
import {ChangeEvent, useEffect} from "react";
import {useInformation} from "../../../hook";

export const GeneralsPage = () => {

    const {state, addValue} = useInformation();
    const {name, lastname, birthDate} = state;

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
    }

    useEffect(() => {
        return () => {

        }
    }, []);


    return (
        <div>
            <Typography variant={'h5'}>Generales</Typography>
            <br/><br/>

            <form>
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    required
                    name={'name'}
                    onChange={handleChange}
                    value={name}
                /> <br/><br/>
                <label htmlFor="lastname">Apellido *</label>
                <input
                    type="text"
                    required
                    name={'lastname'}
                    onChange={handleChange}
                    value={lastname}
                /> <br/><br/>
                <label htmlFor="birthDate">Fecha de nacimiento</label>
                <input
                    type="date"
                    name={'birthDate'}
                    onChange={handleChange}
                    value={birthDate}
                />

                <br/><br/>
                <Button
                    variant={'contained'}
                    type={'submit'}
                >
                    Continuar
                </Button>
            </form>
        </div>
    );
};