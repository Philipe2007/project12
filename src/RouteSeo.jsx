import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, getSeoForPath } from './seoConfig';

// Sets title, description, canonical and social tags for every route.
// A page can still override anything by rendering its own <Helmet>.
export default function RouteSeo() {
  const { pathname } = useLocation();
  const { title, description, path } = getSeoForPath(pathname);

  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const image = `${SITE_URL}${DEFAULT_IMAGE}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
