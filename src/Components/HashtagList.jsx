import React from "react";
import { List, Input, Progress} from 'antd';
import { Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';


const { Search } = Input;

const data = [
  {
    hashtag: 'cats',
    competition_score: 30,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'funny',
    competition_score: 70,
    potential_reach: 60,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'fyp',
    competition_score: 80,
    potential_reach: 30,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'doityourself',
    competition_score: 40,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'cats',
    competition_score: 30,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'funny',
    competition_score: 70,
    potential_reach: 60,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'fyp',
    competition_score: 80,
    potential_reach: 30,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'doityourself',
    competition_score: 40,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'cats',
    competition_score: 30,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'funny',
    competition_score: 70,
    potential_reach: 60,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'fyp',
    competition_score: 80,
    potential_reach: 30,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'doityourself',
    competition_score: 40,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'cats',
    competition_score: 30,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'funny',
    competition_score: 70,
    potential_reach: 60,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'fyp',
    competition_score: 80,
    potential_reach: 30,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'doityourself',
    competition_score: 40,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'cats',
    competition_score: 30,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'funny',
    competition_score: 70,
    potential_reach: 60,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'fyp',
    competition_score: 80,
    potential_reach: 30,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
  {
    hashtag: 'doityourself',
    competition_score: 40,
    potential_reach: 50,
    dapc: 0,
    avg_likes: 0,
    total_posts: 0,
    avg_comments: 0
  },
];

const onSearch = value => console.log(value);

class HashtagList extends React.Component {

   
      
    render() {
         return( 
           <div >
             <Search placeholder="input search text"  style={{ width: 500,borderRadius:'7px',margin:'16px 0'}} onSearch={onSearch} enterButton />
              <List
              dataSource={data}
              header={
              <div className="flexbox-container" style={{padding:'5px 16px'}}>
              <p style={{ width: 100 }}>Hashtag</p>
              <p style={{ width: 170, padding:'0 5px'  }}>Competition Score</p>
              <p style={{ width: 170, padding:'0 5px'  }}>Potential Reach</p>
              <p style={{ width: 100, padding:'0 5px'  }}>DAPC</p>
              <p style={{ width: 100, padding:'0 5px'  }}>Avg Likes</p>
              <p style={{ width: 100, padding:'0 5px'  }}>Total Posts</p>
              <p style={{ width: 120, padding:'0 5px'  }}>Avg Comments</p>
            </div>}
              style={{
                height: 'flex',
                overflow: 'auto',
              }}
              split={true}
              renderItem={item => (
               <List.Item style={{border:'1px solid rgba(140, 140, 140, 0.35)', padding: '5px 16px', borderRadius:'5px'}}>
                <div className="flexbox-container">
                  <div className="item" style={{ width: 100 }} ><p>{item.hashtag}</p></div>
                  <div className="item" style={{ width: 170, padding:'0 5px' }}><Progress percent={item.competition_score} size="small" showInfo={false}/></div>
                  <div className="item" style={{ width: 170, padding:'0 5px' }}><Progress percent={item.potential_reach} size="small" showInfo={false}/></div>
                  <div className="item" style={{ width: 100, padding:'0 5px' }} ><p>{item.dapc}</p></div>
                  <div className="item" style={{ width: 100, padding:'0 5px' }} ><p>{item.avg_likes}</p></div>
                  <div className="item" style={{ width: 100, padding:'0 5px' }} ><p>{item.total_posts}</p></div>
                  <div className="item" style={{ width: 120, padding:'0 5px' }} ><p>{item.avg_comments}</p></div>
                </div>
               </List.Item>
            )}
          />
          </div>

          );
    }
  }

  export default HashtagList;