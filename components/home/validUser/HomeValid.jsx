import FeaturedMovie from "./FeaturedMovie";
import MovieRow from "./MovieRow";

function HomeValid(props) {
  // assigning props to variable names
  const trendingList = props.allData.trendingMovies;
  const topRatedList = props.allData.topRatedMovies;
  const actionList = props.allData.actionMovies;
  const comedyList = props.allData.comedyMovies;
  const horrorList = props.allData.horrorMovies;
  const romanceList = props.allData.romanceMovies;
  const mysteryList = props.allData.mysteryMovies;
  const scifiList = props.allData.scifiMovies;
  const westernList = props.allData.westernMovies;
  const animationList = props.allData.animationMovies;

  return (
    <div className="bg-black text-white">
      {/* Featured Movie */}
      <FeaturedMovie movieList={trendingList} />
      {/* Row container */}
      <div className="mt-[-150px] pb-[100px] shadow-xl bg-transparent  ">
        <MovieRow title="Trending Now" movieList={trendingList} />
        <MovieRow title="Top Rated" movieList={topRatedList} />
        <MovieRow title="Action Movies" movieList={actionList} />
        <MovieRow title="Comedy Movies" movieList={comedyList} />
        <MovieRow title="Horror Movies" movieList={horrorList} />
        <MovieRow title="Romance Movies" movieList={romanceList} />
        <MovieRow title="Mystery Movies" movieList={mysteryList} />
        <MovieRow title="Sci-Fi Movies" movieList={scifiList} />
        <MovieRow title="Western Movies" movieList={westernList} />
        <MovieRow title="Animation Movies" movieList={animationList} />
      </div>
    </div>
  );
}

export default HomeValid;
