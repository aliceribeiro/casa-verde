import { Card } from '../../components/Card';
import { Menu } from '../../components/Menu';
import { NewsletterSubscription } from '../../components/NewsletterSubscription';

export function Home() {
  return (
    <>
      <Menu />
      <NewsletterSubscription />
      <Card />
    </>
  );
}
