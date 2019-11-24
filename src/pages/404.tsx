import React from 'react';
import Layout from '../components/layout';
import css from '@emotion/css';
import { rhythm } from '../utils/typography';
import { Link, graphql } from 'gatsby';

export default ({ data }: Props) => {
  const node = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      <div
        css={css`
          text-align: center;
          margin: ${rhythm(2)};
        `}
      >
        <h2>お探しの記事は存在しないようです</h2>
        <h2>こちらの記事はいかがですか？</h2>
      </div>
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
    </Layout>
  );
};

interface Props {
  data: {
    allMarkdownRemark: {
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
  };
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`;
