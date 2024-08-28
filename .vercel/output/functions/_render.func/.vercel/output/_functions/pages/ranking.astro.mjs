/* empty css                                 */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dwe2eVWZ.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Layout } from '../chunks/Layout_DAdbaXAc.mjs';
export { renderers } from '../renderers.mjs';

const RankingTable = ({ ranking }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const sortedRanking = [...ranking].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key].toLowerCase();
      const bValue = b[sortConfig.key].toLowerCase();
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto mt-5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-bold mb-4", children: "Ranking de Jugadores" }),
    /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white shadow-md rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-800 text-white", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "w-1/12 py-2", children: "#" }),
        /* @__PURE__ */ jsx("th", { className: "w-2/12 py-2", children: "Jugador" }),
        /* @__PURE__ */ jsx("th", { className: "w-1/12 py-2", children: "Rol" }),
        /* @__PURE__ */ jsx("th", { className: "w-2/12 py-2", children: "Nombre de Invocador" }),
        /* @__PURE__ */ jsx("th", { className: "w-2/12 py-2", children: "ELO" }),
        /* @__PURE__ */ jsx("th", { className: "w-1/12 py-2", children: "WR" }),
        /* @__PURE__ */ jsx("th", { className: "w-1/12 py-2", children: "Games" }),
        /* @__PURE__ */ jsx("th", { className: "w-2/12 py-2", children: "Equipo" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "bg-gray-700", children: sortedRanking.length > 0 ? sortedRanking.map((player, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-black hover:bg-gray-600", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: index + 1 }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ jsx("a", { href: `/players/${player.realname}`, className: " hover:underline", children: player.realname }) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: `https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868748/lol-project/pos/${player.role}.png`,
            alt: player.elo.tier,
            className: "inline-block w-8 h-8 mr-2"
          }
        ) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ jsx("a", { href: `https://www.op.gg/summoners/euw/${player.name}-${player.tag}`, target: "_blank", rel: "noreferrer noopener", children: player.name }) }),
        /* @__PURE__ */ jsxs("td", { className: "py-2 text-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868748/lol-project/elo/${player.elo.tier}.png`,
              alt: player.elo.tier,
              className: "inline-block w-8 h-8 mr-2"
            }
          ),
          player.elo.tier,
          ["CHALLENGER", "GRANDMASTER", "MASTER"].includes(player.elo.tier) ? "" : ` ${player.elo.rank}`,
          " ",
          player.elo.leaguePoints,
          " LP"
        ] }),
        /* @__PURE__ */ jsxs("td", { className: "py-2 text-center", children: [
          player.elo.winrate.toFixed(0),
          "%"
        ] }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: player.elo.totalGames }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ jsx("a", { href: `/teams/${player.team}`, className: "inline-block", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: `https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/${player.team}.webp`,
            alt: player.team,
            className: "inline-block w-8 h-8 mr-2"
          }
        ) }) })
      ] }, index)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "8", className: "py-4 text-center", children: "Cargando datos..." }) }) })
    ] })
  ] });
};

const $$Ranking = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://lec-ranking.onrender.com/ranking");
  const ranking = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ranking de ELO de Jugadores LEC" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mt-5"> ${renderComponent($$result2, "RankingTableComponent", RankingTable, { "ranking": ranking })} </div> ` })}`;
}, "C:/Users/Adrian/webs/lec-ranking/src/pages/ranking.astro", void 0);
const $$file = "C:/Users/Adrian/webs/lec-ranking/src/pages/ranking.astro";
const $$url = "/ranking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ranking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
