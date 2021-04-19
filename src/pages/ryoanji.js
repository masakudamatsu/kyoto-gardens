import Head from 'next/head';

import {title, description} from '../metadata/ryoanji';

function Ryoanji() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>Ryoan-ji</div>
    </>
  );
}

export default Ryoanji;
