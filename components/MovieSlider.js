import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";
import { BG_COLOR } from "../constants/Colors";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
  background-color: ${BG_COLOR};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={5}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
            />
          </View>
        ))}
    </Swiper>
  ) : null;  
  // movie가 존재하면, 이 일들을 하고, 그렇지 않으면 null을 리턴 -> slide를 주지 않음.

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
