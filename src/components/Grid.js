import { useState } from 'react';
import { kebabCase } from 'lodash';
import Card from './Card/Card';
import ExpandableCard from './Card/ExpandableCard';
import ExpandableContent from './Card/ExpandableContent';

const Grid = ({ array }) => {
  const [openSeries, setOpenSeries] = useState('');
  const [expanded, setExpaneded] = useState(false);

  return (
    <ul className="grid" role="list">
      {array.map(({ _id, title, slug, cover, series, relatedBooks }) => (
        <>
          {relatedBooks ? (
            <>
              <ExpandableCard
                key={_id}
                title={title}
                cover={cover}
                expanded={expanded}
                ariaControls={kebabCase(series)}
                onClick={() => {
                  series === openSeries
                    ? setOpenSeries('')
                    : setOpenSeries(series),
                    expanded ? setExpaneded(false) : setExpaneded(true);
                }}
              />

              <ExpandableContent
                id={kebabCase(series)}
                series={series}
                openSeries={openSeries}
                relatedBooks={relatedBooks}
              />
            </>
          ) : (
            <Card key={_id} title={title} slug={slug} cover={cover} />
          )}
        </>
      ))}
    </ul>
  );
};

export default Grid;
