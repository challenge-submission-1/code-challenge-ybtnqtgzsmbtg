import Head from "next/head";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { Stack } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import Category from "@/components/Category";
import SectionsNav from "@/components/SectionsNav";
import categoriesEn from "@/mocks/categories.en";
import categoriesFr from "@/mocks/categories.fr";

// The tables page ui is similar to pages like storage, acessories, etc. As a
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
        {
          /* Other relevant page metadata includes:
           * - opengraph and twitter card metadata (eg., sharing)
           * - canonical url and alternate url metadata (eg., en vs fr)
           * - sitemap configuration (eg., via robots file, cms)
           * - robots metadata (eg., noindex)
           * See: https://developers.google.com/search/docs/crawling-indexing */
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Use semantic html where relevant for accessibility */}
      <Stack component="main" direction="column" spacing={6}>
        <Stack direction="column" spacing={4}>
          {
            /* Localized content could be retrieved from a cms or localizations could
             * be managed by developers in code. These localizations could either use an
             * internalization system like i18next or something else, hardcoded for now. */
          }
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
            // A category in this app is similar to a section from the production tables page. 
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
