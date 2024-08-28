/* empty css                                    */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Dwe2eVWZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DAdbaXAc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch(`https://lec-ranking.onrender.com/ranking`);
  const players = await response.json();
  const teams = [...new Set(players.map((player) => player.team.toLowerCase()))];
  return teams.map((team) => ({
    params: { team }
  }));
}
const $$team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$team;
  const { team } = Astro2.params;
  async function fetchPlayers(teamName) {
    const response = await fetch(`https://lec-ranking.onrender.com/ranking`);
    const players2 = await response.json();
    return players2.filter((player) => player.team.toLowerCase() === teamName.toLowerCase());
  }
  const players = await fetchPlayers(team);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Jugadores de ${team.toUpperCase()}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="team-players py-12 md:py-24 lg:py-32 bg-gray-900"> <div class="container mx-auto px-4 md:px-6"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center mb-8">
Jugadores de ${team.toUpperCase()} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${players.map((player) => renderTemplate`<div class="bg-gray-800 p-4 rounded-lg"> <h3 class="text-xl font-bold text-white">${player.realname}</h3> <p class="text-gray-400">${player.role}</p> <p class="text-gray-400">ELO: ${player.elo.tier} ${player.elo.leaguePoints} LP</p> <a${addAttribute(`/players/${player.realname.toLowerCase()}`, "href")} class="text-blue-500 hover:underline">Ver detalles</a> </div>`)} </div> </div> </section> </main> ` })}`;
}, "C:/Users/Adrian/webs/lec-ranking/src/pages/teams/[team].astro", void 0);

const $$file = "C:/Users/Adrian/webs/lec-ranking/src/pages/teams/[team].astro";
const $$url = "/teams/[team]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$team,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
