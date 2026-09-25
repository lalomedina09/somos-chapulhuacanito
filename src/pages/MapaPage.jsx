import CommunityMap from '../components/content/CommunityMap';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';

export default function MapaPage() {
  const section = sections.mapa;
  usePageTitle(section.title);

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.mapa} />
      <PageSection>
        <CommunityMap />
      </PageSection>
    </>
  );
}
