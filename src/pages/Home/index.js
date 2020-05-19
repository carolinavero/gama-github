import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../images/logo.png';


import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Home(props) {

    const history = useHistory();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(response => {
                const repositories = response.data;
                const repositoriesName = [];

                repositories.map((repo) => {
                    repositoriesName.push(repo.name);
                });
                localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
                localStorage.setItem('userGithub', usuario);
                setErro(false);
                history.push('/repositories');
            })
            .catch(err => {
                setErro(true);
            })
    }

    return (

        <S.HomeContainer>

            <img src={logo} className="logo" />

            <S.Content>
                <S.Input className="usuarioInput" placeholder="Usuário do Github" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>
            
            { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente.</S.ErrorMsg> : '' }

        </S.HomeContainer>
    );
}