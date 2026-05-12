import React from "react";

const Configuration = () => {
  const configs = [
    { type: "1 BHK + 1T", area: "880 - 1020", price: "On Request" },
    { type: "2 BHK + 2T", area: "1175 - 1455", price: "₹ 86.22 Lacs*" },
    { type: "3 BHK + 3T", area: "1595 - 1890", price: "On Request" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-16 md:py-20"
      id="configuration"
    >
      {/* Background Effects */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          

          <h2 className="section-title section-title-on-dark">
            Apartment Sizes & <span className="text-[var(--accent)]">Pricing</span>
          </h2>

          <p className="section-copy-on-dark mx-auto mt-4 max-w-2xl">
            Spacious homes in Upper Kharadi crafted for modern living with
            excellent Mysore Road connectivity and investment potential.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {/* Top Info */}
          <div className="grid gap-6 border-b border-white/10 bg-white/[0.03] p-6 text-center md:grid-cols-3 md:p-8">
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-[2px] text-gray-400">
                Project
              </p>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                Casagrand Caladium
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center border-white/10 md:border-x">
              <p className="mb-2 text-xs font-medium uppercase tracking-[2px] text-gray-400">
                Location
              </p>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                Upper Kharadi, Pune
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-[2px] text-gray-400">
                Starting Price
              </p>
              <h3 className="text-xl font-bold text-[var(--accent)] md:text-2xl">
                ₹ 86.22 Lacs*
              </h3>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-center text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                    Type
                  </th>
                  <th className="p-6 text-center text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                    Area (Sqft)
                  </th>
                  <th className="p-6 text-center text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>
                {configs.map((config, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 transition-all duration-300 last:border-b-0 hover:bg-white/[0.04]"
                  >
                    <td className="p-6 text-center text-base font-semibold text-white">
                      {config.type}
                    </td>

                    <td className="p-6 text-center text-base font-medium text-gray-300">
                      {config.area}
                    </td>

                    <td className="p-6 text-center">
                      <span className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-5 py-2 text-base font-bold text-[var(--accent)]">
                        {config.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid gap-4 p-5 md:hidden">
            {configs.map((config, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-[2px] text-gray-400">
                  {config.type}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {config.area} Sqft
                </h3>

                <div className="mt-4">
                  <span className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-5 py-2 text-base font-bold text-[var(--accent)]">
                    {config.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-6 text-gray-500">
          *Prices are indicative and subject to change. Please contact the sales
          team for the latest availability and pricing details.
        </p>
      </div>
    </section>
  );
};

export default Configuration;
