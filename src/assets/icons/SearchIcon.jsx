import * as React from "react";

const SvgSearchIcon = (props) => (
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
        <use xlinkHref="#b" transform="scale(.01111)" />
      </pattern>
      <image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFkElEQVR4nO2cy28cRRDGK0iER+IDIbyuKIIDCCQgBBAIDhEPifffEQffwJwQQoILxiRwRVF45CEhBAcUISs8RHhEPqysYfqrHhuTVRxMjH3hADYigwrayFqmZ3Y33unu2f5JLVn2arbmc011d3XVEEUikUgkEolEIpFI5P+0Wq1tSqlHmHkcwCEA3wGYY+YVZl41Y0V+B+Bb+Yx8Vmv98MLCwpUFl4ysMzs7ey2AMQBfGSHzPseqXEMp9Zxc878vGHaY+QFm/piZ/7wIcW1jTa4N4H4aVrTWDwL4cgDiFg4AX8g/lYaFJEmuZ+bDAC7UJXLHOD43N3cdNRlmftZMaLnjsQLgaWoaSZJsBfBmj158DsD7zDwqq4ksy3bNzMxcNT09fakM+Vl+J39j5v3msz/3EErEljfkWtQEkiTZDuCzLm/+PDNPKqXu7Pf7lFJ3yT+VmZe6FP2E2Eghk6bp1cx8uguBzzDzvna7fcVmfbdcS54GAO0uvv97sZVCRDYOAL6puMk18b5BepQR/CUAf1TYcjo4zzYxuTRcAPghy7Jb6rIpTdNbAaRVYSSomG1iZJnIR1xslVut1jZZ3lWIPUEhoLV+omJ18Vae55e4si/P8y3M/HrFauQZCmAzYl0nAzhAngDgYIkzLHudJ2Hmd8vChUtP7kRsKQsjkhEkj3MXhSEDQOJj+jJJku3MrGwhxMtklC1BJMuqOlcXvQLgtpK07EnyiSzL7i2Jdy+T5zDzqyUhxB+vNvnkwh3fZu72BrnsA3DWIvZH5AMyO5sEe5GR+ygQAIzZdq9a62u8NVASRCF48zoyWZckokbJNeaMr8i4SQoMAAcs9/K5U8PMlrZwxs6y7A4KDAC7bSsnp0+nSboXecA5CpA8z7cAWLTc015nhjHzixaj3qNAAXDE4tXPuzTqkLeTR59IPYhF6HfIFVIlVGSUhBQKFACPWpznlDOjmHneYtSNFChZlu2y3NOPzoySdGKRUUmS7KCwzznzgrHkzCjb0k6OsihQkiTZalviOTOqiUJrrS+zePSqM6OaGDoA7LQIvezMqGGaDAGc8W55J0XkFCgAHrM4z9c+blj2U6DAni497MwoaWewPGYfUKAw81GL0OPOjDJ9JkVCL0qChhqUVFJKPeQ6WV64xJOqTgoMZt5j8eY1SQl7mfiXsjAKDNiLaqZ8znad97GWo+Lp/NXbs8+Kw9nRJhzOpml6A3lebtAOwatb/x7JLViEPka+IEUmFiNF7FfIc5j5tSAKaATTx1eY9ZIicPIUZr69pCTM/STYiTRLlhQ5ps6XRwUopUaYGRabL2it7yEfkW2q7RGUElnfynYBfBhc2a4gHakVhegHyROY+e0Sp1iSdCn5jNb68dBbKxBKV610pJYI/U8YcdFqppQaKQsXQTULCdJCJq1kFTekpAi85tVF4cTXMT6V4ywKbEt7qpuGTqXUyIDt6Kahc+M4MT8/fzmFdHQv7b9VNwbgrORMNnMXaTp3x0p2fM3ybNOQUxVG8g2zvZTO3t1PPttMdHtMFs6WIGqu2CZmT/TyGgkAi1JwKJ4uZVppmt4kr46QUgYzdiilbpa/Gc89CuCXHq4vtkyImI0SWwDwlK1EgesdS0qpJzfUcTRPbPFE85KUvxyJfLyzJ8W8JOCTRk2QHRm/kzUKPFWWu2isZ6+jlLpPWsxKDg8uZsg1j3Wb6my82BtKsUalMafHNW/nkPfnTcnxUz8nI0MhdsdbY/YCeEEq7eVNNuaVmcsmd7xmklc/SQWRyRqOS0nAZqRjh0ps1zR6gvSNKHaNRLFrJIpdI1HsGoli10hc+vkndnBvdwhV7N9CrBEPTmwAv/tUx9JYsZ026Tdc7EkJF+LJInJwb+4NCYnJMS5HIpFIJBKJRCI0cP4GG9bOxzTy+aAAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SvgSearchIcon;
