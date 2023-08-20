// @ts-check

/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
* @typedef {import("../generated/api").Operation} Operation
*/

/**
* @type {FunctionResult}
*/
const NO_CHANGES = {
  operations: [],
};

export default /**
* @param {InputQuery} input
* @returns {FunctionResult}
*/
  (input) => {
    // Define a type for your configuration, and parse it from the metafield
    /**
    * @type {{
    *  stateProvinceCode: string
    *  message: number
    * }}
    */
    const configuration = JSON.parse(
      input?.deliveryCustomization?.metafield?.value ?? "{}"
    );
    if (!configuration.stateProvinceCode || !configuration.message) {
      return NO_CHANGES;
    }

    let toRename = input.cart.deliveryGroups
      .filter(group => group.deliveryAddress?.provinceCode &&
        // Use the configured province code instead of a hardcoded value
        group.deliveryAddress.provinceCode == configuration.stateProvinceCode)
      .flatMap(group => group.deliveryOptions)
      .map(option => /** @type {Operation} */({
        rename: {
          deliveryOptionHandle: option.handle,
          // Use the configured message instead of a hardcoded value
          title: option.title ? `${option.title} - ${configuration.message}` : configuration.message
        }
      }));

    return {
      operations: toRename
    };
  };
