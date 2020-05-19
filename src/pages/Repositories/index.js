import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Repositories() {

    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        let userName = localStorage.getItem('userGithub');

        if(repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            setUser(userName);
           
        } else {
            history.push('/');
        }
    }, []);
    

    return(
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <h3>Usuário: <a href={`https://github.com/${user}`} target="_blank"> {user}</a></h3>

            <S.List>
                { repositories.map(repo => {
                    return (
                        <S.ListItem key={repo.toString()}>
                            Repositório: <a href={`https://github.com/${user}/${repo}`} target="_blank">{repo}</a> 
                        </S.ListItem>
                    )
                })}
                
            </S.List>

            <S.LinkHome to="/"> Voltar </S.LinkHome>

        </S.Container>
    )
}