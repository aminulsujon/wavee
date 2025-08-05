export default function FaqSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">📌 Frequently Asked Questions</h2>

      <div className="space-y-4">
        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>🔧 What is the Lenze i510 used for?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            The Lenze i510 is a compact AC frequency inverter for controlling motor speed and torque in industrial automation systems.
          </p>
        </details>

        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>🔧 How does the Lenze i510 inverter work?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            It rectifies incoming AC power to DC, smooths it in the DC link, and converts it back to variable-frequency AC to drive motors efficiently.
          </p>
        </details>

        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>⚙️ What control methods does the i510 support?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            V/f control, Sensorless Vector Control (SLVC), PID control, brake management, flying start, and energy optimization (VFC eco).
          </p>
        </details>

        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>📱 How is the Lenze i510 configured or programmed?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            Configure via keypad, the Lenze Smart Keypad App (Bluetooth), or EASY Starter software.
          </p>
        </details>

        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>🇧🇩 Who is the authorized Lenze partner in Bangladesh?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            Wave Engineering is the official System Integrator & Channel Partner of Lenze in Bangladesh.
          </p>
        </details>

        <details className="group border border-gray-200 rounded-lg p-4">
          <summary className="flex justify-between items-center font-medium cursor-pointer">
            <span>📞 How can I contact Wave Engineering?</span>
            <span className="transition-transform group-open:rotate-180">➕</span>
          </summary>
          <p className="mt-2 text-gray-800">
            📍 Address: House-241, Sector-04, Bottola Railgate, Uttara, Dhaka<br />
            📞 Phone: +8801719073109<br />
            📧 Email: info@waveengineeringbd.com
          </p>
        </details>
      </div>
    </section>
  );
}
