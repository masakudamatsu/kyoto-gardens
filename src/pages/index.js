import Main from 'src/blocks/Main';
import Section from 'src/blocks/Section';
import TopAppBar from 'src/components/TopAppBar';

function HomePage() {
  return (
    <>
      <TopAppBar />
      <Main>
        <Main.MarginTop />
        <Section></Section>
      </Main>
      <noscript></noscript>
    </>
  );
}

export default HomePage;
