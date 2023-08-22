import React, { useEffect, useState } from "react";

import styles from "./iops.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import IpoCompanyInfo from "./IpoCompanyInfo/ipocompanyinfo.component.tsx";
import News from "./News/iponews.component";
import PressReleases from "./PressReleases/ipopressreleases.component";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMemberstackModal } from "@memberstack/react";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Checkbox, FormControlLabel, Menu, MenuItem } from "@mui/material";
import { getODataWithParams } from "@lib/ts/api";
import { GraphDataInterface } from "@/lib/ts/interface";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";

const jsonResponse = "application/json";
interface PROPS {}

const DynamicChart = dynamic(() => import("./IOPSChart"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});
interface PROPS {}

const dataSet = [
  {
    name: "Data",
    value: "March 13, 1986",
  },
  {
    name: "Proceeds",
    value: "XXX",
  },
  {
    name: "Previous FY Revenue ",
    value: "$100M",
  },
  {
    name: "Type",
    value: "XXX",
  },
  {
    name: "Underwriters",
    value: "SoftBank",
  },
  {
    name: "S-1 Prospectus",
    value: "Icon",
  },
  {
    name: "Return",
    value: "327,401",
  },
  {
    name: "Shared Offers",
    value: "XXX",
  },
  {
    name: "Annualised Return",
    value: "XX% YTD",
  },
  {
    name: "CEO",
    value: "Bill Gates",
  },
];

const IOPS: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface>({
    additional_dataset: {},
    dataset: [],
  });
  const { openModal, hideModal } = useMemberstackModal();
  const { user } = useContext(MemberInformationContext);

  const options = {
    chartOptions: {
      chart: {
        height: null,
        width: null,
        marginTop: 10,
        marginBottom: 70,
        zoomType: "x",
        plotBackgroundColor: null,
        renderTo: "container",
        animation: false,
        zooming: {
          mouseWheel: {
            enabled: false,
          },
        },
      },
      accessibility: {
        enabled: false,
      },
      rangeSelector: {
        buttons: [
          {
            type: "month",
            count: 1,
            text: "1 M",
          },
          {
            type: "month",
            count: 3,
            text: "3 M",
          },
          {
            type: "year",
            count: 1,
            text: "1 Y",
          },
          {
            type: "year",
            count: 5,
            text: "5 Y",
          },
          {
            type: "all",
            text: "All",
          },
        ],
        selected: 5,
        zoomText: "",
        enabled: true,
        inputEnabled: false,
      },
      navigator: {
        enabled: false,
        margin: 20,
      },
      scrollbar: {
        enabled: false,
      },

      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        split: false,
        style: {
          fontSize: "12px",
        },
        series: {
          pointStart: 1279324800000,
          pointInterval: 24 * 3600 * 1000,
        },
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: [
        {
          lineColor: "white",
          lineWidth: 1,
          offset: 30,
        },
      ],
      data: {
        decimalPoint: ".",
        thousandsSep: ",",
      },
      plotOptions: {
        series: {
          showInLegend: true,
          dataGrouping: {
            enabled: false,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: "line",
          yAxis: 0,
          data: [
            [1587648600000, 68.97],
            [1587735000000, 69.3, 70.75, 69.25, 70.74, 126161200],
            [1587994200000, 70.45, 71.14, 69.99, 70.79, 117087600],
            [1588080600000, 71.27, 71.46, 69.55, 69.64, 112004800],
            [1588167000000, 71.18, 72.42, 70.97, 71.93, 137280800],
            [1588253400000, 72.49, 73.63, 72.09, 73.45, 183064000],
            [1588339800000, 71.56, 74.75, 71.46, 72.27, 240616800],
            [1588599000000, 72.29, 73.42, 71.58, 73.29, 133568000],
            [1588685400000, 73.76, 75.25, 73.61, 74.39, 147751200],
            [1588771800000, 75.11, 75.81, 74.72, 75.16, 142333600],
            [1588858200000, 75.81, 76.29, 75.49, 75.93, 115215200],
            [1588944600000, 76.41, 77.59, 76.07, 77.53, 133838400],
            [1589203800000, 77.03, 79.26, 76.81, 78.75, 145946400],
            [1589290200000, 79.46, 79.92, 77.73, 77.85, 162301200],
            [1589376600000, 78.04, 78.99, 75.8, 76.91, 200622400],
            [1589463000000, 76.13, 77.45, 75.38, 77.39, 158929200],
            [1589549400000, 75.09, 76.97, 75.05, 76.93, 166348400],
            [1589808600000, 78.29, 79.13, 77.58, 78.74, 135178400],
            [1589895000000, 78.76, 79.63, 78.25, 78.29, 101729600],
            [1589981400000, 79.17, 79.88, 79.13, 79.81, 111504800],
            [1590067800000, 79.67, 80.22, 78.97, 79.21, 102688800],
            [1590154200000, 78.94, 79.81, 78.84, 79.72, 81803200],
            [1590499800000, 80.88, 81.06, 79.13, 79.18, 125522000],
            [1590586200000, 79.04, 79.68, 78.27, 79.53, 112945200],
            [1590672600000, 79.19, 80.86, 78.91, 79.56, 133560800],
            [1590759000000, 79.81, 80.29, 79.12, 79.49, 153532400],
            [1591018200000, 79.44, 80.59, 79.3, 80.46, 80791200],
            [1591104600000, 80.19, 80.86, 79.73, 80.83, 87642800],
            [1591191000000, 81.17, 81.55, 80.57, 81.28, 104491200],
            [1591277400000, 81.1, 81.4, 80.19, 80.58, 87560400],
            [1591363800000, 80.84, 82.94, 80.81, 82.88, 137250400],
            [1591623000000, 82.56, 83.4, 81.83, 83.36, 95654400],
            [1591709400000, 83.04, 86.4, 83, 86, 147712400],
            [1591795800000, 86.97, 88.69, 86.52, 88.21, 166651600],
            [1591882200000, 87.33, 87.76, 83.87, 83.97, 201662400],
            [1591968600000, 86.18, 86.95, 83.56, 84.7, 200146000],
            [1592227800000, 83.31, 86.42, 83.14, 85.75, 138808800],
            [1592314200000, 87.86, 88.3, 86.18, 88.02, 165428800],
            [1592400600000, 88.79, 88.85, 87.77, 87.9, 114406400],
            [1592487000000, 87.85, 88.36, 87.31, 87.93, 96820400],
            [1592573400000, 88.66, 89.14, 86.29, 87.43, 264476000],
            [1592832600000, 87.83, 89.86, 87.79, 89.72, 135445200],
            [1592919000000, 91, 93.1, 90.57, 91.63, 212155600],
            [1593005400000, 91.25, 92.2, 89.63, 90.01, 192623200],
            [1593091800000, 90.18, 91.25, 89.39, 91.21, 137522400],
            [1593178200000, 91.1, 91.33, 88.25, 88.41, 205256800],
            [1593437400000, 88.31, 90.54, 87.82, 90.44, 130646000],
            [1593523800000, 90.02, 91.5, 90, 91.2, 140223200],
            [1593610200000, 91.28, 91.84, 90.98, 91.03, 110737200],
            [1593696600000, 91.96, 92.62, 90.91, 91.03, 114041600],
            [1594042200000, 92.5, 93.94, 92.47, 93.46, 118655600],
            [1594128600000, 93.85, 94.65, 93.06, 93.17, 112424400],
            [1594215000000, 94.18, 95.38, 94.09, 95.34, 117092000],
            [1594301400000, 96.26, 96.32, 94.67, 95.75, 125642800],
            [1594387800000, 95.33, 95.98, 94.71, 95.92, 90257200],
            [1594647000000, 97.26, 99.96, 95.26, 95.48, 191649200],
            [1594733400000, 94.84, 97.25, 93.88, 97.06, 170989200],
            [1594819800000, 98.99, 99.25, 96.49, 97.72, 153198000],
            [1594906200000, 96.56, 97.4, 95.9, 96.52, 110577600],
            [1594992600000, 96.99, 97.15, 95.84, 96.33, 92186800],
            [1595251800000, 96.42, 98.5, 96.06, 98.36, 90318000],
            [1595338200000, 99.17, 99.25, 96.74, 97, 103433200],
            [1595424600000, 96.69, 97.97, 96.6, 97.27, 89001600],
            [1595511000000, 97, 97.08, 92.01, 92.85, 197004400],
            [1595597400000, 90.99, 92.97, 89.14, 92.61, 185438800],
            [1595856600000, 93.71, 94.9, 93.48, 94.81, 121214000],
            [1595943000000, 94.37, 94.55, 93.25, 93.25, 103625600],
            [1596029400000, 93.75, 95.23, 93.71, 95.04, 90329200],
            [1596115800000, 94.19, 96.3, 93.77, 96.19, 158130000],
            [1596202200000, 102.89, 106.42, 100.82, 106.26, 374336800],
            [1596461400000, 108.2, 111.64, 107.89, 108.94, 308151200],
            [1596547800000, 109.13, 110.79, 108.39, 109.67, 173071600],
            [1596634200000, 109.38, 110.39, 108.9, 110.06, 121776800],
            [1596720600000, 110.4, 114.41, 109.8, 113.9, 202428800],
            [1596807000000, 113.21, 113.68, 110.29, 111.11, 198045600],
            [1597066200000, 112.6, 113.78, 110, 112.73, 212403600],
            [1597152600000, 111.97, 112.48, 109.11, 109.38, 187902400],
            [1597239000000, 110.5, 113.28, 110.3, 113.01, 165598000],
            [1597325400000, 114.43, 116.04, 113.93, 115.01, 210082000],
            [1597411800000, 114.83, 115, 113.04, 114.91, 165565200],
            [1597671000000, 116.06, 116.09, 113.96, 114.61, 119561600],
            [1597757400000, 114.35, 116, 114.01, 115.56, 105633600],
            [1597843800000, 115.98, 117.16, 115.61, 115.71, 145538000],
            [1597930200000, 115.75, 118.39, 115.73, 118.28, 126907200],
            [1598016600000, 119.26, 124.87, 119.25, 124.37, 338054800],
            [1598275800000, 128.7, 128.79, 123.94, 125.86, 345937600],
            [1598362200000, 124.7, 125.18, 123.05, 124.82, 211495600],
            [1598448600000, 126.18, 126.99, 125.08, 126.52, 163022400],
            [1598535000000, 127.14, 127.49, 123.83, 125.01, 155552400],
            [1598621400000, 126.01, 126.44, 124.58, 124.81, 187630000],
            [1598880600000, 127.58, 131, 126, 129.04, 225702700],
            [1598967000000, 132.76, 134.8, 130.53, 134.18, 151948100],
            [1599053400000, 137.59, 137.98, 127, 131.4, 200119000],
            [1599139800000, 126.91, 128.84, 120.5, 120.88, 257599600],
            [1599226200000, 120.07, 123.7, 110.89, 120.96, 332607200],
            [1599571800000, 113.95, 118.99, 112.68, 112.82, 231366600],
            [1599658200000, 117.26, 119.14, 115.26, 117.32, 176940500],
            [1599744600000, 120.36, 120.5, 112.5, 113.49, 182274400],
            [1599831000000, 114.57, 115.23, 110, 112, 180860300],
            [1600090200000, 114.72, 115.93, 112.8, 115.36, 140150100],
            [1600176600000, 1188.33, 118.83, 113.61, 115.54, 184642000],
            [1600263000000, 115.23, 116, 112.04, 112.13, 154679000],
            [1600349400000, 109.72, 112.2, 108.71, 110.34, 178011000],
            [1600435800000, 110.4, 110.88, 106.09, 106.84, 287104900],
            [1600695000000, 104.54, 110.19, 103.1, 110.08, 195713800],
            [1600781400000, 112.68, 112.86, 109.16, 111.81, 183055400],
            [1600867800000, 111.62, 112.11, 106.77, 107.12, 150718700],
            [1600954200000, 105.17, 110.25, 105, 108.22, 167743300],
            [1601040600000, 108.43, 112.44, 107.67, 112.28, 149981400],
            [1601299800000, 115.01, 115.32, 112.78, 114.96, 137672400],
            [1601386200000, 114.55, 115.31, 113.57, 114.09, 99382200],
            [1601472600000, 113.79, 117.26, 113.62, 115.81, 142675200],
            [1601559000000, 117.64, 117.72, 115.83, 116.79, 116120400],
            [1601645400000, 112.89, 115.37, 112.22, 113.02, 144712000],
            [1601904600000, 113.91, 116.65, 113.55, 116.5, 106243800],
            [1601991000000, 115.7, 116.12, 112.25, 113.16, 161498200],
            [1602077400000, 114.62, 115.55, 114.13, 115.08, 96849000],
            [1602163800000, 116.25, 116.4, 114.59, 114.97, 83477200],
            [1602250200000, 115.28, 117, 114.92, 116.97, 100506900],
            [1602509400000, 120.06, 125.18, 119.28, 124.4, 240226800],
            [1602595800000, 125.27, 125.39, 119.65, 121.1, 262330500],
            [1602682200000, 121, 123.03, 119.62, 121.19, 150712000],
            [1602768600000, 118.72, 121.2, 118.15, 120.71, 112559200],
            [1602855000000, 121.28, 121.55, 118.81, 119.02, 115393800],
            [1603114200000, 119.96, 120.42, 115.66, 115.98, 120639300],
            [1603200600000, 116.2, 118.98, 115.63, 117.51, 124423700],
            [1603287000000, 116.67, 118.71, 116.45, 116.87, 89946000],
            [1603373400000, 117.45, 118.04, 114.59, 115.75, 101988000],
            [1603459800000, 116.39, 116.55, 114.28, 115.04, 82572600],
            [1603719000000, 114.01, 116.55, 112.88, 115.05, 111850700],
            [1603805400000, 115.49, 117.28, 114.54, 116.6, 92276800],
            [1603891800000, 115.05, 115.43, 111.1, 111.2, 143937800],
            [1603978200000, 112.37, 116.93, 112.2, 115.32, 146129200],
            [1604064600000, 111.06, 111.99, 107.72, 108.86, 190272600],
            [1604327400000, 109.11, 110.68, 107.32, 108.77, 122866900],
            [1604413800000, 109.66, 111.49, 108.73, 110.44, 107624400],
            [1604500200000, 114.14, 115.59, 112.35, 114.95, 138235500],
            [1604586600000, 117.95, 119.62, 116.87, 119.03, 126387100],
            [1604673000000, 118.32, 119.2, 116.13, 118.69, 114457900],
            [1604932200000, 120.5, 121.99, 116.05, 116.32, 154515300],
            [1605018600000, 115.55, 117.59, 114.13, 115.97, 138023400],
            [1605105000000, 117.19, 119.63, 116.44, 119.49, 112295000],
            [1605191400000, 119.62, 120.53, 118.57, 119.21, 103162300],
            [1605277800000, 119.44, 119.67, 117.87, 119.26, 81581900],
            [1605537000000, 118.92, 120.99, 118.15, 120.3, 91183000],
            [1605623400000, 119.55, 120.67, 118.96, 119.39, 74271000],
            [1605709800000, 118.61, 119.82, 118, 118.03, 76322100],
            [1605796200000, 117.59, 119.06, 116.81, 118.64, 74113000],
            [1605882600000, 118.64, 118.77, 117.29, 117.34, 73604300],
            [1606141800000, 117.18, 117.62, 113.75, 113.85, 127959300],
            [1606228200000, 113.91, 115.85, 112.59, 115.17, 113874200],
            [1606314600000, 115.55, 116.75, 115.17, 116.03, 76499200],
            [1606487400000, 116.57, 117.49, 116.22, 116.59, 46691300],
            [1606746600000, 116.97, 120.97, 116.81, 119.05, 169410200],
            [1606833000000, 121.01, 123.47, 120.01, 122.72, 127728200],
            [1606919400000, 122.02, 123.37, 120.89, 123.08, 89004200],
            [1607005800000, 123.52, 123.78, 122.21, 122.94, 78967600],
            [1607092200000, 122.6, 122.86, 121.52, 122.25, 78260400],
            [1607351400000, 122.31, 124.57, 122.25, 123.75, 86712000],
            [1607437800000, 124.37, 124.98, 123.09, 124.38, 82225500],
            [1607524200000, 124.53, 125.95, 121, 121.78, 115089200],
            [1607610600000, 120.5, 123.87, 120.15, 123.24, 81312200],
            [1607697000000, 122.43, 122.76, 120.55, 122.41, 86939800],
            [1607956200000, 122.6, 123.35, 121.54, 121.78, 79184500],
            [1608042600000, 124.34, 127.9, 124.13, 127.88, 157243700],
            [1608129000000, 127.41, 128.37, 126.56, 127.81, 98208600],
            [1608215400000, 128.9, 129.58, 128.04, 128.7, 94359800],
            [1608301800000, 128.96, 129.1, 126.12, 126.66, 192541500],
            [1608561000000, 125.02, 128.31, 123.45, 128.23, 121251600],
            [1608647400000, 131.61, 134.41, 129.65, 131.88, 168904800],
            [1608733800000, 132.16, 132.43, 130.78, 130.96, 88223700],
            [1608820200000, 131.32, 133.46, 131.1, 131.97, 54930100],
            [1609165800000, 133.99, 137.34, 133.51, 136.69, 124486200],
            [1609252200000, 138.05, 138.79, 134.34, 134.87, 121047300],
            [1609338600000, 135.58, 135.99, 133.4, 133.72, 96452100],
            [1609425000000, 134.08, 134.74, 131.72, 132.69, 99116600],
            [1609770600000, 133.52, 133.61, 126.76, 129.41, 143301900],
            [1609857000000, 128.89, 131.74, 128.43, 131.01, 97664900],
            [1609943400000, 127.72, 131.05, 126.38, 126.6, 155088000],
            [1610029800000, 128.36, 131.63, 127.86, 130.92, 109578200],
            [1610116200000, 132.43, 132.63, 130.23, 132.05, 105158200],
            [1610375400000, 129.19, 130.17, 128.5, 128.98, 100384500],
            [1610461800000, 128.5, 129.69, 126.86, 128.8, 91951100],
            [1610548200000, 128.76, 131.45, 128.49, 130.89, 88636800],
            [1610634600000, 130.8, 131, 128.76, 128.91, 90221800],
            [1610721000000, 128.78, 130.22, 127, 127.14, 111598500],
            [1611066600000, 127.78, 128.71, 126.94, 127.83, 90757300],
            [1611153000000, 128.66, 132.49, 128.55, 132.03, 104319500],
            [1611239400000, 133.8, 139.67, 133.59, 136.87, 120150900],
            [1611325800000, 136.28, 139.85, 135.02, 139.07, 114459400],
            [1611585000000, 143.07, 145.09, 136.54, 142.92, 157611700],
            [1611671400000, 143.6, 144.3, 141.37, 143.16, 98390600],
            [1611757800000, 143.43, 144.3, 140.41, 142.06, 140843800],
            [1611844200000, 139.52, 141.99, 136.7, 137.09, 142621100],
            [1611930600000, 135.83, 136.74, 130.21, 131.96, 177523800],
            [1612189800000, 133.75, 135.38, 130.93, 134.14, 106239800],
            [1612276200000, 135.73, 136.31, 134.61, 134.99, 83305400],
            [1612362600000, 135.76, 135.77, 133.61, 133.94, 89880900],
            [1612449000000, 136.3, 137.4, 134.59, 137.39, 84183100],
            [1612535400000, 137.35, 137.42, 135.86, 136.76, 75693800],
            [1612794600000, 136.03, 136.96, 134.92, 136.91, 71297200],
            [1612881000000, 136.62, 137.88, 135.85, 136.01, 76774200],
            [1612967400000, 136.48, 136.99, 134.4, 135.39, 73046600],
            [1613053800000, 135.9, 136.39, 133.77, 135.13, 64280000],
            [1613140200000, 134.35, 135.53, 133.69, 135.37, 60145100],
            [1613485800000, 135.49, 136.01, 132.79, 133.19, 80576300],
            [1613572200000, 131.25, 132.22, 129.47, 130.84, 97918500],
            [1613658600000, 129.2, 130, 127.41, 129.71, 96856700],
            [1613745000000, 130.24, 130.71, 128.8, 129.87, 87668800],
            [1614004200000, 128.01, 129.72, 125.6, 126, 103916400],
            [1614090600000, 123.76, 126.71, 118.39, 125.86, 158273000],
            [1614177000000, 124.94, 125.56, 122.23, 125.35, 111039900],
            [1614263400000, 124.68, 126.46, 120.54, 120.99, 148199500],
            [1614349800000, 122.59, 124.85, 121.2, 121.26, 164560400],
            [1614609000000, 123.75, 127.93, 122.79, 127.79, 116307900],
            [1614695400000, 128.41, 128.72, 125.01, 125.12, 102260900],
            [1614781800000, 124.81, 125.71, 121.84, 122.06, 112966300],
            [1614868200000, 121.75, 123.6, 118.62, 120.13, 178155000],
            [1614954600000, 120.98, 121.94, 117.57, 121.42, 153766600],
            [1615213800000, 120.93, 121, 116.21, 116.36, 154376600],
            [1615300200000, 119.03, 122.06, 118.79, 121.09, 129525800],
            [1615386600000, 121.69, 122.17, 119.45, 119.98, 111943300],
            [1615473000000, 122.54, 123.21, 121.26, 121.96, 103026500],
            [1615559400000, 120.4, 121.17, 119.16, 121.03, 88105100],
            [1615815000000, 121.41, 124, 120.42, 123.99, 92403800],
            [1615901400000, 125.7, 127.22, 124.72, 125.57, 115227900],
            [1615987800000, 124.05, 125.86, 122.34, 124.76, 111932600],
            [1616074200000, 122.88, 123.18, 120.32, 120.53, 121229700],
            [1616160600000, 119.9, 121.43, 119.68, 119.99, 185549500],
            [1616419800000, 120.33, 123.87, 120.26, 123.39, 111912300],
            [1616506200000, 123.33, 124.24, 122.14, 122.54, 95467100],
            [1616592600000, 122.82, 122.9, 120.07, 120.09, 88530500],
            [1616679000000, 119.54, 121.66, 119, 120.59, 98844700],
            [1616765400000, 120.35, 121.48, 118.92, 121.21, 94071200],
            [1617024600000, 121.65, 122.58, 120.73, 121.39, 80819200],
            [1617111000000, 120.11, 120.4, 118.86, 119.9, 85671900],
            [1617197400000, 121.65, 123.52, 121.15, 122.15, 118323800],
            [1617283800000, 123.66, 124.18, 122.49, 123, 75089100],
            [1617629400000, 123.87, 126.16, 123.07, 125.9, 88651200],
            [1617715800000, 126.5, 127.13, 125.65, 126.21, 80171300],
            [1617802200000, 125.83, 127.92, 125.14, 127.9, 83466700],
            [1617888600000, 128.95, 130.39, 128.52, 130.36, 88844600],
            [1617975000000, 129.8, 133.04, 129.47, 133, 106686700],
            [1618234200000, 132.52, 132.85, 130.63, 131.24, 91420000],
            [1618320600000, 132.44, 134.66, 131.93, 134.43, 91266500],
            [1618407000000, 134.94, 135, 131.66, 132.03, 87222800],
            [1618493400000, 133.82, 135, 133.64, 134.5, 89347100],
            [1618579800000, 134.3, 134.67, 133.28, 134.16, 84922400],
            [1618839000000, 133.51, 135.47, 133.34, 134.84, 94264200],
            [1618925400000, 135.02, 135.53, 131.81, 133.11, 94812300],
            [1619011800000, 132.36, 133.75, 131.3, 133.5, 68847100],
            [1619098200000, 133.04, 134.15, 131.41, 131.94, 84566500],
            [1619184600000, 132.16, 135.12, 132.16, 134.32, 78657500],
            [1619443800000, 134.83, 135.06, 133.56, 134.72, 66905100],
            [1619530200000, 135.01, 135.41, 134.11, 134.39, 66015800],
            [1619616600000, 134.31, 135.02, 133.08, 133.58, 107760100],
            [1619703000000, 136.47, 137.07, 132.45, 133.48, 151101000],
            [1619789400000, 131.78, 133.56, 131.07, 131.46, 109839500],
            [1620048600000, 132.04, 134.07, 131.83, 132.54, 75135100],
            [1620135000000, 131.19, 131.49, 126.7, 127.85, 137564700],
            [1620221400000, 129.2, 130.45, 127.97, 128.1, 84000900],
            [1620307800000, 127.89, 129.75, 127.13, 129.74, 78128300],
            [1620394200000, 130.85, 131.26, 129.48, 130.21, 78973300],
            [1620653400000, 129.41, 129.54, 126.81, 126.85, 88071200],
            [1620739800000, 123.5, 126.27, 122.77, 125.91, 126142800],
            [1620826200000, 123.4, 124.64, 122.25, 122.77, 112172300],
            [1620912600000, 124.58, 126.15, 124.26, 124.97, 105861300],
            [1620999000000, 126.25, 127.89, 125.85, 127.45, 81918000],
            [1621258200000, 126.82, 126.93, 125.17, 126.27, 74244600],
            [1621344600000, 126.56, 126.99, 124.78, 124.85, 63342900],
            [1621431000000, 123.16, 124.92, 122.86, 124.69, 92612000],
            [1621517400000, 125.23, 127.72, 125.1, 127.31, 76857100],
            [1621603800000, 127.82, 128, 125.21, 125.43, 79295400],
            [1621863000000, 126.01, 127.94, 125.94, 127.1, 63092900],
            [1621949400000, 127.82, 128.32, 126.32, 126.9, 72009500],
          ],
          responsive: true,
          color: "red",
        },
      ],
    },
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleDropdownOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
    }
  };
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getStatsData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setGraphData(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getStatsData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>microsoft [msft]</div>
        </div>
      </div>
      <div className={styles.sectionsummarycontainer}>
        <div className={styles.spaceBetween}>
          <div>
            <div className={styles.ytdEventSummary}>
              Acquirer: Microsoft (MSFT)
            </div>
            <div className={styles.ytdEventSummary}>
              $230.88{" "}
              <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                (-2.33%)
              </span>
            </div>

            <div className={styles.ytdEventSummary}>
              at CLOSE: JUNE 8, 2023 3:58PM EST · NASDAQ
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // height: 55,
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <div className={styles.ytdEventSummary}>Listing Status:</div>
              <div>IPO Priced</div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 10 }}>
            {user?.member !== null ? (
              <CheckCircleIcon />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
                onClick={
                  user?.member !== null
                    ? (e) => handleDropdownOpen(e)
                    : () =>
                        openModal({
                          type: "SIGNUP",
                        })
                          .then((res) => {
                            console.log("data", res);
                            hideModal();
                          })
                          .catch((error) => {
                            console.log("An error occurred:", error);
                          })
                }
              >
                <div style={{ cursor: "pointer" }}>
                  <AddCircleIcon />
                </div>

                <div>Add to WatchList</div>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleDropdownClose}
                >
                  <MenuItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedOptions.includes("IPOs")}
                          onChange={handleOptionSelect}
                          value="IPOs"
                        />
                      }
                      label="IPOs"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedOptions.includes("SPACs")}
                          onChange={handleOptionSelect}
                          value="SPACs"
                        />
                      }
                      label="SPACs"
                    />
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
        <div className={styles.chartcontainer}>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <Image
              src={"/icongoogle.svg"}
              alt="icongoogle"
              width={60}
              height={60}
            />
            <div style={{ marginLeft: 10 }}>
              <div className={styles.ytdEventSummary}>Microsoft Corp.</div>
              <div className={styles.ytdEventSummary}>
                263.63 <span style={{ fontSize: 12, color: "black" }}>USD</span>{" "}
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  -3.11
                </span>{" "}
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  -1.17%
                </span>
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  {" "}
                  Today
                </span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            {" "}
            <DynamicChart options={options} />
          </div>
          <div className={styles.chartBottomSide}>
            <div className={styles.titleText}>
              <div>Announced</div>
              <div className={styles.completedMergers}>deal status</div>
            </div>
            <div className={styles.indicator} />

            <div className={styles.titleText}>
              <div>JAN 18, 2022</div>
              <div className={styles.completedMergers}>announced date</div>
            </div>
            <div className={styles.indicator} />
            <div className={styles.titleText}>
              <div>Acquisition: Public-Public</div>
              <div className={styles.completedMergers}>deal type</div>
            </div>
            <div className={styles.indicator} />
            <div className={styles.titleText}>
              <div style={{ color: "#38C546" }}>32.65%</div>
              <div className={styles.completedMergers}>target 1-YEAR CHG%</div>
            </div>
            <div className={styles.titleText}>
              <div style={{ color: "#EC0F0F" }}>-5.22%</div>
              <div className={styles.completedMergers}>target YTD CHG%</div>
            </div>
          </div>
        </div>
      </div>
      <IpoCompanyInfo />
      <News />
      <PressReleases />
    </>
  );
};

export default IOPS;
