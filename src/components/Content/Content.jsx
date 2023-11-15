import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import SquareCard from '../Card/SquareCard';
import SideBarCard from '../Card/SideBarCard';
import Spinner from '../Spinner/Spinner';

const Content = (props) => {
  const [data, setData] = useState({ articles: [] });
  const [worldData, setWorldData] = useState({ articles: [] });
  const [loading,setLoading] = useState(false);

  useEffect(() => {

    const Links = [
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.numArticle}`,
      `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apikey}`
    ];
   
    const Links1 = ["general", "entertainment", "business", "general", "health", "science", "sports", "technology"];

    async function fetchData() {
      try {
        if (Links1.includes(props.category)) {
          const apiUrl = Links[0];
          setLoading(true)
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const jsonData = await response.json();
          setLoading(false)
          // Yaha par har ek page me article kam ho rahe hai koyki images wala filter laga hai 
          props.setArticle(jsonData.totalResults);
          setData(jsonData);
        }
        else{
          const apiUrl = Links[1];
          setLoading(true)
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const jsonData = await response.json();
          setLoading(false)
          // Yaha par har ek page me article kam ho rahe hai koyki images wala filter laga hai 
          props.setArticle(jsonData.totalResults);
          setData(jsonData);

        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    async function worldfetchData() {
      try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apikey}&pageSize=${props.numArticle}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setWorldData(jsonData);
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchData();
    worldfetchData();
  }, [props.page,props.category]);

  const static_data={
    "status": "ok",
    "totalResults": 38,
    "articles": [
    {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Harry Wilson, Ambereen Choudhury",
    "title": "HSBC Plans $3 Billion Share Buyback, CEO Touts Capital Strength - Bloomberg",
    "description": "HSBC Holdings Plc announced a fresh buyback program and hinted at the potential for further returns to investors despite announcing profits for the third-quarter that missed market expectations.",
    "url": "https://www.bloomberg.com/news/articles/2023-10-30/hsbc-announces-3-billion-share-buyback-after-missing-estimates",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icOjTwFHLl_A/v0/1200x800.jpg",
    "publishedAt": "2023-10-30T07:25:57Z",
    "content": "HSBC Holdings Plc announced a fresh buyback program and hinted at the potential for further returns to investors despite announcing profits for the third-quarter that missed market expectations.\r\nThe… [+265 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Angry crowd storms Russia’s Dagestan airport to protest flight from Israel - Al Jazeera English",
    "description": "All flights to and from Makhachkala airport in Russia were suspended after groups of protesters stormed the facility.",
    "url": "https://www.aljazeera.com/news/2023/10/29/pro-palestinian-crowd-enters-dagestan-airport-to-protest-israel-flight",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/airport-1698615876.jpeg?resize=1920%2C1440",
    "publishedAt": "2023-10-30T07:05:08Z",
    "content": "Hundreds of people have stormed the main airport in Russias Dagestan region, ostensibly to protest against the arrival of a flight from Israel amid the war in Gaza.\r\nThe crowd on Sunday broke past se… [+3936 chars]"
    },
    {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Chicago Bears vs. Los Angeles Chargers | 2023 Week 8 Game Highlights - NFL",
      "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
      "url": "https://www.youtube.com/watch?v=9aFQlK1uzxg",
      "urlToImage": "https://i.ytimg.com/vi/9aFQlK1uzxg/maxresdefault.jpg",
      "publishedAt": "2023-10-30T03:35:34Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Ryan Young",
      "title": "Victor Wembanyama, Spurs shut down by Clippers in 40-point blowout loss - Yahoo Sports",
      "description": "The Clippers had no issue locking down the reigning No. 1 overall pick on Sunday night.",
      "url": "https://sports.yahoo.com/victor-wembanyama-spurs-shut-down-by-clippers-in-40-point-blowout-loss-031917181.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ne8F8G0zbeEnm_VgeEyXDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/d059adb0-76cf-11ee-bcd6-b0ffcdae788d",
      "publishedAt": "2023-10-30T03:19:00Z",
      "content": "The Los Angeles Clippers had no issue shutting down Victor Wembanyama.\r\nThe Clippers flew past the San Antonio Spurs with ease to grab the 123-83 win at Crypto.com Arena on Sunday night. They held We… [+2438 chars]"
      },
      {
      "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
      },
      "author": null,
      "title": "China War Veteran Blasts US as Troublemaker at Top Defense Forum - Bloomberg",
      "description": "China accused the US of stoking global unrest as it opened its premier military forum, casting President Xi Jinping as a force for stability in an address to defense chiefs and experts largely from the Global South.",
      "url": "https://www.bloomberg.com/news/articles/2023-10-30/china-war-veteran-blasts-us-as-troublemaker-at-top-defense-forum",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOsII0vEEC.E/v0/1200x800.jpg",
      "publishedAt": "2023-10-30T03:13:47Z",
      "content": "China accused the US of stoking global unrest as it opened its premier military forum, casting President Xi Jinping as a force for stability in an address to defense chiefs and experts largely from t… [+324 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "INSIDER"
      },
      "author": "Esme Mazzeo",
      "title": "Sister Wives: Kody told Meri their marriage was over on anniversary - Insider",
      "description": "Meri Brown reveals how her ex-husband Kody Brown explicitly told her their marriage was over on season 18, episode 11 of TLC's \"Sister Wives.\"",
      "url": "https://www.insider.com/sister-wives-kody-brown-meri-brown-marriage-over-anniversary-2023-10",
      "urlToImage": "https://i.insider.com/653bf033356802a56be6178c?width=1200&format=jpeg",
      "publishedAt": "2023-10-30T03:01:00Z",
      "content": "Meri Brown reveals how her ex-husband Kody Brown explicitly told her their marriage was over on Sunday's episode of TLC's \"Sister Wives.\" According to Meri, the couple who haven't been romantically i… [+3969 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Shimon Prokupecz, Mark Morales, Linh Tran, Rachel Clarke",
      "title": "Police tried to check on the Maine gunman over concerns he could ‘snap and commit a mass shooting’ - CNN",
      "description": "The Maine National Guard asked local police to check on the reservist who killed 18 people last Wednesday after a soldier became concerned he would “snap and commit a mass shooting,” according to information shared with CNN.",
      "url": "https://www.cnn.com/maine-shooting-robert-card-investigation/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231026210335-01-maine-shooting-manhunt-102623.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-10-30T02:36:00Z",
      "content": "Sagadahoc County, MaineCNN\r\n  — \r\nThe Maine National Guard asked local police to check on the reservist who killed 18 people after a soldier became concerned he would snap and commit a mass shooting,… [+8672 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Vedika Sud",
      "title": "At least 10 reported dead after trains collide in southeast India - CNN",
      "description": "At least 10 people are dead and 27 others have been injured after two trains collided in southeast India Sunday, Reuters reports.",
      "url": "https://www.cnn.com/2023/10/29/asia/india-vizianagaram-train-collision-deaths/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231029164404-01-india-train-crash-1029.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-10-30T02:14:00Z",
      "content": "At least 10 people are dead and 27 others have been injured after two trains collided in southeast India Sunday, Reuters reports.\r\nA train traveling from Visakhapatnam, in the state of Andhra Pradesh… [+1368 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Des Moines Register"
      },
      "author": "Annie Todd",
      "title": "Donald Trump in Sioux City fires up crowd with caucus win prediction - Des Moines Register",
      "description": "In just under 90 minutes, the former president touched on the Israel-Hamas conflict, his legal woes and the 2020 election.",
      "url": "https://www.desmoinesregister.com/story/news/elections/presidential/caucus/2023/10/29/donald-trump-in-sioux-city-fires-up-crowd-with-caucus-win-prediction/71289342007/",
      "urlToImage": "https://www.desmoinesregister.com/gcdn/authoring/authoring-images/2023/10/29/PSIF/71376239007-trumpcaucus-1029-sl-1579.jpg?crop=4315,2427,x0,y0&width=3200&height=1800&format=pjpg&auto=webp",
      "publishedAt": "2023-10-30T00:52:32Z",
      "content": "SIOUX CITY, Iowa Former president and current Republican frontrunner Donald Trump confidently told an enthusiastic crowd here that an Iowa Caucuses victory is in the bag despite Caucus Day still near… [+4870 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Lim Hui Jie",
      "title": "Asia markets mixed ahead of Japan's BOJ decision and South Korea inflation this week - CNBC",
      "description": "Asian markets are mixed as investors brace for key economic data later this week, including purchasing managers index from around the region",
      "url": "https://www.cnbc.com/2023/10/30/asia-stock-markets-today-live-updates-bank-of-japan-meeting-starts-.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107314904-1696989103344-gettyimages-1546732416-JAPAN_POWER.jpeg?v=1696989815&w=1920&h=1080",
      "publishedAt": "2023-10-30T00:52:10Z",
      "content": "Bitcoin is on pace to post its best week since June, after a big rally earlier this week pushed it out of the narrow range it had been stuck in for much of this year.\r\nThe coin is on pace to end the … [+1261 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MarketWatch"
      },
      "author": "William Watts",
      "title": "Oil falls, markets hold steady as Israel launches Gaza ground offensive - MarketWatch",
      "description": "Iran warns that Israel’s actions cross ‘red lines’",
      "url": "https://www.marketwatch.com/story/oil-ticks-lower-markets-hold-ground-as-israel-launches-gaza-ground-offensive-698c95b4",
      "urlToImage": "https://images.mktw.net/im-877615/social",
      "publishedAt": "2023-10-30T00:36:00Z",
      "content": "Oil futures dropped Sunday night as markets saw a calm opening following Israels launch of a ground offensive in Gaza that drew implied threats from Iran amid market fears of a wider conflict that co… [+3238 chars]"
      }
  ]
}

  return (
    <div className='flex flex-wrap mt-32 lg:mt-24 justify-between items-center mx-auto max-w-screen-xl p-2 md:p-4'>
      {loading ? (<Spinner/>):
        (<div className="flex flex-col lg:flex-row px-4 my-2 md:my-4 lg:my-10 gap-5 md:gap-10 align-center">
          <div className=" lg:w-4/6 flex flex-col gap-3 md:gap-10">
            <h1 className='text-black text-2xl md:text-3xl lg:text-4xl text-center font-bold'>Top {props.head} News</h1>
            <div className='gap-10 flex flex-col'>
              {data.articles.filter(article => article.urlToImage).map((article, index) => (
                  <Card key={index} heading={article.title.slice(0,article.title.lastIndexOf("-"))} img={article.urlToImage} desc={article.description} link={article.url} />
              ))}
            </div>
          </div>
          <div className="lg:w-2/6">
            <h1 className='text-black text-2xl md:text-3xl lg:text-4xl text-center font-bold'>Weather App</h1>
            <SquareCard/>
            <h1 className='text-black text-2xl md:text-3xl lg:text-4xl text-center font-bold'>World News</h1>
            <div className='flex flex-wrap lg:flex-col gap-10 my-5'>
              {worldData.articles.filter(article => article.urlToImage).map((article, index) => (
                  <SideBarCard key={index} heading={article.title.slice(0,article.title.lastIndexOf("-"))} img={article.urlToImage} link={article.url} />
              ))}
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Content;
