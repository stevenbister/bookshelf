import { useState } from 'react';
import { kebabCase } from 'lodash';
import Card from './Card/Card';
import ExpandableCard from './Card/ExpandableCard';
import ExpandableContent from './Card/ExpandableContent';

const Grid = ({ array }) => {
  const [openSeries, setOpenSeries] = useState('');

  return (
    <ul className="grid" role="list">
      {array.map(
        ({ _id, title, slug, cover, series, readStatus, relatedBooks }) => {
          return (
            <>
              {relatedBooks ? (
                <>
                  <ExpandableCard
                    key={kebabCase(series) + '-' + _id}
                    title={title}
                    cover={cover}
                    relatedBooks={relatedBooks}
                    ariaControls={kebabCase(series)}
                    onClick={() => {
                      series === openSeries
                        ? setOpenSeries('')
                        : setOpenSeries(series);
                    }}
                  />

                  <ExpandableContent
                    key={_id}
                    id={kebabCase(series)}
                    series={series}
                    openSeries={openSeries}
                    relatedBooks={relatedBooks}
                  />
                </>
              ) : (
                <Card
                  key={slug.current + '-' + _id}
                  title={title}
                  slug={slug}
                  cover={cover}
                  readStatus={readStatus}
                />
              )}
            </>
          );
        },
      )}
    </ul>
  );
};

export default Grid;
