import React from 'react';
import Styles from './SearchBar.module.css';
export const SearchBar = ({ col = 'col-8 col-sm-6', type }) => {
    const [search, setSearch] = React.useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className={`${col} ${type === 'sm' && Styles.search_not_default}`}>
            <form className={`ml-2 ${Styles.search_bar_form}`}>
                <label htmlFor={Styles.search} className={Styles.label}>
                    <input className={Styles.input} type="text" required="" placeholder="Search movie" id={Styles.search} onChange={onChange} value={search} />
                    <div className={Styles.fancy_bg}></div>
                    <div className={Styles.search}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                    {
                        search ? <button className={Styles.close_btn} type="reset" onClick={() => setSearch('')}>
                            X
                        </button> : null
                    }
                </label>
            </form>
        </div>
    )
}
