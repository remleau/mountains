// important stuff
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// traduction
import { withTranslation } from '../i18n';

// components
import Layout from '../components/layout.js';
import SubHeader from '../components/sub-header.js';
import CardMountain from '../components/cardMountain.js';
import ToggleViews from '../components/toggleViews.js';
import Modal from '../components/modal.js';

// page component
const Home = ({ t }) => {
  const { mountains, isFetching } = useSelector((state) => state.mountains);
  const [view, setView] = useState('cards');
  const [modalAdd, setModalAdd] = useState(false);

  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={'Mes montagnes'} link={'/'} />
  }

  return (
    <Layout meta={meta}>

      <Modal visibility={modalAdd} controlVisibility={setModalAdd} title="Ajouter une montagne">
        allo
      </Modal>


      <div className="title">
        <h1>Mes montagnes</h1>
        <button className="cta add" onClick={() => setModalAdd(true)}>
          <span>Ajouter</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      <ToggleViews view={setView} actif={view} title="Changer votre affichage" />

      <div className="cards">
        {view == 'cards' ? 
          Object.keys(mountains).map(function (key) {
            return <CardMountain key={key} data={mountains[key]} />
          }) :
          'ALLO'
        }
      </div>

    </Layout>
  )
}


// Translation json
Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(Home)