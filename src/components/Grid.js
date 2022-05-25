import React, { useState } from 'react';
import { kebabCase } from 'lodash';
import Card from './Card/Card';
import ExpandableCard from './Card/ExpandableCard';
import ExpandableContent from './Card/ExpandableContent';
import Empty from './Empty';

const Grid = ({ array }) => {
  const [openSeries, setOpenSeries] = useState('');

  if (array.length > 0) {
    return (
      <ul className="grid" role="list">
        {array.map(
          ({ _id, title, slug, cover, series, readStatus, relatedBooks }) => {
            return (
              <React.Fragment key={_id}>
                {series ? (
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
                    headingLevel="h2"
                  />
                )}
              </React.Fragment>
            );
          },
        )}
      </ul>
    );
  } else {
    return <Empty />;
  }
};

export default Grid;
