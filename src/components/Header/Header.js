import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';

import { INGREDIENTS_CATEGORIES } from '../../helpers/constants';


const Header = () => {

    const { user, setUser } = useContext(StoreContext);
    const { allTags } = useContext(StoreContext);

    const sweetDropdownItems = allTags
        .filter(tag => tag.category === INGREDIENTS_CATEGORIES.słodkie)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.category}/${tag.name}`} className="dropdown-item" >{tag.name}</Link></li>);

    const saltyDropdownItems = allTags
        .filter(tag => tag.category === INGREDIENTS_CATEGORIES.słone)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.category}/${tag.name}`} className="dropdown-item" >{tag.name}</Link></li>);

    const cerealDropdownItems = allTags
        .filter(tag => tag.subcategory === INGREDIENTS_CATEGORIES.zbożowe)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.subcategory}/${tag.name}`} className="dropdown-item">{tag.name}</Link></li>);

    const meatDropdownItems = allTags
        .filter(tag => tag.subcategory === INGREDIENTS_CATEGORIES.mięso)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.subcategory}/${tag.name}`} className="dropdown-item">{tag.name}</Link></li>);

    const vegetableDropdownItems = allTags
        .filter(tag => tag.subcategory === INGREDIENTS_CATEGORIES.warzywa)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.subcategory}/${tag.name}`} className="dropdown-item">{tag.name}</Link></li>)

    const fruitDropdownItems = allTags
        .filter(tag => tag.subcategory === INGREDIENTS_CATEGORIES.owoce)
        .map(tag => <li key={tag.id}><Link to={`/przepisy/${tag.subcategory}/${tag.name}`} className="dropdown-item">{tag.name}</Link></li>)


    const handleOnLoginClick = () => {
        if (Boolean(user)) {
            setUser(null)
        } else {
            console.log("open loginform")
        }
    };

    const handleOnRegisterClick = () => {
        console.log('open loginform');
    };

    const setLoginLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj się";

    return (
        <header className="border-bottom bg-light navbar-light shadow-sm">
            <div className="max-width mx-auto">
                <nav className="navbar navbar-expand-md border-bottom">
                    <div className="container-fluid justify-content-around">
                        <Link to="/" className="navbar-brand fw-bold" >aA</Link>
                        <h1><Link to="/" className="navbar-brand">Kuchnia bez jajka i pszenicy</Link></h1>
                        <div>
                            <button className="btn btn-outline-primary btn-sm ms-2" onClick={handleOnLoginClick}>{setLoginLabel}</button>
                            <button className="btn btn-primary btn-sm ms-2" onClick={handleOnRegisterClick}>Załóż konto</button>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-light py-2" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto text-uppercase">
                                <li className="nav-item dropdown pe-4">
                                    <button className="btn btn-light dropdown-toggle text-uppercase" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        Słodkie</button>
                                    <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                        {sweetDropdownItems}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown pe-4">
                                    <button className="btn btn-light dropdown-toggle text-uppercase" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        Słone</button>
                                    <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                        {saltyDropdownItems}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown pe-4">
                                    <button className="btn btn-light dropdown-toggle text-uppercase" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        Składniki</button>
                                    <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                        <li className="dropdown-submenu dropend">
                                            <button className="dropdown-item dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                                                zbozowe</button>
                                            <ul className="dropdown-menu shadow">
                                                {cerealDropdownItems}
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu dropend">
                                            <button className="dropdown-item dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                                                mięso</button>
                                            <ul className="dropdown-menu shadow">
                                                {meatDropdownItems}
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu dropend">
                                            <button className="dropdown-item dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                                                warzywa</button>
                                            <ul className="dropdown-menu shadow">
                                                {vegetableDropdownItems}
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu dropend">
                                            <button className="dropdown-item dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                                                owoce</button>
                                            <ul className="dropdown-menu shadow">
                                                {fruitDropdownItems}
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                            {/* EditMode: */}

                            <Link to={`/add`} className="btn btn-success" role="button">Utwórz przepis</Link>

                            {/* <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Szukaj" aria-label="Search" />
                                <button className="btn btn-outline-primary ms-2" type="submit">Szukaj</button>
                            </form> */}
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;