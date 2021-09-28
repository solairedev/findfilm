import React from 'react';
import Button from '../Button'
import FormControl from '../FormControl'

import "./Search.sass"

const Search = () => {
    return (
        <form className="search" action="." method="GET">
            <FormControl
                type="text"
                placeholder="What do you want to watch?"
                formControlStyle="form-control--light"
                additionalClass="search__input"></FormControl>
            <Button type="submit"
                buttonSize="btn--lg"
                buttonStyle="btn--primary"
                additionalClass="font-weight-medium search__btn">
                Search
            </Button>
        </form>
    )
}

export default Search;