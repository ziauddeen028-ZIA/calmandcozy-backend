import PolicyLayout from '../layouts/PolicyLayout';

export default function PrivacyPolicy() {
return ( <PolicyLayout title="Privacy Policy" lastUpdated="June 2026"> <section> <p>
At CALM & COZY, we are committed to protecting your privacy and ensuring
that your personal information is handled in a safe and responsible manner.
This Privacy Policy explains how we collect, use, store, and safeguard
your data when you interact with our website, products, or services. </p> </section>

```
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      1. Information We Collect
    </h2>

    <p>
      We may collect personal information such as your name, email address,
      phone number, billing and shipping details, and any other information
      you provide voluntarily.
    </p>

    <p className="mt-4">
      This information may be collected when you:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Register for an account</li>
      <li>Make a purchase or inquiry</li>
      <li>Subscribe to our newsletter or marketing communications</li>
      <li>Interact with our website through cookies and tracking technologies</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      2. How We Use Your Information
    </h2>

    <p>
      The information we collect is used for various purposes, including:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Processing and fulfilling your orders</li>
      <li>
        Communicating with you regarding orders, promotions, and customer
        support requests
      </li>
      <li>
        Improving our website, products, and services based on user feedback
        and behavior
      </li>
      <li>
        Sending updates, newsletters, and special offers with your consent
      </li>
      <li>
        Ensuring the security and functionality of our website
      </li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      3. Data Protection & Security
    </h2>

    <p>
      We take your privacy seriously and implement security measures to
      protect your personal information from unauthorized access or disclosure.
    </p>

    <p className="mt-4">
      Our website uses secure encryption methods (SSL) to safeguard
      transactions and sensitive data.
    </p>

    <p className="mt-4">
      However, no method of electronic storage or internet transmission is
      completely secure. While we strive to protect your personal information,
      we cannot guarantee absolute security.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      4. Third-Party Sharing
    </h2>

    <p>
      We do not sell or rent your personal information to third parties.
    </p>

    <p className="mt-4">
      However, we may share data with trusted third-party service providers
      who help us operate our website, process payments, or fulfill orders.
      These service providers are required to protect your data and use it
      only for the purposes specified by us.
    </p>

    <p className="mt-4">
      We may also share information when required by law, including in
      response to legal requests, court orders, or regulatory requirements.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      5. Your Rights & Choices
    </h2>

    <p>
      You have the right to:
    </p>

    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Access your personal information</li>
      <li>Update or correct your information</li>
      <li>Opt out of marketing communications</li>
      <li>Request deletion of your personal data where applicable</li>
    </ul>

    <p className="mt-4">
      To exercise any of these rights, please contact us using the details
      provided below.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      6. Cookies & Tracking Technologies
    </h2>

    <p>
      We use cookies and similar technologies to enhance your browsing
      experience, analyze website traffic, and provide personalized content.
    </p>

    <p className="mt-4">
      You may disable cookies through your browser settings. However, some
      features of our website may not function properly if cookies are disabled.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      7. Changes To This Policy
    </h2>

    <p>
      We may update this Privacy Policy from time to time. Any changes will
      be posted on this page and will become effective immediately upon
      publication.
    </p>

    <p className="mt-4">
      We encourage users to review this page periodically to stay informed
      about how we protect their information.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      8. Contact Us
    </h2>

    <p>
      If you have any questions or concerns regarding this Privacy Policy or
      how we handle your personal information, please contact us at:
    </p>

    <p className="mt-4 font-medium">
      contact@calmandcozy.in
    </p>
  </section>
</PolicyLayout>

);
}
