import { Button, PageHero } from '@/components/ui';
import { copy } from '@/data/copy';

export default function NotFound() {
  return (
    <>
      <PageHero
        tag="404"
        title={copy.notFound.text01}
        text={copy.notFound.text02}
      />
      <div className="wrap section">
        <Button href="/">{copy.notFound.text03}</Button>
      </div>
    </>
  );
}
