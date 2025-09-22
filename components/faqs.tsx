export default function Faqs() {
  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-10">
            <h2 className="h2 font-cabinet-grotesk">Frequently asked questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Do I need coding skills to use Applix?</h4>
              <p className="text-gray-500">
              No. Applix is a 100% no-code platform. Anyone can build an app with our drag-and-drop tools.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Which shops are supported?</h4>
              <p className="text-gray-500">
              Currently, we support Shopify and Ustore, with more platforms coming soon.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Can I publish to both iOS and Android?</h4>
              <p className="text-gray-500">
              Yes. Once your app is ready, you can publish to the App Store and Google Play.

              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Does Applix support multiple languages?</h4>
              <p className="text-gray-500">
              Absolutely. Your app can run in both Arabic and English, with easy language switching.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">How long does it take to launch my app?</h4>
              <p className="text-gray-500">
              Most users get their apps live within a few days, depending on customization and store size.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Do I need to use my own developer account?</h4>
              <p className="text-gray-500">
              Yes. Applix will use your own account on both the App Store and Google Play for publishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}