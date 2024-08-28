/* empty css                                    */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Dwe2eVWZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DAdbaXAc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch(`https://lec-ranking.onrender.com/ranking`);
  const players = await response.json();
  const realnames = [...new Set(players.map((player) => player.realname.toLowerCase()))];
  return realnames.map((realname) => ({
    params: { realname }
  }));
}
const $$realname = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$realname;
  const { realname } = Astro2.params;
  async function fetchPlayer(realname2) {
    const response = await fetch(`https://lec-ranking.onrender.com/ranking`);
    const players = await response.json();
    return players.find((player2) => player2.realname.toLowerCase() === realname2.toLowerCase());
  }
  const player = await fetchPlayer(realname);
  if (!player) {
    throw new Error("Jugador no encontrado");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Detalles de ${player.realname}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="player-details py-12 md:py-24 lg:py-32 bg-gray-900"> <div class="container mx-auto px-4 md:px-6"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center mb-8">
Detalles de ${player.realname} </h2> <div class="bg-gray-800 p-6 rounded-lg"> <h3 class="text-xl font-bold text-white">${player.realname}</h3> <p class="text-gray-400">Equipo: ${player.team}</p> <p class="text-gray-400">Rol: ${player.role}</p> <p class="text-gray-400">ELO: ${player.elo.tier} ${player.elo.leaguePoints} LP</p> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Adrian/webs/lec-ranking/src/pages/players/[realname].astro", void 0);

const $$file = "C:/Users/Adrian/webs/lec-ranking/src/pages/players/[realname].astro";
const $$url = "/players/[realname]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$realname,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
