// "use client";
// import RootLayout from "./layout";
// import Marketing from "@/lib/components/MainComponents/Marketing";
// const MarketingPage = () => {
//   return (
//     <RootLayout>
//       <Marketing />
//     </RootLayout>
//   );
// };
// export default MarketingPage;



"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Marketing from "@/lib/components/MainComponents/Marketing";
import { Meta } from "@/lib/meta.component";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
const IposPage = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));
  return (
    <Meta title="Home" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="home">
        <Marketing />
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};

export default IposPage;


