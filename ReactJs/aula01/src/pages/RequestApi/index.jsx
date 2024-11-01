import { useEffect } from 'react';
import { Container } from './style';
import axios from 'axios'
import { CgLogIn } from "react-icons/cg";

export const RequestApi = () => {

    // const carregar = async () => {};

    async function carregarDadosApi(){

        const url = 'https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users';

        try {
            const resposta = await axios.get(url);


            if (resposta.status === 200) {
                console.log('informações da api', resposta.data)
            } else {
                console.log('Errouu')
            }
        }
        catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        carregarDadosApi();
    }, [])

    return (
        <Container>
            RequestAPI
            <CgLogIn />
        </Container>
    )
}