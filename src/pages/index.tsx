import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';
import InfiniteScroll from 'react-infinite-scroll-component';

const unitLength = 5;

export default ({ data }: Props) => {
  const allDataLength = data.allMarkdownRemark.edges.length;
  const [length, setLength] = useState(
    unitLength < allDataLength ? unitLength : allDataLength
  );
  const fetchData = () => {
    setLength(
      length + unitLength < allDataLength ? length + unitLength : allDataLength
    );
  };
  return (
    <Layout>
      <SEO title="Top" description={data.site.siteMetadata.description}></SEO>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <InfiniteScroll
          style={{ overflow: 'visible' }}
          dataLength={length}
          next={fetchData}
          hasMore={length < allDataLength}
          loader={<h4 style={{ textAlign: 'center' }}>ロード中...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>これ以上記事はありません</b>
            </p>
          }
        >
          {data.allMarkdownRemark.edges
            .filter((_, i) => i < length)
            .map(({ node }) => (
              <div
                key={node.id}
                css={css`
                  transform: scale(1);
                  transition: 0.2s ease-in-out;
                  :hover {
                    transform: scale(1.03);
                    transition: 0.2s ease-in-out;
                  }
                `}
              >
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <h3
                    css={css`
                      margin-bottom: ${rhythm(1 / 4)};
                    `}
                  >
                    {node.frontmatter.title}{' '}
                    <span
                      css={css`
                        color: #888;
                      `}
                    >
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

interface Props {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            date: string;
          };
          fields: {
            slug: string;
          };
          excerpt: string;
        };
      }[];
    };
    site: {
      siteMetadata: {
        description: string;
      };
    };
  };
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;
