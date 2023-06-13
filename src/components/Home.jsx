import React, { useEffect, useState } from "react";
import "./Home.scss";
// import Row from './Row'
import axios from "axios";
import posterImage from "../assets/wallpaperflare.com_wallpaper.jpg";
const apiKey = "84507383f4b19bfc7b34618f1524be4d";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const toprated = "top_rated";
const onAir = "on_the_air";
const popular = "popular";
import { Link } from "react-router-dom";
const Card = ({ img }) => <img src={img} alt="" className="card" />;
const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card img={`${imgUrl}/${item.poster_path}`} key={index} />
        ))}
      </div>
    </div>
  );
};
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const Fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const FetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`);
      setTopRated(results);
    };
    const FetchOnTheAir = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/${onAir}?api_key=${apiKey}`);
      //https://api.themoviedb.org/3/tv/on_the_air?api_key=84507383f4b19bfc7b34618f1524be4d&
      setOnTheAir(results);
    };
    const FetchPopularMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/${popular}?api_key=${apiKey}`);
      //https://api.themoviedb.org/3/tv/on_the_air?api_key=84507383f4b19bfc7b34618f1524be4d&
      setPopularMovie(results);
    };
    const getAllGenres = async () => {
      //https://api.themoviedb.org/3/genre/movie/list?api_key=84507383f4b19bfc7b34618f1524be4d&'
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);
    };
    getAllGenres();
    FetchTopRated();
    FetchPopularMovies();
    FetchOnTheAir();
    Fetchupcoming();
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <img src={posterImage} alt="" />
      </div>
      <Row title={`Upcoming Movies`} arr={upcomingMovies} />
      <Row title={`Top Rated`} arr={topRated} />
      <Row title={`On the Air Today`} arr={onTheAir} />
      <Row title={`Popular`} arr={popularMovie} />
      <div className="genreBox">
        {genre.map((item, index) => (
          <Link key={index} to={`/genre/${genre.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
//56.35
export default Home;
