import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Meta: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
  logo?: string;
  style: object;
  externalMetaTags?: Array<{ name: string; content: string; meta_id: string }>;
}> = ({ children, title, description, logo, style, externalMetaTags }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {externalMetaTags &&
          externalMetaTags.map((metaTag) => {
            return (
              <meta
                key={metaTag.meta_id}
                name={metaTag.name}
                content={metaTag.content}
              />
            );
          })}
      </Head>
      <body style={style} className={inter.className}>
        {children}
      </body>
    </html>
  );
};
