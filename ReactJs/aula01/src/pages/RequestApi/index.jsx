import { useEffect } from 'react';
import { Container } from './style';
import { CgLogIn } from "react-icons/cg";
import { GetUsers } from '../../services/GetUsers';

export const RequestApi = () => {

    // const carregar = async () => {};

    async function carregarDadosApi(){

        const response = await GetUsers();
        

        if(response.status === 200) {
            console.log('Returno api', response.data);
        } else {
            console.error('Falha ao carregar dados');
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