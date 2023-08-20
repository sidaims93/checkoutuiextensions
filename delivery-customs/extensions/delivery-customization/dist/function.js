var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// extensions/delivery-customization/src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var NO_CHANGES = {
  operations: []
};
var src_default = (
  /**
  * @param {InputQuery} input
  * @returns {FunctionResult}
  */
  (input) => {
    const configuration = JSON.parse(
      input?.deliveryCustomization?.metafield?.value ?? "{}"
    );
    if (!configuration.stateProvinceCode || !configuration.message) {
      return NO_CHANGES;
    }
    let toRename = input.cart.deliveryGroups.filter((group) => group.deliveryAddress?.provinceCode && // Use the configured province code instead of a hardcoded value
    group.deliveryAddress.provinceCode == configuration.stateProvinceCode).flatMap((group) => group.deliveryOptions).map((option) => (
      /** @type {Operation} */
      {
        rename: {
          deliveryOptionHandle: option.handle,
          // Use the configured message instead of a hardcoded value
          title: option.title ? `${option.title} - ${configuration.message}` : configuration.message
        }
      }
    ));
    return {
      operations: toRename
    };
  }
);

// node_modules/javy/dist/index.js
var r = /* @__PURE__ */ ((t) => (t[t.Stdin = 0] = "Stdin", t[t.Stdout = 1] = "Stdout", t[t.Stderr = 2] = "Stderr", t))(r || {});

// node_modules/javy/dist/fs/index.js
function o(i) {
  let r2 = new Uint8Array(1024), e = 0;
  for (; ; ) {
    const t = Javy.IO.readSync(i, r2.subarray(e));
    if (t < 0)
      throw Error("Error while reading from file descriptor");
    if (t === 0)
      return r2.subarray(0, e + t);
    if (e += t, e === r2.length) {
      const n = new Uint8Array(r2.length * 2);
      n.set(r2), r2 = n;
    }
  }
}
function l(i, r2) {
  for (; r2.length > 0; ) {
    const e = Javy.IO.writeSync(i, r2);
    if (e < 0)
      throw Error("Error while writing to file descriptor");
    if (e === 0)
      throw Error("Could not write all contents in buffer to file descriptor");
    r2 = r2.subarray(e);
  }
}

// node_modules/@shopify/shopify_function/run.ts
function run_default(userfunction) {
  const input_data = o(r.Stdin);
  const input_str = new TextDecoder("utf-8").decode(input_data);
  const input_obj = JSON.parse(input_str);
  const output_obj = userfunction(input_obj);
  const output_str = JSON.stringify(output_obj);
  const output_data = new TextEncoder().encode(output_str);
  l(r.Stdout, output_data);
}

// node_modules/@shopify/shopify_function/index.ts
run_default(src_exports?.default);
