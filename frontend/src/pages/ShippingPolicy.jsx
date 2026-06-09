import PolicyLayout from '../layouts/PolicyLayout';

export default function ShippingPolicy() {
return ( <PolicyLayout title="Shipping Policy" lastUpdated="June 2026"> <section> <p>
Thank you for shopping with CALM & COZY. We are committed to delivering
your order as quickly and efficiently as possible. Please review our
shipping policy to understand how orders are processed and delivered. </p> </section>

```
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      1. Processing Time
    </h2>

    <p>
      All orders are processed within <strong>1–2 business days</strong>
      (excluding weekends and public holidays).
    </p>

    <p className="mt-4">
      Once your order has been shipped, you will receive a confirmation
      email with shipment details.
    </p>

    <p className="mt-4">
      Custom or personalized products may require additional processing
      time before dispatch.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      2. Shipping Methods & Delivery Time
    </h2>

    <p>
      Shipping charges are calculated during checkout based on your
      location and order details.
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>
        <strong>Standard Shipping:</strong> 5–7 business days
      </li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      3. Shipping Locations
    </h2>

    <p>
      We currently ship across <strong>India</strong>.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      4. Order Tracking
    </h2>

    <p>
      Once your order has been shipped, you will receive an email containing
      a tracking number.
    </p>

    <p className="mt-4">
      You can use this tracking number on the shipping carrier's website to
      monitor the status of your shipment.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      5. Order Modifications & Cancellations
    </h2>

    <p>
      Orders cannot be modified or cancelled once they have been processed
      and shipped.
    </p>

    <p className="mt-4">
      If you need to make changes to an order, please contact us as soon as
      possible before order processing begins.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      6. Lost or Damaged Packages
    </h2>

    <p>
      We take great care in packaging and shipping every order.
    </p>

    <p className="mt-4">
      If your package is lost or arrives damaged, please contact us within
      7 days of receiving your shipment confirmation email.
    </p>

    <p className="mt-4">
      We will work with the shipping carrier to investigate the issue and
      help resolve it as quickly as possible.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      7. Contact Us
    </h2>

    <p>
      If you have any questions regarding shipping or delivery, please
      contact us at:
    </p>

    <p className="mt-4 font-medium">
      contact@calmandcozy.in
    </p>
  </section>
</PolicyLayout>


);
}
