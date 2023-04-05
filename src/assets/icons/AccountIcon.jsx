import * as React from "react";

const SvgAccountIcon = (props) => (
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
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD00lEQVR4nO2dX4tVVRjGtxc6CtpdMaF4kVgUJISggn6MrBn6ANFtt1LQjYF03R//XHojop+gIb1oYhiicp2znmd1hgMnCkYRK6d0tNryOisYRHDGOXu/65zz/OCF4cwZ9n7eZ+211t7v2muqSgghhBBCCCGEEEKIwkgpvUByluQ5kgsAbpJ8YJF/ts/OkpyJMe7xPt+xodvtvkryAoC/SNYbifzd851O56D3+Y8sg8FgF4DPSD7caOKfEnZ1nOn3+zu99YwUnU7nIMkbW0j8k1fEfLfbfdlb10iQUnor9+lDSf46E34BcMhbX/EtHw0kf70JIYRpb51F0u/3dwL4oankr4tFG1+89RYH1gbcuqX4xFtviVPNhy0acFdd0TpIXmgx+f/H535NrrA7XGziJmuIsaI75upx6591SP7jAPBuNelw7dmOlwFfVZMOyQVHA+arSYfkLUcDlqtJh+SqowH3q0mHMsDdgFvqgnwNWNAg7AjWyoheY8CX1aRDcsbRgJPVpBNC2G2PBRwMWLFje+svApLnHVr/WW/dpdWAH7RogN17vOKtuygAnGnRgE+99ZZakpxvoev5NqU05a23SEII0wAGDRrwK8m93jqLBsAhW73QQMsfxBjf9NY3EqSUXgRwbZjdjmrAmzdhylYvbPEeYRXAafX5WyCEMG0F9E0asWLVLk01h0gIYbfVcO35DYDvrJiS5/PWypfzZ18AeEd3uEIIIYQQQgghhBBCbPLNmRjjYVs3BOBjABdJztlbjgB69jqrLa7NYT/37Hckv7bv2t/kfSMO602YZ7C4uLid5FEAH5K8mkuHTZQjr+ZjHLVjTuwVUdf1NpJHcsFlzuMdsXzMuXwOR+ycqnHGBAI4Yc/sSf7WdsK5gSsk1xOOj5UZvV7vJZKnAPxcQJLrDV4ddq6nrDZdjSoppTfyPj/3vBPK5zfiXl42+Xo1KiwtLe23eiyAf7wTyOEZ8S/JSymlA1WphBB25Onife+EsTkjbMr7UXEzKFtMNcwNllh+/FTMIi97ycFpfX/tHHdjjG97J/8DAP8VkIzaI7L2912SH2N8Lw9O7omgrwmWg5nW9/cB8Le3eBYSlotWt8gEcN1bNAsLAN+0lfzj3mJZaKSUjo319jIsPFrZ/obkj95CWWgA+L5xAwD87i2UhQaAO40b4C2ShYcMoAxwb4XUFeCfCKoL8k8GHUJjAMffgD+9RbLQsCl64wYAuOItlIUGgMuNGxBjfI3kbW+xLC9ut/ZENKW0z4rUAP4oQHjtGZYDa/n6j01CCCGEEEIIIYQQonoGjwB3467cdNvTTgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default SvgAccountIcon;
