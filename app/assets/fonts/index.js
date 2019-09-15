import MikkelwindEOT from "./Mikkelwind.eot"
import MikkelwindTTF from "./Mikkelwind.ttf"
import MikkelwindWOFF from "./Mikkelwind.woff"
import MikkelwindWOFF2 from "./Mikkelwind.woff2"

import MikkelIconsEOT from "./MikkelIcons.eot"
import MikkelIconsTTF from "./MikkelIcons.ttf"
import MikkelIconsWOFF from "./MikkelIcons.woff"
import MikkelIconsWOFF2 from "./MikkelIcons.woff2"

import { css } from "styled-components"

export { MikkelwindEOT, MikkelwindTTF, MikkelwindWOFF, MikkelwindWOFF2 }
export const iconStyle = css`
  @font-face {
      font-family: "MikkellerIcons";
      src: url('${MikkelIconsEOT}') format("embedded-opentype");
      src: url('${MikkelIconsEOT}?#iefix') format("embedded-opentype"),
      url('${MikkelIconsWOFF2}') format("woff2"),
      url('${MikkelIconsWOFF}') format("woff"),
  url('${MikkelIconsTTF}') format("truetype");
      font-weight: normal;
      font-style: normal;
  }
  [data-icons8]:before { content: attr(data-icons8); }

  .icons8-download-from-the-cloud:before,
  .icons8-unavailable:before,
  .icons8-tick-box:before,
  .icons8-checked:before,
  .icons8-menu:before,
  .icons8-external-link:before,
  .icons8-home:before,
  .icons8-info:before,
  .icons8-contacts:before,
  .icons8-round:before,
  .icons8-delete:before,
  .icons8-share-3:before,
  .icons8-checkmark:before,
  .icons8-sort-left:before,
  .icons8-sort-up:before,
  .icons8-chevron-right:before,
  .icons8-chevron-left:before,
  .icons8-forward-arrow:before,
  .icons8-reply-arrow:before,
  .icons8-sort-right:before,
  .icons8,
  [data-icons8]:before {
    display: inline-block;
    font-family: "MikkellerIcons";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  .icons8-download-from-the-cloud:before {content: "\f100";}
  .icons8-unavailable:before {content: "\f101";}
  .icons8-tick-box:before {content: "\f102";}
  .icons8-checked:before {content: "\f103";}
  .icons8-menu:before {content: "\f104";}
  .icons8-external-link:before {content: "\f105";}
  .icons8-home:before {content: "\f106";}
  .icons8-info:before {content: "\f107";}
  .icons8-contacts:before {content: "\f108";}
  .icons8-round:before {content: "\f109";}
  .icons8-delete:before {content: "\f10a";}
  .icons8-share-3:before {content: "\f10b";}
  .icons8-checkmark:before {content: "\f10c";}
  .icons8-sort-left:before {content: "\f10d";}
  .icons8-sort-up:before {content: "\f10e";}
  .icons8-chevron-right:before {content: "\f10f";}
  .icons8-chevron-left:before {content: "\f110";}
  .icons8-forward-arrow:before {content: "\f111";}
  .icons8-reply-arrow:before {content: "\f112";}
  .icons8-sort-right:before {content: "\f113";}
`
