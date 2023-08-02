import { SearchBar } from 'features/search';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavMobileProps = {
    t: (key: string) => string
}

const NavDesktop: FC<NavMobileProps> = ({t}:NavMobileProps) => {
  return (
    <div className={'container nav'} style={{ justifyContent: 'space-between' }}>
              <div className={'container'} style={{ width: 400 }}>
                <NavLink aria-label="Vuelve a la home" to="/" className={'nav-link'}>
                  <img alt='Logo Digital House' className={'logo'} src={'/images/logo-dh.png'} />
                </NavLink>
        <NavLink to="/" className={'nav-link'}>
          <h3>{t('navigation.home')}</h3>
        </NavLink>
              <NavLink to="/following" className={'nav-link'}>
                <h3>{t('navigation.following')}</h3>
              </NavLink>
            </div>
      <SearchBar />
    </div>
  );
};

export default NavDesktop;
