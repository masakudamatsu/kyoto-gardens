import Main from 'src/blocks/Main';
import Section from 'src/blocks/Section';
import TopAppBar from 'src/components/TopAppBar';

function HomePage() {
  return (
    <>
      <TopAppBar />
      <Main>
        <Main.MarginTop />
        <Section>
          <Section.Paragraph>
            For kick-starting your Next.js project
          </Section.Paragraph>
          <Section.Whitespace betweenSections />
        </Section>
      </Main>
      <noscript></noscript>
    </>
  );
}

export default HomePage;
