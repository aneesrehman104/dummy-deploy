"use client";
import RootLayout from "./layout";
import NewsLetters from "@/lib/components/MainComponents/NewsLetters/newsletters.component";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";

const PlansPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="newsletters">
        <NewsLetters />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default PlansPage;
