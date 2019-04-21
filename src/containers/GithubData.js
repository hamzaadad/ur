import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import GithubItem from './componants/GithubItem';
import {fetchGithubDataByPage} from '../actions/index';
const BigBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
`


class GithubList extends React.Component{
    state = {
        page: 2
    }

    fetchData = ()=>{
       this.props.fetchGithubDataByPage(moment().subtract(160, "d").format("YYYY-MM-DD"), this.props.page);
    }
    render(){
        const { data } = this.props;
         if(!data) {
          return (
            <div>
              No Data
            </div>
          )
        }
        return (
          <BigBox>
          <InfiniteScroll
      dataLength={data.items ? data.items.length : 0} 
      next={this.fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {
          data.items && data.items.map(item =>{
              return <GithubItem {...item} key={`${item.id}-${moment().unix()}`}/> 
          })
      }
      
      </InfiniteScroll>
          
          </BigBox>
        );
      }
}



const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  {
    fetchGithubDataByPage
  }
)(GithubList);
