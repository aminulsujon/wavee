// app/components/LenzeInfo.tsx

export default function LenzeInfo() {
  return (
    <div className="container mx-auto px-4">
      <div className="p-4 space-y-10">
        {/* Overview */}
      <section>
        <h1 className="text-3xl font-bold mb-2">How the Lenze i510 Works?</h1>
        <p className="text-gray-700">
          The Lenze i510 is a scalable, compact, and modular AC frequency inverter designed for
          simple to complex motor control applications. It adjusts the frequency and voltage
          supplied to electric motors, optimizing speed and torque based on load demands. This
          results in energy savings, extended motor life, and better process control.
        </p>
      </section>

      {/* Working Principle */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Lenze i510 Working Principle</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Power Input:</strong> Accepts single-phase or three-phase AC input.</li>
          <li><strong>Rectification:</strong> Converts incoming AC to DC internally.</li>
          <li><strong>DC Link:</strong> Stores energy and smooths the signal.</li>
          <li><strong>Inversion:</strong> Converts DC back to variable frequency AC for motor output.</li>
          <li><strong>Control Logic:</strong> Uses algorithms (V/f, SLVC, PID) to manage motor speed, torque, and direction.</li>
        </ul>
      </section>

      {/* Control Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Lenze i510 Control Features</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border border-gray-300">
            <thead className="bg-gray-100 font-medium border-b border-gray-300">
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["V/f Control", "Basic voltage-frequency motor control for simple loads."],
                ["Sensorless Vector Control", "Maintains precise speed/torque without encoder feedback."],
                ["Energy Optimization", "Minimizes energy use at partial loads (VFC eco)."],
                ["Brake Management", "Integrated brake control for deceleration."],
                ["Flying Start", "Restarts a rotating motor without stopping."],
                ["PID Control", "Closed-loop process control based on feedback."],
                ["App & Software Setup", "Configure via keypad, Lenze Smart Keypad App, or EASY Starter software."],
              ].map(([feature, description], i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="px-4 py-2 font-semibold">{feature}</td>
                  <td className="px-4 py-2">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Model List */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Lenze i510 Product Model List</h3>
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-3 py-2">Product Type</th>
                <th className="px-3 py-2">Model</th>
                <th className="px-3 py-2">Power (kW)</th>
                <th className="px-3 py-2">Voltage Supply</th>
                <th className="px-3 py-2">Country</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["i510", "i51AE125B1", "0.25", "1ph AC, 230/240V", "Lenze-Germany"],
                ["", "i51AE137B1", "0.37", "", ""],
                ["", "i51AE155B1", "0.55", "", ""],
                ["", "i51AE175B1", "0.75", "", ""],
                ["", "i51AE211B1", "1.1", "", ""],
                ["", "i51AE215B1", "1.5", "", ""],
                ["", "i51AE222B1", "2.2", "", ""],
                ["i510", "i51AE125D1", "0.25", "1/3ph AC, 230/240V", "Lenze-Germany"],
                ["", "i51AE137D1", "0.37", "", ""],
                ["", "i51AE155D1", "0.55", "", ""],
                ["", "i51AE175D1", "0.75", "", ""],
                ["", "i51AE211D1", "1.1", "", ""],
                ["", "i51AE215D1", "1.5", "", ""],
                ["", "i51AE222D1", "2.2", "", ""],
                ["i510", "I51AE240C1", "5", "3ph AC, 230V", "Lenze-Germany"],
                ["", "I51AE255C1", "7.5", "", ""],
                ["i510", "i51AE137F1", "0.37", "3ph AC, 400/480V", "Lenze-Germany"],
                ["", "i51AE155F1", "0.55", "", ""],
                ["", "i51AE175F1", "0.75", "", ""],
                ["", "i51AE211F1", "1.1", "", ""],
                ["", "i51AE215F1", "1.5", "", ""],
                ["", "i51AE222F1", "2.2", "", ""],
                ["", "I51BE230F1", "3.0", "", ""],
                ["", "I51BE240F1", "4.0", "", ""],
                ["", "I51AE255F1", "5.5", "", ""],
                ["", "I51AE275F1", "7.5", "", ""],
                ["", "I51AE311F1", "11", "", ""],
                ["NA", "—", "15–110", "", ""],
              ].map(([type, model, power, voltage, country], idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-3 py-2">{type}</td>
                  <td className="px-3 py-2 font-mono">{model}</td>
                  <td className="px-3 py-2">{power}</td>
                  <td className="px-3 py-2">{voltage}</td>
                  <td className="px-3 py-2">{country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Info */}
      <section>
        <h4 className="text-2xl font-semibold mb-2">Lenze in Bangladesh</h4>
        <div className="text-gray-700">
          <p><strong>Wave Engineering</strong></p>
          <p>📍 Authorized System Integrator & Channel Partner of Lenze</p>
          <p>📦 Support, Repair, and Supply of Lenze Products</p>
          <p>📞 <a href="tel:+8801719073109" className="text-blue-600 hover:underline">+8801719073109</a></p>
          <p className="mt-2">✅ Contact for installation, commissioning, and troubleshooting support for all Lenze drives and automation solutions in Bangladesh.</p>
        </div>
      </section>
      </div>
    </div>
  );
}
