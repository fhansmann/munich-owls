const title =
  'Munich Owls - A community dedicated to improve the individual transport experience';
const description = 'Real-time information of the state of local pathways';

const SEO = {
  title,
  description,
  canonical: 'https://munich-owls.de',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://munich-owls.de',
    title,
    description,
    images: [
      {
        url: 'https://munich-owls.de/public/logo.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
