import PolicyLayout from '../layouts/PolicyLayout';

export default function RefundPolicy() {
return ( <PolicyLayout title="Return & Refund Policy" lastUpdated="June 2026"> <section> <p>
At CALM & COZY, we are committed to providing high-quality products and
a great shopping experience. If you are not completely satisfied with
your purchase, we offer a hassle-free return and refund process. </p> </section>

```
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      1. Returns
    </h2>

    <p>
      We accept returns for most eligible items within <strong>3 days</strong> of
      purchase.
    </p>

    <p className="mt-4">
      To be eligible for a return:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Items must be unused and unwashed.</li>
      <li>Items must be in their original packaging.</li>
      <li>All tags must remain attached.</li>
    </ul>

    <p className="mt-4">
      Certain products may not be eligible for return, including clearance
      sale items, customized products, or other non-returnable merchandise.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      2. How To Start A Return
    </h2>

    <p>
      To initiate a return, please contact our customer support team at
      <strong> contact@calmandcozy.in </strong>
      and provide:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Your order number</li>
      <li>The reason for the return</li>
    </ul>

    <p className="mt-4">
      Once approved, we will provide return instructions and shipping
      details.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      3. Refunds
    </h2>

    <p>
      After receiving and inspecting your returned item, we will verify that
      it meets the return requirements.
    </p>

    <p className="mt-4">
      Approved refunds will be processed within
      <strong> 4–7 business days </strong>
      and issued to the original payment method.
    </p>

    <p className="mt-4">
      Depending on your bank or payment provider, additional processing time
      may be required before the refund appears in your account.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      4. Exchanges
    </h2>

    <p>
      If you wish to exchange an item for a different size, color, or
      product, please contact our customer support team.
    </p>

    <p className="mt-4">
      Exchanges are subject to product availability. If there is a price
      difference, we will notify you regarding any additional payment or
      refund required.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      5. Shipping Costs
    </h2>

    <p>
      For returns resulting from defects, damages, or errors on our part, we
      will cover the return shipping costs.
    </p>

    <p className="mt-4">
      For all other returns, customers are responsible for return shipping
      costs unless otherwise specified.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      6. Damaged Or Defective Items
    </h2>

    <p>
      If your item arrives damaged or defective, please notify us within
      <strong> 2 days </strong> of receiving the product.
    </p>

    <p className="mt-4">
      We may provide a replacement or full refund and will cover return
      shipping costs for approved defective items.
    </p>

    <p className="mt-4">
      Please include photos of the damage or defect when contacting us so
      that we can process your request more efficiently.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      7. Contact Us
    </h2>

    <p>
      If you have any questions regarding returns, refunds, or exchanges,
      please contact:
    </p>

    <p className="mt-4 font-medium">
      contact@calmandcozy.in
    </p>

    <p className="mt-2">
      We are always happy to help.
    </p>
  </section>
</PolicyLayout>

);
}
