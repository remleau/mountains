// important stuff
import React, { useRef, useState } from 'react';

// traduction
import { withTranslation } from '../../i18n';

// components
import Layout from '../../components/layout.js';
import SubHeader from '../../components/sub-header.js';
import Modal from '../../components/modal.js';
import Mountains from '../../components/mountains.js';
import FormAddMountain from '../../components/formAddMountain.js';

// page component
const Home = ({ t }) => {
  const refAddModal = useRef();

  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={'Mes montagnes'} link={'/'} />
  }

  return (
    <Layout meta={meta}>

      <Modal ref={refAddModal} title="Ajouter une montagne">
        <FormAddMountain />
      </Modal>

      <div className="title">
        <h1>Mes montagnes</h1>
        <button className="cta add" onClick={() => refAddModal.current.openModal()}>
          <span>Ajouter</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      <Mountains />

    </Layout>
  )
}


// Translation json
Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(Home)