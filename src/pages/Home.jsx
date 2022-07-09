import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestNowPlaying} />
      <Row title="Latest" fetchURL={requests.requestLatest} />
    </div>
  );
}

export default Home