import { st } from "/build/_shared/chunk-I7BREEDM.js";
import {
  Box,
  Image,
  Text,
  createIcon,
  size,
} from "/build/_shared/chunk-G3CXWJSJ.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-XU7DNSPJ.js";
import { __toESM } from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@chakra-ui/icons/dist/chunk-VCNDIGGI.mjs
("use client");
var ChevronLeftIcon = createIcon({
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  displayName: "ChevronLeftIcon",
});

// node_modules/@chakra-ui/icons/dist/chunk-D2LKO42G.mjs
("use client");
var HamburgerIcon = createIcon({
  displayName: "HamburgerIcon",
  viewBox: "0 0 24 24",
  d: "M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z",
});

// node_modules/@chakra-ui/icons/dist/chunk-6RTX462E.mjs
("use client");
var ChevronRightIcon = createIcon({
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  displayName: "ChevronRightIcon",
});

// node_modules/@chakra-ui/icons/dist/index.mjs
("use client");

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MainContainer = st.div.withConfig({
  displayName: "Footer__MainContainer",
  componentId: "sc-14su96j-0",
})(
  [
    "width:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:end;@media (max-width:",
    "){padding-top:0px;}",
  ],
  size.md,
);
var logolist = [
  {
    name: "linkdin.png",
    link: "https://www.linkedin.com/in/daria-czupreta-326b15158/",
  },
  {
    name: "github.png",
    link: "https://github.com/dariacz12",
  },
  {
    name: "email.png",
    email: "daria.czupreta@gmail.com",
  },
  {
    name: "phone.png",
    phoneNumber: "+48730732967",
  },
];
var Footer = () => {
  const handleClickEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    MainContainer,
    {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Box,
        {
          display: "flex",
          backgroundColor: "#673AB7",
          justifyContent: "center",
          w: "100%",
          height: "250px",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Box,
              {
                mt: "80px",
                display: "flex",
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Text,
                    {
                      color: "white",
                      fontWeight: "medium",
                      fontSize: "md",
                      children: ["Get in touch, contact me", " "],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Box,
                    {
                      display: "flex",
                      children: logolist.map(
                        ({ name, link, email, phoneNumber }) =>
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "a",
                            {
                              target: "_blank",
                              href: `${link}`,
                              children: [
                                /* @__PURE__ */ (0,
                                import_jsx_dev_runtime.jsxDEV)(
                                  Image,
                                  {
                                    onClick: () => {
                                      email && handleClickEmail(email);
                                      phoneNumber &&
                                        handlePhoneCall(phoneNumber);
                                    },
                                    cursor: "pointer",
                                    p: "5px",
                                    src: `/${name}`,
                                    pt: "30px",
                                    height: {
                                      md: "70px",
                                      base: "60px",
                                    },
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/Footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                                " ",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: "app/components/Footer.tsx",
                              lineNumber: 41,
                              columnNumber: 17,
                            },
                            this,
                          ),
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "app/components/Footer.tsx",
                lineNumber: 31,
                columnNumber: 9,
              },
              this,
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Box,
              {
                pl: 25,
                zIndex: 1,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Image,
                  {
                    src: "/computer.png",
                    pt: "30px",
                    height: {
                      md: "230px",
                      base: "220px",
                    },
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 53,
                    columnNumber: 11,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "app/components/Footer.tsx",
                lineNumber: 52,
                columnNumber: 9,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 7,
        },
        this,
      ),
    },
    void 0,
    false,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 29,
      columnNumber: 10,
    },
    this,
  );
};
var Footer_default = Footer;

export { HamburgerIcon, ChevronLeftIcon, ChevronRightIcon, Footer_default };
//# sourceMappingURL=/build/_shared/chunk-2CZMDNUZ.js.map
