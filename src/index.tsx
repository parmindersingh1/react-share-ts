// @ts-ignore
import register from "preact-custom-element";

import { ShareIcons } from "./ShareIcons";

register(ShareIcons, "x-share-icons", ["align-icons", "link"], {
  shadow: false
});

// const icons = document.createElement("x-share-icons")!;

// // icons.setAttribute("align", "top");


// document.getElementById("container")?.appendChild(icons);
