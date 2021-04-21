import BannerForNoJs from 'src/components/BannerForNoJs';
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
      <noscript>
        <BannerForNoJs />
      </noscript>
    </>
  );
}

export default HomePage;
