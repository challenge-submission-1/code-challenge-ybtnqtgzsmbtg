import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";

// Integrate material ui with pages router (eg., getInitialProps)
// See: https://mui.com/material-ui/integrations/nextjs/#pages-router

interface DocumentProps {
  documentHeadTagsProps: DocumentHeadTagsProps;
}

export default function Document({ documentHeadTagsProps }: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...documentHeadTagsProps} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (context: DocumentContext) => {
  return await documentGetInitialProps(context);
};
