import React from "react";
import { NextPage, GetStaticProps } from "next";
import Layout from "@defaults/Layout";
import Back from "@components/Back";
import { useRouter } from "next/router";
import { gql } from "graphql-request";
import graphcms from "@utils/request.util";
import ArticleCard from "@components/ArticleCard";
import { IArticle } from "interfaces/article.interface";

interface Props {
  articles: IArticle[];
}

const Blog: NextPage<Props> = ({ articles }) => {
  return (
    <Layout title="Blog" description="A doorway into my mind" showFooter={true}>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 mt-[13vh] lg:mt-[15vh] w-[95vw] lg:w-5/6 mx-auto px-3 max-w-[100vw]">
        <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:col-span-4">
          <Back />
          <h1 className="text-6xl lg:text-7xl">Blog</h1>
          <p className="text-faded text-xs lg:text-sm">
            A portal into my thoughts, thoughts, experiences, ideas, visions,
            and more. What&apos;s the point of this? Well, I&apos;m not sure,
            but here you go anyhow.
          </p>
        </div>

        <section className="lg:col-span-8">
          {articles?.length > 0 ? (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5">
              {articles?.map((article: any, index: number) => (
                <ArticleCard key={index} article={article} />
              ))}
            </section>
          ) : (
            <div className="w-full h-[40vh] flex items-center justify-center text-faded text-sm">
              No articles...
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      articles(orderBy: createdAt_DESC) {
        title
        description
        slug
        createdAt
        content {
          text
        }
      }
    }
  `;
  const response = await graphcms.request(query);

  return {
    props: {
      articles: response?.articles,
    },
    revalidate: 10,
  };
};

export default Blog;
