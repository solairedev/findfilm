import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { FilmModalEdit } from "../FilmModalEdit";
import {
  useFilmInfoContext,
  useFilmInfoActionContext,
} from "../../context/FilmInfoContext";

import "./Header.sass";

const Header = ({ title }) => {
  const selectedFilmID = useFilmInfoContext();
  const setSelectedFilmID = useFilmInfoActionContext();

  const [isOpenAddModal, toggleAddModal] = useState(false);
  const openAddModal = () => {
    toggleAddModal(true);
  };
  const closeAddModal = () => {
    toggleAddModal(false);
  };

  const unsetSelectedFilm = () => {
    setSelectedFilmID(null);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__in">
            <p className="header__title">
              <span className="font-weight-black">{title[0]}</span>
              {title[1]}
            </p>
            {!selectedFilmID ? (
              <Button
                onClick={openAddModal}
                type="button"
                buttonStyle="btn--outline-primary"
              >
                + Add Movie
              </Button>
            ) : (
              <button
                onClick={unsetSelectedFilm}
                type="button"
                className="icon-btn"
              >
                <svg
                  className="icon-btn__image"
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18.5"
                    cy="10.5"
                    r="9.5"
                    stroke="#F65261"
                    strokeWidth="2"
                  />
                  <path
                    d="M10.5 19.5L1.5 28.5"
                    stroke="#F65261"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>
      <FilmModalEdit
        isDisplay={isOpenAddModal}
        closeCallback={closeAddModal}
        modalTitle="Add movie"
      />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
