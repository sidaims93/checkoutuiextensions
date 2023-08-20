import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Banner,
  Card,
  FormLayout,
  Layout,
  Page,
  TextField
} from "/build/_shared/chunk-LJG4VVSV.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-H2MDWJD5.js";
import {
  createHotContext
} from "/build/_shared/chunk-R462FYTU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.delivery-customization.$functionId.$id.jsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.delivery-customization.$functionId.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.delivery-customization.$functionId.$id.jsx"
  );
  import.meta.hot.lastModified = "1691868490819.5356";
}
function DeliveryCustomization() {
  _s();
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const loaderData = useLoaderData();
  const [stateProvinceCode, setStateProvinceCode] = (0, import_react.useState)(loaderData.stateProvinceCode);
  const [message, setMessage] = (0, import_react.useState)(loaderData.message);
  (0, import_react.useEffect)(() => {
    if (loaderData) {
      const parsedData = JSON.parse(loaderData.body);
      setStateProvinceCode(parsedData.stateProvinceCode);
      setMessage(parsedData.message);
    }
  }, [loaderData]);
  const isLoading = navigation.state === "submitting";
  (0, import_react.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.errors.length) === 0) {
      open("shopify:admin/settings/shipping/customizations", "_top");
    }
  }, [actionData == null ? void 0 : actionData.errors]);
  const errorBanner = (actionData == null ? void 0 : actionData.errors.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { title: "There was an error creating the customization.", status: "critical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: actionData == null ? void 0 : actionData.errors.map((error, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error.message }, `${index}`, false, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 177,
      columnNumber: 18
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 174,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 173,
    columnNumber: 51
  }, this) : null;
  const handleSubmit = () => {
    submit({
      stateProvinceCode,
      message
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Change delivery message", backAction: {
    content: "Delivery customizations",
    onAction: () => open("shopify:admin/settings/shipping/customizations", "_top")
  }, primaryAction: {
    content: "Save",
    loading: isLoading,
    onAction: handleSubmit
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    errorBanner,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLayout.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { name: "stateProvinceCode", type: "text", label: "State/Province code", value: stateProvinceCode, onChange: setStateProvinceCode, disabled: isLoading, requiredIndicator: true, autoComplete: "on" }, void 0, false, {
        fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
        lineNumber: 205,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { name: "message", type: "text", label: "Message", value: message, onChange: setMessage, disabled: isLoading, requiredIndicator: true, autoComplete: "off" }, void 0, false, {
        fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
        lineNumber: 206,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 204,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 203,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 202,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 201,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
      lineNumber: 200,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 198,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/app.delivery-customization.$functionId.$id.jsx",
    lineNumber: 190,
    columnNumber: 10
  }, this);
}
_s(DeliveryCustomization, "QtjDy3k76+gzcKRrYgkaNk6CfzI=", false, function() {
  return [useSubmit, useActionData, useNavigation, useLoaderData];
});
_c = DeliveryCustomization;
var _c;
$RefreshReg$(_c, "DeliveryCustomization");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DeliveryCustomization as default
};
//# sourceMappingURL=/build/routes/app.delivery-customization.$functionId.$id-Z5IK4KFP.js.map
