/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { FilmItemMenu } from "../FilmItemMenu";
import { ImageFallback } from "../ImageFallback";

import "./FilmItem.sass";

import filmCardPlaceholder from "../../assets/images/placeholder_netflix.jpg";

export const FilmItem = ({
  id,
  title,
  genres,
  releaseDate,
  thumbnail,
  actions,
  onClick,
}) => {
  const genresCaption = genres.join(", ");
  const releaseDateObject = new Date(releaseDate);
  const releaseYear = releaseDateObject.getFullYear();
  return (
    <div className="film-card">
      {actions && <FilmItemMenu id={id} actions={actions} />}
      <div onClick={() => onClick(id)} className="film-card__in">
        <ImageFallback
          className="film-card__thumbnail"
          src={thumbnail}
          fallback={filmCardPlaceholder}
          alt={title}
        />
        <div className="film-card__header">
          <p className="film-card__title">{title}</p>
          <p className="film-card__timestamp">{releaseYear}</p>
        </div>
        <p className="film-card__meta">{genresCaption}</p>
      </div>
    </div>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  releaseDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

FilmItem.defaultProps = {
  thumbnail: filmCardPlaceholder,
  actions: [],
};
