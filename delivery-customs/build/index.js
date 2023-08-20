var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_shopify_app_remix = require("@shopify/shopify-app-remix"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-07");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var _a, shopify2 = (0, import_shopify_app_remix.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_shopify_app_remix.LATEST_API_VERSION,
  scopes: (_a = process.env.SCOPES) == null ? void 0 : _a.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_shopify_app_remix.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_shopify_app_remix.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.delivery-customization.$functionId.$id.jsx
var app_delivery_customization_functionId_id_exports = {};
__export(app_delivery_customization_functionId_id_exports, {
  action: () => action,
  default: () => DeliveryCustomization,
  loader: () => loader
});
var import_react3 = require("react"), import_polaris = require("@shopify/polaris"), import_react4 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ params, request }) => {
  let { functionId, id } = params, { admin } = await authenticate.admin(request);
  if (id != "new") {
    let gid = `gid://shopify/DeliveryCustomization/${id}`, deliveryCustomization = (await (await admin.graphql(
      `#graphql
        query getDeliveryCustomization($id: ID!) {
          deliveryCustomization(id: $id) {
            id
            title
            enabled
            metafield(namespace: "$app:delivery-customization", key: "function-configuration") {
              id
              value
            }
          }
        }`,
      {
        variables: {
          id: gid
        }
      }
    )).json()).data.deliveryCustomization, metafieldValue = JSON.parse(deliveryCustomization.metafield.value);
    return {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stateProvinceCode: metafieldValue.stateProvinceCode,
        message: metafieldValue.message
      })
    };
  }
  return {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      stateProvinceCode: "",
      message: ""
    })
  };
}, action = async ({ params, request }) => {
  var _a2, _b;
  let { functionId, id } = params, { admin } = await authenticate.admin(request), formData = await request.formData(), stateProvinceCode = formData.get("stateProvinceCode"), message = formData.get("message"), deliveryCustomizationInput = {
    functionId,
    title: `Change ${stateProvinceCode} delivery message`,
    enabled: !0,
    metafields: [
      {
        namespace: "$app:delivery-customization",
        key: "function-configuration",
        type: "json",
        value: JSON.stringify({
          stateProvinceCode,
          message
        })
      }
    ]
  };
  if (id != "new") {
    let errors = (_a2 = (await (await admin.graphql(
      `#graphql
        mutation updateDeliveryCustomization($id: ID!, $input: DeliveryCustomizationInput!) {
          deliveryCustomizationUpdate(id: $id, deliveryCustomization: $input) {
            deliveryCustomization {
              id
            }
            userErrors {
              message
            }
          }
        }`,
      {
        variables: {
          id: `gid://shopify/DeliveryCustomization/${id}`,
          input: deliveryCustomizationInput
        }
      }
    )).json()).data.deliveryCustomizationUpdate) == null ? void 0 : _a2.userErrors;
    return (0, import_node3.json)({ errors });
  } else {
    let errors = (_b = (await (await admin.graphql(
      `#graphql
        mutation createDeliveryCustomization($input: DeliveryCustomizationInput!) {
          deliveryCustomizationCreate(deliveryCustomization: $input) {
            deliveryCustomization {
              id
            }
            userErrors {
              message
            }
          }
        }`,
      {
        variables: {
          input: deliveryCustomizationInput
        }
      }
    )).json()).data.deliveryCustomizationCreate) == null ? void 0 : _b.userErrors;
    return (0, import_node3.json)({ errors });
  }
};
function DeliveryCustomization() {
  let submit = (0, import_react4.useSubmit)(), actionData = (0, import_react4.useActionData)(), navigation = (0, import_react4.useNavigation)(), loaderData = (0, import_react4.useLoaderData)(), [stateProvinceCode, setStateProvinceCode] = (0, import_react3.useState)(loaderData.stateProvinceCode), [message, setMessage] = (0, import_react3.useState)(loaderData.message);
  (0, import_react3.useEffect)(() => {
    if (loaderData) {
      let parsedData = JSON.parse(loaderData.body);
      setStateProvinceCode(parsedData.stateProvinceCode), setMessage(parsedData.message);
    }
  }, [loaderData]);
  let isLoading = navigation.state === "submitting";
  (0, import_react3.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && open("shopify:admin/settings/shipping/customizations", "_top");
  }, [actionData == null ? void 0 : actionData.errors]);
  let errorBanner = actionData != null && actionData.errors.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.Banner,
    {
      title: "There was an error creating the customization.",
      status: "critical",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: actionData == null ? void 0 : actionData.errors.map((error, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: error.message }, `${index}`, !1, {
        fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
        lineNumber: 179,
        columnNumber: 18
      }, this)) }, void 0, !1, {
        fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
        lineNumber: 177,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 173,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 172,
    columnNumber: 5
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.Page,
    {
      title: "Change delivery message",
      backAction: {
        content: "Delivery customizations",
        onAction: () => open("shopify:admin/settings/shipping/customizations", "_top")
      },
      primaryAction: {
        content: "Save",
        loading: isLoading,
        onAction: () => {
          submit({ stateProvinceCode, message }, { method: "post" });
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout, { children: [
        errorBanner,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.FormLayout.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_polaris.TextField,
            {
              name: "stateProvinceCode",
              type: "text",
              label: "State/Province code",
              value: stateProvinceCode,
              onChange: setStateProvinceCode,
              disabled: isLoading,
              requiredIndicator: !0,
              autoComplete: "on"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
              lineNumber: 210,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_polaris.TextField,
            {
              name: "message",
              type: "text",
              label: "Message",
              value: message,
              onChange: setMessage,
              disabled: isLoading,
              requiredIndicator: !0,
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
              lineNumber: 220,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
          lineNumber: 209,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
          lineNumber: 207,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
          lineNumber: 206,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
          lineNumber: 205,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
        lineNumber: 203,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 191,
      columnNumber: 3
    },
    this
  );
}

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_react5 = require("@remix-run/react"), import_polaris2 = require("@shopify/polaris"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.VerticalStack, { gap: "3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react5.Link,
            {
              to: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.additional.jsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 34,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 35,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 36,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.VerticalStack, { gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.List, { spacing: "extraTight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react5.Link,
          {
            to: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 49,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_polaris2.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "1",
      paddingInlineEnd: "1",
      background: "bg-subdued",
      borderWidth: "1",
      borderColor: "border",
      borderRadius: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader2
});
var import_react6 = require("react"), import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_polaris3 = require("@shopify/polaris");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let { session } = await authenticate.admin(request);
  return (0, import_node4.json)({ shop: session.shop.replace(".myshopify.com", "") });
};
async function action2({ request }) {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }]
        }
      }
    }
  )).json();
  return (0, import_node4.json)({
    product: responseJson.data.productCreate.product
  });
}
function Index() {
  var _a2;
  let nav = (0, import_react7.useNavigation)(), { shop } = (0, import_react7.useLoaderData)(), actionData = (0, import_react7.useActionData)(), submit = (0, import_react7.useSubmit)(), isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST", productId = (_a2 = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a2.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react6.useEffect)(() => {
    productId && shopify.toast.show("Product created");
  }, [productId]);
  let generateProduct = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ui-title-bar", { title: "Remix app template", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389}" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react7.Link,
              {
                to: "https://shopify.dev/docs/apps/tools/app-bridge",
                target: "_blank",
                children: "App Bridge"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 116,
                columnNumber: 21
              },
              this
            ),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: "/app/additional", children: "additional page in the app nav" }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 123,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react7.Link,
              {
                to: "https://shopify.dev/docs/api/admin-graphql",
                target: "_blank",
                children: "Admin GraphQL"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 127,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 110,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react7.Link,
              {
                to: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate",
                target: "_blank",
                children: "productCreate"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 144,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation in our API references."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.HorizontalStack, { gap: "3", align: "end", children: [
          (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_polaris3.Button,
            {
              url: `https://admin.shopify.com/store/${shop}/admin/products/${productId}`,
              target: "_blank",
              children: "View product"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 155,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { loading: isLoading, primary: !0, onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 162,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 153,
          columnNumber: 17
        }, this),
        (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_polaris3.Box,
          {
            padding: "4",
            background: "bg-subdued",
            borderColor: "border",
            borderWidth: "1",
            borderRadius: "2",
            overflowX: "scroll",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { style: { margin: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 176,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 175,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 167,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 187,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 191,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 193,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: "https://remix.run", target: "_blank", children: "Remix" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 192,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 200,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 202,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: "https://www.prisma.io/", target: "_blank", children: "Prisma" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 205,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 209,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 211,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: "https://polaris.shopify.com", target: "_blank", children: "Polaris" }, void 0, !1, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 215,
                  columnNumber: 25
                }, this),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_react7.Link,
                  {
                    to: "https://shopify.dev/docs/apps/tools/app-bridge",
                    target: "_blank",
                    children: "App Bridge"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app._index.jsx",
                    lineNumber: 219,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 214,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 210,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 227,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 229,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react7.Link,
                {
                  to: "https://shopify.dev/docs/api/admin-graphql",
                  target: "_blank",
                  children: "GraphQL API"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 232,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 186,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 185,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 244,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List, { spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react7.Link,
                {
                  to: "https://shopify.dev/docs/apps/getting-started/build-app-example",
                  target: "_blank",
                  children: [
                    " ",
                    "example app"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 250,
                  columnNumber: 23
                },
                this
              ),
              " ",
              "to get started"
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react7.Link,
                {
                  to: "https://shopify.dev/docs/apps/tools/graphiql-admin-api",
                  target: "_blank",
                  children: "GraphiQL"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 261,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 259,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 247,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 243,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 242,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 184,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 183,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action3,
  default: () => Auth,
  links: () => links,
  loader: () => loader3
});
var import_react8 = require("react"), import_node5 = require("@remix-run/node"), import_polaris4 = require("@shopify/polaris"), import_react9 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-QXHV2P42.css";

// app/routes/auth.login/error.server.jsx
var import_shopify_app_remix2 = require("@shopify/shopify-app-remix");
function loginErrorMessage(loginErrors) {
  return (loginErrors == null ? void 0 : loginErrors.shop) === import_shopify_app_remix2.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : (loginErrors == null ? void 0 : loginErrors.shop) === import_shopify_app_remix2.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
async function loader3({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node5.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}
async function action3({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node5.json)({
    errors
  });
}
function Auth() {
  let { polarisTranslations } = (0, import_react9.useLoaderData)(), loaderData = (0, import_react9.useLoaderData)(), actionData = (0, import_react9.useActionData)(), [shop, setShop] = (0, import_react8.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react9.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris4.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 54,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action4
});
var action4 = async ({ request }) => {
  let { topic, shop } = await authenticate.webhook(request);
  switch (topic) {
    case "APP_UNINSTALLED":
      await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader4
});
async function loader4({ request }) {
  return await authenticate.admin(request), null;
}

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }];
async function loader5({ request }) {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node6.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node6.json)({ showForm: Boolean(login) });
}
function App2() {
  let { showForm } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_polaris5 = require("@shopify/polaris");
var import_shopify_app_remix3 = require("@shopify/shopify-app-remix");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function loader6({ request }) {
  return await authenticate.admin(request), (0, import_node7.json)({
    polarisTranslations: require("@shopify/polaris/locales/en.json"),
    apiKey: process.env.SHOPIFY_API_KEY
  });
}
function App3() {
  let { polarisTranslations } = (0, import_react11.useLoaderData)(), { apiKey } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "script",
      {
        src: "https://cdn.shopify.com/shopifycloud/app-bridge.js",
        "data-api-key": apiKey
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.jsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/app/additional", children: "Additional page" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_shopify_app_remix3.boundary.error((0, import_react11.useRouteError)());
}
var headers = (headersArgs) => import_shopify_app_remix3.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AGHMQDDC.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-H2MDWJD5.js", "/build/_shared/chunk-R462FYTU.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-V22LE3NS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FI32ADMJ.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-TA3GH52H.js", imports: ["/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-TIRABBCB.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-LJG4VVSV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-WEKNLPXJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-K6SUMVV5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.delivery-customization.$functionId.$id": { id: "routes/app.delivery-customization.$functionId.$id", parentId: "routes/app", path: "delivery-customization/:functionId/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.delivery-customization.$functionId.$id-Z5IK4KFP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-MB5MGNDR.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-TIRABBCB.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-LJG4VVSV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "de3e1943", hmr: { runtime: "/build/_shared\\chunk-R462FYTU.js", timestamp: 1692444610935 }, url: "/build/manifest-DE3E1943.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: { port: "62324" }, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.delivery-customization.$functionId.$id": {
    id: "routes/app.delivery-customization.$functionId.$id",
    parentId: "routes/app",
    path: "delivery-customization/:functionId/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_delivery_customization_functionId_id_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
