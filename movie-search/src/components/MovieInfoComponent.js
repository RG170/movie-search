import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieinfoComponent = (props) => {
  const [movieinfo, setMovieinfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieinfo ? (
        <>
          <CoverImage src={movieinfo?.Poster} alt={movieinfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieinfo?.Type}: <span>{movieinfo?.Title}</span>
            </MovieName>
            <Movieinfo>
              IMDB Rating: <span>{Mvieinfo?.imdbRating}</span>
            </Movieinfo>
            <Movieinfo>
              Year: <span>{movieinfo?.Year}</span>
            </Movieinfo>
            <Movieinfo>
              Language: <span>{movieInfo?.Language}</span>
            </Movieinfo>
            <Movieinfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </Movieinfo>
            <Movieinfo>
              Released: <span>{movieInfo?.Released}</span>
            </Movieinfo>
            <Movieinfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </Movieinfo>
            <Movieinfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </Movieinfo>
            <Movieinfo>
              Director: <span>{movieInfo?.Director}</span>
            </Movieinfo>
            <Movieinfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </Movieinfo>
            <Movieinfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </Movieinfo>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieinfoComponent;