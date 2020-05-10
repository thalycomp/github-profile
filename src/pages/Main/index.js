import React, { Component } from 'react';
import { FaAngleRight, FaAngleLeft, FaSearch } from 'react-icons/fa';
import { GoRepoForked, GoStar } from "react-icons/go"

import { Form, Button, Div, ConteinerUser, Followers, ButtonFollow, ConteinerRepo, InfoRepo, InfoForkStar } from './style';
import Api from '../../services/api';

export default class Main extends Component {
  state = {
      newUser: '',
      user: [],
      followers: [],
      repository: [],
      notFound: false,
      disabled: false,
      page: 1,
      namePage: '',
  };
  
  handleInputChange = (e) => {
    this.setState({ newUser: e.target.value });
  }

  handleSubmitUser = async (e) => {
    e.preventDefault();
    const { newUser } = this.state;

    this.setState({ disabled: true, namePage: '' });

    try {
        const [userFind, userFollowers] = await Promise.all([
            Api.get(`/users/${ newUser }`),
            Api.get(`/users/${ newUser }/followers`, {
                params: {
                per_page: 13,
                },
            }),
            
        ]);
        
        /*
        const type = userFind.data.type;
        p n renderizar org
        if( type !== "User" ) {
            throw new Error();
        } */ 

        const qntRepo = userFind.data.public_repos;
        
        const result = await this.handleRepository( newUser, qntRepo );

        const info = {
            login: userFind.data.login,
            avatar: userFind.data.avatar_url,
            url: userFind.data.html_url,
            qntRepo: userFind.data.public_repos,
            qntFollowers: userFind.data.followers,
            qntFollowing: userFind.data.following,
        };

        this.setState({
            user: [info],
            repository: result,
            followers: userFollowers.data,
            namePage: newUser,
            newUser: '',
            notFound: false,
            disabled: false
         });

    } catch(error) {
        this.setState({ notFound: true, disabled: false });
    }

   }

   handleRepository = async ( user, qntRepo ) => {

    const repos = await Api.get(`/users/${ user }/repos`, {
        params: {
        per_page: qntRepo,
        },
    });

    const sortedRepo = [...repos.data].sort(
        (b, a) => a.forks_count + a.stargazers_count - (b.forks_count + b.stargazers_count),
    ); 
    
    const topRepo = sortedRepo.slice(0,4); 

    return topRepo;

    }

    loadFollow = async () => {
        const { page, namePage } = this.state;
        try {
        const follow = await Api.get(`/users/${ namePage }/followers`, {
            params: {
            per_page: 13,
            page,
            },
        }); 
        
        this.setState({ followers: follow.data });
        }catch(e){

        }
    }

    handlePage = async action => {
        const { page } = this.state;
        await this.setState({
          page: action === 'back' ? page - 1 : page + 1,
        });
        this.loadFollow();
    };

  render(){
    const { user, followers, notFound, disabled, repository, page } = this.state;
    
    return (
        <>
        <Div>
            <Form notFound={notFound} onSubmit={this.handleSubmitUser}>
                <input type="text"
                 placeholder="Digite um usuário do GitHub"
                 onChange={this.handleInputChange}
                 />
                <Button disabled={disabled} type="submit">
                    <FaSearch />
                </Button>
            </Form>
            { notFound ? <p> *Usuário não existe ou foi digitado incorretamente. </p> : null }
        </Div>
        { user.map( user => (
        <ConteinerUser key={user.login}>
            <img src={user.avatar} alt={user.login}/>
            <div>
                <a href={user.url}>{user.login}</a>
                <span><strong>{user.qntRepo}</strong>   Repositórios</span>
                <span><strong>{user.qntFollowers}</strong>   Followers</span>
                <span><strong>{user.qntFollowing}</strong>   Followings</span>
            </div>
            <Followers>
            { followers.map(followers => (
                <li key={followers.login}>
                    <a href={followers.html_url}>
                        <img src={followers.avatar_url} alt={followers.login}/>
                    </a>
                </li>
                
            ))}
                <ButtonFollow 
                    type="button"
                    disabled={page < 2}
                    onClick={() => this.handlePage('back')}>
                    <FaAngleLeft />
                </ButtonFollow>
                <ButtonFollow
                    type="button"
                    disabled={page === Math.ceil(user.qntFollowers /13)}
                    onClick={() => this.handlePage('next')}>
                    <FaAngleRight />
                </ButtonFollow>
            </Followers>
             
        </ConteinerUser>
        ))} 

        { repository.length === 0 ? null : <h2>Top 4 Repositórios</h2>}
        { repository.map( repository => (
            <ConteinerRepo>
                <li key={repository.name}>
                    <InfoRepo>
                        <a href={repository.html_url}>{repository.name}</a>
                        <p>{repository.description}</p>
                    </InfoRepo>
                    <InfoForkStar>
                        <span><GoRepoForked size={19} /> {repository.forks_count}</span>
                        <span><GoStar size={19}/> {repository.stargazers_count}</span>
                    </InfoForkStar>
                </li>
            </ConteinerRepo>   
        ))} 
              
        
        </>
      );
  }
}
