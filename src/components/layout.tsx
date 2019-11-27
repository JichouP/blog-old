import React, { ReactNode, useEffect } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

import Vivus from 'vivus';
import logofile from '../res/logo.svg';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const buttonMargin = 4;
  useEffect(() => {
    // const logo = document.getElementsByTagName('svg');
    // if (logo) {
    //   while (logo.length) {
    //     logo[0].remove();
    //   }
    // }
    new Vivus(
      'logo-container',
      {
        file: logofile,
        delay: 100,
      },
      () => {
        import(/* webpackChunkName: "snapsvg" */ 'snapsvg').then(Snap => {
          Snap.default('#svg8')
            .selectAll('path')
            .animate({ fillOpacity: 1 }, 400);
        });
      }
    );
    return () => {};
  }, []);
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <div
          id="logo-container"
          css={css`
            text-align: center;
            margin-bottom: ${rhythm(1)};
          `}
        ></div>
      </Link>
      {/* <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link> */}
      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-flow: wrap;
        `}
      >
        <div
          css={css`
            margin-left: ${buttonMargin}px;
            margin-right: ${buttonMargin}px;
          `}
        >
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-show-count="false"
            css={css`
              margin: 2px;
            `}
          >
            Tweet
          </a>
        </div>
        <div
          css={css`
            margin-left: ${buttonMargin}px;
            margin-right: ${buttonMargin}px;
          `}
        >
          <a
            href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fjichoup.com%2Frss.xml"
            target="blank"
          >
            <img
              id="feedlyFollow"
              src="https://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png"
              alt="follow us in feedly"
              width="66"
              height="20"
            />
          </a>
        </div>
        <div
          css={css`
            margin-left: ${buttonMargin}px;
            margin-right: ${buttonMargin}px;
          `}
        >
          <a
            data-pocket-label="pocket"
            data-pocket-count="none"
            className="pocket-btn"
            data-lang="en"
            css={css`
              display: inline;
            `}
          ></a>
        </div>
        {(() => {
          const d = document;
          const i = 'pocket-btn-js';
          if (!d.getElementById(i)) {
            var j = d.createElement('script');
            j.id = i;
            j.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
            var w = d.getElementById(i);
            d.body.appendChild(j);
          }
        })()}
        <div
          css={css`
            margin-left: ${buttonMargin}px;
            margin-right: ${buttonMargin}px;
          `}
        >
          <a
            href="https://twitter.com/JichouP?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-lang="ja"
            data-dnt="true"
          >
            Follow @JichouP
          </a>
        </div>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      {children}
    </div>
  );
};
