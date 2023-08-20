import {extension, Banner} from '@shopify/ui-extensions/checkout';
export default extension(
  'purchase.checkout.shipping-option-item.render-after',
  (root, {target, isTargetSelected}) => {
    
    for (const child of root.children) {
      root.removeChild(child);
    }
    
    const instructions = `
      1. Contact your Post Office, 
      2. Talk to one of our customer support executives. 
      3. Give your OTP when asked for by the delivery guy 
    `;

    const component = root.createComponent(
      Banner,
      {},
      instructions,
    )
    
    if(isTargetSelected) {
      if(target.current.title.includes('Please see instruction')){
        for (const child of root.children) {
          root.removeChild(child);
        }
        root.appendChild(
          component     
        );
      }
    }
    

    target.subscribe((updatedTarget) => {
      for (const child of root.children) {
        root.removeChild(child);
      }
      if(updatedTarget.title.includes('Please see instruction')){
        root.appendChild(
          component
        );
      } 
    });
  },
);