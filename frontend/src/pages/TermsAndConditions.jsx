import PolicyLayout from '../layouts/PolicyLayout';

export default function TermsAndConditions() {
return ( <PolicyLayout title="Terms & Conditions" lastUpdated="June 2026"> <section> <p>
Welcome to CALM & COZY. These Terms & Conditions govern your use of
our website, products, and services. By accessing or using our website
and placing an order, you agree to comply with these terms. If you do
not agree, please discontinue use of the website. </p> </section>

```
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      1. General Information
    </h2>

    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Company:</strong> CALM & COZY</li>
      <li><strong>Website:</strong> www.calmandcozy.in</li>
      <li><strong>Email:</strong> contact@calmandcozy.in</li>
    </ul>

    <p className="mt-4">
      These Terms & Conditions apply to all visitors, customers, and users
      of this website.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      2. Product Descriptions & Availability
    </h2>

    <p>
      We strive to provide accurate product descriptions, images, pricing,
      and availability information. However, we do not guarantee that all
      content is completely accurate, current, or error-free.
    </p>

    <p className="mt-4">
      Product availability is subject to stock levels. If an item becomes
      unavailable after purchase, we may offer a refund or alternative
      product.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      3. Pricing & Payment
    </h2>

    <p>
      All prices displayed on the website are in INR unless otherwise
      specified.
    </p>

    <p className="mt-4">
      Prices may change without prior notice, but confirmed orders will not
      be affected by subsequent price changes.
    </p>

    <p className="mt-4">
      Payment is required at the time of purchase through accepted payment
      methods available during checkout.
    </p>

    <p className="mt-4">
      Taxes, shipping charges, and other applicable fees may be added during
      checkout depending on your location.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      4. Orders & Shipping
    </h2>

    <p>
      After placing an order, you will receive an order confirmation email.
      Order confirmation does not indicate final acceptance until the order
      has been processed and shipped.
    </p>

    <p className="mt-4">
      We currently ship within India. Delivery times may vary depending on
      location and shipping conditions.
    </p>

    <p className="mt-4">
      Orders may be cancelled within 24 hours of placement provided they
      have not yet been processed or shipped.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      5. Returns & Exchanges
    </h2>

    <p>
      We want you to be satisfied with your purchase. Return requests must
      be submitted within 3 days of receiving the order.
    </p>

    <p className="mt-4">
      Products must be unused, unwashed, and returned in their original
      packaging with all tags attached.
    </p>

    <p className="mt-4">
      Customized or personalized products may not be eligible for return or
      exchange.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      6. Intellectual Property
    </h2>

    <p>
      All content on this website, including logos, images, graphics,
      product descriptions, text, and designs, is the property of
      CALM & COZY and is protected by applicable intellectual property laws.
    </p>

    <p className="mt-4">
      Unauthorized reproduction, distribution, or use of any content is
      prohibited without prior written permission.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      7. User Conduct
    </h2>

    <ul className="list-disc pl-6 space-y-2">
      <li>Do not engage in fraudulent or illegal activity.</li>
      <li>Do not submit abusive, defamatory, or harmful content.</li>
      <li>Do not interfere with website functionality or security.</li>
      <li>Respect the rights of other users and visitors.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      8. Limitation of Liability
    </h2>

    <p>
      To the fullest extent permitted by law, CALM & COZY shall not be
      liable for indirect, incidental, consequential, or special damages
      arising from the use of our website, products, or services.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      9. Privacy Policy
    </h2>

    <p>
      Your privacy is important to us. Please review our Privacy Policy to
      understand how personal information is collected, used, and protected.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      10. Changes To These Terms
    </h2>

    <p>
      We reserve the right to update these Terms & Conditions at any time.
      Changes become effective immediately after being published on this
      website.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      11. Governing Law
    </h2>

    <p>
      These Terms & Conditions shall be governed by and interpreted in
      accordance with the laws of India.
    </p>

    <p className="mt-4">
      Any disputes arising from the use of this website shall be resolved in
      the appropriate courts of India.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      12. Contact Us
    </h2>

    <p>
      If you have any questions regarding these Terms & Conditions, please
      contact:
    </p>

    <p className="mt-4 font-medium">
      contact@calmandcozy.in
    </p>
  </section>
</PolicyLayout>

);
}
