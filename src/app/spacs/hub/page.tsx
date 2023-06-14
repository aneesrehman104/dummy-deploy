"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
const getGraphData = async () => {
  const response  = await getApiWithoutAuth(URLs.spacGraph);
  console.log('====================response',response)
  return response;
};


export default async function  SpacsHub() {
// const graphData= await getGraphData()
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/hub">
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}