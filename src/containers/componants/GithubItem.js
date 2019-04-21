import React from 'react';
import styled from 'styled-components'



const BigTitle = styled.h1`
    text-align: center;
`


const Additional = styled.div`
    position: absolute;
  width: 150px;
  height: 100%;
  background: linear-gradient(#dE685E, #EE786E);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
`


const CardView = styled.div`
    width: 450px;
    height: 200px;
    background-color: #fff;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;
    &:hover ${Additional}{
        width: 100%;
        border-radius: 0 5px 5px 0;
    }
`

const UserCard = styled.div`
    width: 150px;
  height: 100%;
  position: relative;
  float: left;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  &:after{
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0,0,0,0.025);
  }
`


const Level = styled.div`
top: 15%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0,0,0,0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
`


const MoreInfo = styled.div`
width: 300px;
float: left;
position: absolute;
left: 150px;
height: 100%;
color: #fff;

`
const Avatar = styled.img`

  width:100px
  height:100px;
  border-radius: 50%;

`

const General = styled.div`

width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
`



const Stats = styled.div`
font-size: 1em;
display: flex;

justify-content:space-around;
color: #fff;
`

const item = (props) => {
    return <CardView>
    <Additional>
      <UserCard>
        <Avatar src={props.owner.avatar_url}/>
        <Level>
        <i className="fas fa-user"></i>
          {props.owner.login}
        </Level>
        <Level>
            <i className="fas fa-star"></i>
          {props.stargazers_count}
        </Level>
        <Level>
        <i className="fas fa-exclamation-circle"></i>
          {props.open_issues}
        </Level>
      </UserCard>
      <MoreInfo>
        <BigTitle>{props.name}</BigTitle>
        <Stats>
          <div>
            <div className="title">Watchers</div>
            <i className="fas fa-eye"></i>
            <div className="value">{props.watchers}</div>
          </div>
          <div>
            <div className="title">Forks</div>
            <i className="fas fa-code-branch"></i>
            <div className="value">{props.forks_count}</div>
          </div>
          <div>
            <div className="title">Language</div>
            <i className="fas fa-code"></i>
            <div className="value">{props.language}</div>
          </div>
        </Stats>
      </MoreInfo>
    </Additional>
    <General>
      <BigTitle>{props.name}</BigTitle>
      <p>{props.description}</p>
      <span className="more">Mouse over the card for more info</span>
    </General>

    </CardView>
}


export default item