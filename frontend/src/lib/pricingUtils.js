export const calculateCartTotals = (cartItems) => {
  let rawSubtotal = 0;
  let finalSubtotal = 0;
  let totalSavings = 0;
  let bundleMessages = [];
  let appliedBundles = [];

  const bundleGroups = {};

  // Group items by bundleGroup
  cartItems.forEach(item => {
    const product = item.product;
    if (!product) return;

    const price = product.sellingPrice || product.price || 0;
    const qty = item.quantity || 1;
    
    rawSubtotal += price * qty;

    if (product.bundleOfferEnabled && product.bundleGroup) {
      if (!bundleGroups[product.bundleGroup]) {
        bundleGroups[product.bundleGroup] = {
          items: [],
          totalQty: 0,
          bundleQty: product.bundleQty,
          bundlePrice: product.bundlePrice,
          groupName: product.bundleGroup,
          categoryName: product.category?.name || 'Items'
        };
      }
      bundleGroups[product.bundleGroup].items.push({ ...item, price });
      bundleGroups[product.bundleGroup].totalQty += qty;
    } else {
      finalSubtotal += price * qty;
    }
  });

  // Calculate prices for each bundle group
  Object.values(bundleGroups).forEach(group => {
    const { totalQty, bundleQty, bundlePrice, items, groupName, categoryName } = group;

    if (totalQty >= bundleQty) {
      const bundleCount = Math.floor(totalQty / bundleQty);
      const remainingQty = totalQty % bundleQty;

      const groupTotalNormalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      // We need to calculate how much the remaining items cost.
      // Usually, we sort items by price to apply bundle to cheapest/expensive items, 
      // but if bundlePrice is fixed for any combination, we can just take the first N items, 
      // or simply assume the bundle applies to the most expensive items to maximize savings, 
      // or just apply an average. Wait, the requirement says:
      // "remainingQty = totalQty % bundleQty"
      // "total = bundleCount * bundlePrice + remainingQty * productPrice"
      // If products have DIFFERENT prices in the same bundle group, which ones are left over?
      // "Support different products inside same bundleGroup. Example: Product A + B + C = 899. If total=4, 3 are bundled, 1 is normal price."
      // To be fair to the customer, we usually bundle the most expensive items and leave the cheapest as remaining at their normal price.
      // Let's sort individual item units by price descending.
      
      const allItemUnits = [];
      items.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
          allItemUnits.push(item.price);
        }
      });
      allItemUnits.sort((a, b) => b - a); // Descending

      const bundledUnits = bundleCount * bundleQty;
      const remainingItemsNormalTotal = allItemUnits.slice(bundledUnits).reduce((sum, price) => sum + price, 0);
      const bundledNormalTotal = allItemUnits.slice(0, bundledUnits).reduce((sum, price) => sum + price, 0);

      const groupFinalPrice = bundleCount * bundlePrice + remainingItemsNormalTotal;
      const savings = groupTotalNormalPrice - groupFinalPrice;

      finalSubtotal += groupFinalPrice;
      totalSavings += savings;

      appliedBundles.push({
        groupName,
        savings,
        message: `Bundle Offer Applied (${bundleCount}x ${bundleQty} for ₹${bundlePrice})`
      });
    } else {
      // Normal pricing
      const groupFinalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      finalSubtotal += groupFinalPrice;

      const needed = bundleQty - totalQty;
      bundleMessages.push(`Add ${needed} more ${categoryName} to unlock bundle offer (Any ${bundleQty} for ₹${bundlePrice})`);
    }
  });

  return {
    rawSubtotal,
    finalSubtotal,
    totalSavings,
    bundleMessages,
    appliedBundles
  };
};
