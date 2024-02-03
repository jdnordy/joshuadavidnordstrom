import Head from 'next/head';
import { useRouter } from 'next/router';

interface GoogleAnalyticsProps {
  title: string;
}

const GoogleAnalytics = ({ title }: GoogleAnalyticsProps) => {
  const router = useRouter();
  const google = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-166852828-1', {
      page_title: "${title}",
      page_path: "${router.asPath}"
    });
  `;
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{ __html: google }}
        key="google"
      ></script>
    </Head>
  );
};

export default GoogleAnalytics;
