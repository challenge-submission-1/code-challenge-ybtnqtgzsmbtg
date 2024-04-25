import Head from "next/head";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { Stack } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import Category from "@/components/Category";
import SectionsNav from "@/components/SectionsNav";
import categoriesEn from "@/mocks/categories.en";
import categoriesFr from "@/mocks/categories.fr";

// This tables page ui is similar to other pages like storage, acessories, etc. As a
// result, implementation goals include component re-use for any future similar pages.

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Cozey | Shop Tables</title>

        <meta name="description" content="The Cozey shop tables page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Other relevant page metadata includes:
         * - opengraph and twitter card metadata (eg., sharing)
         * - canonical url and alternate url metadata (eg., en vs fr)
         * - sitemap configuration (eg., via robots file, cms)
         * - robots metadata (eg., noindex)
         * See: https://developers.google.com/search/docs/crawling-indexing
         */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Use semantic html where relevant for accessibility */}
      <Stack component="main" direction="column" spacing={6}>
        <Stack direction="column" spacing={4}>
          {/*
           * While localized content could retrieved from a cms other localizations could
           * be managed by developers in code. These localizations could either use an
           * internalization system like i18next or something else, hardcoded for now.
           */}
          <PageHeader
            title="Tables"
            subtitle="A perfect pairing to your sofa"
          />
          <SectionsNav
            sections={categories.map((category) => {
              return category.title;
            })}
          />
        </Stack>
        <Stack direction="column" spacing={6}>
          {categories.map((category) => {
            // A category here maps to a section from the production tables page. A section is a content
            // abstraction comonly found in cms systems and a category is one type of section. It may
            // make sense to abstract this further towards sections once there is more types of section.
            return <Category key={category.title} category={category} />;
          })}
        </Stack>
      </Stack>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // A real world app may request some or all page content from a content
  // management system (cms). The app could use the cms' api to get page
  // content by locale using the context locale value (eg., english vs french).
  const categories =
    context.locale === "en"
      ? categoriesEn
      : // The french content is not translated but can still be rendered and accessed to show the mechanism.
        categoriesFr;

  return {
    props: {
      categories,
    },
  };
}
