interface ApplicableOpts {
  html: boolean;
  css: boolean;
  text: boolean;
  templatingTags: boolean;
}

interface Opts {
  html: boolean;
  css: boolean;
  text: boolean;
  templatingTags: boolean;
  reportProgressFunc: null | ((percDone: number) => void);
  reportProgressFuncFrom: number;
  reportProgressFuncTo: number;
}

interface Res {
  log: {
    timeTakenInMilliseconds: number;
  };
  result: string;
  applicableOpts: {
    html: boolean;
    css: boolean;
    text: boolean;
    templatingTags: boolean;
  };
  templatingLang: {
    name: null | string;
  };
}

const defaultOpts: Opts = {
  html: true,
  css: true,
  text: false,
  templatingTags: false,
  reportProgressFunc: null,
  reportProgressFuncFrom: 0,
  reportProgressFuncTo: 100,
};

export { defaultOpts, Opts, ApplicableOpts, Res };
