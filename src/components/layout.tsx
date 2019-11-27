import React, { ReactNode, useEffect } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

import Vivus from 'vivus';
import logofile from '../res/logo.svg';
import SocialButtons from './SocialButtons';

interface Props {
  children: ReactNode;
}
interface Site {
  site: {
    siteMetadata: {
      description: string;
    };
  };
}

export default ({ children }: Props) => {
  const { site }: Site = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );
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
      <div
        css={css`
          text-align: center;
        `}
      >
        <h3
          css={css`
            display: inline-block;
          `}
        >
          {site.siteMetadata.description}
        </h3>
      </div>
      {/* <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link> */}
      <SocialButtons></SocialButtons>
      {children}
      <SocialButtons></SocialButtons>
    </div>
  );
};
