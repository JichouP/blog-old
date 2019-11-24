import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Top" description={data.site.siteMetadata.description}></SEO>
      <div>
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
            {data.site.siteMetadata.description}
          </h3>
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
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
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
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
