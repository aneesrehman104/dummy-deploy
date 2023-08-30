export type Selection = "Merger" | "IPO" | "SPAC" | "ListingTrack";

export type patternSPAC = {
  title: string;
  subtitle: string;
  deals: {
    title: string;
    attr: Array<{
      title: string;
      points: Array<string>;
    }>;
  };
  spacUpdates: {
    title: string;
    liquidationsTerminations: {
      title: string;
      points: Array<string>;
    };

    mergerVotesCompletion: {
      title: string;
      points: Array<string>;
    };

    dealCompletion: {
      title: string;
      points: Array<string>;
    };

    extensions: {
      title: Array<string>;
      points: Array<Array<string>>;
    };
  };
  otherSpacUpdates: {
    title: string;
    attr: Array<{
      title: string;
      points: Array<string>;
    }>;
  };

  listings: {
    title: string;
    ipoNewS1RegistrationWithdrawals: {
      title: string;
      points: Array<string>;
    };
  };

  keyFilings: {
    title: string;
    extensions: {
      title: string;
      points: Array<string>;
    };

    s4Filings: {
      title: string;
      points: Array<string>;
    };
    postMergerS1Filings: {
      title: string;
      points: Array<string>;
    };
  };

  keyEventCalendar: {
    title: string;
    points: Array<string>;
  };
};

export type patternIPO = {
  title: string;
  subtitle: string;
  ipoNews: {
    title: string;
    rumors: {
      title: string;
      points: Array<string>;
    };
    marketNews: {
      title: string;
      points: Array<string>;
    };
  };

  launchAction: {
    title: string;
    points: Array<string>;
  };

  ipoUpdates: {
    title: string;
    newFilings: {
      title: string;
      points: Array<string>;
    };

    amendments: {
      title: string;
      points: Array<string>;
    };
    withdrawals: {
      title: string;
      points: Array<string>;
    };
  };

  ipoCalendar: {
    title: string;
    points: Array<string>;
  };
};

export type patternMerger = {
  title: string;
  subtitle: string;
  mergerNews: {
    title: string;
    rumors: {
      title: string;
      points: Array<string>;
    };

    marketNews: {
      title: string;
      points: Array<string>;
    };
  };

  mergerAnnouncements: {
    title: string;
    points: Array<string>;
  };

  mergerUpdates: {
    title: string;
    mergerVotes: {
      title: string;
      points: Array<string>;
    };

    terminations: {
      title: string;
      points: Array<string>;
    };

    dealAmendments: {
      title: string;
      points: Array<string>;
    };

    s4Filings: {
      title: string;
      points: Array<string>;
    };
  };

  mergerCalendar: {
    title: string;
    points: Array<string>;
  };
};

export type patternListingTrack = {
  title: string;
  subtitle: string;
  marketNews: {
    title: string;
    points: Array<string>;
  };

  ipos: {
    title: string;
    news: {
      title: string;
      points: Array<string>;
    };

    pricings: {
      title: string;
      points: Array<string>;
    };

    gainersLosers: {
      title: string;
      points: Array<string>;
    };

    theBestOfTheNet: {
      title: string;
      points: Array<string>;
    };
  };

  mergers: {
    title: string;
    news: {
      title: string;
      points: Array<string>;
    };

    pricings: {
      title: string;
      points: Array<string>;
    };

    gainersLosers: {
      title: string;
      points: Array<string>;
    };

    theBestOfTheNet: {
      title: string;
      points: Array<string>;
    };
  };

  spacs: {
    title: string;
    news: {
      title: string;
      points: Array<string>;
    };

    pricings: {
      title: string;
      points: Array<string>;
    };

    gainersLosers: {
      title: string;
      points: Array<string>;
    };

    theBestOfTheNet: {
      title: string;
      points: Array<string>;
    };
  };
};
