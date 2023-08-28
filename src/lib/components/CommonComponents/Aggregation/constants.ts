import { homeConstants } from "@/lib/ts/constants";
export interface IAggregation {
  value: string | number;
  title: string;
  id: string;
}

export const AggratedDataTitles = [
  {
    title: homeConstants.AggrecatedMiniTable.ListingTrack,
    id: "ec2-wPwm2n1",
  },
  {
    title: homeConstants.AggrecatedMiniTable.mergers,
    id: "ec2-wPwm2n2",
  },
  {
    title: homeConstants.AggrecatedMiniTable.SPACs,
    id: "ec2-wPwm2n3",
  },
];

export const dummy_data_first: Record<string, Array<IAggregation>> = {
  IPOs: [
    {
      value: 200,
      title: "YTD with spacs",
      id: "ec2-wPwm2n1",
    },
    {
      value: "50%",
      title: "YTD SANS spacs",
      id: "ec2-wPwm2n2",
    },
  ],
  Mergers: [
    {
      value: 500,
      title: "Live mergers with spacs",
      id: "ec2-wPwm2n3",
    },
    {
      value: "50%",
      title: "AVG. PREMIUM",
      id: "ec2-wPwm2n4",
    },
    {
      value: "50%",
      title: "MEDIAN PREMIUM",
      id: "5",
    },
  ],

  SPACs: [
    {
      value: 200,
      title: "Total active",
      id: "ec2-wPwm2n6",
    },
    {
      value: 330,
      title: "Searching",
      id: "ec2-wPwm2n7",
    },
    {
      value: 25,
      title: "Completed Mergers",
      id: "ec2-wPwm2n8",
    },
  ],
};

export const dummy_data_second: Record<string, Array<IAggregation>> = {
  "IPOs with Spacs": [
    {
      value: 200,
      title: "YTD",
      id: "ec2-wPwm2n10",
    },
    {
      value: "50%",
      title: "Average Return",
      id: "ec2-wPwm2n11",
    },

    {
      value: "50%",
      title: "Median Return",
      id: "ec2-wPwm2n12",
    },
  ],
  "IPOs Sans Spacs": [
    {
      value: 500,
      title: "YTD",
      id: "ec2-wPwm2n13",
    },
    {
      value: "50%",
      title: "AVG. RETURN",
      id: "ec2-wPwm2n14",
    },
    {
      value: "50%",
      title: "MEDIAN RETURN",
      id: "ec2-wPwm2n15",
    },
  ],
};

export const dummy_data_third: Record<string, Array<IAggregation>> = {
  "Merger with Spacs": [
    {
      value: 200,
      title: "Live Mergers YTD",
      id: "ec2-wPwm2n16",
    },
    {
      value: "50%",
      title: "Average Premiums",
      id: "ec2-wPwm2n17",
    },

    {
      value: "50%",
      title: "Median Premiums",
      id: "ec2-wPwm2n18",
    },
  ],
  "Merger Sans Spacs": [
    {
      value: 500,
      title: "YTD",
      id: "ec2-wPwm2n19",
    },
    {
      value: "50%",
      title: "Average Premiums",
      id: "ec2-wPwm2n20",
    },
    {
      value: "50%",
      title: "Median Premiums",
      id: "ec2-wPwm2n21",
    },
  ],
};
