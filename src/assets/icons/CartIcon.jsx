import * as React from "react";

const SvgCartIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h20v20H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01563)" />
      </pattern>
      <image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCElEQVR4nO2aTYhOURjHj4YhRQqhGCUWYmdh46MoY2VrIQuUz4UlTSMlSrNhYeEjk5KyILYWZlIkmojue5///9xuL2qUr4V8jNK4Os070zTNe997X+99z3lf51f/7dN5/vec57nnQymPx+PxeDyeSSRJ0lEqlVaSXFVN5XJ5gWo3tNbzSV4j+Z1kkkGvtNZbVbtA8l7GxCcE4EcYhutVq1MqldbkTX6SCVdUqwNgZ70GkHxP8rwjOmiWcm4D4jjuAvDnH0xwRgDemRldzyy4anvwDdRAbgOGhoZmkewlqVt9Npjxi8i83CakAeCB7cTyqK5akAbJi7aTyqE3qtGQPNRCS+BuEQZssZ1YDvU03IAwDBc6kFgmiUi3KgKSn2wnl0Va68WFGADgke3krBTAcQBcdiDB5hfAcUTkuO0ErRTAcbTWOxxI0E4BNGitlzs+/UdNt1JFkSTJDABfbSeaoieqaEg+d3gG7C7cAAA3bCdaRQPmQLcZBpxw8Mu/BLBINQMR2eVQ4qMkrzd865tGFEWrawzqLYC4QEUkH1fOANeqZpMkSQeAkRQTNqp2h+TragZorfepdofk7ZQZcEG1OwBOpxjwjeSlIs//AZwCsN2aASLSbbsDVAruLfN32nQDhoeH55L87IgJB5QNOHaH4IIBd6wYEARBpwv7AmsGTDootWqC9bYbBEGnqcokv1gw4KaVIlitMJpr9spmqehr8F4A26YdiMcy5XJ5jmlNAPqNRGS/1np2vfHMhgfAOdPzAfSJyAblKnEcd5GUaSp1KYqiFXnjAThG8veUWObq/oxyjWTsvPBZSrt6mqdgmRdolf2+veOvPJDcnKFnb2rUqzVjtnIJAEczGHAkR7yoRqyfyiUA7K1lgIjsyRHvRQ0DPiiXCMNwGYBfKQMeCYJgadZ4AM7WMKBfuQbJnpQBn8wTy7xHrrYMzNc3t1TKRTBWCybeEQD4KCKH651VJO9P6QYP63oH2EwGBwdnRlG0zqgRlxVm02V+gOI4XtKYEXo8Ho/H4/Go/5u/9O83bzSTj+EAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SvgCartIcon;
