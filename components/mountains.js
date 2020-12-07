// important stuff
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// traduction
import { withTranslation } from '../i18n';

// components
import CardMountain from '../components/cardMountain.js';
import ToggleViews from '../components/toggleViews.js';


// page component
const Mountains = ({ t }) => {
  const { mountains, isFetching } = useSelector((state) => state.mountains);
  const [view, setView] = useState('cards');

  return (
    <React.Fragment>

      <ToggleViews view={setView} actif={view} title="Changer votre affichage" />

      {
        view == 'cards' ?

          <div className="cards">
            {Object.keys(mountains).map(function (key) {
              return <CardMountain key={key} data={mountains[key]} />
            })}
          </div>

        :

        <table>
          <thead>
            <td><p>Titre</p></td>
            <td><p>Extrait</p></td>
            <td><p>stuff 1</p></td>
            <td><p>stuff 2</p></td>
            <td><p>stuff 3</p></td>
          </thead>
          <tbody>
            {Object.keys(mountains).map(function (key) {
              return (
                <tr key={key}>
                  <td>{mountains[key].title}</td>
                  <td>{mountains[key].excerpt}</td>
                  <td>{mountains[key].title}</td>
                  <td>{mountains[key].title}</td>
                  <td>{mountains[key].title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      }
    </React.Fragment>    
  )
}


// Translation json
Mountains.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(Mountains)